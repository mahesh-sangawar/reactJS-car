'use strict';
import * as constants from '../constants';

export default function carOfWeekReducer(state = [], action) {
    console.log(action);
    switch (action.type) {
        case constants.LOAD_CAROFWEEK_SUCCESS:
            
            return Object.assign({}, state, {
                ...action.data,
            });
    
        default:
            return state;
    }
}