import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../theme/index";
import PrimaryButton from "./PrimaryButton";

export default function Card({ title, image, leftDescription }) {
  // const [toggle, setToggle] = useState(false);

  // const addToBasket = (event) => {
  //   event.preventDefault();
  //   console.log("Clicked");
  //   setToggle(!toggle);
  //   setTimeout(() => {
  //     setToggle(toggle);
  //   }, 200);
  // };
  return (
    <CardStyled>
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="text-info">
        <div className="title">{title}</div>
        <div className="description">
          <div className="left-description">{leftDescription}</div>
          <div className="right-description">
            <PrimaryButton className={"primary-button"} label={"Ajouter"} />
          </div>
        </div>
      </div>
    </CardStyled>
  );
}
const CardStyled = styled.div`
  width: 200px;
  height: 300px;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};
  background-color: ${theme.colors.white};

  .image {
    width: 100%;
    height: auto;
    margin-top: 30px;
    margin-bottom: 20px;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .text-info {
    display: grid;
    grid-template-rows: 30% 70%;
    padding: 5px;

    .title {
      width: 100%;
      text-align: left;
      margin: auto 0;
      position: relative;
      bottom: 10px;
      font-family: "Amatic SC", cursive;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: ${theme.fonts.size.P4};
      font-weight: ${theme.fonts.weights.bold};
      color: ${theme.colors.dark};
    }

    .description {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .left-description {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: ${theme.fonts.weights.medium};
        font-weight: ${theme.fonts.weights.medium};
        color: ${theme.colors.primary};
      }
      .right-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.size.P1};

        .primary-button {
          font-size: ${theme.fonts.size.XS};
          cursor: pointer;
          padding: 12px;
        }
        /* .unclicked {
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
        .clicked {
          width: 95px;
          height: 36px;
          background-color: #ff9f1b;
          color: white;
          border-radius: 5px;
          border: 1px solid #ff9f1b;
          transition: 400ms ease;
          cursor: pointer;
          :hover {
            background-color: #ff9f1b;
            color: white;
            transition: 400ms ease;
          }
        } */
      }
    }
  }
`;
