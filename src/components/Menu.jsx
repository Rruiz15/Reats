import React from 'react';
//styles
import '../assets/styles/components/Menu.scss';
//statics

const Menu = ({ children }) => {
  return (
    <div className='menu'>
      <div className='menu__divTitle'>
        <h3>Menu</h3>
      </div>
      {children}
    </div>
  );
};

export default Menu;
