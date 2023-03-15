import React from "react";
import styled from "styled-components";

export default function ImagePreview({ defaultImageSource, inputData }) {
  return (
    <ImpagePreviewStyled>
      {inputData === "" ? (
        <div className="noImage">
          <p>Aucune Image</p>
        </div>
      ) : (
        <div
          className="image"
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
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
  .image {
    width: 100%;
    height: 100%;
  }
  .noImage {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid grey;
    p {
      width: 100%;
      position: absolute;
      color: lightgray;
    }
  }
`;
