import Button from "/src/components/ui/button/button";
import { styled } from "styled-components";

export const StyledButton = styled(Button)`
  color: ${(props) => props.theme.colorText};
  background-color: white;
  &:hover,
  &:active,
  &:target {
    color: white;
  }
`;
