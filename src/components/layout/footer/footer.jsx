import React from "react";
import Logo from "/src/components/ui/logo/logo";
import { StyledSection, Copyright } from "./style";

function Footer() {
  return (
    <StyledSection>
      <Logo />
      <Copyright> Написан 2024</Copyright>
    </StyledSection>
  );
}

export default Footer;
