import React from 'react';
import { connect } from 'react-redux';
//styles 
import '../assets/styles/components/MenuSubItem.scss'

const MenuSubItem = props => {
  const { id , name , price } = props

  return (
    <div className='menuSubItem'>
      <div className="menuSubItem__title">
        <p>{`${id}   ${name}`}</p>
      </div>
      <div className="menuSubItem__cant">
        <a >-</a>
        <p>{cant}</p>
        <a>+</a>
      </div>
      <div className="menuSubItem__price">
        <p>{`${price} $`}</p>
        <div className="menuSubItem__sent">
          <img src="" alt="" />
        </div>
      </div>
      
    </div>
  );
};




export default connect(null,null)(MenuSubItem);
