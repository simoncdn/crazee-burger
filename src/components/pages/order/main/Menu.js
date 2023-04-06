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
    handleProduct,
    productSelected,
  } = useContext(GlobalContext);

  if (menu.length === 0) {
    return <EmptyMenu resetMenu={resetMenu} />;
  }
  return (
    <MenuStyled>
      {menu.map(({ id, title, imageSource, price }) => (
        <Card
          key={id}
          title={title}
          image={imageSource ? imageSource : IMAGE_DEFAULT}
          leftDescription={formatPrice(price)}
          hasDeleteButton={isAdminMode}
          onDelete={() => handleRemove(id)}
          onSelected={isAdminMode ? () => handleProduct(id) : null}
          variant={isAdminMode ? "adminCard" : "normal"}
          adminMode={isAdminMode}
          variantBtn={
            isAdminMode && productSelected && productSelected.id === id
              ? "selected"
              : "normal"
          }
          className={
            isAdminMode && productSelected && productSelected.id === id
              ? "selected"
              : "normal"
          }
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
  background-color: transparent; // For the

  .selected {
    background-color: #ffa01b;
    .delete-btn {
      background-color: ${theme.colors.white};
      cursor: pointer;
      .icon {
        color: ${theme.colors.primary};
      }
      :hover {
        background-color: #e25549;
      }
      :active {
        background-color: ${theme.colors.white};
      }
    }
    .text-info {
      display: grid;
      grid-template-rows: 30% 70%;
      padding: 5px;
      .left-description {
        color: white;
      }
    }
  }
`;
