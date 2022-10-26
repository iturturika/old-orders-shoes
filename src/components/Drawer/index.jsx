import React from 'react'
import {CartItem} from '../CartItem/index';
export const Drawer = (props) => {
  return (
    <div className="overlay" onClick={props.onClick}>
        <div className="drawer">
          <div className="cartHeader">
            <h2 style={{margin: "30px"}}>Корзина</h2>
            <img src="../images/deleteFromCart.svg" alt="close" width={30} className="closeButton" onClick={props.isCartOpened}/>
          </div>
          {props.arr.length === 0
          
            ? <div className="emptyCart">
            <img src="../images/emptyCart.jpg" alt="cart" width={100} style={{margin:"0 auto", marginBottom:"30px"}}/>
            <h3 style={{margin:"0 auto", marginBottom:"30px"}}>Cart is empty</h3>
            <p style={{margin:"0 auto", marginBottom:"30px"}}>Add at least one pair of sneakers to order.</p>
            <button className="button" style={{margin:"0 auto", marginBottom:"30px"}} onClick={props.isCartOpened}>
              <img src="../images/arrow.png" alt="arrow"/>
                Go Back
              </button>
            </div>

            :  <div className="itemsSection">
                <div className="cartItems">
              {props.arr.map((obj) => (
                <CartItem 
                  title={obj.title} 
                  imgUrl={obj.imgUrl} 
                  price={obj.price} 
                  id={obj.id} 
                  key={obj.id} 
                  productCode={obj.productCode} 
                  onPlus={props.onPlus} 
                  delete={props.removedFromCart}/>
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

          
            
          }
          
          
        </div>
      </div>
  )
}

