import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { ErrorBoundary, App } from "@components";

import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
