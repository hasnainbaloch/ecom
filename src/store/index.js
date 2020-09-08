import { createStore, applyMiddleware } from 'redux';// redux 
import { composeWithDevTools } from 'redux-devtools-extension'; // for web browers 
import { logger } from 'redux-logger'; // redux logger
import ReduxThunk from 'redux-thunk'; // Reduk thunk middleware for async functions
import { rootReducer } from './Reducers'; // Root reducers

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(logger, ReduxThunk)
    )
);

export default store; 
