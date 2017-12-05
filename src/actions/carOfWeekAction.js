'use strict';

import * as api from '../api/dataLoadApi';
import * as constants from '../constants';

export const loadCarofWeekSuccess = (data) => {
  return {
    type: constants.LOAD_CAROFWEEK_SUCCESS,
    data,
  };
};
  

export const loadCarofWeek = () => {
  return (dispatch) => {
    return api.getData('/api/caroftheweek')
      .then(response => dispatch(loadCarofWeekSuccess(response)))
      .catch((error) => {
        throw (error);
      });
  };
};
  