import { StrictMode } from 'react'; 
import { createRoot } from 'react-dom/client'; 
import { Provider } from 'react-redux'; 
import { store } from './redux/store'; 
import App from './App.jsx'; 
import { BrowserRouter } from 'react-router-dom'; 
import './index.css'; 
import TagManager from "react-gtm-module"; 

// Här konfigurerar jag Google Tag Manager
const tagManagerArgs = {
  gtmId: "GTM-TZRFV83N",
};

// Jag initierar Google Tag Manager
TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Jag ger tillgång till Redux store i appen */}
      <BrowserRouter> {/* Jag aktiverar routing */}
        <App /> {/* Jag renderar huvudkomponenten */}
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
