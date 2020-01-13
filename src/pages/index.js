import React from "react"

import Layout from "../components/layout"
import ArtDirectedBackground from "../components/artDirectedBackground"
import EmailForm from "../components/EmailForm"
import Text from "../components/Text"
import Icon from "../images/logo.svg";


const IndexPage = () => (
  <Layout>
    <Icon/>
    <ArtDirectedBackground />
    <Text/>
    <EmailForm/>
  </Layout>
)

export default IndexPage
