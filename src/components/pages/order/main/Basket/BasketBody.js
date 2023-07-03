import React, { useContext } from "react";
import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import GlobalContext from "../../../../../context/GlobalContext";
import EmptyBasket from "./EmptyBasket";
import BasketCard from "./BasketCard";
import { getImageSource } from "../../../../../utils/getImageSource";
import { find } from "../../../../../utils/array";
import { theme } from "../../../../../theme";

export default function BasketBody() {
  const {
    basketMenu,
    menu,
    handleDeleteBasketProduct,
    isAdminMode,
    productSelected,
    handleProductSelected,
  } = useContext(GlobalContext);

  if (basketMenu.length === 0) return <EmptyBasket />;

  const handleDelete = (event, id) => {
    event.stopPropagation();
    handleDeleteBasketProduct(id);
  };

  return (
    <BasketBodyStyled>
      {basketMenu.map((basketProduct) => {
        const menuProduct = find(basketProduct.id, menu);
        return (
          <BasketCard
            key={basketProduct.id}
            title={menuProduct.title}
            image={getImageSource(menuProduct.imageSource)}
            price={formatPrice(menuProduct.price)}
            quantity={basketProduct.quantity}
            onDelete={(event) => handleDelete(event, basketProduct.id)}
            onClick={
              isAdminMode ? () => handleProductSelected(basketProduct.id) : null
            }
            isSelected={
              isAdminMode && productSelected?.id === basketProduct.id && true
            }
          />
        );
      })}
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  font-family: ${theme.fonts.family.stylish};
  font-size: ${theme.fonts.size.P4};
  color: ${theme.colors.greyBlue};
  background: transparent;

  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(9, 86px);
  grid-row-gap: 20px;
  padding: 20px 16px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
