import { act, renderHook } from "@testing-library/react";
import { useMenu } from "../hooks/useMenu";
describe("Feature: useBasket", () => {
  const productGenerator = (id) => {
    return {
      id,
      title: "name",
      image: "imageUrl",
      price: 0,
    };
  };
  const arrayOfProducts = (numberOfProducts) => {
    const products = [];
    for (let i = 0; i < numberOfProducts; i++) {
      products.push(productGenerator(i));
    }
    return products;
  };
  const addProductsToMenu = (products, result) => {
    products.forEach((product) => {
      userAddProductToMenu(product, result);
    });
  };
  const userAddProductToMenu = (product, result) => {
    act(() => {
      result.current.handleAdd(product);
    });
  };

  describe("Rule: handleAdd", () => {
    it("Scenario: should add product to menu when user click on form submit button", () => {
      const { result } = renderHook(() => useMenu());
      const PRODUCT_TO_ADD_1 = productGenerator(1);

      userAddProductToMenu(PRODUCT_TO_ADD_1, result);

      expect(result.current.menu).toStrictEqual([PRODUCT_TO_ADD_1]);
    });
    it("Scenario: should add product to menu with empty info", () => {
      const { result } = renderHook(() => useMenu());
      const EMPTY_PRODUCT = { id: 1, title: "", image: "" };

      userAddProductToMenu(EMPTY_PRODUCT, result);

      expect(result.current.menu).toStrictEqual([EMPTY_PRODUCT]);
    });
    it("Scenario: should add product to menu with all info", () => {
      const { result } = renderHook(() => useMenu());
      const PRODUCT_TO_ADD_1 = productGenerator(1);

      userAddProductToMenu(PRODUCT_TO_ADD_1, result);

      expect(result.current.menu).toStrictEqual([PRODUCT_TO_ADD_1]);
    });
    it("Scenario: should display the new product above the product already in menu when user add two products", () => {
      const { result } = renderHook(() => useMenu());
      const products = arrayOfProducts(2);

      addProductsToMenu(products, result);
      expect(result.current.menu).toStrictEqual([products[1], products[0]]);
    });
  });

  describe("Rule: handleDelete", () => {
    const userDeleteProductToMenu = (productId, result) => {
      act(() => {
        result.current.handleDelete(productId);
      });
    };
    it("Scenario: should delete product from menu when user click on delete button", () => {
      const { result } = renderHook(() => useMenu());
      const PRODUCT_TO_ADD_1 = productGenerator(1);

      userAddProductToMenu(PRODUCT_TO_ADD_1, result);
      userDeleteProductToMenu(PRODUCT_TO_ADD_1.id, result);

      expect(result.current.menu).toStrictEqual([]);
    });
    it("Scenario: when user delete one product of products it should display the other products", () => {
      const { result } = renderHook(() => useMenu());
      const products = arrayOfProducts(3);

      addProductsToMenu(products, result);
      userDeleteProductToMenu(products[0].id, result);

      expect(result.current.menu).toStrictEqual([products[2], products[1]]);
    });
  });

  describe("Rule: handleEdit", () => {
    const userEditProductToMenu = (product, result) => {
      act(() => {
        result.current.handleEdit(product);
      });
    };
    const editProductInfo = (product) => {
      return {
        id: product.id,
        title: "new name",
        image: "new imageUrl",
        price: "1,00",
      };
    };
    it("Scenario: should edit product from menu when user click on edit button", () => {
      const { result } = renderHook(() => useMenu());
      let PRODUCT_TO_ADD_1 = productGenerator(1);

      userAddProductToMenu(PRODUCT_TO_ADD_1, result);
      PRODUCT_TO_ADD_1 = editProductInfo(PRODUCT_TO_ADD_1);
      userEditProductToMenu(PRODUCT_TO_ADD_1, result);

      expect(result.current.menu).toStrictEqual([PRODUCT_TO_ADD_1]);
    });
    it("Scenario: should only edit the selected product", () => {
      const { result } = renderHook(() => useMenu());
      const products = arrayOfProducts(2);

      addProductsToMenu(products, result);
      products[0] = editProductInfo(products[0]);
      userEditProductToMenu(products[0], result);

      expect(result.current.menu).toStrictEqual([products[1], products[0]]);
    });
  });

  describe("Rule: resetMenu", () => {
    it("Scenario: should reset menu to default", () => {
      const { result } = renderHook(() => useMenu());

      act(() => {
        result.current.resetMenu();
      });

      expect(result.current.menu.length).toBe(5);
    });
  });
});
