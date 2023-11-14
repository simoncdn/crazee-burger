import React from "react"
import styled from "styled-components/macro"
import { theme } from "../../theme"

export default function ToggleButton({
  isChecked,
  onToggle,
  labelIfChecked = "Fermer",
  labelIfUnchecked = "Ouvrir",
}) {
  return (
    <ToggleButtonStyled>
      <input
        type="checkbox"
        className="toggle"
        id="rounded"
        checked={isChecked}
        onChange={onToggle}
      />
      <label
        htmlFor="rounded"
        className="rounded"
        data-checked={labelIfChecked}
        data-unchecked={labelIfUnchecked}
      ></label>
    </ToggleButtonStyled>
  )
}

const ToggleButtonStyled = styled.div`

  display: flex;
  margin-right: 10px;
  input[type="checkbox"] {
    &.toggle {
      display: none;
    }

    &.toggle + label {
      display: inline-block;
      height: 40px;
      width: 200px;
      position: relative;
      font-size: ${theme.fonts.size.XXS};
      letter-spacing: 0.5px;
      border: 2px solid ${theme.colors.background_dark};
      padding: 0;
      margin: 0;
      cursor: pointer;
      box-sizing: border-box;
      transition: all 500ms ease;
    }

    &.toggle + label:before {
      content: "";
      position: absolute;
      top: 3px;
      height: 30px;
      width: 30px;
      transition: all 500ms ease;
      z-index: 3;
    }

    &.toggle + label:after {
      width: 150px;
      text-align: center;
      z-index: 2;
      text-transform: uppercase;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &.toggle + label.rounded {
      border-radius: 30px;
    }

    &.toggle + label.rounded:before {
      border-radius: 50%;
    }

    &.toggle:not(:checked) + label {
      background-color: ${theme.colors.background_dark};
    }

    &.toggle:not(:checked) + label:after {
      content: attr(data-unchecked);
      right: 8px;
      left: auto;
      opacity: 1;
      color: ${theme.colors.primary};
      font-weight: ${theme.fonts.weights.bold};
    }

    &.toggle:not(:checked) + label:before {
      left: 3px;
      background-color: ${theme.colors.primary};
    }

    &.toggle:checked + label {
      text-align: left;
      border-color: ${theme.colors.primary};
    }

    &.toggle:checked + label:after {
      content: attr(data-checked);
      left: 9px;
      right: auto;
      opacity: 1;
      color: ${theme.colors.dark};
      letter-spacing: 0px;
    }
    &.toggle:checked + label:before {
      left: 162px;
      background-color: ${theme.colors.primary};
    }
  }
`
