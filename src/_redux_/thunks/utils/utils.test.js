import mockStore from 'mock-store';
import { httpMockFail, httpMockSuccess } from 'axios';
import { HTTP_ERROR, HTTP_SUCCESS } from '_redux_/types';

import { createApiThunk } from './utils';

let store;

describe('Account actions', () => {
  beforeEach(() => {
    store = mockStore({});
  });

  it('should dispatch the http-error message when request fails', done => {
    const startAction = { type: 'API_TEST' };
    const onStarted = jest.fn(() => startAction);
    const apiThunk = createApiThunk('getPizzas', { onStarted });
    const expectedActions = [
      startAction,
      { payload: undefined, type: `${startAction.type}${HTTP_ERROR}` },
    ];

    httpMockFail('get', {});

    return store.dispatch(apiThunk()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('should dispatch the http-success message when success message exists', done => {
    const startAction = { type: 'API_TEST' };
    const successAction = { type: 'API_TEST_SUCCESS', payload: undefined };
    const onStarted = jest.fn(() => startAction);
    const onSuccess = jest.fn(() => successAction);
    const successMessage = 'MESSAGE';
    const apiThunk = createApiThunk('getPizzas', {
      onStarted,
      onSuccess,
      successMessage,
    });
    const expectedActions = [
      startAction,
      successAction,
      { payload: successMessage, type: `${startAction.type}${HTTP_SUCCESS}` },
    ];

    httpMockSuccess('get', {});

    return store.dispatch(apiThunk()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
