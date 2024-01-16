import React from "react";
import { StyledTab } from "./style";

function Tab({ children, productID, tabId, currentTabId, onClick }) {
  return (
    <>
      <StyledTab
        id={`product-${productID}-tab-${tabId}`}
        $isActive={tabId === currentTabId}
        onClick={onClick}
      >
        {children}
      </StyledTab>
    </>
  );
}

export default Tab;
