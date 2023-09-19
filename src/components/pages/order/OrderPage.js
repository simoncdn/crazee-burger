import Navbar from "./navbar/Navbar";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./main/Main";
import { useEffect, useRef, useState } from "react";
import GlobalContext from "../../../context/GlobalContext";
import { EMPTY_PRODUCT } from "../../../enum/product";
import { focusOnRef } from "../../../utils/focusOnRef";
import { find } from "../../../utils/find";
import { useMenu } from "../../../hooks/useMenu";
import { useBasket } from "../../../hooks/useBasket";
import { useParams } from "react-router-dom";
import { getMenu } from "../../../api/product";

export default function OrderPage() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();
  const username = useParams()?.username;
  const { menu, setMenu, handleAdd, handleRemove, resetMenu, handleEdit } =
    useMenu();
  const {
    basketMenu,
    addProductToBasket,
    updateProductQuantity,
    deleteBasketProduct,
    editProductToBasket,
  } = useBasket();
  // useLocalStorage(basketMenu);
  const handleProductSelected = async (idProductSelected) => {
    if (!isAdminMode) return;
    const productSelected = find(idProductSelected, menu);

    await setProductSelected(productSelected);
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
    setMenu,
    handleAdd,
    handleRemove,
    resetMenu,
    handleEdit,

    titleEditRef,

    productSelected,
    setProductSelected,
    newProduct,

    setNewProduct,

    basketMenu,

    addProductToBasket,

    editProductToBasket,
    deleteBasketProduct,
    updateProductQuantity,

    handleProductSelected,
  };

  useEffect(() => {
      const initializeMenu = async (userId) => {
        const menu = await getMenu(userId);
        setMenu(menu);
      }
      if(username){
          initializeMenu(username);
      }
  }, [username]);

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
