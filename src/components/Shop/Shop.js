import React, { useEffect, useState } from 'react';
import Gadgets from '../Gadgets/Gadgets';
import './Shop.css';

const Shop = () => {
    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, [])
    return (
        <div className='container'>
            <div>
                {
                    gadgets.map(gadget => <Gadgets
                        key={gadget.id}
                        gadgets={gadgets}></Gadgets>)
                }
                {/* <Gadgets
                    gadgets={gadgets}>
                </Gadgets> */}
            </div>
            <div>
                This is for selected items
            </div>
        </div>
    );
};

export default Shop;