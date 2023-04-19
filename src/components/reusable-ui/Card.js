import styled, { css } from "styled-components";
import { theme } from "../../theme/index";
import { RxCross2 } from "react-icons/rx";
import Button from "./Button";

export default function Card({
  title,
  image,
  leftDescription,
  hasDeleteButton,
  onClick,
  onDelete,
  isHoverable,
  isSelected,
  onButtonClick,
}) {
  return (
    <CardStyled
      onClick={onClick}
      isHoverable={isHoverable}
      isSelected={isSelected}
    >
      <div className="card">
        {hasDeleteButton && (
          <button className="delete-btn" onClick={onDelete}>
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
                onClick={onButtonClick}
              />
            </div>
          </div>
        </div>
      </div>
    </CardStyled>
  );
}
const CardStyled = styled.div`
  height: fit-content;
  border-radius: ${theme.borderRadius.extraRound};
  ${({ isHoverable }) => isHoverable && hoverableStyle};
  .card {
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
        background-color: ${theme.colors.red};
      }
      :active {
        background-color: ${theme.colors.primary};
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
    ${(props) => props.isHoverable && props.isSelected && selectedStyle};
  }
`;

const selectedStyle = css`
  background-color: ${theme.colors.primary};
  .delete-btn {
    background-color: ${theme.colors.white};
    .icon {
      color: ${theme.colors.primary};
    }
    :active {
      background-color: ${theme.colors.white};
    }
  }
  .text-info {
    .description {
      .left-description {
        color: ${theme.colors.white};
      }
    }
  }
  .primary-button {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
    :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
      transition: all 200ms ease-out;
    }
    :active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }

    &.is-disabled {
      opacity: 50%;
      cursor: not-allowed;
      z-index: 2;
    }

    &.with-focus {
      border: 1px solid white;
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      :hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.white};
      }
      :active {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
      }
    }
  }
`;

const hoverableStyle = css`
  :hover {
    box-shadow: 0px 0px 8px ${theme.colors.primary_halo};
    transform: scale(1.05);
    transition: transform 0.4s ease-out;
    cursor: pointer;
  }
`;
