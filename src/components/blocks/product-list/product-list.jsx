import React, { forwardRef } from "react";
import ProductCard from "/src/components/ui/product-card/product-card";
import { ListWrapper } from "./styled";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

function ProductList({ groceries, setSwiperRef }) {
  return (
    <>
      <ListWrapper
        onSwiper={setSwiperRef}
        direction="vertical"
        spaceBetween={12}
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{
          type: "fanction",
        }}
      >
        {groceries.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <ProductCard product={item} />
            </SwiperSlide>
          );
        })}
      </ListWrapper>
    </>
  );
}

export default ProductList;
