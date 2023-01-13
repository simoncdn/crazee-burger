import React from 'react'
import { useParams } from 'react-router-dom'

export default function OrderPage() {
    const {username} = useParams()
    console.log(username);
  return (
    <div>
        <h1>{`Bonjour ${username}`}</h1>
        <br />
        <button>Déconnexion</button>
    </div>
  )
}
