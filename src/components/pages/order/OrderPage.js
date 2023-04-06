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

  const handleAdd = (productToAdd) => {
    const menuCopy = [...menu];
    const menuUpdate = [productToAdd, ...menuCopy];
    setMenu(menuUpdate);
  };
  const handleRemove = (idProductToRemove) => {
    const menuCopy = [...menu];
    const menuUpdate = menuCopy.filter(
      (product) => product.id !== idProductToRemove
    );
    setMenu(menuUpdate);

    if (productSelected && productSelected.id === idProductToRemove) {
      setProductSelected();
    }
  };
  const handleEdit = (productToEdit) => {
    const menuCopy = [...menu];
    const menuUpdate = menuCopy.map((item) => {
      if (item.id === productToEdit.id) {
        return (item = productToEdit);
      }
      return item;
    });
    setMenu(menuUpdate);
  };

  const handleProduct = (idProductSelected) => {
    const menuCopy = [...menu];
    const productSelected = menuCopy.find(
      (product) => product.id === idProductSelected
    );
    if (productSelected) {
      setProductSelected(productSelected);
      setCurrentTabSelected("edit");
      setIsCollapsed(false);
    } else {
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
