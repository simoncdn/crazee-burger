import React from "react";
import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";

export default function EmptyEdit() {
  return (
    <EmptyEditStyled>
      <span>Cliquer sur un produit pour le modifier</span>
      <HiCursorClick className="icon" />
    </EmptyEditStyled>
  );
}

const EmptyEditStyled = styled.div`
  display: flex;
  gap: 11px;
  align-items: center;
  margin-top: 50px;
  span {
    text-transform: uppercase;
    font-family: "Amatic SC";
    font-size: 24px;
    color: #747b91;
  }
  .icon {
    width: 20px;
    height: 20px;
    color: #747b91;
  }
`;
