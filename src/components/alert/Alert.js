import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Alert({ onClick }) {
  return (
    <AlertStyled>
      <div className="overlay"></div>
      <div className="modal-alert">
        <button onClick={onClick}>X</button>
        <p>Veuillez m'excuser cette application est encore en développement.</p>
      </div>
    </AlertStyled>
  );
}

const AlertStyled = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  .overlay {
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background: rgba(49, 49, 49, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.34);
  }
  .modal-alert {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    height: 10%;
    border-radius: 5px;
    padding: 20px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.greyLight};
    box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.6);
    button {
      position: absolute;
      right: 0;
      top: 0;
      margin: 5px;
      border: none;
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      padding: 5px;
      border-radius: 5px;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    p {
      font-size: 1.1rem;
    }
  }
`;
