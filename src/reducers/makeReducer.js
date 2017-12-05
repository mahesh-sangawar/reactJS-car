'use strict';
import * as constants from '../constants';

export default function makeReducer(state = [], action) {
    switch (action.type) {
        case constants.LOAD_MAKE_SUCCESS:
            return Object.assign({}, state, {
                ...action.data,
            });
        
        default:
            return state;
    }
}