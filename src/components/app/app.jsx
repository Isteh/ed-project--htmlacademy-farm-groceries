import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import features from "/src/mocks/features";
import groceries from "/src/mocks/groceries";
import { GlobalStyle } from "./style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoute } from "/src/components/const";
import MainPage from "/src/components/pages/main-page/main-page";
import BuyPage from "/src/components/pages/buy-page/buy-page";
import ScrollToTop from "../ui/scroll-up/scroll-up";

export default function App() {
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage features={features} />} />
            <Route
              path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
              element={<BuyPage groceries={groceries} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
