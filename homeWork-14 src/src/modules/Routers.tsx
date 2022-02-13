import React from "react";
import { Route, Routes } from "react-router-dom";
import { Autharization } from "./pages/autharization/Autharization";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<Autharization />}>
          <Route path="sign-in" element={<Autharization />} />
          <Route path="sign-up" element={<Autharization />} />
        </Route>
        {/*<Route path="/sign-up" element={<Autharization />} />*/}
      </Routes>
    </>
  );
};
