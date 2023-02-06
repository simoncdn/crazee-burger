import { useState } from "react";
import styled from "styled-components";
import fakeData from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";
import { formatPrice } from "../../../../utils/maths";
import Card from "../../../reusable-ui/Card";

export default function Menu() {
  const [menu, setMenu] = useState(fakeData);
  return (
    <MenuStyled>
      {menu.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          image={product.imageSource}
          leftDescription={formatPrice(product.price)}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  padding: 50px 50px 150px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  justify-items: center;
`;
