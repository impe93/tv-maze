import { Action } from "@reduxjs/toolkit";
import { IHttpClient, RequestConfig } from "../services/http/HttpClient";

export type ApiConfig = {
  httpClient: IHttpClient;
  config?: RequestConfig
}

export type ApiAction<T> = Action<T> & {
  apiConfig: ApiConfig;
}
