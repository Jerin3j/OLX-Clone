import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {  Context, FirebaseContext, } from './Contexts/Context';
import { app } from "../src/Firebase/config";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <FirebaseContext.Provider value={app}>
    <Context >

            <App />

     </Context>
     </FirebaseContext.Provider>
);
