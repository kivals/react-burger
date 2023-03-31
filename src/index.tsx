import React from 'react';
import {HashRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from "./services/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
);

root.render(
  <HashRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </HashRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
