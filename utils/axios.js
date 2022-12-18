import axios from "axios";

const axiosApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosApi.interceptors.request.use((config) => {

    config.headers = {
        "Content-Type": "application/json",
    }
    return config;
});

axiosApi.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error(error);
    }
);

export default axiosApi;
