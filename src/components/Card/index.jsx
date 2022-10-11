import React from 'react'

export const Card = () => {
  return (
    <div className="card">
          <img src="../images/favouriteIcon.png" alt="favouriteIcon" className="favourite"/>
          <img src="../images/shoes.png" alt="shoes" className="shoesCardIcon"/>
          <h3>Мужские Кроссовки Old Order</h3>
          <div className="bottomSectionCard">
           <h4>PRICE: <p className="price">1700mdl</p>
           </h4>
           <img src="../images/adToCartIcon.png" alt="addToCartIcon" className="addToCartIcon"/>
          </div>
        </div>
  )
}


