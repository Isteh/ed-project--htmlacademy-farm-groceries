import { styled } from "styled-components";
import { Ul } from "/src/components/styled";

export const CardWrapper = styled.div`
  font-size: 14px;
  line-height: 150%;
  display: grid;
  grid-template-columns: 248px 1fr;
  column-gap: 20px;
  padding: 20px;
  height: 248px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
export const StyleImg = styled.img`
  width: 100%;
`;
export const SecondColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TabsList = styled.div`
  margin: 16px 0;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;
export const Price = styled.strong`
  background-color: #d8ecfe;
  padding: 4px 8px;
  display: block;
  margin-top: 14px;
  width: fit-content;
`;
export const PropertiesWrapper = styled(Ul)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
