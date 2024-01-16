import React, { useState, useRef, useEffect } from "react";
import {
  WrapperTitle,
  StyledWrapper,
  StyleCheckbox,
  PriceWrapper,
  AdressInput,
  StyledForm,
} from "./style";
import Title, { TitleSize } from "/src/components/ui/title/title";
import CheckboxButton from "/src/components/ui/checkbox/checkbox";
import { Li, Ol } from "/src/components/styled";
import Button from "/src/components/ui/button/button";

function BuyForm({ groceries, productRef }) {
  const [price, setPrice] = useState(0);
  const [adress, setAdress] = useState("");
  const [productList, setProductList] = useState([]);
  const buttonBuy = useRef();

  const productChangeHandler = (e) => {
    const index = e.target.id.slice(7);
    if (e.target.checked) {
      setPrice((prev) => prev + Number(e.target.value));
      setProductList([...productList, index]);
      productRef.slideTo(index, 0);
    } else {
      setPrice((prev) => prev - Number(e.target.value));
      productList.length === 1
        ? productList.splice(0, 1)
        : setProductList([
            ...productList.slice(0, index),
            ...productList.slice(index + 1),
          ]);
    }
  };
  useEffect(() => {
    price > 0 && adress
      ? (buttonBuy.current.disabled = false)
      : (buttonBuy.current.disabled = true);
  }, [price, adress]);

  const getAlertMessage = () => {
    const titleList = productList
      .map((item) => groceries[item].name)
      .join(", ");
    return `Вы купили ${titleList} за ${price}, доставка будет на адрес ${adress}`;
  };

  return (
    <StyledForm>
      <StyledWrapper>
        <WrapperTitle>
          <Title size={TitleSize.EXTRA_SMALL} level="2">
            Выберите продукты
          </Title>
        </WrapperTitle>
        <Ol>
          {groceries.map((product) => {
            return (
              <Li key={product.id}>
                <CheckboxButton
                  id={`product${product.id}`}
                  labelComponent={StyleCheckbox}
                  name="product-name"
                  value={product.price}
                  text={product.name}
                  onChange={productChangeHandler}
                />
              </Li>
            );
          })}
        </Ol>
      </StyledWrapper>
      <StyledWrapper>
        <WrapperTitle>
          <Title size={TitleSize.EXTRA_SMALL} level="2">
            Сделать заказ
          </Title>
          <AdressInput
            type="text"
            placeholder="Введите адрес доставки"
            onChange={(e) => {
              setAdress(e.target.value);
            }}
          />
          <PriceWrapper>
            Цена
            <Title size={TitleSize.SMALL} level="3">
              {price}
            </Title>
          </PriceWrapper>
          <Button
            ref={buttonBuy}
            onClick={() => {
              console.log(getAlertMessage());
            }}
          >
            Купить
          </Button>
        </WrapperTitle>
      </StyledWrapper>
    </StyledForm>
  );
}

export default BuyForm;
