import styled from "styled-components";
import { theme } from "../../../../theme";
export default function WindowPanel({ tabIndex, className }) {
  return (
    <WindowPanelStyled className={className}>
      <div className={tabIndex === 1 ? "content actived" : "content unactived"}>
        ADD PRODUCT
      </div>
      <div className={tabIndex === 2 ? "content actived" : "content unactived"}>
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
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: 0px -2px 8px -2px rgba(0, 0, 0, 0.2);
  /* box-shadow: 0px -10px 20px 2px rgba(0, 0, 0, 0.2) inset; */
  .content {
    width: 100%;
    height: 100%;
    &.actived {
      display: block;
    }
    &.unactived {
      display: none;
    }
  }
`;
