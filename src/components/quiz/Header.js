import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
background: linear-gradient(to right, #708AD4 0%,#48c6ef 100%);
`

const Logo = styled.h1`
  font-family: 'Luckiest Guy';
  color: white;
  font-size: 2rem;
  text-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  text-align: center;
  padding-top: 0.5rem;
`

const Header = () => (
  <HeaderContainer>
    <Logo>
      IPA Combo
    </Logo>
  </HeaderContainer>
)

export default Header
