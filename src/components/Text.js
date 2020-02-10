import React from "react"
import styled from "@emotion/styled"

const Text = () => {
  const P = styled.p({
    color: "var(--desaturated-red)",
    fontWeight: 400,
    marginRight: 50,
    marginLeft: 50,
    marginTop: 30,
    marginBottom: 50,
    lineHeight: 1.6,
    "@media(min-width: 800px)": {
      marginRight: "auto",
      marginLeft: "auto",
      width: "70%",
      textAlign: "left",
    },
  })

  const H1 = styled.h1({
    fontWeight: 600,
    fontSize: "4rem",
    textTransform: "uppercase",
    letterSpacing: 20,
    marginTop: 90,
    "@media(min-width: 800px)": {
      marginRight: "auto",
      marginLeft: "auto",
      width: "70%",
      textAlign: "left",
    },
  })

  const Span = styled.span({
    fontWeight: 300,
    color: "var(--desaturated-red)",
  })

  const Div = styled.div({
    gridArea: "text",
    display: "inline-block",
  })

  return (
    <Div>
      <H1 className="title">
        <Span>We're</Span>
        <br />
        coming
        <br />
        soon
      </H1>
      <P>
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </P>
    </Div>
  )
}

export default Text
