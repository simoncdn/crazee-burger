import styled from "styled-components";
import { theme } from "../../../../../../../theme";
import { FiCheck } from "react-icons/fi";

export default function SubmitMessage() {
  return (
    <SubmitMessageStyled>
      <FiCheck className="success-icon" />
      <p className="success-txt">Ajouté avec succès !</p>
    </SubmitMessageStyled>
  );
}

const SubmitMessageStyled = styled.div`
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
`;
