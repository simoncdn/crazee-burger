import Navbar from "./navbar/Navbar";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./main/Main";
import { useEffect, useRef, useState } from "react";
import GlobalContext from "../../../context/GlobalContext";
import { EMPTY_PRODUCT } from "../../../enum/product";
import { focusOnRef } from "../../../utils/focusOnRef";
import { useMenu } from "../../../hooks/useMenu";
import { useBasket } from "../../../hooks/useBasket";
import { useParams } from "react-router-dom";
import { initialiseUserSession } from "../../../utils/intialiseUserSession";
import { findObjectById } from "../../../utils/array";

export default function OrderPage() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();
  const { username } = useParams();
  const { menu, setMenu, handleAdd, handleDelete, resetMenu, handleEdit } =
    useMenu();
  const { basketMenu, setBasketMenu, addProductToBasket, deleteBasketProduct } =
    useBasket();

  const handleProductSelected = async (idProductSelected) => {
    if (!isAdminMode) return;
    const productClickedOn = findObjectById(idProductSelected, menu);
    await setProductSelected(productClickedOn);
    await setCurrentTabSelected("edit");
    await setIsCollapsed(false);

    focusOnRef(titleEditRef);
  };
  const globalContextValue = {
    username,

    isAdminMode,
    setIsAdminMode,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,

    menu,
    handleAdd,
    handleDelete,
    resetMenu,
    handleEdit,

    titleEditRef,

    productSelected,
    setProductSelected,
    newProduct,

    setNewProduct,

    basketMenu,
    addProductToBasket,
    deleteBasketProduct,

    handleProductSelected,
  };

  useEffect(() => {
    initialiseUserSession(username, setMenu, setBasketMenu);
  }, []);

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
