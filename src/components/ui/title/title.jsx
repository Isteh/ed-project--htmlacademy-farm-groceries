import React from "react";
import { StyledTitle } from "./style";

export const TitleSize = {
  BIG: "big",
  MEDIUM: "medium",
  SMALL: "small",
  EXTRA_SMALL: "extra_small",
};

function Title({ children, size, level }) {
  return (
    <StyledTitle as={`h${level}`} $size={size}>
      {children}
    </StyledTitle>
  );
}

export default Title;
