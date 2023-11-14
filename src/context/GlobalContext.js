import { createContext } from "react";

export default createContext({
    username: "",
    isAdminMode: false,
    setIsAdminMode: () => { },

    isCollapsed: false,
    setIsCollapsed: () => { },

    currentTabSelected: false,
    setCurrentTabSelected: () => { },

    productSelected: {},
    setProductSelected: () => { },

    newProduct: {},
    setNewProduct: () => { },

    titleEditRef: {},

    totalPrice: 0,
    setTotalPrice: () => { },

    menu: [],
    handleAdd: () => { },
    handleDelete: () => { },
    resetMenu: () => { },
    handleEdit: () => { },

    basketMenu: [],
    addProductToBasket: () => { },
    deleteBasketProduct: () => { },

    handleProductSelected: () => { },
});
