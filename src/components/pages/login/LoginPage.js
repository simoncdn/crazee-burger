import React from 'react'
import LoginForm from './LoginForm'
import styled from 'styled-components'
import Logo from '../../reusable-ui/Logo'

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo 
      className={"logo-login-page"}
      />
      <LoginForm />
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  ::before{
    content: "";
    background-image: url("./images/burger-background.jpg");
    background-size: cover;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.7);
    background-blend-mode: darken;
    
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
  .logo-login-page{
    transform: scale(2.5);
  }
`
