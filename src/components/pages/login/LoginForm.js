import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"

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
      <br />
      <h2>Connectez-vous</h2>

      <input type="text" 
        placeholder='Entrez votre prénom'
        value={username}
        onChange={handleChange}
        required
      />

      <button>Accéder à mon espace </button>

    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form `
  z-index: 10;
  positon: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 400px;
  h1{
    color: white;
    font-family: 'Amatic SC';
    font-size: 44px;
    font-weight: 700;
    padding: 30px 50px;
    border-bottom: 3px solid orange;
  }

  h2{
    color: white;
    font-family: 'Amatic SC';
    font-size: 36px;
    font-weight: 400;
    margin: 15px;
  }

  input{
    border-radius: 5px;
    width: 100%;
    height: 55px;
    padding: 15px 55px;
    margin-bottom: 15px;
    font-family: 'Open Sans';
    ::placeholder{
      color: light-grey;
      font-family: 'Open Sans';
      opacity: 0.5;
    }
  }

  button{
    width: 100%;
    height: 55px;
    color: orange;
    border: 1px solid orange;
    border-radius: 5px;
    padding: 15px 55px;
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 14px;
  }

`