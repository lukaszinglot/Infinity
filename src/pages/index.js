import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

import IndexStyles from "./index.module.scss"
import "./index.scss"

const IndexPage = () => {
  const dataphoto = useStaticQuery(graphql`
    query MyQueries {
      allFile(
        filter: {
          extension: { regex: "/(png)/" }
          relativeDirectory: { eq: "products" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
              parent {
                ... on File {
                  id
                  name
                  nlink
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout id="top">
      <div id="home" className={IndexStyles.homeSection}>
        <div className={IndexStyles.pageSlider}></div>
        <div className={IndexStyles.quoteSection}>
          <h1 className={IndexStyles.h1Mission}>Mission</h1>
          <p className={IndexStyles.pMission}>
            <i className={IndexStyles.pElement}>,,</i>Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div className={IndexStyles.pageSlider}>
          <div className={IndexStyles.pageSliderElement}>1/5</div>
        </div>
      </div>
      <br />
      <div id="clients" className={IndexStyles.clientsSection}>
        <div className={IndexStyles.pageSlider}></div>
        <div className={IndexStyles.ipad}></div>
        <div className={IndexStyles.quoteClients}>
          <h1 className={IndexStyles.h1Clients}>Clients</h1>
          <p className={IndexStyles.pClients}>
            <i className={IndexStyles.pElement}>,,</i>Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
          <p className={IndexStyles.pCompany}>
            Project Manager/
            <i className={IndexStyles.pCompany}>Infinity-group.pl</i>
          </p>
          <div className={IndexStyles.divServices}>
            <p className={IndexStyles.pServices}>web design</p>
            <p className={IndexStyles.pServices}>usability</p>
            <p className={IndexStyles.pServices}>e-commerce</p>
          </div>
          <div className={IndexStyles.divDots}>
            <p className={IndexStyles.pDotOne}>.</p>
            <p className={IndexStyles.pDotTwo}>.</p>
            <p className={IndexStyles.pDotThree}>.</p>
          </div>
        </div>
        <div className={IndexStyles.pageSlider}>
          <div className={IndexStyles.pageSliderElement}>2/5</div>
        </div>
      </div>
      <br />
      <div id="products" className={IndexStyles.productsSection}>
        <div className={IndexStyles.pageSlider}></div>
        <div className={IndexStyles.quoteProducts}>
          <h1 className={IndexStyles.h1Products}>Products</h1>
          <p className={IndexStyles.pProducts}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </p>
          <div className={IndexStyles.productsList}>
            {dataphoto.allFile.edges.map(photo => (
              <div className={IndexStyles.productElement} id="wrapper">
                <img
                  src={photo.node.childImageSharp.fixed.src}
                  width={`${photo.node.childImageSharp.fixed.width}px`}
                  height={`${photo.node.childImageSharp.fixed.height}px`}
                  className={photo.node.childImageSharp.parent.name}
                ></img>
                <p
                  id="show-text"
                  className={photo.node.childImageSharp.parent.name}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={IndexStyles.pageSlider}>
          <div className={IndexStyles.pageSliderElement}>3/5</div>
        </div>
      </div>
      <br />
      <div id="map" className={IndexStyles.mapSection}>
        <div className={IndexStyles.pageSlider}></div>
        <div className={IndexStyles.mapAdressSection}>
          <h1 className={IndexStyles.h1Map}>Infinity Group Sp z.o.o</h1>
          <p className={IndexStyles.pMap}>
            ul.Składowa 12, 15-399 Białystok, Polska.
          </p>
          <p className={IndexStyles.pMapLorem}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className={IndexStyles.pageSlider}>
          <div className={IndexStyles.pageSliderElement}>4/5</div>
        </div>
      </div>
      <br />
      <div id="contact" className={IndexStyles.contactSection}>
        <div className={IndexStyles.pageSlider}></div>
        <div className={IndexStyles.quoteContact}>
          <div className={IndexStyles.flexHSection}>
            <h1 className={IndexStyles.h1Contact}>Contact</h1>
            <button className={IndexStyles.buttonContact}>
              Let us know how to contact You
            </button>
          </div>
          <p className={IndexStyles.pContact}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudanitum, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatea vitae
          </p>
          <form className={IndexStyles.formContact}>
            <p className={IndexStyles.pFormContact}>Hello! I'm</p>
            <input
              className={IndexStyles.userInput}
              placeholder="Your Name"
              type="text"
              required
            />

            <p className={IndexStyles.pFormContact}>and I represent</p>
            <input
              className={IndexStyles.userInput}
              placeholder="Company name"
              type="text"
              required
            />

            <p className={IndexStyles.pFormContact}>Call me at</p>
            <input
              className={IndexStyles.userInput}
              placeholder="Your telephone number"
              type="text"
              required
            />

            <p className={IndexStyles.pFormContact}>or send an email to</p>
            <input
              className={IndexStyles.userInput}
              placeholder="Your email adress"
              type="email"
              required
            />

            <label className={IndexStyles.checkboxContact}>
              <input type="checkbox" required />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </label>
            <input
              type="submit"
              value="Submit"
              className={IndexStyles.applyForm}
            />
          </form>
        </div>
        <div className={IndexStyles.pageSlider}>
          <div className={IndexStyles.pageSliderElement}>5/5</div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
