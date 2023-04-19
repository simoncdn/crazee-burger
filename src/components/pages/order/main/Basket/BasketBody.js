import React, { useContext } from "react";
import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import GlobalContext from "../../../../../context/GlobalContext";
import EmptyBasket from "./EmptyBasket";
import BasketCard from "./BasketCard";
import { focusOnRef } from "../../../../../utils/focusOnRef";

export default function BasketBody() {
  const {
    basketMenu,
    deleteProductInBasket,
    setProductSelected,
    setCurrentTabSelected,
    setIsCollapsed,
    isAdminMode,
    menu,
    titleEditRef,
    productSelected,
  } = useContext(GlobalContext);
  const IMAGE_DEFAULT = "/images/coming-soon.png";

  if (basketMenu.length === 0) return <EmptyBasket />;

  const handleProductSelected = async (idProductSelected) => {
    if (!isAdminMode) return;

    const productSelected = menu.find(
      (product) => product.id === idProductSelected
    );
    await setProductSelected(productSelected);
    await setCurrentTabSelected("edit");
    await setIsCollapsed(false);

    focusOnRef(titleEditRef);
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
          onDelete={() => deleteProductInBasket(id)}
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
  grid-template-rows: repeat(8, 86px);
  grid-row-gap: 20px;
  padding: 20px 16px;
`;
