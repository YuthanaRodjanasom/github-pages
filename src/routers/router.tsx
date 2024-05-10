import { createHashRouter } from "react-router-dom";
import HomePage from "../HomePage";

export const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/2",
    element: <div>2</div>,
  },
]);
