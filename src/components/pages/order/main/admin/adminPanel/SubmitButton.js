import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { FiCheck } from "react-icons/fi";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";

export default function SubmitButton({ isSuccess }) {
  return (
    <SubmitButtonStyled>
      <PrimaryButton
        label={"Ajouter un nouveau produit au menu"}
        classname="submit-btn"
      />
      {isSuccess && (
        <div className="validation">
          <FiCheck className="icon" />
          <p>Ajouté avec succès !</p>
        </div>
      )}
    </SubmitButtonStyled>
  );
}

const SubmitButtonStyled = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  height: 35px;
  display: flex;
  .submit-btn {
    padding: 0px 24px;
    height: 100%;
    width: 40%;
    font-size: ${theme.fonts.size.P0};
    font-weight: ${theme.fonts.weights.semiBold};
    background-color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
    :hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.success};
      border: 1px solid ${theme.colors.success};
    }
    :active {
      color: ${theme.colors.white};
      background-color: ${theme.colors.success};
    }
    &.with-focus {
      color: ${theme.colors.success};
      :hover {
        background-color: ${theme.colors.succes};
      }
      :active {
        color: ${theme.colors.success};
      }
    }
  }
  .validation {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-left: 20px;
    animation: success 2s infinite;
  }
`;
