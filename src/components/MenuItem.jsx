import React from 'react';
//styles
import '../assets/styles/components/MenuItem.scss';
//statics
import pizza from '../assets/static/pizza.png';

const MenuItem = ({ id, name }) => {
  return (
    <div className='menuItem'>
      <div className='menuItem__title'>
        <div className='menuItem__title--icon'>
          <img src={pizza} alt='' />
        </div>
        <div className='menuItem__title--name'>
          <p>{`${id}. ${name}`}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
