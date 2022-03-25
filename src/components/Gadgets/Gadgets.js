import React from 'react';
import './Gadgets.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Gadgets = (props) => {
    console.log(props);
    const { name, image, price } = props.gadget;
    return (
        <div className='gadget-card'>
            <img className='gadget-img' src={image} alt="" />
            <div className='product-info'>
                <h3>Name: {name}</h3>
                <h4>Price: ${price}</h4>
            </div>
            <button className='card-btn'>Add To Cart
                <FontAwesomeIcon icon={faCartShopping} />
            </button>
        </div>
    );
};

export default Gadgets;