import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function TextInput({
  className,
  value,
  onChange,
  Icon,
  variant = "normal",
  ...restProps
}) {
  return (
    <TextInputStyled className={className} variant={variant}>
      {Icon && Icon}
      <input value={value} onChange={onChange} {...restProps} type="text" />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  ${({ variant }) => inputStyle[variant]}
`;

const normalStyle = css`
  display: flex;
  align-items: center;
  width: 100%;
  height: 55px;
  border-radius: ${theme.borderRadius.round};
  padding: 18px 24px;
  margin: 18px 0;
  background-color: ${theme.colors.white};
  .icon {
    color: ${theme.colors.greySemiDark};
    font-size: ${theme.fonts.size.P0};
    margin-right: 8px;
  }
  input {
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.dark};
    border: none;
    width: 100%;
    &::placeholder {
      color: ${theme.colors.greyLight};
      background-color: ${theme.colors.white};
    }
  }
`;

const minimalistStyle = css`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: ${theme.borderRadius.round};
  background-color: ${theme.colors.background_white};
  padding: 0px 24px;
  margin: 0;
  height: 35px;

  .icon {
    color: ${theme.colors.greySemiDark};
    font-size: ${theme.fonts.size.P0};
    margin-right: 15px;
  }
  input {
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.dark};
    border: none;
    width: 100%;
    background-color: ${theme.colors.background_white};
    &::placeholder {
      color: ${theme.colors.greySemiDark};
      background-color: ${theme.colors.background_white};
    }
  }
`;

const inputStyle = {
  normal: normalStyle,
  minimalist: minimalistStyle,
};
