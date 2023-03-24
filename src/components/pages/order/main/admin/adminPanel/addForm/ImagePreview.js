import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";

export default function ImagePreview({ imageSource, title }) {
  return (
    <ImpagePreviewStyled>
      {imageSource ? (
        <img src={imageSource} alt={title} />
      ) : (
        <div className="empty-image">Aucune image</div>
      )}
    </ImpagePreviewStyled>
  );
}

const ImpagePreviewStyled = styled.div`
  grid-area: 1 / 1 / 4 / 2;
  display: flex;
  justify-content: center;
  align-items: center;

  .empty-image {
    /* background-color: green; */
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.greyLight};
    line-height: 1.5;
    color: ${theme.colors.greySemiDark};
    border-radius: ${theme.borderRadius.round};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;
