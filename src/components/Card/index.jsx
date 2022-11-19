import React from 'react'
import ContentLoader from "react-content-loader"

export const Card = ({added = false, favorited = false, onPlus, text, imgUrl, price, productCode, id, onClickFavourite, isLoading }) => {
  const [isAddedToCart, setIsAddedToCart] = React.useState(added);
  const [isAddedToFavourite, setIsAddedToFavourite] = React.useState(favorited);
  const onClickPlus = () => {
    
    setIsAddedToCart(!isAddedToCart);
  
    onPlus({
      'title': text,
      'imgUrl': imgUrl,
      'price': price,
      'productCode': productCode,
      'id': id,
    });
  }

  const onClickFavouriteIcon = () => {
    setIsAddedToFavourite(!isAddedToFavourite);
    onClickFavourite({
      'title': text,
      'imgUrl': imgUrl,
      'price': price,
      'productCode': productCode,
      'id': id,
    });

  }
  return (
   
    <div className="card">
          {
            isLoading ?  
            <ContentLoader 
            speed={2}
            width={240}
            height={300}
            viewBox="0 0 240 300"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <rect x="2" y="0" rx="10" ry="10" width="190" height="140" /> 
            <rect x="2" y="170" rx="10" ry="10" width="190" height="20" /> 
            <rect x="2" y="200" rx="10" ry="10" width="130" height="20" /> 
            <rect x="2" y="240" rx="10" ry="10" width="80" height="25" /> 
            <rect x="158" y="237" rx="10" ry="10" width="30" height="30" />
          </ContentLoader> : 
          <>
            <img src={isAddedToFavourite ? "../images/addedFavouriteIcon.png" : "../images/favouriteIcon.svg"} alt="favouriteIcon" className="favourite" onClick={onClickFavouriteIcon}/>
            <img src={imgUrl} alt="shoes" className="shoesCardIcon"/>
            <h3>{text}</h3>
              <div className="bottomSectionCard">
                <h4>PRICE: <p className="price">{price}mdl</p></h4>
                <img src={isAddedToCart ? "../images/addedIcon.svg" : "../images/adToCartIcon.png"} alt="addToCartIcon" className="addToCartIcon" onClick={onClickPlus}/>
              </div>
            </>
          }
        </div>
  )
}


