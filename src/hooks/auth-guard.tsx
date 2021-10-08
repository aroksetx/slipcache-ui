import {storage} from '../services';
import {useEffect, useState} from 'react';

export const useAuthGuard = () => {
    const [authorized, setAuthorized] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        storage.getItem('SYSTEM', 'token')
            .then((value) => {
                if(value != null) {
                    setAuthorized(true);
                    setToken(value);
                }
            })
            .catch((error) => {
                setAuthorized(false);
            })
    }, [])


    return {
        isAuthorized: authorized,
        getToken: token
    };
}
