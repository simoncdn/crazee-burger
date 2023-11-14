import { useState } from "react"
import { deepClone, findObjectById, getIndex, removeObjectById } from "../utils/array"
import { setLocalStorage } from "../utils/window"

export const useBasket = () => {
  const [basketMenu, setBasketMenu] = useState([])

  const addProductToBasket = (idProductToAdd, username) => {
    const basketCopy = deepClone(basketMenu)
    const productAlreadyInBasket = findObjectById(idProductToAdd, basketCopy)

    if (productAlreadyInBasket) {
      incrementProductAlreadyInBasket(idProductToAdd, basketCopy, username)
      return
    }

    createNewBasketProduct(idProductToAdd, basketCopy, setBasketMenu, username)
  }

  const incrementProductAlreadyInBasket = (idProductToAdd, basketCopy, username) => {
    const indexOfBasketProductToIncrement = getIndex(idProductToAdd, basketCopy)
    basketCopy[indexOfBasketProductToIncrement].quantity += 1
    setBasketMenu(basketCopy)
    setLocalStorage(username, basketCopy)
  }

  const createNewBasketProduct = (idProductToAdd, basketCopy, setBasket, username) => {
    // we do not re-create a whole product, we only add the extra info a basket product has in comparison to a menu product
    const newBasketProduct = { id: idProductToAdd, quantity: 1 }
    const newBasket = [newBasketProduct, ...basketCopy]
    setBasket(newBasket)
    setLocalStorage(username, newBasket)
  }

  const deleteBasketProduct = (idBasketProduct, username) => {
    const basketUpdated = removeObjectById(idBasketProduct, basketMenu)
    setBasketMenu(basketUpdated)
    setLocalStorage(username, basketUpdated)
  }

  return { basketMenu, setBasketMenu, addProductToBasket, deleteBasketProduct }
}
