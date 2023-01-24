import React from "react";
import styled from "styled-components";
import { formatPrice } from "../../../../utils/maths";

export default function CardDescriptionPart({ title, price }) {
  return (
    <CardDescriptionPartStyled>
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="description">
        <p>{formatPrice(price)}</p>
        <button>Ajouter</button>
      </div>
    </CardDescriptionPartStyled>
  );
}

const CardDescriptionPartStyled = styled.div`
  width: 100%;
  padding: 0px 5px;
  margin-bottom: 10px;
  .title {
    width: 100%;
    height: 50px;
    text-align: center;
    margin-bottom: 5px;
    h2 {
      font-family: "Amatic SC";
      font-size: 36px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .description {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      color: #ffa01b;
      font-size: 16px;
    }
    button {
      width: 95px;
      height: 36px;
      background-color: #ff9f1b;
      color: white;
      border-radius: 5px;
      border: 1px solid #ff9f1b;
      transition: 400ms ease;
      cursor: pointer;
      :hover {
        background-color: white;
        color: #ff9f1b;
        transition: 400ms ease;
      }
    }
  }
`;
