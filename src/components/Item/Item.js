import React from 'react';
import './Item.css';

const Item = (props) => {
    const { items } = props;
    return (
        <div className='item'>
            <div className='item-info'>
                <h3>Your Selected Items</h3>
                <p>Total selected item: {items.length}</p>
                {
                    items.map(item =>

                        < ul key={item.id}>
                            <li >{item.name}</li>
                        </ul>
                    )}
            </div>
        </div >
    );
};

export default Item;