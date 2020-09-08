import { combineReducers } from 'redux'; // for combining reducers

import CounterReducer from './counterReducer';

export const rootReducer = combineReducers({
    CounterReducer
});