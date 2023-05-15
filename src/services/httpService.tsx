import axios from "axios";

axios.defaults.baseURL = "http://200.200.200.189:5185/Api";
// axios.defaults.baseURL = "http://200.200.200.189:5185/Api";


axios.interceptors.request.use(
  (request) => {
    // console.log(request);
    return request;
  },
  (error) => {
    console.log(error);
    alert(error);
    // return Promise.reject();
    return error;
  }
);

axios.interceptors.response.use(
  (response) => {
    // console.log(response.data.status);
    console.log(response);
    return response;
  },
  (error) => {

    return error;

  }
);

const http = {
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  post: axios.post,
};

export default http;
