import React from "react";
import axios from "axios";
import {Banner} from "./components/Banner/index"
import {Card} from "./components/Card/index"
import {Header} from "./components/Header/index"




function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  React.useEffect(() => {
    axios.get('https://634d7620acb391d34a9df634.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://634d7620acb391d34a9df634.mockapi.io/cartItems').then((res) => {
      setCartItems(res.data);
    })
  }, []);


  const onAddToCart = (obj) => {
    axios.post('https://634d7620acb391d34a9df634.mockapi.io/cartItems', obj);
    setCartItems((prev) => [...prev, obj]);
  }

  const onRemoveItem = (productCode) => {
    axios.delete(`https://634d7620acb391d34a9df634.mockapi.io/cartItems/${productCode}`);
    setCartItems((prev) => prev.filter((item) => item.productCode !== productCode));
  }

  const [searchValue, setSearchValue] = React.useState('');
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }


  return (
    <div className="wrapper">
      <Header arr={cartItems} onRemoveItem={onRemoveItem}/>
      
      <Banner/>

      <section className="main">
        <div className="headerSection">
          <h2>{searchValue ? `Search by request: "${searchValue}"` : "All shoes"}</h2>
          <div className="search">
            <img src="../images/search.svg" alt="search" className="searchIcon"/>
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search ..."/>
          </div>
        </div>
        <div className="shopItems">
          {
            items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item) => (
              <Card 
              id={item.id}
              text={item.title} 
              price={item.price} 
              imgUrl={item.imgUrl}
              productCode={item.productCode}
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
