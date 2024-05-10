import { createHashRouter } from "react-router-dom";
import HomePage from "../HomePage";
import Contacts from "../Contacts";

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
