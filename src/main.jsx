import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Yggdrasil from './main';
import Asgard from './Component/Asgard';
import Midgard from './Component/Midgard';
import Vanaheim from './Component/Vanaheim';
import Jotunheim from './Component/Jotunheim';
import Alfheim from './Component/Alfheim';
import Svartalfheim from './Component/Svartalfheim';
import Niflheim from './Component/Niflheim';
import Muspelheim from './Component/Muspelheim';
import Helheim from './Component/Helheim';
// import Button from './Button';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Yggdrasil />,
      },
      {
        path: '/Asgard',
        element: <Asgard />,
      },
      {
        path: '/Midgard',
        element: <Midgard />,
      },
      {
        path: '/Vanaheim',
        element: <Vanaheim />,
      },
      {
        path: '/Jotunheim',
        element: <Jotunheim />,
      },
      {
        path: '/Alfheim',
        element: <Alfheim />,
      },
      {
        path: '/Svartalfheim',
        element: <Svartalfheim />,
      },
      {
        path: '/Niflheim',
        element: <Niflheim />,
      },
      {
        path: '/Muspelheim',
        element: <Muspelheim />,
      },
      {
        path: '/Helheim',
        element: <Helheim />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
