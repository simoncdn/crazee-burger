import { act, renderHook } from "@testing-library/react";
import { useBasket } from "../hooks/useBasket";

describe("Feature: useBasket", () => {
  const productGenerator = (id) => {
    return {
      id,
      quantity: 0,
    };
  };
  const arrayOfProducts = (numberOfProducts) => {
    const products = [];
    for (let i = 0; i < numberOfProducts; i++) {
      products.push(productGenerator(i));
    }
    return products;
  };
  const addProductsToBasket = (products, result) => {
    products.forEach((product) => {
      userAddProductToBasket(product, result);
    });
  };
  const initProductsQuantity = (products) => {
    products.forEach((product) => {
      return (product.quantity = 1);
    });
  };
  const userAddProductToBasket = (product, result) => {
    act(() => {
      result.current.handleAddToBasket(product);
    });
  };

  describe("Rule: addProductToBasket", () => {
    it("Scenario: should add product to basket when basket is empty", () => {
      const { result } = renderHook(() => useBasket());
      const PRODUCT_TO_ADD_1 = productGenerator(1);

      PRODUCT_TO_ADD_1.quantity = 1;
      userAddProductToBasket(PRODUCT_TO_ADD_1, result);

      expect(result.current.basketMenu).toEqual([PRODUCT_TO_ADD_1]);
    });
    it("Scenario: should init product quantity to 1 when user add product to basket", () => {
      const { result } = renderHook(() => useBasket());
      const PRODUCT_TO_ADD_1 = productGenerator(1);

      userAddProductToBasket(PRODUCT_TO_ADD_1, result);

      expect(result.current.basketMenu[0].quantity).toBe(1);
    });
    it("Scenario: should increment product quantity when user add product already in basket", () => {
      const { result } = renderHook(() => useBasket());
      const PRODUCT_TO_ADD_1 = productGenerator(1);

      userAddProductToBasket(PRODUCT_TO_ADD_1, result);
      userAddProductToBasket(PRODUCT_TO_ADD_1, result);

      expect(result.current.basketMenu[0].quantity).toBe(2);
    });
    it("Scenario: should add two products to basket when user add two products with the second product above the first", () => {
      const { result } = renderHook(() => useBasket());
      const products = arrayOfProducts(2);

      initProductsQuantity(products);
      addProductsToBasket(products, result);

      expect(result.current.basketMenu).toEqual([products[1], products[0]]);
    });
    it("Scenario: should the order not to be respected when user add 2 products with the second below the first", () => {
      const { result } = renderHook(() => useBasket());
      const products = arrayOfProducts(2);

      addProductsToBasket(products, result);

      expect(result.current.basketMenu).not.toEqual([products[1], products[0]]);
    });
    it("Scenario: should init second product add to basket when user already added a product", () => {
      const { result } = renderHook(() => useBasket());
      const products = arrayOfProducts(2);

      addProductsToBasket(products, result);

      expect(result.current.basketMenu[1].quantity).toBe(1);
    });
  });

  describe("Rule: handleDeleteBasketProduct", () => {
    const userDeleteBasketProduct = (productId, result) => {
      act(() => {
        result.current.handleDeleteBasketProduct(productId);
      });
    };
    it("Scenario: should delete product from basket", () => {
      const { result } = renderHook(() => useBasket());
      const PRODUCT_TO_DELETE_1 = productGenerator(1);

      userAddProductToBasket(PRODUCT_TO_DELETE_1, result);
      userDeleteBasketProduct(1, result);

      expect(result.current.basketMenu).toEqual([]);
    });
    it("Scenario: should have 1 product in basket when user added 2 different products and delete one", () => {
      const { result } = renderHook(() => useBasket());
      const products = arrayOfProducts(2);

      initProductsQuantity(products);
      addProductsToBasket(products, result);
      userDeleteBasketProduct(1, result);

      expect(result.current.basketMenu).toEqual([products[0]]);
    });
  });
});
