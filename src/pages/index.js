import React from "react"
import emotionReset from 'emotion-reset';
import {Global, css} from '@emotion/core';
import Layout from "../components/layout"
import ArtDirectedBackground from "../components/artDirectedBackground"
import EmailForm from "../components/EmailForm"
import Text from "../components/Text"
import Header from "../components/header";


const IndexPage = () => {
  return (
    <>
        <Global styles={css`
          ${emotionReset}
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            --desaturated-red: hsl(0, 36%, 70%);
            --soft-red: hsl(0, 93%, 68%);
            --dark-grayish-red: hsl(0, 6%, 24%);
            --gradient-1: linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%));
            --gradient-2: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
          }
          body {
            font-family: 'Josefin Sans', sans-serif;
            font-weight: 300;
            font-size: 20px;
            text-align: center;
            background-image: var(--gradient-1);
          }
        `}
      />
      <Layout>
        <Header/>
        <ArtDirectedBackground/>
        <Text/>
        <EmailForm/>
      </Layout>
    </>
  )
}

export default IndexPage
