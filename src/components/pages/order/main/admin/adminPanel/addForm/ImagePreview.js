import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";

export default function ImagePreview({ defaultImageSource, inputData }) {
  return (
    <ImpagePreviewStyled>
      {inputData === "" ? (
        <div className="image-undefined">
          <p>Aucune Image</p>
        </div>
      ) : (
        <div
          className="image-found"
          style={{
            backgroundImage: `url(${inputData})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      )}
    </ImpagePreviewStyled>
  );
}

const ImpagePreviewStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  grid-area: 1 / 1 / 4 / 2;
  border-radius: ${theme.borderRadius.round};
  .image-found {
    width: 100%;
    height: 100%;
  }
  .image-undefined {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.greyLight};
    p {
      width: 100%;
      position: absolute;
      font-size: ${theme.fonts.size.P0};
      color: ${theme.colors.greySemiDark};
    }
  }
`;
