import React from 'react';
import './Random.css';

const Random = (props) => {
    // console.log(props);

    return (
        <div className='random'>
            <h3>Choose One of them</h3>
            <h4 className='random-box'>{props.chooseOne.name}</h4>
        </div>
    );
};

export default Random;