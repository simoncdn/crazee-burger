import React, { useContext } from "react";
import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import GlobalContext from "../../../../../context/GlobalContext";
import EmptyBasket from "./EmptyBasket";
import BasketCard from "./BasketCard";

export default function BasketBody() {
  const { basketMenu, deleteProductInBasket } = useContext(GlobalContext);
  const IMAGE_DEFAULT = "/images/coming-soon.png";

  if (basketMenu.length === 0) return <EmptyBasket />;

  return (
    <BasketBodyStyled>
      {basketMenu.map(({ id, title, imageSource, price, quantity }) => (
        <BasketCard
          key={id}
          title={title}
          image={imageSource ? imageSource : IMAGE_DEFAULT}
          price={formatPrice(price)}
          quantity={quantity}
          onDelete={() => deleteProductInBasket(id)}
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
  grid-template-rows: repeat(8, 86px);
  grid-row-gap: 20px;
  padding: 20px 16px;
`;
