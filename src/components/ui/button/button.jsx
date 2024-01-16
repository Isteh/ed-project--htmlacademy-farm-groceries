import React, { forwardRef } from "react";
import { StyledButton } from "./style";

const Button = forwardRef(
  ({ children, minWidth, link, className, onClick, ...props }, ref) => {
    return (
      <StyledButton
        $minWidth={minWidth}
        {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
        className={className}
        ref={ref}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
);

export default Button;
