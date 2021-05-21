import React from 'react';
//styles 
import '../assets/styles/components/Menu.scss'
//statics
import search from '../assets/static/search.png'

const Menu = ({children}) => {
    return (
        <div className="menu">
            <div className="menu__divTitle">
                <h3>Menu</h3>
                <div>
                    <img src={search} alt="search" />
                    <input type="text" placeholder="Buscar"/>
                </div>
            </div>
            {children}
        </div>
    );
}

export default Menu;
