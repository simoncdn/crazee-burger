import { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../../../context/GlobalContext";
import { formatPrice } from "../../../../../../utils/maths";
import Card from "../../../../../reusable-ui/Card";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { EMPTY_PRODUCT } from "../../../../../../enum/product";
import { focusOnRef } from "../../../../../../utils/focusOnRef";
import { find } from "../../../../../../utils/find";
import { getImageSource } from "../../../../../../utils/getImageSource";

export default function Menu() {
  const {
    isAdminMode,
    handleRemove,
    productSelected,
    addProductToBasket,

    handleProductSelected,
    setProductSelected,
    menu,
    titleEditRef,
    resetMenu,
    deleteBasketProduct,
  } = useContext(GlobalContext);

  if (menu.length === 0) {
    if (!isAdminMode) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={resetMenu} />;
  }

  const handleOnDelete = (event, id) => {
    event.stopPropagation();
    handleRemove(id);

    if (productSelected && productSelected.id === id) {
      setProductSelected(EMPTY_PRODUCT);
    }
    focusOnRef(titleEditRef);
    deleteBasketProduct(id);
  };

  const handleProductToBasket = (event, id) => {
    event.stopPropagation();
    const productToAdd = find(id, menu);
    addProductToBasket(productToAdd);
  };

  return (
    <MenuStyled>
      {menu.map(({ id, title, imageSource, price }) => (
        <Card
          key={id}
          title={title}
          image={getImageSource(imageSource)}
          leftDescription={formatPrice(price)}
          hasDeleteButton={isAdminMode}
          onDelete={(event) => handleOnDelete(event, id)}
          onClick={() => handleProductSelected(id)}
          onButtonClick={(event) => handleProductToBasket(event, id)}
          isHoverable={isAdminMode}
          isSelected={productSelected?.id === id && true}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
   box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  padding: 50px 50px 150px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 60px;
  justify-items: center;
  background-color: transparent;
  overflow-y: scroll;
  flex: 1;
`;
