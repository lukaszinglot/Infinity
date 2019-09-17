import React from "react"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.copyrights}>
        <p> ©Copyrights 2018 IG</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </p>
      </div>
    </footer>
  )
}
export default Footer
