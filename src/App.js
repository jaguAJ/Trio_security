import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout.js";
import Home from "./pages/Home.js";
import Industries from "./pages/Industries.js";
import Getintouch from "./pages/Getintouch.js";
import Aboutus from "./pages/Aboutus.js";

const App = () => {
  // Define the router with the routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "industries", element: <Industries /> },
        { path: "GetInTouch", element: <Getintouch /> },
        { path: "aboutus", element: <Aboutus /> },
        { path: "ourservice", element: <Aboutus /> },
      ],
    },
  ]);

  // Return RouterProvider to make use of the router
  return <RouterProvider router={router} />;
};

export default App;
