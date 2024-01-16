import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Nav from "/src/components/layout/nav/nav";
import {StyledSection} from "./style";

function Header() {
  return (
    <StyledSection>
      <Logo />
      <Nav />
    </StyledSection>
  );
}

export default Header;
