import React from 'react';
//stiles 
import '../assets/styles/components/Order.scss'

const Order = ({children}) => {
    return (
        <div className="order">
            <div className="order__title">
                <h3>Orden de la Mesa</h3>
            </div>
            <div className="order__info">
                {children}
            </div>
            <div className="order__results">
                <div className="order__results--subtotal">
                    <p>Subtotal</p>
                    <p>35990 $</p>
                </div>
                <div className="order__results--discount">
                    <p>Descuento</p>
                    <input type="number" placeholder="0 $"/>
                    <p>0$</p>
                </div>
                <div className="order__results--total">
                    <p>Total</p>
                    <p>35990 $</p> 
                </div>
                <div className="order__buttons">
                    <a className="order__buttons--pay">
                        <p>Pagar</p>
                        <img src="" alt="" />
                    </a>
                    <a className="order__buttons--print">
                        <img src="" alt="" />
                    </a>
                </div>
            </div>
            
        </div>
    );
}

export default Order;
