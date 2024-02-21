import axios from "axios"
import qs from "qs"
import AppConsts from "../../library/Appconsts"
import {requestInterceptor,requestErrorInterceptor,responseInterceptor,responseErrorInterceptor} from "./interceptor"

export const http = axios.create({
    baseURL: AppConsts.remoteServiceBaseUrl,
    headers:{
        "content-Type":"application/json",
    },
    paramsSerializer : (params) => {
   
    return qs.stringify(params,{encode:false})
 },
})
http.interceptors.request.use(requestInterceptor,requestErrorInterceptor);
http.interceptors.request.use(responseInterceptor,responseErrorInterceptor);


export default http