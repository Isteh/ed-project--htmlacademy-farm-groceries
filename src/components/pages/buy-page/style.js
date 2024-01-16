import { styled } from "styled-components";

export const ErrorMessage = styled.p`
  display: block;
  font-size: 50px;
  margin-left: 200px;
  margin-top: 200px;
`;

export const TwoColumnWrapper = styled.div`
  padding: 40px 90px 0;
  display: grid;
  grid-template-columns: 373px 1fr;
  column-gap: 20px;

  position: absolute;
  top: ${(props) => props.theme.headerHeight};
  bottom: ${(props) => props.theme.footerHeight};
  background-color: ${(props) => props.theme.backgroundColorGray};
  max-width: ${(props) => props.theme.pageWidth};
  box-sizing: border-box;
`;
