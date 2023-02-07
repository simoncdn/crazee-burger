import styled from "styled-components";
import { theme } from "../../../../theme";

export default function WindowPanel({ className, tabs, isTabIndex }) {
  return (
    <WindowPanelStyled className={className}>
      {tabs.map((tab, index) => (
        <div
          className={
            isTabIndex === tab.action ? "content" : "content unactivated"
          }
          key={index}
        >
          {tab.window}
        </div>
      ))}
    </WindowPanelStyled>
  );
}

const WindowPanelStyled = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: 0px -2px 8px -2px rgba(0, 0, 0, 0.2);

  .content {
    width: 100%;
    height: 100%;
    display: block;
    &.unactivated {
      display: none;
    }
  }
`;
