import Navbar from "./navbar/Navbar";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./main/Main";
import { useRef, useState } from "react";
import GlobalContext from "../../../context/GlobalContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../../enum/product";
import { deepClone } from "../../../utils/deepClone";
import { focusOnRef } from "../../../utils/focusOnRef";
import { getIndex } from "../../../utils/getIndex";
import { filter } from "../../../utils/filter";
import { find } from "../../../utils/find";

export default function OrderPage() {
  const [isAdminMode, setIsAdminMode] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.LARGE);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const [basketMenu, setBasketMenu] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const titleEditRef = useRef();

  // CRUD MENU //
  const handleAdd = (productToAdd) => {
    const menuCopy = deepClone(menu);
    const menuUpdated = [productToAdd, ...menuCopy];
    setMenu(menuUpdated);
  };
  const handleRemove = (idProductToRemove) => {
    const menuUpdated = filter(idProductToRemove, menu);

    if (productSelected && productSelected.id === idProductToRemove) {
      setProductSelected(EMPTY_PRODUCT);
    }

    focusOnRef(titleEditRef);
    setMenu(menuUpdated);
    deleteBasketProduct(idProductToRemove);
  };

  const handleEdit = (productToEdit) => {
    const productInBasket = getIndex(productToEdit.id, basketMenu);
    const productTobeEdited = getIndex(productToEdit.id, menu);

    menu[productTobeEdited] = productToEdit;
    basketMenu[productInBasket] = productToEdit;

    setMenu(menu);
    setBasketMenu(basketMenu);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
  };

  // CRUD BASKET //

  const addProductToBasket = (idProductToAdd) => {
    const basketCopy = deepClone(basketMenu);

    const productToAdd = find(idProductToAdd, menu);
    const productAlreadyInBasket = find(idProductToAdd, basketMenu);

    if (!productAlreadyInBasket) {
      productToAdd.quantity = 1;
      const newBasketMenu = [productToAdd, ...basketCopy];
      setBasketMenu(newBasketMenu);
      return;
    }
    updateProductQuantity(productAlreadyInBasket);
  };

  const updateProductQuantity = (productToUpdate) => {
    const basketCopy = deepClone(basketMenu);
    const productIndex = getIndex(productToUpdate.id, basketMenu);
    basketCopy[productIndex].quantity += 1;
    setBasketMenu(basketCopy);
  };

  const deleteBasketProduct = (idProductToRemove) => {
    const basketUpdated = filter(idProductToRemove, basketMenu);
    setBasketMenu(basketUpdated);
  };

  const handleProductSelected = async (idProductSelected) => {
    if (!isAdminMode) return;
    const productSelected = find(idProductSelected, menu);

    await setProductSelected(productSelected);
    await setCurrentTabSelected("edit");
    await setIsCollapsed(false);

    focusOnRef(titleEditRef);
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
    titleEditRef,
    newProduct,
    setNewProduct,

    basketMenu,
    setBasketMenu,
    totalPrice,
    setTotalPrice,

    addProductToBasket,
    deleteBasketProduct,

    handleProductSelected,
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
