import * as axios from 'axios';

const instance = axios.create({
    baseURL: `https://api.unsplash.com/`,
    headers: {
        "Authorization": "Client-ID EDOH-ky-SiMzw_un_mctauqiBJDHJg1ZDv2x0hPGBSw",
        "Accept-Version": "v1"
    }
})

export const listAPI = {
    getImages(page = 1, size = 4) {
        return instance.get(`photos?page=${page}&per_page=${size}`)
        .then (response => {
            
            return response.data;
        });
    },

    getTotal() {
        return instance.get(`stats/total`)
        .then (response => {
            return response.data;
        });
    },

    getImage(id) {
        return instance.get(`photos/${id}`)
        .then (response => {
            return response.data;
        });
    }
}