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
    <InputStyled className={className} variant={variant}>
      {Icon && Icon}
      <input value={value} onChange={onChange} {...restProps} type="text" />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  ${({ variant }) => extraStyle[variant]}
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
  height: 55px;
  border-radius: ${theme.borderRadius.round};
  padding: 18px 24px;
  margin: 18px 0;
  background-color: ${theme.colors.background_white};
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
      color: ${theme.colors.greySemiDark};
      background-color: ${theme.colors.background_white};
    }
  }
`;

const extraStyle = {
  normal: normalStyle,
  minimalist: minimalistStyle,
};
