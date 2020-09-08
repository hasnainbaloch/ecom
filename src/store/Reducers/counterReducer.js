import * as types from "../Actions/Types";

const initialState = {
    count: null
};

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };

        case types.DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };

        default:
            return state;
    }
};


export default CounterReducer;
