import React from 'react';

export default function Child({ title, clickMe, count, data, focus, blur }) {

    return (
        <>
            <p> {title} : {count} : {data.name || 'Text'} </p>
            <button onClick={clickMe} disabled={!title || blur}> CLICK ME </button>
            &nbsp;{focus && 'input is focused'}
            {blur && 'input is blured'}
        </>
    );
}
