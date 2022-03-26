// import { faRandom } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Item.css';

const Item = (props) => {
    console.log(props);
    const { items, chooseOne } = props;

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

                <button onClick={() => chooseOne()} className='item-btn'>Choose One</button>
            </div>
        </div >
    );
};

export default Item;