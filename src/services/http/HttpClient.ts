import axios, {AxiosInstance} from 'axios';
import {container} from '../ioc/ContainerContext';

export const IHttpClientType = Symbol.for('IHttpClientType');

export type RequestConfig = {
  headers?: Record<string, any>;
  params?: Record<string, any>;
};

export interface IHttpClient {
  get: <T>(url: string, config?: RequestConfig) => Promise<T>;
}

export class HttpClient implements IHttpClient {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance?: AxiosInstance) {
    this.axiosInstance =
      axiosInstance ??
      axios.create({
        baseURL: 'http://api.tvmaze.com',
        timeout: 10000,
      });
  }

  public get = async <T>(url: string, config?: RequestConfig) => {
    const res = await this.axiosInstance.get<T>(url, config);
    return res.data;
  };
}

container.bind(IHttpClientType).toConstantValue(new HttpClient());
