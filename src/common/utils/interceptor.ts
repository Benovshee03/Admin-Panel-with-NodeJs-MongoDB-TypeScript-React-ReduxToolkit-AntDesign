export const requestInterceptor = (config :any) => {
    return config
}
export const requestErrorInterceptor = (error :any) => {
    return Promise.reject(error)
}
export const responseInterceptor = (response:any)=>{
    return response
}
export const responseErrorInterceptor = (error:any)=>{
    return Promise.reject(error)
}