import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.punkapi.com/v2/',
    timeout: 1000,
    headers: { "Content-Type": "application/json" },
})

export const localApi = axios.create({
    baseURL: 'http://localhost:3001/',
    timeout: 1000,
    headers: { "Content-Type": "application/json" },
})