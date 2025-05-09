import React from "react";
import Menu from "./SideComponents/Menu";
import Banner from "./Banner";
import Product from "./Product";
import Feature from "./SideComponents/Feature";
import pic1 from "../assets/images/pic1.jpg" 
 import pic2 from "../assets/images/pic2.jpg"   

const Home = () => {
  return (
    <>
      <div className="body-content outer-top-vs" id="top-banner-and-menu">
        <div className="container">
          <div className="row">
            <div
              className="col-xs-12 col-sm-12 col-md-3 sidebar"
              style={{ backgroundColor: "transparent" }}>
                <Menu/>
                <Feature/>
              </div>
            <div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder">
                <Banner/>
                <Product/>
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <img src={pic2} alt="pic2" className="img-fluid" />
                    </div>
                    <div className="col-lg-6">
                        <img src={pic1} alt="pic1" className="img-fluid" />
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
