import React from 'react'
import LoginForm from './LoginForm'
import styled from 'styled-components'
import Logo from '../../logo/Logo'

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo />
      <LoginForm />
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  ::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100vh;
    background-image: url("./images/burger-background.jpg");
    background-size: cover;
    filter: brightness(40%);
  }
`
