import styled from "styled-components";
import fakeData from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";
import Card from "./Card";

export default function Menu() {
  return (
    <MenuStyled>
      {fakeData.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          isAdvertised={item.isAdvertised}
          isAvailable={item.isAvailable}
          image={item.imageSource}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  width: 100%;
  background-color: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  padding: 50px 50px 150px;
  display: grid;
  grid-template-columns: repeat(4, 240px);
  grid-template-rows: repeat(3, 330px);
  grid-row-gap: 60px;
  grid-column-gap: 85px;
  justify-content: center;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-button {
    background: transparent;
    height: 5px;
  }
`;
