import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div >
            <div className='question'>
                <h1>How React Works</h1>
                <p className='ans'>In React we do everything by components. which are shown on the web page. React render those components and we can see it on the actual DOM.Parallelly react create a virtual DOM and store all the components on the virtual DOM.
                    If we change the state or data of any components, React creates a new virtual DOM and compares it with the old one. If it finds any change then it updates those changes on the web page.
                    That helps not to reload the whole page. Means update only where the changes are found and work like a single-page application and that makes react fast.
                </p>
            </div>
            <div className='question'>
                <h1>Props VS State</h1>
                <p className='ans'>Props are external values that are controlled by the parent component. we can pass props as attributes to a component. props can pass data to multiple components.
                </p>
                <p>State is an internal value and controlled by the component itself.it is a variable declared in the component and holds data of it and it is mutable.
                </p>
            </div>
        </div>
    );
};

export default Questions;