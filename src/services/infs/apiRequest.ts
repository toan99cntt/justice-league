import axios, { AxiosError, type AxiosResponse, type Method } from "axios";
import {useAuth} from '@/services/domains/auth/useAuth';
import type { ResponseError } from "@/models/api";
import { routerPush } from "@/router";

type Payload<T> = {
  params?: T;
  data?: T;
};

export const apiRequest = <T = any, P = any>(url: string, requestData?: P, methodType: Method = 'GET') => {
  const {getAccessToken, logout} = useAuth();
  const accessToken = getAccessToken();
  
  let payload: Payload<P>;
  const headers: {'Content-Type'?: string, Authorization?: string} = {
    'Content-Type': 'application/json'
  };

  if (!!accessToken) headers['Authorization'] = `Bearer ${accessToken}`;

  if (
    methodType === "get" ||
    methodType === "GET"
  ) {
    payload = {
      params: requestData,
    };
  } else {
    payload = {
      data: requestData,
    };
  }
  
  return new Promise<T>((resolve, reject) => {
    axios({
        baseURL: import.meta.env.VITE_URL_API,
        method: methodType,
        url,
        ...payload,
        headers,
        responseType: 'json',
    })
    .then(async (response: AxiosResponse<any>)  => {
        resolve(response.data);
    })
    .catch(async(error: AxiosError<any>) => {
      if (error.response?.status === 401 
          && error.response?.data.message === 'Unauthenticated.'
        ) {
        logout();
        await routerPush("login");
      }
      reject({
        status: error.response?.status,
        data: error.response?.data
      }as ResponseError);
    });
  });
};
