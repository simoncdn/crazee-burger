import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme/index";
import CardDescriptionPart from "./CardDescriptionPart";

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

      <CardDescriptionPart price={price} title={title} />
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
  justify-content: space-between;
  padding: 50px 20px 20px 20px;
  position: relative;
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
`;
