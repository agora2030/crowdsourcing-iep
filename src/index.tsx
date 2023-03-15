import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "react-tooltip/dist/react-tooltip.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./App.css";

// CONFIGS
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const render = () => <RouterProvider router={router} />;

if (process.env.NODE_ENV === "development") {
  root.render(render());
} else {
  root.render(<React.StrictMode>{render()}</React.StrictMode>);
}

reportWebVitals();
