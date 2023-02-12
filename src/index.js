import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FirebaseContext } from './Contexts/FirebaseContext';
import { app } from "../src/Firebase/config";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
            <App />
);
