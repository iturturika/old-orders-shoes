import React from "react";
import {Banner} from "./components/Banner/index"
import {Card} from "./components/Card/index"
import {Header} from "./components/Header/index"




function App() {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch('https://634d7620acb391d34a9df634.mockapi.io/items').then((res) => {
      return res.json();
    }).then(json => {
      setItems(json);
    })
  }, []);
  const [cartItems, setCartItems] = React.useState([]);
  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }
  return (
    <div className="wrapper">
      <Header arr={cartItems}/>
      
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
            items.map((item) => (
              <Card 
              id={item.id}
              text={item.title} 
              price={item.price} 
              imgUrl={item.imgUrl}
              key={item.id}
              onPlus={onAddToCart}
              />
            ))
          }
        </div>
      </section>
    </div>
  );
}

export default App;
