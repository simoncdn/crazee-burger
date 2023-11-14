import { useState } from "react"
import { fakeMenu } from "../fakeData/fakeMenu"
import { deepClone } from "../utils/array"
import { syncBothMenu } from "../api/product"

export const useMenu = () => {
  const [menu, setMenu] = useState()

  const handleAdd = (newProduct, username) => {
    const menuCopy = deepClone(menu)
    const menuUpdated = [newProduct, ...menuCopy]
    setMenu(menuUpdated)
    syncBothMenu(username, menuUpdated)
  }

  const handleDelete = (idOfProductToDelete, username) => {
    const menuCopy = deepClone(menu)
    const menuUpdated = menuCopy.filter((product) => product.id !== idOfProductToDelete)
    setMenu(menuUpdated)
    syncBothMenu(username, menuUpdated)
  }

  const handleEdit = (productBeingEdited, username) => {
    const menuCopy = deepClone(menu)
    const indexOfProductToEdit = menu.findIndex(
      (menuProduct) => menuProduct.id === productBeingEdited.id
    )
    menuCopy[indexOfProductToEdit] = productBeingEdited
    setMenu(menuCopy)
    syncBothMenu(username, menuCopy)
  }

  const resetMenu = (username) => {
    setMenu(fakeMenu.LARGE)
    syncBothMenu(username, fakeMenu.LARGE)
  }

  return { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu }
}
