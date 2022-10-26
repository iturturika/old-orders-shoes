import React from 'react'
import axios from "axios";
import {Card} from "../components/Card/index"
export function Home(props) {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    axios.get('https://634d7620acb391d34a9df634.mockapi.io/items')
    .then((res) => {
      setItems(res.data);
    });
  }, []);
  

    const onChangeSearchInput = (event) => {
        props.setSearchValue(event.target.value);
      }
  return (
    <section className="main">
        <div className="headerSection">
          <h2>{props.searchValue ? `Search by request: "${props.searchValue}"` : "All shoes"}</h2>
          <div className="search">
            <img src="../images/search.svg" alt="search" className="searchIcon"/>
            <input onChange={onChangeSearchInput} value={props.searchValue} placeholder="Search ..."/>
          </div>
        </div>
        <div className="shopItems">
          {
            items.filter((item) => item.title.toLowerCase().includes(props.searchValue.toLowerCase()))
            .map((item) => (
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
