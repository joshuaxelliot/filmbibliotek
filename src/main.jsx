import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store'; // Importera Redux store
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // Importera BrowserRouter
import './index.css';
import TagManager from "react-gtm-module"

const tagManagerArgs = {
  gtmId: "GTM-TZRFV83N",
};
TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter> {/* Omge App-komponenten med BrowserRouter */}
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
