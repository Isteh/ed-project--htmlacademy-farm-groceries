import { styled } from "styled-components";

export const StyledTab = styled.button`
  ${(props) => {
    return props.$isActive
      ? `background-color: #88AA4D;
      color:white;`
      : "background-color: #ffffff;";
  }}
  padding:8px 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
