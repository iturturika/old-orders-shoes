import React from 'react'

export const Card = (props) => {
  return (
    <div className="card">
          <img src="../images/favouriteIcon.png" alt="favouriteIcon" className="favourite"/>
          <img src={props.imgUrl} alt="shoes" className="shoesCardIcon"/>
          <h3>{props.text}</h3>
          <div className="bottomSectionCard">
           <h4>PRICE: <p className="price">{props.price}mdl</p>
           </h4>
           <img src="../images/adToCartIcon.png" alt="addToCartIcon" className="addToCartIcon"/>
          </div>
        </div>
  )
}


