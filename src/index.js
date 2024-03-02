import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "../src/store/store";
import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

reportWebVitals(sendToVercelAnalytics);
