import styled, { css } from "styled-components";
import { theme } from "../../theme/index";
import { RxCross2 } from "react-icons/rx";
import Button from "./Button";

export default function Card({
  title,
  image,
  leftDescription,
  hasDeleteButton,
  onSelected,
  onDelete,
  className,
  variantBtn,
  variant = "normal",
}) {
  return (
    <CardStyled onClick={onSelected} variant={variant} className={className}>
      {hasDeleteButton && (
        <button
          className="delete-btn"
          onClick={(event) => {
            event.stopPropagation();
            onDelete();
          }}
        >
          <RxCross2 className="icon" />
        </button>
      )}
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="text-info">
        <div className="title">{title}</div>
        <div className="description">
          <div className="left-description">{leftDescription}</div>
          <div className="right-description">
            <Button
              classname="primary-button"
              label={"Ajouter"}
              variant={variantBtn}
              onClick={(event) => {
                event.stopPropagation();
                console.log("AddToBasket");
              }}
            />
          </div>
        </div>
      </div>
    </CardStyled>
  );
}
const CardStyled = styled.div`
  width: 240px;
  height: 330px;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};
  background-color: ${theme.colors.white};
  position: relative;
  ${({ variant }) => cardStyle[variant]}
  .delete-btn {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 20px;
    margin-right: 20px;
    width: 20px;
    height: 20px;
    border-radius: ${theme.borderRadius.extraRound};
    background-color: ${theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    .icon {
      color: ${theme.colors.white};
    }
    :hover {
      background-color: #e25549;
    }
  }
  .image {
    width: 100%;
    height: auto;
    margin-top: 30px;
    margin-bottom: 20px;
    z-index: 1;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  .text-info {
    display: grid;
    grid-template-rows: 30% 70%;
    padding: 5px;

    .title {
      width: 100%;
      text-align: left;
      margin: auto 0;
      position: relative;
      bottom: 10px;
      font-family: "Amatic SC", cursive;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: ${theme.fonts.size.P4};
      font-weight: ${theme.fonts.weights.bold};
      color: ${theme.colors.dark};
    }

    .description {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .left-description {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: ${theme.fonts.weights.medium};
        font-weight: ${theme.fonts.weights.medium};
        color: ${theme.colors.primary};
      }
      .right-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.size.P1};

        .primary-button {
          font-size: ${theme.fonts.size.XS};
          cursor: pointer;
          padding: 12px;
        }
      }
    }
  }
`;

const adminCardStyle = css`
  :hover {
    scale: 1.1;
    transition: all 600ms ease;
    ::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: 15px;
      box-shadow: 0px 0px 8px 0px #ffa01b;
    }
  }
`;

const cardStyle = {
  adminCard: adminCardStyle,
};
