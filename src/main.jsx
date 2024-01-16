import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {   createBrowserRouter, RouterProvider, } from "react-router-dom";
import Todo from './Components/Todo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Todo />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
