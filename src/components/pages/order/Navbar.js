import React from 'react'
import Logo from '../../reusable-ui/Logo'
import styled from 'styled-components'
import { useParams , Link} from 'react-router-dom'

export default function Navbar() {
const {username} = useParams()
  return (
    <div>
        <Logo />

        <div className="nav-side-right">
            <h1>{`Hey, ${username}`}</h1>
            <Link to={"/"}>
            <button>Se déconnecter</button>
            </Link>
        </div>
    </div>
  )
}
