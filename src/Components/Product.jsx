import React from 'react'
import pro1 from "../assets/images/products/1.jpeg"
import pro2 from "../assets/images/products/2.jpeg"
import pro3 from "../assets/images/products/3.jpeg"
import pro4 from "../assets/images/products/4.jpeg"
import pro5 from "../assets/images/products/5.jpeg"
const Product = () => {
  return (
    <>
       <div className="biolife-title-box slim-item mt-5">
                                <span className="subtitle">All the best item for You</span>
                                <h2 className="main-title">Our Products</h2>
                            </div>
    <div className='row my-5'>
        <div className='col-lg-4 col-md-3 col-sm-6 col-xs-6'>
        <div className="contain-product layout-default">
                                                    <div className="product-thumb">
                                                        <a href="#" className="link-to-product">
                                                            <img src={pro1} alt="Vegetables" width="370" height="270" className="product-thumnail"/>
                                                        </a>
                                                       
                                                    </div>
                                                    <div className="info">
                                                       
                                                        <h4 className="product-title"><a href="#" className="pr-name">Turmeric Powder, 100g</a></h4>
                                                        <div className="price ">
                                                            <ins><span className="price-amount"><span className="currencySymbol">Rs.</span>40.00</span></ins>
                                                            <del><span className="price-amount"><span className="currencySymbol"></span>95.00</span></del>
                                                        </div>
                                                        <div className="slide-down-box">
                                                            
                                                            <div className="buttons">
                                                               
                                                                <a href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart</a>
                                                              
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
        </div>
        <div className='col-lg-4 col-md-3 col-sm-6'>
        <div className="contain-product layout-default">
                                                    <div className="product-thumb">
                                                        <a href="#" className="link-to-product">
                                                            <img src={pro2} alt="Vegetables" width="370" height="270" className="product-thumnail"/>
                                                        </a>
                                                       
                                                    </div>
                                                    <div className="info" >
                                                       
                                                        <h4 className="product-title"><a href="#" className="pr-name">Coriander Powder, 100g</a></h4>
                                                        <div class="price ">
                                                            <ins><span class="price-amount"><span className="currencySymbol">Rs</span>40.00</span></ins>
                                                            <del><span class="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                                        </div>
                                                        <div className="slide-down-box">
                                                            
                                                            <div className="buttons">
                                                               
                                                                <a href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart</a>
                                                              
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
        </div>
        <div className='col-lg-4 col-md-3 col-sm-6'>
        <div className="contain-product layout-default">
                                                    <div className="product-thumb">
                                                        <a href="#" className="link-to-product">
                                                            <img src={pro3} alt="Vegetables" width="370" height="270" className="product-thumnail"/>
                                                        </a>
                                                       
                                                    </div>
                                                    <div className="info" >
                                                       
                                                        <h4 className="product-title"><a href="#" className="pr-name">Garam Masala Powder, 100g</a></h4>
                                                        <div class="price ">
                                                            <ins><span class="price-amount"><span className="currencySymbol">Rs</span>90.00</span></ins>
                                                            <del><span class="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                                        </div>
                                                        <div className="slide-down-box">
                                                            
                                                            <div className="buttons">
                                                               
                                                                <a href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart</a>
                                                              
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
        </div>
    </div>
    <div className='row my-5'>
    <div className='col-lg-4 col-md-3 col-sm-6'>
        <div className="contain-product layout-default">
                                                    <div className="product-thumb">
                                                        <a href="#" className="link-to-product">
                                                            <img src={pro4} alt="Vegetables" width="370" height="270" className="product-thumnail"/>
                                                        </a>
                                                       
                                                    </div>
                                                    <div className="info" >
                                                       
                                                        <h4 className="product-title"><a href="#" className="pr-name">Kasmiri Chili Powder, 100g</a></h4>
                                                        <div class="price ">
                                                            <ins><span class="price-amount"><span className="currencySymbol">Rs</span>50.00</span></ins>
                                                            <del><span class="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                                        </div>
                                                        <div className="slide-down-box">
                                                            
                                                            <div className="buttons">
                                                               
                                                                <a href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart</a>
                                                              
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
        </div>
        <div className='col-lg-4 col-md-3 col-sm-6'>
        <div className="contain-product layout-default">
                                                    <div className="product-thumb">
                                                        <a href="#" className="link-to-product">
                                                            <img src={pro5} alt="Vegetables" width="370" height="270" className="product-thumnail"/>
                                                        </a>
                                                       
                                                    </div>
                                                    <div className="info" >
                                                       
                                                        <h4 className="product-title"><a href="#" className="pr-name">Jeera Powder, 100g</a></h4>
                                                        <div class="price ">
                                                            <ins><span class="price-amount"><span className="currencySymbol">Rs.</span>85.00</span></ins>
                                                            <del><span class="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                                        </div>
                                                        <div className="slide-down-box">
                                                            
                                                            <div className="buttons">
                                                               
                                                                <a href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart</a>
                                                              
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
        </div>
    </div>
      
    </>
  )
}

export default Product