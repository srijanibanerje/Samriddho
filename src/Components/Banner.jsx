import React from 'react'
import banner from "../assets/images/banner.jpg"
const Banner = () => {
  return (
  <>
   <div id="carousel" className="carousel slide hero-slides">
      <div className="carousel-inner" role="listbox">
        {/* Single Image Slide */}
        <div className="carousel-item active">
          <img 
            src={banner} 
            className="d-block w-100" 
            alt="Responsive Slide" 
          />
          <div className="carousel-caption d-none d-md-block">
            {/* <h5>Most spices</h5> */}
            {/* <p>Your description here.</p> */}
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Banner