import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import { useState } from "react";
import Landing from "./pages/landingpage";
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
        <Route
           index
          element={<Landing />}
        />
        {/* <Route element={<ProtectedRoutes />}>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Route> */}
          {/* <Route element={<Layout />}>
            <Route index element={<Home />} />
          </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
