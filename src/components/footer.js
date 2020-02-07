import React from "react";
import styled  from "@emotion/styled"

const Footer = () => {

  const Attribution = styled.p(
    {
      fontSize: 11, 
      textAlign: 'center',
      marginBottom: 10 
    }
  )

  const Link = styled.a(
    {
      color: 'hsl(228, 45%, 44%)'
    }
  )


  return (
    <footer>
    <Attribution>
      Challenge by <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</Link>. 
      Coded by <Link href="https://github.com/cbrands/coming-soon-gatsby">Charles Brands</Link>.
    </Attribution>
  </footer>
  )
}

export default Footer
