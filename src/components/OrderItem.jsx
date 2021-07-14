import React from 'react';
import { connect } from 'react-redux'
import { productDelete } from '../actions';
//styles
import '../assets/styles/components/OrderItem.scss';
//static 
import Delete from '../assets/static/delete.png'

const OrderItem = props => {
  const { cant , id , name , price } = props

  const handleclick= () => {
    props.productDelete(props)
  }

  return (
    <div className='orderitem'>
      <div className='orderitem__product'>
        <div className='orderitem__product--cant'>
          {`${cant} x `}
        </div>
        <div className='orderitem__product--name'>
          {` ${id}  ${name}`}
        </div>
      </div>
      <div className='orderitem__price'>
        {`${price} $`}
      </div>
      <div className='orderitem__delete' onClick={handleclick} >
          <img src={Delete} alt="delete"/>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  productDelete,
}

export default connect(null,mapDispatchToProps)(OrderItem);
