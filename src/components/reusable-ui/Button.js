import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function Button({
  label,
  Icon,
  classname,
  onClick,
  variant = "normal",
}) {
  return (
    <ButtonStyled className={classname} onClick={onClick} variant={variant}>
      <span>{label}</span>
      {Icon && <div className="icon">{Icon}</div>}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  ${({ variant }) => buttonStyle[variant]}
`;

const normalStyle = css`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;

  padding: 18px 24px;
  border-radius: ${theme.borderRadius.round};
  font-size: ${theme.fonts.size.P0};
  font-weight: ${theme.fonts.weights.heavy};
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary_burger};
  border: 1px solid ${theme.colors.primary_burger};
  cursor: pointer;

  :hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary_burger};
    border: 1px solid ${theme.colors.primary_burger};
    transition: all 200ms ease-out;
  }

  :active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary_burger};
    /* border: 1px solid ${theme.colors.primary_burger}; */
  }

  &.is-disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  &.with-focus {
    border: 1px solid white;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
    }
    :active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
  }
`;

const successStyle = css`
  cursor: pointer;
  color: ${theme.colors.white};
  background: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};
  border-radius: ${theme.borderRadius.round};
  height: 100%;
  padding: 0 1.5em;
  font-weight: ${theme.fonts.weights.semiBold};
  :hover {
    background: ${theme.colors.white};
    color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
  :active {
    color: ${theme.colors.white};
    background: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
`;

const buttonStyle = {
  normal: normalStyle,
  success: successStyle,
};
