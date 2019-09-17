import React from "react";
import { Link } from "gatsby";
import headerStyles from "./header.module.scss";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}

const Header = () => {
  const data = useStaticQuery(graphql`
    query Images {
      imageLogo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <header className={headerStyles.header}>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/#home"
            >
              <Img
                fixed={data.imageLogo.childImageSharp.fixed}
                className={headerStyles.logoItem}
              />
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/#home"
            >
              MISSION
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/#clients"
            >
              CLIENTS
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/#products"
            >
              PRODUCTS
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/#contact"
            >
              CONTACT
            </Link>
          </li>
        </ul>
        <div className={headerStyles.graphFont}>WITAMY</div>
        <div className={headerStyles.graphFontCompany}>INFINITY-GROUP</div>
      </nav>
      <div className={headerStyles.myBtn} id="myBtn">
        <Link to="/#top">
          <div className={headerStyles.arrowTop}>></div>
        </Link>
        <div className={headerStyles.line}></div>
        <Link to="/#contact">
          <div className={headerStyles.arrowDown}>></div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
