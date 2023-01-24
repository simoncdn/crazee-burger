import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme/index";
import { formatPrice } from "../../../../utils/maths";

export default function Card({
  title,
  isAdvertised,
  isAvailable,
  image,
  price,
  quantity,
}) {
  return (
    <CardStyled>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="description">
        <p>{formatPrice(price)}</p>
        <button>Ajouter</button>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.background_white};
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .image {
    width: 200px;
    height: 145px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0px;
    img {
      height: 100%;
      width: auto;
    }
  }
  .title {
    width: 100%;
    height: 50px;
    text-align: center;
    padding: 0 25px;
    margin-bottom: 10px;
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
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0px 25px;
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
