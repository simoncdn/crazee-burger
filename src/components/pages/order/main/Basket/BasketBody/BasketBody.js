import React from "react";
import { useContext } from "react";
import GlobalContext from "../../../../../../context/GlobalContext";
import EmptyBasket from "./EmptyBasket";
import BasketProducts from "./BasketProducts";
import { isEmpty } from "../../../../../../utils/array";

export default function BasketBody() {
  const { basketMenu, menu } = useContext(GlobalContext)

  return (
    <>{isEmpty(basketMenu) ? <EmptyBasket isLoading={menu === undefined} /> : <BasketProducts />}</>
  )
}