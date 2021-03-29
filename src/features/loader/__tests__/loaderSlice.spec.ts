import {hideLoaderHandler, showLoaderHandler} from '../loaderSlice';

describe('Given a loaderSlice', () => {
  describe('When showLoaderHandler is called', () => {
    it('Should turn loader on', () => {
      const state = {
        loader: false,
      };
      showLoaderHandler(state);
      expect(state.loader).toBe(true);
    });
  });

  describe('When hideLoaderHandler is called', () => {
    it('Should turn loader off', () => {
      const state = {
        loader: true,
      };
      hideLoaderHandler(state);
      expect(state.loader).toBe(false);
    });
  });
});
