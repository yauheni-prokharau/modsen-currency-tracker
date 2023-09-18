import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { ErrorBoundary, App, Theme } from "@components";

import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <Theme>
          <App />
        </Theme>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
