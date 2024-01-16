import React, { useState, useEffect } from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import {
  CardWrapper,
  TabsList,
  Price,
  PropertiesWrapper,
  StyleImg,
  SecondColumnWrapper,
} from "./style";
import Tab from "/src/components/ui/tab/tab";
import { Li } from "/src/components/styled";

function ProductCard({ product }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabsList = [
    [0, "Описание"],
    [1, "Характеристики"],
    [2, "Свойства"],
  ];

  const activeTabRender = () => {
    switch (activeTab) {
      case 0:
        return (
          <>
            <div>{product.description}</div>
            <Price>{product.price} руб. / 700 гр.</Price>
          </>
        );
      case 1:
        return (
          <>
            <PropertiesWrapper>
              {product.specifications.map((item) => (
                <Li>
                  <b>{item.property}: </b>
                  {item.value}
                </Li>
              ))}
            </PropertiesWrapper>
          </>
        );
      case 2:
        return (
          <>
            <PropertiesWrapper>
              {product.structure.map((item) => (
                <Li>
                  <b>{item.property}: </b>
                  {item.value}
                </Li>
              ))}
            </PropertiesWrapper>
          </>
        );
    }
  };

  return (
    <>
      <CardWrapper>
        <StyleImg src={product.image} />
        <SecondColumnWrapper>
          <Title level="2" size={TitleSize.SMALL}>
            {product.name}
          </Title>
          <TabsList>
            {tabsList.map((item) => {
              return (
                <Tab
                  productId={product.id}
                  tabId={item[0]}
                  currentTabId={activeTab}
                  onClick={(e) => {
                    setActiveTab(Number(e.target.id.slice(-1)));
                  }}
                >
                  {item[1]}
                </Tab>
              );
            })}
          </TabsList>
          {activeTabRender()}
        </SecondColumnWrapper>
      </CardWrapper>
    </>
  );
}

export default ProductCard;
