import React from "react";
import {Routes, Route} from "react-router-dom";
import axios from "axios";
import {Banner} from "./components/Banner/index";
import {Header} from "./components/Header/index";
import {Home} from "./pages/Home.jsx";
import { Favourites } from "./pages/Favourites";


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favourites, setFavourites] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    async function fetchData(){
    
    const cartItemsResponse = await axios.get('https://634d7620acb391d34a9df634.mockapi.io/cartItems');
    const favouritesResponse = await axios.get('https://634d7620acb391d34a9df634.mockapi.io/favourites');
    const itemsResponse = await axios.get('https://634d7620acb391d34a9df634.mockapi.io/items');
    setIsLoading(false);
    setCartItems(cartItemsResponse.data);
    setFavourites(favouritesResponse.data);
    setItems(itemsResponse.data);
    
    
    }
    fetchData();
  }, []);


  const onAddToCart = async (obj) => {
    try{
      if(cartItems.find(item => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://634d7620acb391d34a9df634.mockapi.io/cartItems/${obj.id}`);
        setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
        axios.post('https://634d7620acb391d34a9df634.mockapi.io/cartItems', obj);
        setCartItems((prev) => [...prev, obj]);
      
      }
    } catch(error){

    }
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://634d7620acb391d34a9df634.mockapi.io/cartItems/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }


  const onAddToFavourites = async(obj) => {
    try{
      if(favourites.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://634d7620acb391d34a9df634.mockapi.io/favourites/${obj.id}`);
        setFavourites((prev) => prev.filter(favObj => Number(favObj.id) !== Number(obj.id)));
      } else {
        const {data} = await axios.post('https://634d7620acb391d34a9df634.mockapi.io/favourites', obj);
        setFavourites((prev) => [...prev, data]);
      }
    } catch(error){
      alert('Failed to add to the favorites');
    }
  }

  const [searchValue, setSearchValue] = React.useState('');



  return (
    <div className="wrapper">
      <Header 
      arr={cartItems} 
      onRemoveItem={onRemoveItem}
     />
      
      <Banner/>
      <Routes>
        <Route path="/" element={
          <Home searchValue={searchValue}
                items={items}
                favourites={favourites} 
                cartItems={cartItems}
                setSearchValue={setSearchValue} 
                onAddToCart={onAddToCart}
                onAddToFavourites={onAddToFavourites}
                isLoading={isLoading}/>}
                />
        <Route path="/favourites" element={
        <Favourites favourites={favourites} 
                    cartItems={cartItems}
                    onAddToCart={onAddToCart}
                    onAddToFavourites={onAddToFavourites}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
