import React from "react";

export const Banner = () => {
    return (
        <section className="banner">
        <div className="rightSection">
          <h1>Old Orders, Get Now!</h1>
          <button className="button">Buy</button>
          </div>
          <div className="leftSection">
            <img src="../images/shoes.png" alt="shooes" className="bannerImg"/>
          </div>
          </section>
    );
}