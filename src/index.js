import React from 'react';
import './index.css';
import Home from './Components/Home';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/portfolio',
    element: <Home />,
  },
  {
    path: '/portfolio/projects',
    element: <Projects />
  },
  {
    path: '/portfolio/about',
    element: <About />
  },
  {
    path: '/portfolio/contact',
    element: <Contact />
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
