import React from 'react'
import { useParams , Link} from 'react-router-dom'

export default function OrderPage() {
    const {username} = useParams()

  return (
    <div>
        <h1>{`Bonjour ${username}`}</h1>

        <Link to={"/"}>
          <button>Déconnexion</button>
        </Link>
    </div>
  )
}
