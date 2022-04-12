import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";

export const App = () => {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
      </BrowserRouter>
    </>
  );
};
