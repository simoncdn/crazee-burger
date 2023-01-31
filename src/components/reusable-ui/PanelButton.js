import styled from "styled-components";
import { theme } from "../../theme";

export default function PanelButton({ label, Icon, className, onClick }) {
  return (
    <PanelButtonStyled className={className} onClick={onClick}>
      {Icon && Icon}
      <span>{label}</span>
    </PanelButtonStyled>
  );
}

const PanelButtonStyled = styled.button`
  width: auto;
  height: 42px;
  border-radius: 5px 5px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1px;
  padding: 18px 24px;
  cursor: pointer;
  border: 1px solid ${theme.colors.greyLight};
  background-color: ${theme.colors.white};
  font-weight: ${theme.fonts.weights.regular};
  font-size: ${theme.fonts.size.P1};
  color: ${theme.colors.greyMedium};
  z-index: 2;
  :nth-child(2),
  :nth-child(3) {
    gap: 12px;
  }
  &.active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.background_dark};
    border: 1px solid ${theme.colors.background_dark};
    font-weight: ${theme.fonts.weights.regular};
  }
`;
