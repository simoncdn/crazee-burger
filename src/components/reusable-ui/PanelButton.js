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
  height: 43px;
  border-radius: 5px 5px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1px;
  padding: 18px 24px;
  cursor: pointer;
  font-size: ${theme.fonts.size.P1};
  z-index: 10;
  gap: 12px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.background_dark};
  border: 1px solid ${theme.colors.background_dark};
  border-bottom: 2px solid ${theme.colors.background_dark};
  font-weight: ${theme.fonts.weights.regular};
  transform: translateY(-1px);
  :hover {
    text-decoration: underline;
  }
  &.unactivated {
    border-bottom: 2px solid ${theme.colors.greyLight};
    background-color: ${theme.colors.white};
    font-weight: ${theme.fonts.weights.regular};
    color: ${theme.colors.greyMedium};
    border: 1px solid ${theme.colors.greyLight};
    :hover {
      border-bottom: 1px solid ${theme.colors.white};
    }
  }
`;
