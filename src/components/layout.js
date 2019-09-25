import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  // const mybutton = document.getElementById("myBtn")

  // console.log(document.getElementById("myBtn"))

  window.onscroll = function() {
    scrollFunction()
  }
  function scrollFunction() {
    if (document.documentElement.scrollTop > 320) {
      document.getElementById("myBtn").style.display = "block"
    } else {
      document.getElementById("myBtn").style.display = "none"
    }
  }

  return (
    <div className={layoutStyles.container}>
      <div>
        <Header />
        {props.children}
      </div>

      <Footer />
    </div>
  )
}

export default Layout
