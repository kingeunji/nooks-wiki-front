import axios from 'axios';
import {
    setInterceptors
} from '@/api/common/interceptors';

function createInstance() {
    const instance = axios.create({
        baseURL: "http://15.164.205.82:8088/v1/",
    });
    return setInterceptors(instance);
}

export const instance = createInstance();