import React from 'react'
import {Link} from "react-router-dom";
import {Drawer} from '../Drawer/index';

export const Header = (props) => {
  const [isOpenCart, setIsOpenCart] = React.useState(false);
  const onClickCart = () => {
    setIsOpenCart(!isOpenCart);
  }
  


  return (
    <header className="header">
        {isOpenCart ? <Drawer 
                        arr={props.arr} 
                        isCartOpened={onClickCart} 
                        removedFromCart={props.onRemoveItem}/> : undefined}
        <div className="LeftPart">
          <div><Link to="/"><img src="../images/logo.png" alt="cart" width={'50px'} className="logoIcon"/></Link></div>
          <div className="text1">
            <h3>Old Order</h3>
            <p>shoes store</p>
          </div>
            <></>
        </div>
        <div className="RightPart">
          <ul className="">
            <li className="icon"><img src="../images/cart.svg" alt="cart" width={"30px"} onClick={onClickCart}/><p>1200mdl</p></li>
            <li className="icon"><img src="../images/heart.svg" alt="heart" width={"30px"}/></li>
            <li className="icon"><Link to="/favourites"><img src="../images/user.svg" alt="user" width={"30px"}/></Link></li>
          </ul>
        </div>
        <div className="border"></div>
    </header>
    
  )
}

