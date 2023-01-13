import React from 'react'
import { useParams } from 'react-router-dom'
import BtnToLoginPage from '../../BtnToLoginPage'

export default function OrderPage() {
    const {username} = useParams()

  return (
    <div>
        <h1>{`Bonjour ${username}`}</h1>
        <br />
        <BtnToLoginPage content="Déconnexion" />
    </div>
  )
}
