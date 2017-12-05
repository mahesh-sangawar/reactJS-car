'use strict';

import * as api from '../api/dataLoadApi';
import * as constants from '../constants';

export const loadModelsSuccess = (data) => {
  return {
    type: constants.LOAD_MODELS_SUCCESS,
    data,
  };
};
  

export const loadModels = () => {
  return (dispatch) => {
    return api.getData('/api/models')
      .then(response => dispatch(loadModelsSuccess(response)))
      .catch((error) => {
        throw (error);
      });
  };
};
  