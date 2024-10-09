import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About";

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
    path: "/contact",
    element: <Contact />,
    // children : [{}]
  },
  {
    path: "/about",
    element: <About />,
    // children : [{}]
  },
  {},
]);
export default Router;
