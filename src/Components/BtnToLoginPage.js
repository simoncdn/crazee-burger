import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BtnToLoginPage({content}) {

    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/')
    }

  return (
    <div>
        <button onClick={handleClick}>{content}</button>
    </div>
  )
}
