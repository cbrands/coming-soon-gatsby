import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import ArtDirectedBackground from "../components/artDirectedBackground"
import EmailForm from "../components/EmailForm"


const IndexPage = () => (
  <Layout>
    <h1 className="title">We're <span className="bold">coming soon</span></h1>
    <p className="text">
    Hello fellow shoppers! We're currently building our new fashion store. 
Add your email below to stay up-to-date with announcements and our launch deals.
    </p>
    <EmailForm/>


Email Address

    <ArtDirectedBackground />
  </Layout>
)

export default IndexPage
