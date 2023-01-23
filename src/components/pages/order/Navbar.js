import React from 'react'
import Logo from '../../reusable-ui/Logo'
import styled from 'styled-components'
import { useParams , Link} from 'react-router-dom'
import {theme} from '../../../theme/index'
import { BsPersonCircle } from 'react-icons/bs'

export default function Navbar() {
    const {username} = useParams();
    const handleClick = () => {
        window.location.reload(false)
    }
  return (
    <NavbarStyled>

        <div className="nav-side-left">
            <Logo 
            scale={1}
            handleClick={handleClick}
            cursorPointer={"pointer"}
            />
        </div>

        <div className="nav-side-right">

            <div className="nav-side-right-user">
                <h1>Hey, <span>{username}</span></h1>

                <Link to={"/"}>
                <button >Se déconnecter</button>
                </Link>
            </div>

            <BsPersonCircle className='icon'/>

        </div>
    </NavbarStyled> 
  )
}

const NavbarStyled = styled.nav`
    background-color: ${theme.colors.white};
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 10%;
    padding: 0px 70px 0px 20px;

    .nav-side-left{
        display: flex;
        align-items: center;
    }
    .nav-side-right{
        display: flex;
        align-items: center;
        .nav-side-right-user{
            text-align: right;
            h1{
                color: ${theme.colors.greyMedium};
                font-size: ${theme.fonts.size.P2};
            }
            span{
                color: ${theme.colors.primary};
            }
            button{
                border: none;
                background-color: ${theme.colors.white};
                font-size: ${theme.fonts.size.P0};
                color: ${theme.colors.greyMedium};
                cursor: pointer;
            }
        }
        .icon{
            font-size: ${theme.fonts.size.P4};
            color: ${theme.colors.greyDark};
            margin-left: ${theme.spacing.sm};
        }
    }
`
