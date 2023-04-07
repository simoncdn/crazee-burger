import Navbar from "./navbar/Navbar";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./main/Main";
import { useState } from "react";
import GlobalContext from "../../../context/GlobalContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";

export default function OrderPage() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  const [productSelected, setProductSelected] = useState();
  const [isInputTitleRef, setIsInputTitleRef] = useState();

  const handleAdd = (productToAdd) => {
    const menuCopy = [...menu];
    const menuUpdated = [productToAdd, ...menuCopy];
    setMenu(menuUpdated);
  };
  const handleRemove = (idProductToRemove, event) => {
    event.stopPropagation();

    const menuCopy = [...menu];
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idProductToRemove
    );
    setMenu(menuUpdated);
    if (productSelected.id !== idProductToRemove) {
      return;
    }
    setProductSelected();
  };
  const handleEdit = (productToEdit) => {
    const menuCopy = [...menu];
    const menuUpdated = menuCopy.map((item) => {
      if (item.id === productToEdit.id) {
        return (item = productToEdit);
      }
      return item;
    });
    setMenu(menuUpdated);
  };

  const handleProduct = (idProductSelected) => {
    const menuCopy = [...menu];
    const productSelected = menuCopy.find(
      (product) => product.id === idProductSelected
    );
    setProductSelected(productSelected);
    setCurrentTabSelected("edit");
    setIsCollapsed(false);

    if (isInputTitleRef && isInputTitleRef.current) {
      isInputTitleRef.current.focus();
    }
    if (!productSelected) {
      setProductSelected();
    }
  };

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
    setProductSelected();
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
    handleProduct,
    handleEdit,
    productSelected,
    setProductSelected,
    isInputTitleRef,
    setIsInputTitleRef,
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
