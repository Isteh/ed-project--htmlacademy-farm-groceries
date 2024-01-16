import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: block;
  min-height: 60px;
  padding: 0 24px;
  min-width: ${(props) => {
    return props.$minWidth && props.$minWidth != undefined
      ? `${props.$minWidth}px`
      : "100%";
  }};
  max-width: 700px;
  font-size: 18px;
  font-weight: bold;
  line-height: 58px;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  background-color: ${(props) => props.theme.colorButton};
  border: none;
  background-image: none;
  box-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;
  box-sizing: border-box;
  font-family: ${(props) => props.theme.fontSizeDefault};

  &:hover,
  &:active {
    background-color: #fc7427;
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }

  &[disabled] {
    background-color: #a7a7a7;
  }
`;
