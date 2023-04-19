import { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../../../context/GlobalContext";
import { theme } from "../../../../../../theme";
import { formatPrice } from "../../../../../../utils/maths";
import Card from "../../../../../reusable-ui/Card";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { focusOnRef } from "../../../../../../utils/focusOnRef";

const IMAGE_DEFAULT = "/images/coming-soon.png";

export default function Menu() {
  const {
    menu,
    isAdminMode,
    handleRemove,
    resetMenu,
    setCurrentTabSelected,
    setIsCollapsed,
    setProductSelected,
    titleEditRef,
    productSelected,
    addProductToBasket,
  } = useContext(GlobalContext);

  if (menu.length === 0) {
    if (!isAdminMode) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={resetMenu} />;
  }

  const handleOnDelete = (event, id) => {
    event.stopPropagation();
    handleRemove(id);
  };

  const handleToBasket = (event, product) => {
    event.stopPropagation();
    addProductToBasket(product);
  };

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
    <MenuStyled>
      {menu.map(({ id, title, imageSource, price }) => (
        <Card
          key={id}
          title={title}
          image={imageSource ? imageSource : IMAGE_DEFAULT}
          leftDescription={formatPrice(price)}
          hasDeleteButton={isAdminMode}
          onDelete={(event) => handleOnDelete(event, id)}
          onClick={() => handleProductSelected(id)}
          onButtonClick={(event) => handleToBasket(event, id)}
          isHoverable={isAdminMode}
          isSelected={productSelected?.id === id && true}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  /* background-color: ${theme.colors.background_white}; */
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
