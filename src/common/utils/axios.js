import Axios from "axios"
Axios.interceptors.request.use(function(config){
    // console.log(config)
    return config;
},function(error){
    return Promise.reject(error);
});

Axios.interceptors.response.use(function(response){
    // console.log("响应拦截器",response)
    return response.data;
},function(error){
    return Promise.reject(error);
})
export default Axios

