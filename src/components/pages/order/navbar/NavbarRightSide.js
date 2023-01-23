import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../theme';
import Profile from './Profile';

export default function NavbarRightSide() {

  return (

    <NavbarRightSideStyled className="nav-side-right">
        {/* <div className="admin-button">Admin button</div> */}

        <Profile />
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