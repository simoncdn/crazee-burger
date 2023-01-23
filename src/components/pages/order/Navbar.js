import React from 'react'
import styled from 'styled-components'
import {theme} from '../../../theme/index'
import NavbarRightSide from './NavbarRightSide'
import NavbarLeftSide from './NavbarLeftSide'

export default function Navbar() {

  return (
    <NavbarStyled>
        <NavbarLeftSide />
        <NavbarRightSide />
    </NavbarStyled> 
  )
}

const NavbarStyled = styled.nav`
    background-color: ${theme.colors.white};
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 10%;
    padding: 0px 20px;

`
