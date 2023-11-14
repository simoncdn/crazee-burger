import { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../../../context/GlobalContext";
import { formatPrice } from "../../../../../../utils/maths";
import Card from "../../../../../reusable-ui/Card";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import {
  EMPTY_PRODUCT,
  IMAGE_COMING_SOON,
  IMAGE_NO_STOCK,
} from "../../../../../../enum/product";
import Loader from "../../../../../reusable-ui/Loader";
import { fakeMenu } from "../../../../../../fakeData/fakeMenu";
import { isEmpty } from "../../../../../../utils/array";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {convertStringToBoolean} from "../../../../../../utils/string";
import RibbonAnimated, {ribbonAnimation} from "./RibbonAnimated";
import { theme } from "../../../../../../theme";
import { checkIfProductIsClicked } from "./helper";
import { menuAnimation } from "../../../../../../theme/animation";

export default function Menu() {
  const {
    isAdminMode,
    handleDelete,
    productSelected,
    addProductToBasket,
    username,
    handleProductSelected,
    setProductSelected,
    menu,
    resetMenu,
    deleteBasketProduct,
  } = useContext(GlobalContext);

  if (menu === undefined) return <Loader />;
  if (menu?.length === 0) {
    if (!isAdminMode) return <EmptyMenuClient />;
    return (
      <EmptyMenuAdmin onReset={() => resetMenu(username, fakeMenu.LARGE)} />
    );
  }

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation()
    handleDelete(idProductToDelete, username)
    deleteBasketProduct(idProductToDelete, username)
    idProductToDelete === productSelected.id && setProductSelected(EMPTY_PRODUCT)
  }
  const handleAddButton = (event, idProductToAdd) => {
    event.stopPropagation();
    addProductToBasket(idProductToAdd, username);
  };

  let cardContainerClassName = isAdminMode
    ? "card-container is-hoverable"
    : "card-container";

  if (menu === undefined) return <Loader />;

  if (isEmpty(menu)) {
    if (!isAdminMode) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={() => resetMenu(username)} />;
  }
  return (
    <TransitionGroup component={MenuStyled} className="menu">
      {menu.map(({ id, title, imageSource, price, isAvailable, isPublicised }) => {
        return (
          <CSSTransition classNames={"menu-animation"} key={id} timeout={300}>
            <div className={cardContainerClassName}>
              {convertStringToBoolean(isPublicised) && <RibbonAnimated />}
              <Card
                title={title}
                imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
                leftDescription={formatPrice(price)}
                hasDeleteButton={isAdminMode}
                onDelete={(event) => handleCardDelete(event, id)}
                onClick={isAdminMode ? () => handleProductSelected(id) : null}
                isHoverable={isAdminMode}
                isSelected={checkIfProductIsClicked(id, productSelected.id)}
                onAdd={(event) => handleAddButton(event, id)}
                overlapImageSource={IMAGE_NO_STOCK}
                isOverlapImageVisible={convertStringToBoolean(isAvailable) === false}
              />
            </div>
          </CSSTransition>
        )
      })}
    </TransitionGroup>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;

  ${menuAnimation}

  .card-container {
    position: relative;
    height: 330px;
    border-radius: ${theme.borderRadius.extraRound};

    &.is-hoverable {
      :hover {
        transform: scale(1.05);
        transition: ease-out 0.4s;
      }
    }
  }

  .ribbon {
    z-index: 2;
  }
  ${ribbonAnimation}
`;
