import React from 'react'
import Logo from '../../reusable-ui/Logo'
import styled from 'styled-components'
import { useParams , Link} from 'react-router-dom'
import {theme} from '../../../theme/index'
import { BsPersonCircle } from 'react-icons/bs'

export default function Navbar() {
    const {username} = useParams();

  return (
    <NavbarStyled>
        <div className="nav-side-left">
            <Logo />
        </div>

        <div className="nav-side-right">

            <div className="nav-side-right-user">
                <h1>{`Hey, ${username}`}</h1>

                <Link to={"/"}>
                <button >Se déconnecter</button>
                </Link>
            </div>

            <BsPersonCircle className='icon'/>

        </div>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.div`
    background-color: ${theme.colors.white};
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 150px;
    padding: 50px;
`
