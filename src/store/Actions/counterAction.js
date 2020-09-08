import * as types from './Types';

export const increment = () => {
    return {
        type: types.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: types.DECREMENT
    }
}