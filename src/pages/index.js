import React from "react"
import emotionReset from "emotion-reset"
import { Global, css } from "@emotion/core"
import Layout from "../components/layout"
import ArtDirectedBackground from "../components/artDirectedBackground"
import EmailForm from "../components/EmailForm"
import Text from "../components/Text"
import Header from "../components/header"
import styled from "@emotion/styled"

const IndexPage = () => {
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
    minWidth: "50 vw",
    height: "100 vh",
  })
  const Div3 = styled.div({
    textAlign: "center",
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
      <Layout>
        <Div>
          <Header />
          <Div2>
            <ArtDirectedBackground />
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
