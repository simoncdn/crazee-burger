import React from 'react'
import styled from 'styled-components'
import Logo from '../../reusable-ui/Logo'

export default function NavbarLeftSide() {
    const handleClick = () => {
        window.location.reload(false)
    }

  return (
    <NavbarLeftSideStyled className="nav-side-left">
        <Logo 
        handleClick={handleClick}
        className={"logo-order-page"}
        />
    </NavbarLeftSideStyled>
  )
}

const NavbarLeftSideStyled = styled.div`
    display: flex;
    align-items: center;
    .logo-order-page{
        cursor: pointer;
    }
`
