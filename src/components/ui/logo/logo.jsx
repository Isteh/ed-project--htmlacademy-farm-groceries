import React from "react";
import { ReactComponent } from "/src/assets/logo.svg";
import { StyledLink, StyledText } from "./style";
import { useLocation } from "react-router-dom";
import { AppRoute } from "/src/components/const";

function Logo() {
  const { pathname } = useLocation();

  return (
    <StyledLink
      to={AppRoute.MAIN}
      {...(pathname === AppRoute.MAIN ? { as: "span" } : {})}
    >
      <ReactComponent />
      <StyledText>Фермерские продукты</StyledText>
    </StyledLink>
  );
}

export default Logo;
// return pathname === AppRoute.MAIN ? (
//   <StyledLogoMainPage>
//     <LogoImage />
//     <Text>Котокафе</Text>
//   </StyledLogoMainPage>
// ) : (
//   <StyledLogo to={AppRoute.MAIN}>
//     <LogoImage />
//     <Text>Котокафе</Text>
//   </StyledLogo>
// );
