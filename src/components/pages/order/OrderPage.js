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
import { replaceFrenchCommaWithDot } from "../../../utils/maths";

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
    const basketMenuCopy = deepClone(basketMenu);
    const productTobeEdited = menuCopy.findIndex(
      (product) => product.id === productToEdit.id
    );
    menuCopy[productTobeEdited] = productToEdit;

    const productInBasket = basketMenuCopy.findIndex(
      (product) => product.id === productToEdit.id
    );

    //@Find a better implementation
    basketMenuCopy[productInBasket].title = productToEdit.title;
    basketMenuCopy[productInBasket].imageSource = productToEdit.imageSource;
    basketMenuCopy[productInBasket].price = productToEdit.price;

    setMenu(menuCopy);
    setBasketMenu(basketMenuCopy);
    newPrice(productToEdit);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
  };

  // CRUD BASKET //

  const addProductToBasket = (idProductToAdd) => {
    const basketCopy = deepClone(basketMenu);
    const menuCopy = deepClone(menu);
    const productToAdd = menu.find((product) => product.id === idProductToAdd);
    // productToAdd.price = parseInt(productToAdd.price);
    productToAdd.quantity = 1;
    const basketUpdated = [productToAdd, ...basketCopy];

    const productFound = menuCopy.findIndex(
      (product) => product.id === idProductToAdd
    );
    menuCopy[productFound].quantity += 1;

    setMenu(menuCopy);
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
    newTotalPrice += replaceFrenchCommaWithDot(productPrice);
    setTotalPrice(newTotalPrice);
  };

  const updatePrice = (productId) => {
    const totalPriceCopy = totalPrice;
    const findProduct = basketMenu.find((product) => product.id === productId);
    console.log(findProduct);
    const newTotalPrice =
      totalPriceCopy - findProduct.quantity * findProduct.price;
    setTotalPrice(newTotalPrice);
  };

  const newPrice = (productToEdit) => {
    const priceToProduct = productToEdit.price;
    const basketMenuCopy = deepClone(basketMenu);
    const productInBasket = basketMenuCopy.findIndex(
      (product) => product.id === productToEdit.id
    );
    basketMenuCopy[productInBasket] = productToEdit;
    basketMenuCopy[productInBasket].price = priceToProduct;

    let newTotal = 0;
    basketMenuCopy.forEach((product) => {
      if (!product.price) return;
      // console.log(replaceFrenchCommaWithDot(product.price));
      newTotal += replaceFrenchCommaWithDot(product.price) * product.quantity;
    });
    setTotalPrice(newTotal);
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
