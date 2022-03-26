// import { faRandom } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Random from '../Random/Random';
import './Item.css';

const Item = (props) => {
    const { items, chooseAgain } = props;

    const [random, setRandom] = useState([]);




    const chooseOne = (random) => {
        if (items.length !== 0) {
            const randomItem = Math.floor(Math.random() * items.length);
            const newRandom = items[randomItem];
            setRandom(newRandom);
        }
        else {
            alert('please add some items')
        }
    }


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
                <Random chooseOne={random}></Random>
                <button onClick={chooseOne} className='item-btn'>Choose 1 for me</button>
                <button onClick={() => chooseAgain(props.chooseAgain)} className='item-btn'>Choose again</button>
            </div>
        </div >
    );
};

export default Item;