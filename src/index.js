import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { persistedStore, store } from "./redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme';
import "./assets/locales/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
);
