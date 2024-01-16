import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import { StyledMain } from "./style";
import { Outlet } from "react-router-dom";

// Обёртка для контента страниц
function PageWrapper({ features }) {
  return (
    <>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </>
  );
}

export default PageWrapper;
