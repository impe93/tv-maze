import { ApiAction } from "../../../redux/actions";
import { IHttpClient } from "../../../services/http/HttpClient";
import { GET_SHOWS_ACTION, SEARCH_SHOWS_BY_NAME_ACTION } from "./showList.constants";

export type SearchShowsByNameType = ApiAction<typeof SEARCH_SHOWS_BY_NAME_ACTION>
export type GetShowsType = ApiAction<typeof GET_SHOWS_ACTION>

export const searchShowsByNameAction = (httpClient: IHttpClient, name: string): SearchShowsByNameType => ({
  type: SEARCH_SHOWS_BY_NAME_ACTION,
  apiConfig: {
    httpClient,
    config: {
      params: {
        q: name
      }
    }
  }
});

export const getShowsAction = (httpClient: IHttpClient): GetShowsType => ({
  type: GET_SHOWS_ACTION,
  apiConfig: {
    httpClient,
  }
});
