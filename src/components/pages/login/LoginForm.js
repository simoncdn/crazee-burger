import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { ThemeConsumer } from "styled-components"
import { theme } from '../../../theme'
import { BsPersonCircle } from 'react-icons/bs'
import { IoChevronForward } from 'react-icons/io5'

export default function LoginForm() {
    const [username, setUsername] = useState("")
    const navigate = useNavigate();
    
    const handleChange = (event) => {
      setUsername(event.target.value)
    }
    
    const handleSubmit = (event) => {
      event.preventDefault();
      navigate(`order/${username}`)
      setUsername("")
    }

  return (
    <LoginFormStyled action='submit'
      onSubmit={handleSubmit}>
    
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>

      <div className="input-with-icon">

        <BsPersonCircle className='icon'/>

        <input type="text" 
          placeholder='Entrez votre prénom'
          value={username}
          onChange={handleChange}
          required
        />
      </div>
      
      <button className='button-with-icon'>
        <span>Accéder à mon espace </span>
        <IoChevronForward className='icon'/>
      </button>

    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form `
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  font-family: 'Amatic SC', cursive;
  
  h1{
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P5};
    font-weight: ${theme.weights.bold};
    padding: 30px 50px;
  }

  h2{
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P4};
    font-weight: ${theme.weights.regular};
    margin: 20px 10px 10px;
  }

  hr{
    border: 1.5px solid #f56a2c;
    margin-bottom: 30px;
  }

  .input-with-icon{
    display: flex;
    align-items: center;
    width: 100%;
    height: 55px;
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
    padding: 18px 24px;
    margin: 18px 0;

    .icon{
      color: ${theme.colors.greySemiDark};
      font-size: ${theme.fonts};
      margin-right: 8px;
    }

    input{
      font-size: ${theme.fonts.P0};
      color: ${theme.colors.dark};
      border: none;
      width: 100%;

      ::placeholder{
        background: ${theme.colors.white};
        color: ${theme.colors.greyLight};
      }
    }
  }

  .button-with-icon{
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;
    
    padding: 18px 24px;
    border-radius: ${theme.borderRadius.round};
    font-size: ${theme.fonts.P0};
    font-weight: ${theme.weights.heavy};
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary_burger};
    border: 1px solid ${theme.colors.primary_burger};
    cursor: pointer;
    
    &:hover:not(:disabled){
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary_burger};
      border: 1px solid ${theme.colors.primary_burger};
      transition: all 200ms ease-out;
    }

    &:active{
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary_burger};
      border: 1px solid ${theme.colors.primary_burger};
    }

    &:disabled{
      opacity: 0.6;
      cursor: not-allowed;
    }

    .icon{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${theme.fonts.P0};
      margin-left: 10px;
    }
  }

`