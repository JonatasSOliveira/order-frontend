import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import pageRoutes from "../../constants/pagesRoutes";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {pageRoutes.map(({ path, Element }) => (
          <Route path={path} element={<Element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
