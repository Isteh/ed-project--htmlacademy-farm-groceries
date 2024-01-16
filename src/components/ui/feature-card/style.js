import styled from "styled-components"

export const StyledFeature = styled.section`
  width: 540px;
  min-height: 197px;
  padding: 20px;
  background-color: ${(props) => props.isNegative ? props.theme.colorDisadvantagesLight : props.theme.colorAdvantagesLight};
  box-sizing: border-box;
`

export const StyledHeader = styled.header`
  display: flex;
  margin-bottom: ${(props) => props.theme.indent};
  text-align: left;
`

export const StyledImg = styled.img`
  float: left;
  width: 56px;
  height: 56px;
  margin-right: ${(props) => props.theme.indent};
`

export const FeatureOwner = styled.span`
  display: block;
  min-height: 25px;
  margin-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  line-height: 25px;
  color: #ffffff;
  background-color: ${(props) => props.isNegative ? props.theme.colorDisadvantages : props.theme.colorAdvantages};
`

export const StyledText = styled.p`
  padding: 0;
  margin: 0;
  text-align: left;
`
