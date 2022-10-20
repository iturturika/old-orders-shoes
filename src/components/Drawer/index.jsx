import React from 'react'
import {CartItem} from '../CartItem/index';
export const Drawer = (props) => {
  return (
    <div className="overlay" onClick={props.onClick}>
        <div className="drawer">
          <h2 style={{margin: "30px"}}>Корзина</h2>
          <div className="cartItems">
          {props.arr.map((obj) => (
            <CartItem title={obj.title} imgUrl={obj.imgUrl} price={obj.price} onPlus={props.onPlus}/>
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

