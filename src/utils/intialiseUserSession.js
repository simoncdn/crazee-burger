import { getMenu } from "../api/product";
import { getLocalStorage } from "./window";

const intialiseMenu = async (username, setMenu) => {
  const menuReceived = await getMenu(username);
  setMenu(menuReceived);
};

const intialiseBasket = (username, setBasketMenu) => {
  const basketReceived = getLocalStorage(username);
  if (basketReceived) setBasketMenu(basketReceived);
};

export const initialiseUserSession = async (username, setMenu, setBasketMenu) => {
  await intialiseMenu(username, setMenu);
  intialiseBasket(username, setBasketMenu);
};
