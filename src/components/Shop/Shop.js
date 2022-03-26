import React, { useEffect, useState } from 'react';
import Gadgets from '../Gadgets/Gadgets';
import Item from '../Item/Item';
import './Shop.css';

const Shop = () => {
    const [gadgets, setGadgets] = useState([]);
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, [])

    const addToItem = (gadget) => {

        if (item.indexOf(gadget) === -1) {
            const newItem = [...item, gadget];
            setItem(newItem);
        }
        else {
            alert('This item is Exist in your list');
        }

    }
    return (
        <div className='container'>
            <div className='gadgets-container'>
                {
                    gadgets.map(gadget => <Gadgets
                        key={gadget.id}
                        gadget={gadget}
                        addToItem={addToItem}></Gadgets>)
                }
                {/* <Gadgets
                    gadgets={gadgets}>
                </Gadgets> */}
            </div>
            <div>
                <Item items={item}></Item>
            </div>
        </div>
    );
};

export default Shop;