import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import { theme } from '../../../theme'

export default function OrderPage() {
  return (
    <OrderPageStyle>
      <div className="orderPage-container">
        <Navbar />
        <main></main>
      </div>
    </OrderPageStyle>
  )
}

const OrderPageStyle = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  .orderPage-container{
    background-color: white;
    width: 1400px;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    border-radius: 0px 0px 15px 15px;
    overflow: hidden;
    main{
      background-color: #F5F5F7;
      width: 100%;
      height: 90%;
      flex-shrink: 1;
      box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    }
  }
`