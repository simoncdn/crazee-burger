import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components';
import { theme } from '../../../theme';

export default function NavbarRightSide() {
    const {username} = useParams();

  return (

    <NavbarRightSideStyled className="nav-side-right">
        <div className="admin-button">Admin button</div>

        <div className="profile">
            <h1>Hey, <span>{username}</span></h1>

            <Link to={"/"}>
            <button >Se déconnecter</button>
            </Link>
        </div>

        <BsPersonCircle className='icon'/>
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    .admin-button{
        background-color: green;
        margin-right: 40px;
    }
    .profile{
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
        margin-right: 50px;
    }
`