import styled from "styled-components";
import { theme } from "../../../../../../../theme";
import { FiCheck } from "react-icons/fi";
import PrimaryButton from "../../../../../../reusable-ui/PrimaryButton";

export default function SubmitButton({ isSuccess }) {
  return (
    <SubmitButtonStyled>
      <PrimaryButton
        label={"Ajouter un nouveau produit au menu"}
        classname="submit-btn"
      />

      {isSuccess && (
        <div className="success-msg">
          <FiCheck className="success-icon" />
          <p className="success-txt">Ajouté avec succès !</p>
        </div>
      )}
    </SubmitButtonStyled>
  );
}

const SubmitButtonStyled = styled.div`
  grid-area: 4 / 2 / 5 / 3;
  height: 35px;
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 18px;
  .submit-btn {
    padding: 0px 24px;
    font-size: ${theme.fonts.size.XS};
    font-weight: ${theme.fonts.weights.bold};
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
  .success-msg {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: ${theme.spacing.xs};
    .success-icon {
      color: ${theme.colors.success};
      border: 1px solid ${theme.colors.success};
      border-radius: ${theme.borderRadius.extraRound};
    }
    .success-txt {
      color: ${theme.colors.success};
      font-size: ${theme.fonts.size.P0};
    }
  }
`;
