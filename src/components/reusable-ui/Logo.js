import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'

export default function Logo() {
  return (
    <LogoStyled>
        <h1>CRAZEE</h1>
        <img src="/images/logo-orange.png" alt="logo"/>
        <h1>BURGER</h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div `
  display: flex;
  align-items: center;
  color: ${theme.colors.white};
  transform: scale(2.5);
  h1{
    display: flex;
    text-align: center;
    font-family: 'Amatic SC', cursive;
    line-height: 1em;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.bold};
  }

  img{
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
    margin: 0 5px;
  }

`
