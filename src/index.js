import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "/src/components/app/app";
import { defaultTheme } from "/src/themes/default";
import { ThemeProvider } from "styled-components";

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
