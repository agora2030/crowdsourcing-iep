import React from "react";
import ReactDOM from 'react-dom/client';
import Advanced from "./components/Advanced";
import reportWebVitals from './reportWebVitals';
import './App.css';
import 'react-tooltip/dist/react-tooltip.css'

// CONFIGS
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const render = () => (
    <div className="app">
      <Advanced />
    </div>
  );


if (process.env.NODE_ENV === 'development') {
  root.render(render());
} else {
  root.render(<React.StrictMode>{render()}</React.StrictMode>);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();