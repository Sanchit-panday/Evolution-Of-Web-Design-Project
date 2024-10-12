// Libs Import
import { createBrowserRouter } from "react-router-dom";

// Pages import
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Timeline from "../Pages/Timeline";
import Error from "../Pages/Error";

// Router Defination
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // children : [{}]
  },
  {
    path: "/home",
    element: <Home />,
    // children : [{}]
  },
  {
    path: "/error",
    element: <Error />,
    // children : [{}]
  },
  {
    path: "/contact",
    element: <Contact />,
    // children : [{}]
  },
  {
    path: "/about",
    element: <About />,
    // children : [{}]
  },
  {
    path: "/timeline",
    element: <Timeline />,
    // children : [{}]
  },
  {},
]);
export default Router;
