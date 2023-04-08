import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Button from "../../../reusable-ui/Button";
import GlobalContext from "../../../../context/GlobalContext";

export default function EmptyMenu({ resetMenu }) {
  const { isAdminMode } = useContext(GlobalContext);

  return (
    <EmptyMenuStyled>
      {isAdminMode ? (
        <>
          <span className="title">Le menu est vide ?</span>
          <span className="description">
            Cliquez ci-dessous pour le réinitialiser
          </span>
          <Button
            label="Générer de nouveaux produits"
            classname="empty-button"
            onClick={resetMenu}
            variant="normal"
          />
        </>
      ) : (
        <>
          <span className="title">Victime de notre succès ! :D</span>
          <span className="description">
            De nouvelles recettes sont en cours de préparation.
          </span>
          <span className="description">À très vite !</span>
        </>
      )}
    </EmptyMenuStyled>
  );
}

const EmptyMenuStyled = styled.div`
  /* background-color: ${theme.colors.background_white}; */
  box-shadow: ${theme.shadows.strong};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .title,
  .description {
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  }
  .title {
    font-weight: ${theme.fonts.weights.bold};
  }
  .description {
    margin-top: 20px;
  }
  .empty-button {
    margin-top: 30px;
    width: auto;
    font-size: ${theme.fonts.size.XS};
  }
`;
