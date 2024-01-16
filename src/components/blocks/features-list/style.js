import styled from "styled-components";
import { Ul, Li } from "/src/components/styled";

export const StyledSection = styled.section`
  position: relative;
  display: flex;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  box-sizing: border-box;
  padding-top: 100px;
  padding-bottom: 100px;
  flex-direction: column;
  align-items: center;
`;

export const StyledList = styled(Ul)`
  margin-top: 44px;
  margin-bottom: 64px;
  margin-left: -20px;
  font-size: 0;
  line-height: 0;
  text-align: center;
`;

export const StyledListItem = styled(Li)`
  display: inline-block;
  margin-left: ${(props) => props.theme.indent};
  margin-top: ${(props) => props.theme.indent};
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 27px;
  vertical-align: top;
  text-align: left;
  overflow: hidden;
`;
