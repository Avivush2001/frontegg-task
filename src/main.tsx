import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css';
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-9evx0u74a7sp.frontegg.com',
  clientId: '785e094d-fc51-4e5d-a5f3-1a52072cf06c',
  appId: '4aedc76c-d6de-4f47-809d-ea8132a5558a'
};

const authOptions = {
  keepSessionAlive: true // Uncomment this in order to maintain the session alive
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <FronteggProvider 
      contextOptions={contextOptions} 
      hostedLoginBox={true}
      authOptions={authOptions}
    >
        <App />
    </FronteggProvider>
  </React.StrictMode>
);