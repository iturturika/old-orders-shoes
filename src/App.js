import React from "react";
import {Banner} from "./components/Banner/index"
import {Card} from "./components/Card/index"
function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="LeftPart">
          <div><img src="../images/logo.png" alt="cart" width={'50px'} className="logoIcon"/></div>
          <div className="text1">
            <h3>Old Order</h3>
            <p>shoes store</p>
          </div>
            <></>
        </div>
        <div className="RightPart">
          <ul className="">
            <li className="icon"><img src="../images/cart.svg" alt="cart" width={"30px"}/><p>1200mdl</p></li>
            <li className="icon"><img src="../images/heart.svg" alt="heart" width={"30px"}/></li>
            <li className="icon"><img src="../images/user.svg" alt="user" width={"30px"}/></li>
          </ul>
        </div>
        <div className="border"></div>
      </header>

      <Banner/>
      <div className="overlay">
        <div className="drawer">
          
        </div>
      </div>
      <section className="main">
        <div className="headerSection">
          <h2>All shoes</h2>
          <div className="search">
            <img src="../images/search.svg" alt="search" className="searchIcon"/>
            <input placeholder="Search ..."/>
          </div>
        </div>
        <div className="shopItems">
          <Card text="Мужские Кроссовки Old Older" price="1700mdl" imgUrl="../images/shoes.png"/>
          <Card text="Мужские Кроссовки Old Older" price="1700mdl" imgUrl="../images/shoes.png"/>
          <Card text="Мужские Кроссовки Old Older" price="1700mdl" imgUrl="../images/shoes.png"/>
          <Card text="Мужские Кроссовки Old Older" price="1700mdl" imgUrl="../images/shoes.png"/>
          <Card text="Мужские Кроссовки Old Older" price="1700mdl" imgUrl="../images/shoes.png"/>
          <Card text="Мужские Кроссовки Old Older" price="1700mdl" imgUrl="../images/shoes.png"/>
          <Card text="Мужские Кроссовки Old Older" price="1700mdl" imgUrl="../images/shoes.png"/>
          <Card text="Мужские Кроссовки Old Older" price="1700mdl" imgUrl="../images/shoes.png"/>
          <Card text="Мужские Кроссовки Old Older" price="1700mdl" imgUrl="../images/shoes.png"/>
          <Card text="Мужские Кроссовки Old Older" price="1700mdl" imgUrl="../images/shoes.png"/>
          <Card text="Мужские Кроссовки Old Older" price="1700mdl" imgUrl="../images/shoes.png"/>
          <Card text="Мужские Кроссовки Old Older" price="1700mdl" imgUrl="../images/shoes.png"/>
        </div>
      </section>
    </div>
  );
}

export default App;
