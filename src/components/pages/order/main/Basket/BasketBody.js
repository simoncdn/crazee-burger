import React, { useContext } from "react";
import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import GlobalContext from "../../../../../context/GlobalContext";
import EmptyBasket from "./EmptyBasket";
import BasketCard from "./BasketCard";
import { IMAGE_DEFAULT } from "../../../../../enum/imageDefault";

export default function BasketBody() {
  const {
    basketMenu,
    deleteBasketProduct,
    isAdminMode,
    productSelected,
    handleProductSelected,
  } = useContext(GlobalContext);

  if (basketMenu.length === 0) return <EmptyBasket />;

  const handleDelete = (event, id) => {
    event.stopPropagation();
    deleteBasketProduct(id);
  };

  return (
    <BasketBodyStyled>
      {basketMenu.map(({ id, title, imageSource, price, quantity }) => (
        <BasketCard
          key={id}
          title={title}
          image={imageSource ? imageSource : IMAGE_DEFAULT}
          price={formatPrice(price)}
          quantity={quantity}
          onDelete={(event) => handleDelete(event, id)}
          onClick={() => handleProductSelected(id)}
          isSelected={isAdminMode && productSelected?.id === id && true}
        />
      ))}
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  flex: 1;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(12, 86px);
  grid-row-gap: 20px;
  padding: 20px 16px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
