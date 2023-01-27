import styled from "styled-components";
import { theme } from "../../../../theme";
export default function WindowPanel({ tabIndex, className }) {
  return (
    <WindowPanelStyled className={className}>
      <div className={tabIndex === 0 ? "contenu active" : "contenu unactive"}>
        ADD PRODUCT
      </div>
      <div className={tabIndex === 1 ? "contenu active" : "contenu unactive"}>
        MODIFY PRODUCT
      </div>
    </WindowPanelStyled>
  );
}

const WindowPanelStyled = styled.div`
  width: 100%;
  height: 250px;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${theme.colors.white};
  box-shadow: 0px -10px 20px 2px rgba(0, 0, 0, 0.2) inset;
  .contenu {
    width: 100%;
    height: 100%;
    :nth-child(1),
    :nth-child(2) {
      box-shadow: 0px -2px 8px -2px rgba(0, 0, 0, 0.2);
      border-top: 1px solid ${theme.colors.greyLight};
    }
    &.active {
      display: block;
    }
    &.unactive {
      display: none;
    }
  }
`;
