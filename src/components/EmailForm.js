import React, { useState } from "react"
import styled, { jsx, css } from "@emotion/styled"
import IconArrow from "../images/icon-arrow.svg"
import IconError from "../images/icon-error.svg"

function EmailForm() {
  const [valid, setValid] = useState(true)
  const [email, setEmail] = useState("")
  // const logo = "https://duckduckgo.com/assets/logo_header.v108.svg"

  // const IconError = "../images/icon-error.svg"
  const error = IconError

  const isValid = function() {
    const email = document.getElementById("email")
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    if (re.test(email.value)) {
      return true
    } else {
      return false
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const email = document.getElementById("email")
    setEmail(email)
    setValid(isValid)
  }

  const Warning = styled.p({
    color: "var(--soft-red)",
    display: valid ? "none" : "block",
    fontSize: "0.8rem",
    marginLeft: "-8.4rem",
    marginTop: 10,
    "@media(min-width: 800px)": {
      marginLeft: "1.8rem",
    },
  })

  const Input = styled.input({
    display: "inline-block",
    padding: "1.2rem 8rem 1.2rem 1.6rem",
    border: "1px solid hsl(0, 36%, 70%)",
    background: "transparent",
    borderRadius: 25,
    verticalAlign: "top",
    fontSize: "1rem",
    "::placeholder": {
      color: "hsl(0, 36%, 70%)",
      opacity: 0.8,
    },
    ":focus": {
      outline: 0,
    },
    backgroundImage: `url(${error})`,
    // backgroundImage: `url(${logo})`,
    backgroundPosition: "80% 50%",
    backgroundRepeat: "no-repeat",
    "@media(min-width: 800px)": {
      marginLeft: 0,
      marginRight: 0,
      width: "90%",
    },
  })

  const Form = styled.form({
    gridArea: "form",
    margin: "0 auto 4rem auto",
    display: "inline-block",
    "@media(min-width: 800px)": {
      marginRight: "auto",
      marginLeft: "auto",
      width: "70%",
      textAlign: "left",
    },
  })

  const Button = styled.button({
    border: "none",
    borderRadius: 35,
    display: "inline-block",
    cursor: "pointer",
    marginLeft: -45,
    verticalAlign: "middle",
    padding: "18px 30px 18px 30px",
    backgroundImage: "var(--gradient-2)",
    boxShadow: "0 10px 12px var(--desaturated-red)",
    ":focus": {
      outline: 0,
    },
    ":hover": {
      backgroundImage: "none",
      backgroundColor: "#FAD6D6",
    },
  })

  return (
    <Form className="email-form" onSubmit={handleSubmit}>
      <Input
        id="email"
        type="text"
        name="email"
        placeholder="Email Address"
        aria-label="Email input"
      />
      <Button className="submit" type="submit" aria-label="Submit button">
        <IconArrow />
      </Button>
      {/* <IconError /> */}
      <Warning id="warning">Please provide a valid email</Warning>
    </Form>
  )
}

export default EmailForm
