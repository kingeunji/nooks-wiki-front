import {
    instance
} from '@/api/index';

export const friends = {
    search(form) {
        return instance.post('friends/list', form);
    },
    detail(idx) {
        return instance.get(`friends/${idx}`);
    }
}