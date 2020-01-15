import React from "react"

import Layout from "../components/layout"
import ArtDirectedBackground from "../components/artDirectedBackground"
import EmailForm from "../components/EmailForm"
import Text from "../components/Text"
import Header from "../components/header";


const IndexPage = () => (
  <Layout>
    <Header/>
    <ArtDirectedBackground />
    <Text/>
    <EmailForm/>
  </Layout>
)

export default IndexPage
