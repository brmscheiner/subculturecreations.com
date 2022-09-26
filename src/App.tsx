import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation';
import Articles from './pages/Articles';
import Projects from './pages/Projects';
import About from './pages/About';
import Error from './pages/Error';
import { routes } from './constants/routes';

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Projects />,
    errorElement: <Error />,
  },
  {
    path: routes.articles,
    element: <Articles />,
    errorElement: <Error />,
  },
  {
    path: routes.projects,
    element: <Projects />,
    errorElement: <Error />,
  },
  {
    path: routes.about,
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: '/*',
    element: <Error title="Page not found" message="The page you are looking for may have been moved or removed." />
  }
])

function App() {
  return (
    <div className="font-mono mb-40">
      <Navigation />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
