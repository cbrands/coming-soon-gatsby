import React from "react"
import emotionReset from "emotion-reset"
import { Global, css } from "@emotion/core"
import Layout from "../components/layout"
import EmailForm from "../components/EmailForm"
import Text from "../components/Text"
import Header from "../components/header"
import styled from "@emotion/styled"
import { Helmet } from "react-helmet"
import HeroMobile from "../images/hero-mobile.jpg"
import HeroDesktop from "../images/hero-desktop.jpg"

const IndexPage = () => {
  function debounce(fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    }
  }

  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })

  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }, 1000)

    window.addEventListener("resize", debouncedHandleResize)

    return _ => {
      window.removeEventListener("resize", debouncedHandleResize)
    }
  })

  const Div = styled.div({
    display: "grid",
    gridTemplateAreas: "'header' 'picture' 'text' 'form' ",
    "@media(min-width: 800px)": {
      gridTemplateAreas: "'header picture' 'text picture' 'form picture'",
      gridTemplateColumns: "3fr 2fr",
      gridColumnGap: 20,
    },
  })

  const Div2 = styled.div({
    gridArea: "picture",
    height: 370,
    "@media(min-width: 800px)": {
      height: "100vh",
    },
    margin: 0,
    padding: 0,
  })

  const Div3 = styled.div({
    textAlign: "center",
  })

  const Img = styled.img({
    height: 350,
    "@media(min-width: 800px)": {
      height: "100%",
    },
  })

  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            --desaturated-red: hsl(0, 36%, 70%);
            --soft-red: hsl(0, 93%, 68%);
            --dark-grayish-red: hsl(0, 6%, 24%);
            --gradient-1: linear-gradient(
              135deg,
              hsl(0, 0%, 100%),
              hsl(0, 100%, 98%)
            );
            --gradient-2: linear-gradient(
              135deg,
              hsl(0, 80%, 86%),
              hsl(0, 74%, 74%)
            );
          }
          body {
            font-family: "Josefin Sans", sans-serif;
            font-weight: 300;
            font-size: 20px;
            text-align: center;
            background-image: var(--gradient-1);
          }
        `}
      />
      <Helmet>
        <meta charSet="utf-8" />
        <title>coming soon gatsby</title>
        <meta name="description" content="gatsby test site" />
        <meta name="keywords" content="gatsby, react, emotion css" />
      </Helmet>
      <Layout>
        <Div>
          <Header />
          <Div2>
            {dimensions.width < 800 ? (
              <Img src={HeroMobile} alt="hero image" />
            ) : (
              <Img src={HeroDesktop} alt="hero image" />
            )}
          </Div2>
          <Text />
          <Div3>
            <EmailForm />
          </Div3>
        </Div>
      </Layout>
    </>
  )
}

export default IndexPage
