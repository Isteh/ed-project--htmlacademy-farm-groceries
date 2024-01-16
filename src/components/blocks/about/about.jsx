import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import {StyledSection, StyledText} from "./style";

function About() {
  return (
    <StyledSection>
      <Title size={TitleSize.BIG} level="1">
        Магазин фермерских продуктов с доставкой
      </Title>
      <StyledText>
        Все продукты изготавливаются под заказ. Фермеры начинают готовить
        продукты за день до отправки заказа клиентам. Именно поэтому мы
        принимаем заказы заранее и доставляем продукты максимально свежими.
      </StyledText>
    </StyledSection>
  );
}

export default About;
