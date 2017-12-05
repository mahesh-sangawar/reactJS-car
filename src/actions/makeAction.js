'use strict';

import * as api from '../api/dataLoadApi';
import * as constants from '../constants';

export const loadMakeSuccess = (data) => {
  return {
    type: constants.LOAD_MAKE_SUCCESS,
    data,
  };
};
  

export const loadMake = () => {
  return (dispatch) => {
    return api.getData('/api/makes')
      .then(response => dispatch(loadMakeSuccess(response)))
      .catch((error) => {
        throw (error);
      });
  };
};
  