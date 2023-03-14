import { Button } from "@mui/material";
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Advanced from "../pages/Advanced";
import FinishTest from "../pages/FinishTest";
import Home from "../pages/Home";
import Privacy from "../pages/Privacy";
import Profile from "../pages/Profile";
import Test from "../pages/Test";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "questions",
    element: <Advanced />,
  },
  {
    path: "privacy",
    element: <Privacy />,
  },
  {
    path: "test",
    element: <Test />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "thanks",
    element: <FinishTest />,
  },
]);
