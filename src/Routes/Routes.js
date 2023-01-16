import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "/",
      element: <SignIn />,
    },
  ]);

export default router;