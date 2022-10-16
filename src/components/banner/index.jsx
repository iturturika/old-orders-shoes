import React from "react";

export const Banner = () => {
    return (
        <section className="banner">
        <div className="rightSection">
          <h1><b style={{color: "#9ccfec"}}>Old Orders,</b> Get Now!</h1>
          <button className="button">Buy</button>
          </div>
          <div className="leftSection">
            <img src="../images/shoes.png" alt="shooes" className="bannerImg"/>
          </div>
          </section>
    );
}