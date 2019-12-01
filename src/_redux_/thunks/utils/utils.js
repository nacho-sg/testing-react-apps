import api from 'api';
import { HTTP_ERROR, HTTP_SUCCESS } from '_redux_/types';

export const createApiThunk = (
  method,
  { onStarted, onSuccess, successMessage }
) => {
  const apiCall = api[method];

  return (...params) => async dispatch => {
    const onStartAction = onStarted();
    const { type } = onStartAction;

    dispatch(onStartAction);

    try {
      const response = await apiCall(...params);

      dispatch(onSuccess(response));
      successMessage &&
        dispatch({ type: `${type}${HTTP_SUCCESS}`, payload: successMessage });
    } catch ({ response: payload }) {
      dispatch({ type: `${type}${HTTP_ERROR}`, payload });
    }
  };
};



