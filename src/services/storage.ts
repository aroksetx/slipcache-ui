import localForage from "localforage";

enum StorageOptions {
    SYSTEM = 'system',
    TEMP = 'temp',
    PERMANENT = 'permanent',
}

type StorageTypes = "SYSTEM" | "TEMP" | "PERMANENT";
type StorageError = string | JSON;
type StorageValue= string | number | JSON;

interface StorageData {
    SYSTEM?: LocalForage,
    TEMP?: LocalForage
    PERMANENT?: LocalForage
}

class Storage {
    private storage:StorageData;

    constructor() {
        this.storage = {
            SYSTEM: localForage.createInstance({
                name: StorageOptions.SYSTEM,
                version: 1.0,
                driver: localForage.LOCALSTORAGE,
                description: 'for system data'
            }),
            PERMANENT: localForage.createInstance({
                name: StorageOptions.PERMANENT,
                version: 1.0,
                driver: localForage.INDEXEDDB,
                description: 'for permanent data'
            }),
            TEMP: localForage.createInstance({
                name: StorageOptions.TEMP,
                version: 1.0,
                driver: localForage.LOCALSTORAGE,
                description: 'for temp data'
            })
        }
    }

    get(store: StorageTypes): LocalForage {
        return this.storage[store] as LocalForage;
    }

    addItem(store: StorageTypes, param:string, value: StorageValue) {
        this.storage[store].setItem(param, value);
    }


    getItem(store: StorageTypes, param:string): Promise<StorageValue> {
        return new Promise<StorageValue>((resolve, reject) => {
            try {
                this.storage[store]?.getItem(param, (e: StorageError, v: StorageValue) => {
                    if(e != null) reject(e);
                    resolve(v);
                });
            } catch (e) {
                reject(e)
            }
        });
    }
}



const storage = new Storage();
export { storage };

