import React from 'react';
//styles
import '../assets/styles/components/MenuItem.scss'
//statics
import pizza from '../assets/static/pizza.png'

const MenuItem = ({children}) => {
    return (
        <div className="menuItem">
           <div className="menuItem__title">
            <div className="menuItem__title--icon">
                    <img src={pizza} alt=""/>
                </div>
                <div className="menuItem__title--name">
                    <p>1. Pizza</p>    
                </div>
            </div>
            {children}
        </div>
    );
}

export default MenuItem;
