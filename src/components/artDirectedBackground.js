import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

import BackgroundImage from "gatsby-background-image"

const ArtDirectedBackground = ({ className }) => {
  const { mobileImage, desktopImage } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "hero-mobile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktopImage: file(relativePath: { eq: "hero-desktop.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  // Set up the array of image data and `media` keys.
  // You can have as many entries as you'd like.
  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 601px)`,
    },
  ]

  return (
    <BackgroundImage
      Tag={`section`}
      id={`media-test`}
      className={className}
      fluid={sources}
    ></BackgroundImage>
  )
}

const StyledArtDirectedBackground = styled(ArtDirectedBackground)`
  width: 100%;
  height: 370px;
  max-height: 370px;
  @media (min-width: 800px) {
    width: 99%;
    height: 99%;
    max-height: 100vh;
  }

  /* You should set a background-size as the default value is "cover"! */
  background-size: cover;
  background-position: center;
  /* So we won't have the default "lightgray" background-color. */
  background-color: transparent;
  padding: 0;
  margin: 0;
`

export default StyledArtDirectedBackground
