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
  title: "OO Retro Skater 001 Blue Shoes",
  price: 1600,
  imgUrl: "../images/blue-and-white.jpg",
},
{
  title: "OO Retro Skater 001 Mocha Shoes",
  price: 1900,
  imgUrl: "../images/brown.jpg",
},
{
  title: "OO Retro Skater 001 Black Shoes",
  price: 1600,
  imgUrl: "../images/gray.jpg",
},
{
  title: "OO Retro Skater 001 Green Shoes",
  price: 1400,
  imgUrl: "../images/green.jpg",
},
]



function App() {
  return (
    <div className="wrapper">
      <Header arr={arr}/>
      
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
