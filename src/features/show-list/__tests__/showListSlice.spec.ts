import {
  anyString,
  anything,
  deepEqual,
  instance,
  mock,
  verify,
  when,
} from 'ts-mockito';
import {IHttpClient} from '../../../services/http/HttpClient';
import {getShows, searchShowsByName} from '../showListSlice';

describe('Given searchShowsByName function', () => {
  let httpClient: IHttpClient;
  let dispatch: jest.Mock<any, any>;

  beforeEach(() => {
    httpClient = mock<IHttpClient>();
    dispatch = jest.fn();
  });
  describe('When the api call works correctly', () => {
    it('Should get the shows and dispatch the right action', async () => {
      const name = 'some name';
      when(httpClient.get(anyString(), anything())).thenResolve([]);

      await searchShowsByName(name, instance(httpClient))(
        dispatch,
        () => ({
          showList: {
            showList: [],
          },
        }),
        undefined,
      );

      verify(
        httpClient.get(
          '/search/shows',
          deepEqual({
            params: {
              q: name,
            },
          }),
        ),
      ).once();

      expect(dispatch).toBeCalledWith({
        type: 'showListSlice/setShowList',
        payload: [],
      });
    });
  });

  describe('When the api call resolve in an error', () => {
    it('Should throw an error', async () => {
      let err: any;
      const name = 'some name';
      when(httpClient.get(anyString(), anything())).thenThrow();

      try {
        await searchShowsByName(name, instance(httpClient))(
          dispatch,
          () => ({
            showList: {
              showList: [],
            },
          }),
          undefined,
        );
      } catch (e) {
        err = e;
      }

      expect(err !== undefined).toBeTruthy();

      verify(
        httpClient.get(
          '/search/shows',
          deepEqual({
            params: {
              q: name,
            },
          }),
        ),
      ).once();

      expect(dispatch).toBeCalledTimes(0);
    });
  });
});

describe('Given getShows function', () => {
  let httpClient: IHttpClient;
  let dispatch: jest.Mock<any, any>;

  beforeEach(() => {
    httpClient = mock<IHttpClient>();
    dispatch = jest.fn();
  });
  describe('When the api call works correctly', () => {
    it('Should get the shows and dispatch the right actions', async () => {
      when(httpClient.get(anyString(), undefined)).thenResolve([]);

      await getShows(instance(httpClient))(
        dispatch,
        () => ({
          showList: {
            showList: [],
          },
        }),
        undefined,
      );

      verify(httpClient.get('/shows'));

      expect(dispatch).toBeCalledWith({
        type: 'showListSlice/setShowList',
        payload: null,
      });
    });
  });

  describe('When the api call resolve in an error', () => {
    it('Should throw an error', async () => {
      let err: any;
      when(httpClient.get(anyString())).thenReject();

      try {
        await getShows(instance(httpClient))(
          dispatch,
          () => ({
            showList: {
              showList: [],
            },
          }),
          undefined,
        );
      } catch (e) {
        err = e;
      }

      expect(err !== undefined).toBeTruthy();
      verify(httpClient.get('/shows')).once();
      expect(dispatch).toBeCalledTimes(0);
    });
  });
});
