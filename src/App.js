import React from "react";
import {Banner} from "./components/Banner/index"
import {Card} from "./components/Card/index"
import {Header} from "./components/Header/index"



const arr = [{
  title: "OO Retro Skater 001 Panda Shoes",
  price: 1400,
  imgUrl: "../images/shoes.png",
},
{
  title: "Мужские Кроссовки Old Older",
  price: 1700,
  imgUrl: "../images/blue.jpg",
},
{
  title: "Мужские Кроссовки Old Older",
  price: 1700,
  imgUrl: "../images/green.jpg",
},
{
  title: "Мужские Кроссовки Old Older",
  price: 1700,
  imgUrl: "../images/rose.jpg",
},
{
  title: "Мужские Кроссовки Old Older",
  price: 1700,
  imgUrl: "../images/black-and-blue.jpg",
},
]*/




function App() {
  return (
    <div className="wrapper">
      <Header arr={items}/>
      
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
            items.map((obj) => (
              <Card 
              text={obj.title} 
              price={obj.price} 
              imgUrl={obj.imgUrl} 
              />
            ))
          }
        </div>
      </section>
    </div>
  );
}

export default App;
