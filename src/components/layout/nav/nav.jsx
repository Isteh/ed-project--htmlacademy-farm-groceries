import React from "react";
import { AppRoute } from "../../const";
import Button from "/src/components/ui/button/button";
import { StyledButton } from "./style";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const buttons = [
  {
    to: AppRoute.MAIN,
    item: (
      <StyledButton link={AppRoute.MAIN} key={AppRoute.MAIN} minWidth="260">
        Главная
      </StyledButton>
    ),
  },
  {
    to: AppRoute.BUY,
    item: (
      <Button link={AppRoute.BUY} key={AppRoute.BUY} minWidth="260">
        Купить
      </Button>
    ),
  },
];

function Nav() {
  const pageUrl = useLocation().pathname;
  console.log(pageUrl);

  return (
    <nav>
      {buttons
        .filter((button) => button.to !== pageUrl)
        .map((button) => console.log(buttons) || button.item)}
    </nav>
  );
}

export default Nav;
