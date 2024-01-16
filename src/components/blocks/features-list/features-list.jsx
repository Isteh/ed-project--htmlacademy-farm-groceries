import React from "react";
import Title from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import FeatureCard from "../../ui/feature-card/feature-card";
import { StyledSection, StyledList, StyledListItem } from "./style";
import { AppRoute } from "/src/components/const";

// список преимуществ
function FeaturesList({ features }) {
  return features && features.length ? (
    <StyledSection>
      <Title>Почему фермерские продукты лучше?</Title>
      <StyledList>
        {features.map((feature) => (
          <StyledListItem key={feature.id}>
            <FeatureCard {...feature} />
          </StyledListItem>
        ))}
      </StyledList>
      <Button link={AppRoute.BUY} minWidth="260">
        Купить
      </Button>
    </StyledSection>
  ) : null;
}

export default FeaturesList;
