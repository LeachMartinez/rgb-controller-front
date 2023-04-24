import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider } from "react-router-dom";
import routerConfig from "./navigation/routerConfig";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <RouterProvider router={routerConfig} />
    </BrowserRouter>
  </React.StrictMode>
);
