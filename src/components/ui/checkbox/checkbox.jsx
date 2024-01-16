import React, { useState } from "react";
import styled from "styled-components";
import { VisuallyHiddenInput } from "/src/components/styled";

const Label = styled.label`
  display: block;
`;

// Радиокнопка
function CheckboxButton({
  labelComponent, // компонент для отображения label
  checked,
  name, // имя
  value, // значение
  text, // текст элемента
  onChange, // событие при изменении
  ...props
}) {
  const LabelComponent = labelComponent;
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <Label>
      <VisuallyHiddenInput
        value={value}
        checked={isChecked}
        name={name}
        onChange={(e) => {
          setIsChecked((prev) => !prev);
          onChange && onChange(e);
        }}
        {...props}
        type="checkbox"
      />
      <LabelComponent $isChecked={isChecked}>{text}</LabelComponent>
    </Label>
  );
}

export default CheckboxButton;
