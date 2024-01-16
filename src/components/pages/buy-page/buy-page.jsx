import React, { useState } from "react";

import BuyForm from "/src/components/blocks/buy-form/buy-form";
import { ErrorMessage, TwoColumnWrapper } from "./style";
import ProductList from "/src/components/blocks/product-list/product-list";

function BuyPage({ groceries }) {
  const [swiperRef, setSwiperRef] = useState(null);

  return groceries && groceries.length ? (
    <>
      <TwoColumnWrapper>
        <BuyForm productRef={swiperRef} groceries={groceries} />
        <ProductList
          setSwiperRef={setSwiperRef}
          groceries={groceries}
        ></ProductList>
      </TwoColumnWrapper>
    </>
  ) : (
    <ErrorMessage> Все продукты раскупили!</ErrorMessage>
  );
}

export default BuyPage;
