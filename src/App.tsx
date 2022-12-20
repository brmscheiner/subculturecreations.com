import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration, useLocation } from "react-router-dom";

import "./App.css";
// import Articles from './pages/Articles';
import Home from './pages/home/Home';
import Projects from "./pages/Projects";
import Galleries from "./pages/galleries/Galleries";
import About from "./pages/About";
import Error from "./pages/Error";
import { routes } from "./constants/routes";
import { galleries } from "./pages/galleries/Galleries";
import GalleryPage from "./pages/galleries/GalleryPage";

const galleryRoutes = galleries.map((g) => ({
  path: `${routes.galleries}/${g.path}`,
  element: <GalleryPage data={g} />,
  errorElement: <Error />,
}));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error />,
      },
      ...galleryRoutes,
      {
        path: routes.galleries,
        element: <Galleries />,
        errorElement: <Error />,
      },
      // {
      //   path: routes.articles,
      //   element: <Articles />,
      //   errorElement: <Error />,
      // },
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
        path: "*",
        element: (
          <Error
            title="Page not found"
            message="The page you are looking for may have been moved or removed"
          />
        ),
      },
    ]
  }
]);

function Root() {
  return <>
    <Outlet />
    <ScrollRestoration />
  </>
}

function App() {
  return <RouterProvider router={router} />
}

export default App;
