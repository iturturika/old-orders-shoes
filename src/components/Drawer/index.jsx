import React from 'react'
import {CartItem} from '../CartItem/index';
export const Drawer = (props) => {
  return (
    <div className="overlay" onClick={props.onClick}>
        <div className="drawer">
          <h2 style={{margin: "30px"}}>Корзина <img src="../images/deleteFromCart.svg" alt="close" width={30} className="closeButton" onClick={props.onClose}/></h2>
          
          <div className="cartItems">
          {props.arr.map((obj) => (
            <CartItem title={obj.title} imgUrl={obj.imgUrl} price={obj.price} id={obj.id} onPlus={props.onPlus} delete={props.removedFromCart}/>
          ))}
          </div>
          <ul className="cartTotalBlock">
            <li className="cartTotalBlockList">
              <span>Final:</span>
              <div></div>
              <b>1000mdl</b>
            </li>
            <li className="cartTotalBlockList">
              <span>Comission 5%:</span>
              <div></div>
              <b>50mdl</b>
            </li>
          </ul>
          <button className="buttonCart">Buy</button>
        </div>
      </div>
  )
}

