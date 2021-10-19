import Axios, {AxiosInstance, Method} from 'axios';
import {AnyJson, JsonMap} from '../types';
import {storage} from '../services';
import {isEmpty} from 'lodash';

export const API_ENDPOINT = "http://localhost:3040"


class Api {
    private static instance: Api;
    private axios!: AxiosInstance;

    constructor() {
        if (Api.instance) { return Api.instance; }
        Api.instance = this;
        this.initialize();
    }

    public get = async (url: string, params: AnyJson = null, headers: JsonMap = null, isPublic: boolean = false) =>
        this.request(url, params, null, 'get', headers);

    public post = async (url: string, data: AnyJson = null, headers: JsonMap = null, isPublic: boolean = false) =>
        this.request(url, null, data, 'post', headers);

    public put = async (url: string, data: AnyJson = null, headers: JsonMap = null, isPublic: boolean = false) =>
        this.request(url, null, data, 'put', headers);

    public delete = async (url: string, data: AnyJson = null, headers: JsonMap = null, isPublic: boolean = false) =>
        this.request(url, null, data, 'delete', headers);

    public request = async (
        url: string,
        params: AnyJson,
        data: AnyJson,
        method: Method,
        headers: JsonMap,
    ) => {
        if (!this.axios) {
            throw Error('Api module has not initialized');
        }
        const requestConfig = {
            method,
            url,
            params,
            data,
            headers: {
                ...headers,
            }
        };
        return this.axios(requestConfig);
    };

    private initialize() {
        const token = JSON?.parse(window?.localStorage?.getItem('system/token'));
        let config: any = {
            baseURL: API_ENDPOINT,
            timeout: 60000
        }

        if(!isEmpty(token)){
            config = {
                ...config,
                headers: {'x-auth-token': token}
            }
        }

        this.axios = Axios.create(config);

        this.axios.interceptors.request.use(async (config) => {
            // Do something before request is sent
            let token = await storage.getItem('SYSTEM', 'token');
            if(config.url.includes('[TOKEN]')){
                const activeToken = token != null ? token as string : 'empty_token';
                config.url = config.url.replaceAll('[TOKEN]', token as string);
            }
            return config;
        }, (error)  => {
            // Do something with request error
            return Promise.reject(error);
        });

        this.axios.interceptors.response.use((response) => {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response;
        }, (error) => {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            return Promise.reject(error);
        });
    }
}



const api = new Api();
export { api, api as Api };
