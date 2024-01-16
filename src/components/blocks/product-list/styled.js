import { styled } from "styled-components";
import { Swiper } from "swiper/react";

export const ListWrapper = styled(Swiper)`
  min-width: 727px;
  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;
