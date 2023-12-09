import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Home from './components/Home.jsx';
import Meista from './components/Meista.jsx';
import Tuotteet from './components/Tuotteet.jsx';
import Rekisterointi from './components/Rekisterointi.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: 'meista',
        element: <Meista />,
      },
      {
        path: 'tuotteet',
        element: <Tuotteet />,
      },
      {
        path: 'rekisterointi',
        element: <Rekisterointi />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
