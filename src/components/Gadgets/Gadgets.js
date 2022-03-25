import React from 'react';

const Gadgets = (props) => {
    console.log(props.gadgets);
    const { name, image, price } = props.gadgets
    return (
        <div>
            <h1>This is gadgets:{name}</h1>
        </div>
    );
};

export default Gadgets;