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

export default function OrderPage() {
  const [isAdminMode, setIsAdminMode] = useState(false);
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
    const menuCopy = deepClone(menu);
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idProductToRemove
    );
    setMenu(menuUpdated);
    if (productSelected && productSelected.id === idProductToRemove) {
      setProductSelected(EMPTY_PRODUCT);
    }

    focusOnRef(titleEditRef);

    deleteProductInBasket(idProductToRemove);
    updatePrice(idProductToRemove);
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
  };

  // CRUD BASKET //
  const addProductToBasket = (idProductToAdd) => {
    const basketCopy = deepClone(basketMenu);

    const productToAdd = menu.find((product) => product.id === idProductToAdd);
    productToAdd.price = parseInt(productToAdd.price);
    productToAdd.quantity = 1;
    const basketUpdated = [productToAdd, ...basketCopy];

    setBasketMenu(basketUpdated);
    getPrice(productToAdd.price);

    const productAlreadyAdded = basketCopy.find(
      (product) => product.id === idProductToAdd
    );
    if (productAlreadyAdded) {
      return updateProductQuantity(productAlreadyAdded);
    }
  };
  const updateProductQuantity = (ProductToUpdate) => {
    const basketCopy = deepClone(basketMenu);
    const productIndex = basketCopy.findIndex(
      (product) => product.id === ProductToUpdate.id
    );
    basketCopy[productIndex].quantity += 1;
    setBasketMenu(basketCopy);
    getPrice(ProductToUpdate.price);
  };

  const deleteProductInBasket = (idProductToRemove) => {
    const basketMenuCopy = deepClone(basketMenu);
    const basketUpdated = basketMenuCopy.filter(
      (product) => product.id !== idProductToRemove
    );
    setBasketMenu(basketUpdated);
    updatePrice(idProductToRemove);
  };

  const getPrice = (productPrice) => {
    let newTotalPrice = totalPrice;
    newTotalPrice += productPrice;
    setTotalPrice(newTotalPrice);
  };

  const updatePrice = (productId) => {
    const totalPriceCopy = totalPrice;
    const findProduct = basketMenu.find((product) => product.id === productId);

    const newTotalPrice =
      totalPriceCopy - findProduct.quantity * findProduct.price;
    setTotalPrice(newTotalPrice);
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
    addProductToBasket,
    deleteProductInBasket,
    updatePrice,
    totalPrice,
    setTotalPrice,
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
