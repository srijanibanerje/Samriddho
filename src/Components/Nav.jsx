import React from 'react'
import "../assets/css/style.css"
import "../assets/css/slick.min.css"
import logo from "../assets/images/4.png"
const Nav = () => {
  return (
   <>
     <header id="header" className="header-area style-01 layout-05">
            <div className="header-top hidden-xs">
                <div className="container">
                    <div className="top-bar left">
                        <ul className="horizontal-menu">
                            <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i>info@samriddhoenterprise.in</a></li>
                           
                        </ul>
                    </div>
                    <div className="top-bar right">
                        <ul className="social-list">
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                        </ul>
                        {/* <ul className="horizontal-menu">
                            <li><a href="login.html" className="login-link"><i className="biolife-icon icon-login"></i>Login/Register</a></li>
                        </ul> */}
                    </div>
                </div>
            </div>
            <div className="header-middle ">
            <div className="container py-3  bg-white">
  <div className="row align-items-center">
    
    {/* Logo */}
    <div className="col-lg-2 col-md-3 col-6 ">
      <a href="home-05.html" className="d-inline-block">
        <img src={logo} alt="Biolife Logo" width="300" height="40" />
      </a>
    </div>

    {/* Main Menu */}
    <div className="col-lg-7 d-none d-md-block">
      <nav>
        <ul className="nav justify-content-center gap-3">
          <li className="nav-item">
            <a href="#" className="nav-link text-dark fw-medium">Home</a>
          </li>
          
          {/* Shop Mega Menu */}
          <li className="nav-item dropdown position-static">
            <a className="nav-link dropdown-toggle text-dark fw-medium" href="#" data-bs-toggle="dropdown">Shop</a>
            <div className="dropdown-menu w-100 mt-0 p-4 border-top shadow">
              <div className="row">
                <div className="col-md-6">
                  <h6 className="fw-bold">Fresh Berries</h6>
                  <ul className="list-unstyled">
                    <li><a href="#" className="dropdown-item">Fruit & Nut Gifts</a></li>
                    <li><a href="#" className="dropdown-item">Mixed Fruits</a></li>
                    <li><a href="#" className="dropdown-item">Oranges</a></li>
                    <li><a href="#" className="dropdown-item">Bananas & Plantains</a></li>
                    <li><a href="#" className="dropdown-item">Fresh Gala Apples</a></li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6 className="fw-bold">Vegetables</h6>
                  <ul className="list-unstyled">
                    <li><a href="#" className="dropdown-item">Berries</a></li>
                    <li><a href="#" className="dropdown-item">Pears</a></li>
                    <li><a href="#" className="dropdown-item">Chili Peppers</a></li>
                    <li><a href="#" className="dropdown-item">Fresh Avocado</a></li>
                    <li><a href="#" className="dropdown-item">Grapes</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          {/* Product Submenu */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-dark fw-medium" href="#" data-bs-toggle="dropdown">Product</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Omelettes</a></li>
              <li><a className="dropdown-item" href="#">Breakfast Scrambles</a></li>
              <li className="dropdown-submenu dropend">
                <a className="dropdown-item dropdown-toggle" href="#">Eggs & More</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Classic Breakfast</a></li>
                  <li><a className="dropdown-item" href="#">Huevos Rancheros</a></li>
                  <li><a className="dropdown-item" href="#">Egg Sandwich</a></li>
                  <li><a className="dropdown-item" href="#">Vegan Burrito</a></li>
                </ul>
              </li>
              <li><a className="dropdown-item" href="#">Griddle</a></li>
              <li className="dropdown-submenu dropend">
                <a className="dropdown-item dropdown-toggle" href="#">Sides & Extras</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Oatmeal</a></li>
                  <li><a className="dropdown-item" href="#">Crab Cake Benedict</a></li>
                </ul>
              </li>
              <li><a className="dropdown-item" href="#">Seasonal Fruit Plate</a></li>
            </ul>
          </li>

          <li className="nav-item">
            <a href="contact.html" className="nav-link text-dark fw-medium">Contact</a>
          </li>
        </ul>
      </nav>
    </div>

    {/* Login/Register */}
    <div className="col-lg-3 col-md-2 col-6 text-end">
      <a href="login.html" className="btn btn-outline-dark">
        <i className="bi bi-person"></i> Login / Register
      </a>
    </div>
    
  </div>
</div>

            </div>
        </header>
   </>
  )
}

export default Nav