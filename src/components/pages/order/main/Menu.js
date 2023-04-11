import { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../context/GlobalContext";
import { theme } from "../../../../theme";
import { formatPrice } from "../../../../utils/maths";
import Card from "../../../reusable-ui/Card";
import EmptyMenu from "./EmptyMenu";
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
    titleEditBoxRef,
    // handleSelectedProduct,
    productSelected,
  } = useContext(GlobalContext);

  if (menu.length === 0) {
    return <EmptyMenu resetMenu={resetMenu} />;
  }

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const handleOnDelete = (event, id) => {
    event.stopPropagation();
    handleRemove(id);
  };

  const handleSelectedProduct = async (idProductSelected) => {
    if (!isAdminMode) return;

    const productSelected = menu.find(
      (product) => product.id === idProductSelected
    );
    await setProductSelected(productSelected);
    await setCurrentTabSelected("edit");
    await setIsCollapsed(false);

    titleEditBoxRef.current.focus();
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
          onSelected={isAdminMode ? () => handleSelectedProduct(id) : null}
          variant={isAdminMode ? "admin" : ""}
          className={
            isAdminMode && productSelected?.id === id ? "selected" : "normal"
          }
          adminMode={isAdminMode}
          stopPropagation={(e) => stopPropagation(e)}
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
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  justify-items: center;
  background-color: transparent;
`;
