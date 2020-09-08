import React, { useState, useRef } from 'react';
import Child from './Child';

export default function Parent() {

  const [count, setCount] = useState(0);
  const [data, setData] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [isInputFocus, inputFocus] = useState(false);
  const inputRef = useRef(null);

  const clicked = () => {
    setCount(count + 1);
    setData({ name: inputRef.current.value });
    setInputValue('');
  }

  const inputHandler = () => {
    setInputValue(inputRef.current.value);
  }

  const focusHandler = () => {
    inputFocus(true);
  }

  const blurHandler = () => {
    inputValue === '' && inputFocus(false);
  }

  return (
    <>
      <input
        type='text'
        value={inputValue}
        placeholder="Name"
        ref={inputRef}
        onChange={inputHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
      />

      <Child
        title={inputValue}
        clickMe={clicked}
        count={count}
        data={data}
        focus={isInputFocus}
        blur={!isInputFocus}
      />
    </>
  );
}
