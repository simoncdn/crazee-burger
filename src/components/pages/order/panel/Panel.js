import React from "react";
import styled from "styled-components";

export default function Panel() {
  return (
    <PanelStyled>
      <div className="tabs">
        <p>tabs1</p>
        <p>tabs2</p>
        <p>tabs3</p>
      </div>
      <div className="panel-block">
        <p>block</p>
      </div>
    </PanelStyled>
  );
}

const PanelStyled = styled.div`
  width: 100%;
  height: 292px;
  background-color: violet;
  display: flex;
  flex-direction: column;
  .tabs {
    background-color: red;
    display: flex;
    height: 42px;
    align-items: center;
    margin-left: 70px;
  }
  .panel-block {
    background-color: green;
    width: 100%;
    flex: 1;
  }
`;
