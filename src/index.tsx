import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { Form } from './pages/Form';
import './index.css';


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/catalog',
          element: <Catalog />,
        },
        {
          path: '/form',
          element: <Form />,
        },
      ]
    }
    ])

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
