import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketCard({
  title,
  image,
  price,
  onDelete,
  quantity,
}) {
  return (
    <CardBasketStyled>
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="text-info">
        <div className="left-description">
          <div className="title">{title}</div>
          <div className="price">{price}</div>
        </div>
        <div className="right-description">x{quantity}</div>
      </div>
      <button className="delete" onClick={onDelete}>
        <img src="/images/trash.svg" alt="trash icon" />
      </button>
    </CardBasketStyled>
  );
}
const CardBasketStyled = styled.div`
  position: relative;
  height: 86px;
  box-shadow: ${theme.shadows.medium};
  border-radius: ${theme.borderRadius.round};
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: 30% 1fr;
  display: grid;
  gap: 14px;
  padding: 8px 16px;
  overflow: hidden;
  .delete {
    display: none;
  }
  :hover {
    .delete {
      background-color: ${theme.colors.red};
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 68px;
      cursor: pointer;
      border: none;
    }
  }
  .image {
    width: 100%;
    height: 60px;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  .text-info {
    display: grid;
    grid-template-columns: 70% 1fr;
    align-items: center;
    .left-description {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      .title {
        width: 90%;
        position: relative;
        font-family: ${theme.fonts.family.stylish};
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.dark};
        font-size: ${theme.fonts.size.P3};
      }
      .price {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: ${theme.fonts.weights.medium};
        color: ${theme.colors.primary};
        font-size: ${theme.fonts.size.P0};
      }
    }
    .right-description {
      font-size: ${theme.fonts.size.P0};
      color: ${theme.colors.primary};
      display: flex;
      align-items: center;
    }
  }
`;
