import React from 'react'

export const CartItem = (props) => {
  return (
    <div className="CartItem">
            <img src={props.imgUrl} alt="shoes" className="shoesCartIcon"/>
            <div>
              <p>{props.title}</p>
              <b>{props.price}mdl</b>
            </div>
            <img src="../images/deleteFromCart.svg" alt="deleteFromCart" className="deleteFromCartIcon" onClick={() => props.delete(props.productCode)}/>
          </div>
  )
}

