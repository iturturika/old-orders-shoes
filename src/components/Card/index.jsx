import React from 'react'


export const Card = (props) => {
  const [isAddedToCart, setIsAddedToCart] = React.useState(false);
  const [isAddedToFavourite, setIsAddedToFavourite] = React.useState(false);
  const onClickPlus = () => {
    setIsAddedToCart(!isAddedToCart);
    props.onPlus({
      'title': props.text,
      'imgUrl': props.imgUrl,
      'price': props.price,
      'productCode': props.productCode,
      'id': props.id,
    });
  }

  const onClickFavourite = () => {
    setIsAddedToFavourite(!isAddedToFavourite);
    props.onClickFavourite({
      'title': props.text,
      'imgUrl': props.imgUrl,
      'price': props.price,
      'productCode': props.productCode,
      'id': props.id,
    });

  }
  return (
    
    <div className="card">
          <img src={isAddedToFavourite ? "../images/addedFavouriteIcon.png" : "../images/favouriteIcon.svg"} alt="favouriteIcon" className="favourite" onClick={onClickFavourite}/>
          <img src={props.imgUrl} alt="shoes" className="shoesCardIcon"/>
          <h3>{props.text}</h3>
          <div className="bottomSectionCard">
           <h4>PRICE: <p className="price">{props.price}mdl</p>
           </h4>
           <img src={isAddedToCart ? "../images/addedIcon.svg" : "../images/adToCartIcon.png"} alt="addToCartIcon" className="addToCartIcon" onClick={onClickPlus}/>
          </div>
        </div>
  )
}


