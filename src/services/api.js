import axios from "axios";
import { getToken } from "../utils/AsyncToken";

const token = getToken()

export const api = axios.create({
    baseURL: 'http://192.168.100.34:3001',
    headers: {
        'Authorization': `Bearer ${token}`
    }
})