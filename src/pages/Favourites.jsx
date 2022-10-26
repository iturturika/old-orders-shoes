import React from 'react'
import axios from 'axios';
import {Card} from '../components/Card/index'
export function Favourites(props) {
    const [favourites, setFavourites] = React.useState([]);
  React.useEffect(() => {
    axios.get('https://634d7620acb391d34a9df634.mockapi.io/favourites')
    .then((res) => {
      setFavourites(res.data);
    });
  }, []);
  return (
    <section className="main">
        <div className="headerSection">
          <h2>Favourites</h2>
        </div>
        <div className="shopItems">
          {
            favourites.map((item) => (
              <Card 
              id={item.id}
              text={item.title} 
              price={item.price} 
              imgUrl={item.imgUrl}
              productCode={item.productCode}
              key={item.id}
              onPlus={props.onAddToCart}
              onClickFavourite={props.onAddToFavourites}
              />
            ))
          }
        </div>
      </section>
  )
}


