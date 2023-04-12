import axios from "axios";

axios.defaults.baseURL = "https://hogwarts-hp.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

/*
Refreshing access tokens:
Export two newly created axios instances that we’ll attach the interceptors to.  
One to intercept the request and the  other one to intercept the response. 
*/
export const axiosReq = axios.create();
export const axiosRes = axios.create();