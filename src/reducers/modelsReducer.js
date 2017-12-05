'use strict';
import * as constants from '../constants';

export default function modelsReducer(state = [], action) {
    switch (action.type) {
        case constants.LOAD_MODELS_SUCCESS:
            return Object.assign({}, state, {
                ...action.data,
            });
        
        default:
            return state;
    }
}