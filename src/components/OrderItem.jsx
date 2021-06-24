import React from 'react';
//styles
import '../assets/styles/components/OrderItem.scss';

const OrderItem = () => {
  return (
    <div className='orderitem'>
      <div className='orderitem__product'>
        <div className='orderitem__product--cant'>
          1 x
        </div>
        <div className='orderitem__product--name'>
          1.1 Pizza Margarita
        </div>
      </div>
      <div className='orderitem__price'>
        6990 $
      </div>
    </div>
  );
};

export default OrderItem;
