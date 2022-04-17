import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import React from "react";

export const App = () => {

  return (
    <>
      {<BrowserRouter>
        <Routes>
          <Route path="/" element={ <Dashboard/> } />
        </Routes>
      </BrowserRouter>}
    </>
  );
};
