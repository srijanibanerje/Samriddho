import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
const Mainlayout = ({children}) => {
  return (
    <>
    <Header/>
    <main>{children}</main>
    <Footer/>
    </>
  )
}

export default Mainlayout