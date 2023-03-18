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
    <PrimaryButtonStyled
      className={classname}
      onClick={onClick}
      variant={variant}
    >
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  ${({ variant }) => extraStyle[variant]}
`;

const buttonStyle = css`
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

const successButtonStyle = css`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;
  border-radius: ${theme.borderRadius.round};
  color: ${theme.colors.white};
  cursor: pointer;
  padding: 0px 24px;
  font-size: ${theme.fonts.size.XS};
  font-weight: ${theme.fonts.weights.bold};
  background-color: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};
  :hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
    transition: all 200ms ease-out;
  }
  :active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.success};
  }
  &.is-disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  &.with-focus {
    border: 1px solid white;
    background-color: ${theme.colors.white};
    color: ${theme.colors.success};
    :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.succes};
      border: 1px solid ${theme.colors.white};
    }
    :active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.success};
    }
  }
`;

const extraStyle = {
  normal: buttonStyle,
  success: successButtonStyle,
};
