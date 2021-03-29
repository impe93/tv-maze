import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {container} from '../ioc/ContainerContext';

export const IHttpClientType = Symbol.for('IHttpClientType');

export interface IHttpClient {
  get: <T>(url: string) => Promise<T>;
}

export class HttpClient implements IHttpClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'http://api.tvmaze.com',
      timeout: 10000,
    });
  }

  public get = async <T>(url: string, config?: AxiosRequestConfig) => {
    const res = await axios.get<T>(url, config);
    return res.data;
  };
}

container.bind(IHttpClientType).toConstantValue(new HttpClient());
