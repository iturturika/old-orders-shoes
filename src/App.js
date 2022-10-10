import React from "react";
import {Banner} from "../src/components/banner/index"
function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="LeftPart">
          <div><img src="../images/logo.png" alt="cart" width={'50px'} className="logoIcon"/></div>
          <div className="text1">
            <h3>Old Orders</h3>
            <p>shoes store</p>
          </div>

          
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

      <section className="main">
        <div><h2>All shoes</h2></div>
      </section>
    </div>
  );
}

export default App;
