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
  })

  const H1 = styled.h1({
    fontWeight: 600,
    fontSize: "4rem",
    textTransform: "uppercase",
    letterSpacing: 20,
    marginTop: 90,
  })

  const Span = styled.span({
    fontWeight: 300,
    color: "var(--desaturated-red)",
  })

  return (
    <>
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
    </>
  )
}

export default Text
