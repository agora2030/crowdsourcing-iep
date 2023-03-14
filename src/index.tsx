import React from "react";
import ReactDOM from 'react-dom/client';
import Advanced from "./pages/Advanced";
import reportWebVitals from './reportWebVitals';
import './App.css';
import 'react-tooltip/dist/react-tooltip.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

// CONFIGS
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const render = () => (

      <RouterProvider router={router} />
      

  );


if (process.env.NODE_ENV === 'development') {
  root.render(render());
} else {
  root.render(<React.StrictMode>{render()}</React.StrictMode>);
}

reportWebVitals();