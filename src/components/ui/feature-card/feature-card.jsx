import React from "react";
import Title, { TitleSize } from "../title/title";
import {StyledFeature, StyledHeader, StyledImg, FeatureOwner, StyledText} from "./style";

// Карточка
function FeatureCard({
  title, // название особенности
  owner, // владелец особенности (обычный магазин, фермерский)
  about, // описание особенности
  isNegative, // является ли особенность отрицательной
  image // иконка
}) {
  return (
    <StyledFeature isNegative={isNegative}>
      <StyledHeader>
        <StyledImg
          width={56}
          height={56}
          src={image}
          alt={title}
        />
        <div>
          <FeatureOwner isNegative={isNegative}>
            {owner}
          </FeatureOwner>
          <Title size={TitleSize.EXTRA_SMALL}>{title}</Title>
        </div>
      </StyledHeader>
      <StyledText
        dangerouslySetInnerHTML={{ __html: about }}
      />
    </StyledFeature>
  );
}

export default FeatureCard;
