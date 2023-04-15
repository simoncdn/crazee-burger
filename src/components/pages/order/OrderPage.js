import Navbar from "./navbar/Navbar";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./main/Main";
import { useRef, useState } from "react";
import GlobalContext from "../../../context/GlobalContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../../enum/product";
import { deepClone } from "../../../utils/deepClone";

export default function OrderPage() {
  const [isAdminMode, setIsAdminMode] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);

  const titleEditBoxRef = useRef();

  const handleAdd = (productToAdd) => {
    const menuCopy = deepClone(menu);
    const menuUpdated = [productToAdd, ...menuCopy];
    setMenu(menuUpdated);
  };
  const handleRemove = (idProductToRemove) => {
    const menuCopy = deepClone(menu);
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idProductToRemove
    );
    setMenu(menuUpdated);
    if (productSelected && productSelected.id === idProductToRemove) {
      setProductSelected(EMPTY_PRODUCT);
    }
  };
  const handleEdit = (productToEdit) => {
    const menuCopy = deepClone(menu);
    const productTobeEdited = menuCopy.findIndex(
      (product) => product.id === productToEdit.id
    );
    menuCopy[productTobeEdited] = productToEdit;
    setMenu(menuCopy);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
    setProductSelected(EMPTY_PRODUCT);
  };

  const globalContextValue = {
    isAdminMode,
    setIsAdminMode,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAdd,
    handleRemove,
    resetMenu,
    handleEdit,
    productSelected,
    setProductSelected,
    titleEditBoxRef,
  };

  return (
    <OrderPageStyled>
      <GlobalContext.Provider value={globalContextValue}>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </GlobalContext.Provider>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans", sans-serif;

  .container {
    background-color: ${theme.colors.white};
    width: 1400px;
    height: 95vh;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    border-radius: ${theme.borderRadius.extraRound};
    overflow: hidden;
  }
`;
