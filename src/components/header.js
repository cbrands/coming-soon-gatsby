import React from "react"
import Icon from "../images/logo.svg"
import styled from "@emotion/styled"

const Header = () => {
  const Header = styled.header({
    paddingBottom: 40,
    paddingTop: 20,
    paddingLeft: 50,
    textAlign: "left",
    gridArea: "header",
    display: "inline-block",
    "@media(min-width: 800px)": {
      marginRight: "auto",
      marginLeft: "auto",
      width: "70%",
      textAlign: "left",
      paddingLeft: 0,
    },
  })

  return (
    <Header>
      <Icon />
    </Header>
  )
}

export default Header
