import React from "react";
import "./styles/reset.scss";
import "./styles/index.scss";
import App from "./App";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./contextProvider/ContextProvider";
import { Provider } from "react-redux";
import { store } from "./core/redux/app/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ContextProvider>
          <App />
        </ContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
