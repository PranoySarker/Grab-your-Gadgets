import React from 'react';
import './Gadgets.css'

const Gadgets = (props) => {
    console.log(props);
    const { name, image, price } = props.gadget
    return (
        <div className='gadget-card'>
            <img className='gadget-img' src={image} alt="" />
            {/* <h1>This is Gadgets:{name}</h1> */}
        </div>
    );
};

export default Gadgets;