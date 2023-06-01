import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Services from "./pages/services/Services";
import About from "./pages/about/About";
import Careers from "./pages/careers/Careers";
import LandingPage from "./pages/homepage/LandingPage";
// import ProtectedRoute from "./components/protected/ProtectedRoute";
import Signup from "./pages/user/Signup";
import Login from "./pages/user/Login";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {/* <ProtectedRoute>
          </ProtectedRoute> */}
          <LandingPage />
        </>
      ),
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/associates",
      element: <About />,
    },
    {
      path: "/careers",
      element: <Careers />,
    },
    {
      path: "/api/users",
      element: (
        <>
          <Signup />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Login />
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
