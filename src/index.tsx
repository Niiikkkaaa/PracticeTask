import React from "react";
import { Provider } from "react-redux";

import { ThemeProvider } from "@emotion/react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "reportWebVitals";
import { store } from "store/store";

import App from "./App";

import "./index.scss";
import { theme } from "styles/theme";

import "plugins/i18n";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
  // </React.StrictMode>
);

reportWebVitals();
