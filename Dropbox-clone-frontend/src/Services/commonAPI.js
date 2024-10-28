import axios from "axios";
import axiosInstance from "./axiosInstance";

export const commonAPI = async (httpMethod, url, reqBody, reqHeader) => {
  let reqConfig = {
    method: httpMethod,
    url,
    data: reqBody,
    Headers: reqHeader ? reqHeader : {"Content-Type": "application/json" } }
    return await axiosInstance(reqConfig).then(
    result=>{
      console.log(result);
      return result
      
    }
    
  ).catch(err=>{return err})

};
 