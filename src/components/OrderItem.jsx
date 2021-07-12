import React from 'react';
//styles
import '../assets/styles/components/OrderItem.scss';

const OrderItem = props => {
  const { cant , id , name , price } = props
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
    </div>
  );
};

export default OrderItem;
