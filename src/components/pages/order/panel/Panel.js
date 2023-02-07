import styled from "styled-components";
import Tabs from "./Tabs";

export default function Panel({ className }) {
  return (
    <PanelStyled className={className}>
      <Tabs />
    </PanelStyled>
  );
}

const PanelStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`;
