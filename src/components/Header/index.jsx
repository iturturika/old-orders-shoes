import React from 'react'
import {Drawer} from '../Drawer/index';

export const Header = (props) => {
  const [isOpenCart, setIsOpenCart] = React.useState(false);
    const onClickCart = () => {
        setIsOpenCart(true);
    }
    const closeCart = () => {
      setIsOpenCart(false);
    }
  return (
    <header className="header">
        {isOpenCart ? <Drawer arr={props.arr} onClick={onClickCart} removedFromCart={props.onRemoveItem} onClose={closeCart}/> : undefined}
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
            <li className="icon"><img src="../images/cart.svg" alt="cart" width={"30px"} onClick={onClickCart}/><p>1200mdl</p></li>
            <li className="icon"><img src="../images/heart.svg" alt="heart" width={"30px"}/></li>
            <li className="icon"><img src="../images/user.svg" alt="user" width={"30px"}/></li>
          </ul>
        </div>
        <div className="border"></div>
    </header>
    
  )
}

