import React from "react";
import {Banner} from "./components/Banner/index"
import {Card} from "./components/Card/index"
import {Header} from "./components/Header/index"
import {CartItem} from "./components/CartItem/index"


const arr = [{
  title: "Мужские Кроссовки Old Older",
  price: 1700,
  imgUrl: "../images/shoes.png",
},
{
  title: "Мужские Кроссовки Old Older",
  price: 1700,
  imgUrl: "../images/shoes.png",
},
{
  title: "Мужские Кроссовки Old Older",
  price: 1700,
  imgUrl: "../images/shoes.png",
},
{
  title: "Мужские Кроссовки Old Older",
  price: 1700,
  imgUrl: "../images/shoes.png",
},
{
  title: "Мужские Кроссовки Old Older",
  price: 1700,
  imgUrl: "../images/shoes.png",
},
]



function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className="overlay">
        <div className="drawer">
          <h2 style={{margin: "30px",}}>Корзина</h2>
          <div className="cartItems">
          {arr.map((obj) => (
            <CartItem title={obj.title} imgUrl={obj.imgUrl} price={obj.price}/>
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
      <Banner/>

      <section className="main">
        <div className="headerSection">
          <h2>All shoes</h2>
          <div className="search">
            <img src="../images/search.svg" alt="search" className="searchIcon"/>
            <input placeholder="Search ..."/>
          </div>
        </div>
        <div className="shopItems">
          {
            arr.map((obj) => (
              <Card text={obj.title} price={obj.price} imgUrl={obj.imgUrl}/>
            ))
          }
        </div>
      </section>
    </div>
  );
}

export default App;
