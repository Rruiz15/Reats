import React, { useState } from 'react';
import { connect } from 'react-redux';
import { produtSelect, setSubtotal, setTotal } from '../actions';
//styles 
import '../assets/styles/components/MenuSubItem.scss'
//static 
import sent from '../assets/static/sent.png'

const MenuSubItem = props => {
  const { id , name , price , cant, subname } = props
  const [  bill , setValues ]  = useState({
  })

  const handleSelect = () => {
    setValues({
      ...bill,
      id : id,
      name : `${subname} ${name}`, 
      price : price,
      cant: cant ,
    })
  }

  const handleclick = () => {
    props.produtSelect(bill)
    props.setSubtotal(bill.price)
    props.setTotal(bill.price)
  }

  return (
    <div className='menuSubItem'>
      <div className="menuSubItem__title">
        <p onClick={handleSelect}>{`${id}   ${name}`}</p>
      </div>
      <div className="menuSubItem__cant">
        <a >-</a>
        <p>{cant}</p>
        <a>+</a>
      </div>
      <div className="menuSubItem__price">
        <p>{`${price} $`}</p>
        <div className="menuSubItem__sent">
          <img src={sent} alt="sent"  onMouseDown={handleSelect} onMouseUp={handleclick} />
        </div>
      </div>
      
    </div>
  );
};

const mapDispathToProps = {
  produtSelect,
  setSubtotal,
  setTotal
}


export default connect(null,mapDispathToProps)(MenuSubItem);
