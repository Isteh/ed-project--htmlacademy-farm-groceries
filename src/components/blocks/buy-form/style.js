import { styled } from "styled-components";

export const StyledForm = styled.form`
  overflow-y: overlay;
  max-height: 100%;
  width: 373px;
`;

export const StyledWrapper = styled.article`
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 18px;
`;

export const WrapperTitle = styled.div`
  margin: 23px 20px 12px;
`;

export const StyleCheckbox = styled.span`
  padding: 15px 20px;
  cursor: pointer;

  display: block;
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 22px;
    height: 22px;
    border: 2px solid rgba(0, 0, 0, 0.1);

    ${(props) => {
      return props.$isChecked
        ? `
            background-color: ${props.theme.colorButton};
          `
        : "";
    }}

    position: absolute;
    right: 20px;
    top: 15px;
  }

  ${(props) => {
    return props.$isChecked
      ? `
      &:before {
        content:'';
        width: 16px;
        height: 16px;
        position: absolute;
        z-index: 1;
        top: 19px;
        right: 24px;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzExMF85MykiPgo8cGF0aCBkPSJNMTUuNzY1NyAyLjM1OTI2QzE1LjQ1MzMgMi4wNDY4MiAxNC45NDY4IDIuMDQ2ODIgMTQuNjM0MyAyLjM1OTI2TDUuMDQ5ODMgMTEuOTQzOUwxLjM2NTcgOC4yNTk3M0MxLjA1MzMgNy45NDcyOSAwLjU0Njc5NyA3Ljk0NzMyIDAuMjM0MzI4IDguMjU5NzNDLTAuMDc4MTA5NCA4LjU3MjEzIC0wLjA3ODEwOTQgOS4wNzg2MyAwLjIzNDMyOCA5LjM5MTA3TDQuNDg0MTQgMTMuNjQwOEM0Ljc5NjQ1IDEzLjk1MzIgNS4zMDMzMyAxMy45NTMgNS42MTU1MiAxMy42NDA4TDE1Ljc2NTcgMy40OTA2M0MxNi4wNzgxIDMuMTc4MjMgMTYuMDc4MSAyLjY3MTcgMTUuNzY1NyAyLjM1OTI2WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xMTBfOTMiPgo8cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==");`
      : ``;
  }}
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  line-height: 150%;
  margin-bottom: 32px;
`;

export const AdressInput = styled.input`
  padding: 13px 0 13px 12px;
  width: 100%;
  font-size: 14px;
  line-height: 150%;
  margin: 24px 0 20px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
