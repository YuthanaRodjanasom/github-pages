import { createBrowserRouter } from "react-router-dom";
import HomePage from "../HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/2",
    element: <div>2</div>,
  },
]);
