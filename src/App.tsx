import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Layout from "./layout";
import { useState } from "react";
import Landing from "./pages/landingpage";
import DashboardPage from "./pages/dashboard";
// import { useAuth } from "./context/Context";

const App = () => {
  // const {isAuthenticated} = useAuth()

  // const ProtectedRoutes = () => {
  //   if (isAuthenticated) {
  //     return <Outlet />;
  //   } else if (isAuthenticated === false) {
  //     return <Landing />;
  //   } else if (isAuthenticated === null) {
  //     return <div>Loading...</div>;
  //   }
  // };

  // console.log(isAuthenticated)
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />

        {/* Add Protected Routes */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
        {/* <Route element={<ProtectedRoutes />}>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
