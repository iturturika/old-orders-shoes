import React from "react";
import {Routes, Route} from "react-router-dom";
import axios from "axios";
import {Banner} from "./components/Banner/index";
import {Header} from "./components/Header/index";
import {Home} from "./pages/Home.jsx";
import { Favourites } from "./pages/Favourites";




function App() {
  const [cartItems, setCartItems] = React.useState([]);
  React.useEffect(() => {
    axios.get('https://634d7620acb391d34a9df634.mockapi.io/cartItems')
    .then((res) => {
      setCartItems(res.data);
    })
  }, []);


  const onAddToCart = (obj) => {
    axios.post('https://634d7620acb391d34a9df634.mockapi.io/cartItems', obj);
    setCartItems((prev) => [...prev, obj]);
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://634d7620acb391d34a9df634.mockapi.io/cartItems/${id}`);
    console.log(id)
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  const [favouriteItems, setFavouriteItems] = React.useState([]);
  const onAddToFavourites = (obj) => {
    axios.post('https://634d7620acb391d34a9df634.mockapi.io/favourites', obj);
    setFavouriteItems((prev) => [...prev, obj]);
  }

  const onRemoveFromFavourites = (id) => {
    axios.delete(`https://634d7620acb391d34a9df634.mockapi.io/favourites/${id}`);
    console.log(id)
    setFavouriteItems((prev) => prev.filter((item) => item.id !== id));
  }
  const [searchValue, setSearchValue] = React.useState('');



  return (
    <div className="wrapper">
      <Header 
      arr={cartItems} 
      onRemoveItem={onRemoveItem}/>
      
      <Banner/>
      <Routes>
        <Route path="/" element={
          <Home searchValue={searchValue} 
                setSearchValue={setSearchValue} 
                onAddToCart={onAddToCart}
                onAddToFavourites={onAddToFavourites}
                onRemoveFromFavourites={onRemoveFromFavourites}/>}/>
        <Route path="/favourites" element={<Favourites 
            favourites={favouriteItems} 
            onAddToCart={onAddToCart}
            onAddToFavourites={onAddToFavourites}
            onRemoveFromFavourites={onRemoveFromFavourites}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
