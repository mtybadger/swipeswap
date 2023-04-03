import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './pages/Home'
import List from './pages/List'
import SellerDashboard from './pages/SellerDashboard'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import SellerSetup from './pages/SellerSetup'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sell/",
    element: <SellerDashboard />,
  },
  {
    path: "/list/",
    element: <List />,
  },
  {
    path: "/seller-setup/",
    element: <SellerSetup />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
