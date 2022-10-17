import React from "react";
import {Banner} from "./components/Banner/index"
import {Card} from "./components/Card/index"
import {Header} from "./components/Header/index"







function App() {
  
  const [items, setItems] = React.useState();
  fetch('https://634d7620acb391d34a9df634.mockapi.io')
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    setItems(json);
  })
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
