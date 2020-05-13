import axios from 'axios';
import {
    setInterceptors
} from '@/api/common/interceptors';

function createInstance() {
    const instance = axios.create({
        baseURL: "",
    });
    return setInterceptors(instance);
}

export const instance = createInstance();