import React from 'react'
import { useState } from 'react'

export default function LoginForm() {
    const [username, setUsername] = useState("")

    const handleChange = (event) => {
      setUsername(event.target.value)
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Bonjour ${username}`);
      setUsername("")
    }
  return (
    <div className="LoginForm">
        <form action='submit'
          onSubmit={handleSubmit}>
        <h2>Bienvenue chez nous !</h2>
        <br />
        <h3>Connectez vous</h3>

        <label htmlFor="name"></label>
        <input type="text" 
          id="name" 
          placeholder='Entrez votre prenom'
          value={username}
          onChange={handleChange}
          required
        />

        <label htmlFor="btnConnexion"></label>
        <button id='btnConnexion'>Accedez a votre espace</button>
        </form>
    </div>
  )
}
