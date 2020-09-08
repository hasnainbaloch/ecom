import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from '../store/Actions'

export default function Counter() {

    const dispatch = useDispatch();
    const countState = useSelector(state => state.CounterReducer)
    return (
        <>
            <h1>Count: {countState.count}</h1>
            <button onClick={() => dispatch(increment())}>Add</button>
            <button onClick={() => dispatch(decrement())}>Subtract</button>
        </>
    );
}
