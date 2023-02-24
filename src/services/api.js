import axios from "axios";
import { getToken } from "../utils/AsyncToken";


const api = axios.create({
    baseURL: 'http://192.168.100.34:3001'
})

api.interceptors.request.use(
    async (config) => {
        const token = await getToken()
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default api;