import React from 'react'
import styled from 'styled-components'

export default function Logo() {
  return (
    <LogoStyled>
        <p>CRAZEE</p>
        <img src="./images/logo-orange.png" alt="logo"/>
        <p>BURGER</p>
    </LogoStyled>
  )
}

const LogoStyled = styled.div `
  width: auto;
  height: 150px;
  z-index: 10;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  img{
    width: 200px;
    margin: 0px 18px;
  }

  p{
    color: orange;
    font-family: 'Amatic SC';
    font-size: 94px;
    font-weight: 700;
  }
`
