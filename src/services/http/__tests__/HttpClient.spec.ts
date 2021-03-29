import {HttpClient, IHttpClient} from '../HttpClient';
import {AxiosInstance, AxiosResponse} from 'axios';
import {
  anyString,
  anything,
  deepEqual,
  instance,
  mock,
  verify,
  when,
} from 'ts-mockito';

const mockedAxiosResponse: AxiosResponse<any> = {
  config: {},
  data: 'something',
  headers: {},
  status: 200,
  statusText: '',
  request: null,
};

describe('Given an HttpClient class', () => {
  let httpClient: IHttpClient;
  let axiosMock: AxiosInstance;
  const URL = 'http://api.tvmaze.com/shows';

  beforeEach(() => {
    axiosMock = mock<AxiosInstance>();
    when(axiosMock.get(anyString(), anything())).thenResolve(
      mockedAxiosResponse,
    );
    httpClient = new HttpClient(instance(axiosMock));
  });

  describe('When call get method', () => {
    describe('When call it without query params', () => {
      it('Should get the url', async () => {
        await httpClient.get(URL);
        verify(axiosMock.get(URL, undefined)).once();
      });
    });

    describe('When call it with configs', () => {
      it('Should get with configs', async () => {
        const params = {
          q: 'something',
        };

        await httpClient.get(URL, {params});
        verify(axiosMock.get(URL, deepEqual({params}))).once();
      });
    });
  });
});
