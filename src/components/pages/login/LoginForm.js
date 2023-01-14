import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import { theme } from '../../../theme'
import { IoChevronForward } from 'react-icons/io5'
import { BsPersonCircle } from 'react-icons/bs'
import TextInput from '../../reusable-ui/TextInput'
import PrimaryButton from '../../reusable-ui/PrimaryButton'

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

      <TextInput 
      value={username} 
      onChange={handleChange} 
      placeholder={'Entrez votre prénom'}
      type={'text'}
      required
      Icon={<BsPersonCircle className='icon'/>}
      />
      
      <PrimaryButton 
      label={"Accéder à mon espace"}
      Icon={<IoChevronForward className='icon'/>}
      />

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
  padding: 40px ${theme.spacing.lg};
  font-family: 'Amatic SC', cursive;
  
  h1{
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
    font-weight: ${theme.fonts.weights.bold};
    padding: 30px 50px;
  }

  h2{
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.regular};
    margin: 20px 10px 10px;
  }

  hr{
    border: 1.5px solid ${theme.colors.loginline};
    margin-bottom: ${theme.gridUnit * 5}px;
  }
  
  .icon{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${theme.fonts.size.P0};
      margin-left: 10px;
    }
`