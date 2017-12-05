import {combineReducers} from 'redux';
import models from './modelsReducer';
import carofweek from './carOfWeekReducer';
import make from './makeReducer';

const rootReducer = combineReducers({
    models,
    carofweek,
    make
});

export default rootReducer;