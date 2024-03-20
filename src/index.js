import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.jsx';
import './style/index.css';
import { Provider } from './context/books.js';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    <Provider>
        <App />
    </Provider>
);