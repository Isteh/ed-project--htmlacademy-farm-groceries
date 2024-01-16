import React, { forwardRef } from "react";
import ProductCard from "/src/components/ui/product-card/product-card";
import { ListWrapper } from "./styled";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Pagination, Scrollbar, Mousewheel } from "swiper/modules";

function ProductList({ groceries, setSwiperRef }) {
  return (
    <>
      <ListWrapper
        modules={[Pagination, Scrollbar, Mousewheel]}
        onSwiper={setSwiperRef}
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel={true}
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
      {/* <ListWrapper ref={ref}>
        {groceries.map((item) => {
          return <ProductCard key={item.id} product={item} />;
        })}
      </ListWrapper> */}
    </>
  );
}

export default ProductList;
