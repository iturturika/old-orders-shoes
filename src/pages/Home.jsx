import React from 'react'

import {Card} from "../components/Card/index"
export function Home(props) {
  

    const onChangeSearchInput = (event) => {
        props.setSearchValue(event.target.value);
      }
    
    const renderItems = () => {
      return(
        props.loading 
        ? [...Array(8)] 
        : props.items.filter((item) => item.title.toLowerCase().includes(props.searchValue.toLowerCase()))).map((item) => (
          <Card 
          id={item.id}
          text={item.title} 
          price={item.price} 
          imgUrl={item.imgUrl}
          productCode={item.productCode}
          key={item.id}
          onPlus={props.onAddToCart}
          onClickFavourite={props.onAddToFavourites}
          added={props.cartItems.some(obj => Number(obj.id) === Number(item.id))}
          favorited={props.favourites.some(obj => Number(obj.id) === Number(item.id))}
          loading={props.loading}
          />
        ))
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
            renderItems()
              
          }
        </div>
      </section>
  )
}
