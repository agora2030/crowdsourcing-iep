import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Advanced from "../pages/Advanced";
import FinishTest from "../pages/FinishTest";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Privacy from "../pages/Privacy";
import Profile from "../pages/Profile";
import Test from "../pages/Test";
import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "questions",
    element: (
      <ProtectedRoute>
        <Advanced />
      </ProtectedRoute>
    ),
  },
  {
    path: "privacy",
    element: (
      <ProtectedRoute>
        <Privacy />
      </ProtectedRoute>
    ),
  },
  {
    path: "test",
    element: (
      <ProtectedRoute>
        <Test />
      </ProtectedRoute>
    ),
  },
  {
    path: "profile",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: "thanks",
    element: <FinishTest />,
  },
]);
