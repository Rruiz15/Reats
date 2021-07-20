import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setDisc, resetTotal } from '../actions';
//stiles
import '../assets/styles/components/Order.scss';

const Order = props => {
  const { children, subTotal, total} = props
  let [disc, setValues] = useState(0)
  
  const handleDiscount = event => {
    if (event.target.value == 0){
      props.resetTotal(subTotal)
    } else {
      setValues(disc = event.target.value)
      props.setDisc(disc)
    }
    
  }
  return (
    <div className='order'>
      <div className='order__title'>
        <h3>Orden de la Mesa</h3>
      </div>
      <div className='order__info'>
        <div className="order__info--text">
          <div>
            <p>Cant</p>
            <p>Producto</p>
          </div>
          <p>Precio</p>
        </div>
        {children}
      </div>
      <div className='order__results'>
        <div className='order__results--subtotal'>
          <p>Subtotal</p>
          <p>{`${subTotal} $`}</p>
        </div>
        <div className='order__results--discount'>
          <p>Descuento</p>
          <input type='number' placeholder='0 $' onBlur={handleDiscount}/>
          <p>0$</p>
        </div>
        <div className='order__results--total'>
          <p>Total</p>
          <p>{`${total} $`}</p>
        </div>
        <div className='order__buttons'>
          <a className='order__buttons--pay' href='#'>
            <p>Pagar</p>
            <img src='' alt='' />
          </a>
          <a className='order__buttons--print' href="#">
            <img src='' alt='' />
          </a>
        </div>
      </div>

    </div>
  );
};

const mapDispatchToProps = {
  setDisc,
  resetTotal,
}

export default connect(null,mapDispatchToProps)(Order);
