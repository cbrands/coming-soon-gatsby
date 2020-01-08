import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

const Image = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     mobileImage: file(relativePath: { eq: "../images/hero-mobile.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1000, quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     desktopImage: file(
  //       relativePath: { eq: "../images/hero.desktop.jpg" }
  //     ) {
  //       childImageSharp {
  //         fluid(maxWidth: 2000, quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  // return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
  return <h1>Hello</h1>
}

export default Image

// export const query = graphql`
//   query {
//     mobileImage: file(relativePath: { eq: "../images/hero-mobile.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000, quality: 100) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     desktopImage: file(
//       relativePath: { eq: "../images/hero.desktop.jpg" }
//     ) {
//       childImageSharp {
//         fluid(maxWidth: 2000, quality: 100) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `