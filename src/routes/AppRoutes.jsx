import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PUBLIC_ROUTES, PROTECTED_ROUTES } from "../utils/navbar_constants";
import ProtectedRoute from "../auth/ProtectedRoute";
import NotFound from "../pages/NotFound";
import Layout from "../components/Layout";

const Loading = () => <div>Loading...</div>;

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {PUBLIC_ROUTES.map(({ path, Component, Layout }) => (
          <Route key={path} path={path} element={<Layout><Component /></Layout>} />
        ))}

        {/* <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          {PROTECTED_ROUTES.map(({ path, Component, Layout }) => (
            <Route key={path} path={path} element={<Layout><Component /></Layout>} />
          ))}
        </Route> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
