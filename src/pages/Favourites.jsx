import React from 'react'

import {Card} from '../components/Card/index'
export function Favourites(props) {

  return (
    <section className="main">
        <div className="headerSection">
          <h2>Favourites</h2>
        </div>
        <div className="shopItems">
          {
            props.favourites.map((item) => (
              <Card 
              id={item.id}
              text={item.title} 
              price={item.price} 
              imgUrl={item.imgUrl}
              productCode={item.productCode}
              key={item.id}
              onPlus={props.onAddToCart}
              onClickFavourite={props.onAddToFavourites}
              favorited={true}
              />
            ))
          }
        </div>
      </section>
  )
}


