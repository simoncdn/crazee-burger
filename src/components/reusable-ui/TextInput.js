import styled from "styled-components";
import { theme } from "../../theme";
export default function TextInput({
  className,
  value,
  onChange,
  Icon,
  ...restProps
}) {
  return (
    <InputStyled className={className}>
      {Icon && Icon}

      <input value={value} onChange={onChange} {...restProps} type="text" />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 55px;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  padding: 18px 24px;
  margin: 18px 0;

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
      background: ${theme.colors.white};
      color: ${theme.colors.greyLight};
    }
  }
`;
