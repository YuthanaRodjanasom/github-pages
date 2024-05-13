import { createHashRouter } from "react-router-dom";
import Contacts from "../pages/Contacts";
import HomePage from "../pages/HomePage";

export const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/2",
    element: <div>2</div>,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
]);
