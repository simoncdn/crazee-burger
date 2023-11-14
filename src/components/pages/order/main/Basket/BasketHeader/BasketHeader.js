import { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../../../context/GlobalContext";
import { theme } from "../../../../../../theme";
import { formatPrice } from "../../../../../../utils/maths";
import { calculateSumToPay } from "./helper";
import CasinoEffect from "../../../../../reusable-ui/CasinoEffect";

export default function BasketHeader() {
  const { basketMenu, menu } = useContext(GlobalContext);
  const sumToPay = calculateSumToPay(basketMenu, menu);

  return (
    <BasketHeaderStyled>
      <span className="total">Total</span>
      <CasinoEffect count={formatPrice(sumToPay)} />
    </BasketHeaderStyled>
  );
}

const BasketHeaderStyled = styled.div`
  display: flex;
  height: 70px;
  background-color: ${theme.colors.background_dark};
  justify-content: space-between;
  align-items: center;
  padding: 12px 18px;
  font-family: ${theme.fonts.family.stylish};
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 2px;
`;
