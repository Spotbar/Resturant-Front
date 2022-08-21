import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';

// axios.defaults.baseURL = "http://192.168.1.3:5000/Api";
axios.defaults.baseURL = "http://jsonplaceholder.typicode.com";

axios.interceptors.request.use(
    (request) => {
        // console.log(request);
        return request;
    },
    (error) => {
        console.log(error);
        alert(error)
        // return Promise.reject();
        return error;
    });

axios.interceptors.response.use(
    (response) => {
        // console.log(response.data.status);
        console.log(response);
        // if (response.data && response.data.status == 0 && response.data.data) {
        //     return response.data.data;
        // } else {
        //     return Promise.reject();
        // }

        return response;
    },
    (error) => {
        //     console.log(error.response.data.errors[0].message);
        //   toast(error.response.data.errors[0].message);
        // toast("خطا در اتصال")
        // alert(error.message)
        return error;
        // return Promise.reject();
    });

const http = {
    get: axios.get,
    put: axios.put,
    delete: axios.delete,
    post: axios.post,
};

export default http;

