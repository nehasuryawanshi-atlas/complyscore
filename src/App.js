import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/layout";
import { Dashboard } from "./components/Layout/Dashboard/Dashboard";
import { Vendor } from "./components/Vendor/vendor";
import { Assessement } from "./components/Assessment/Assessment";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="vendor" element={<Vendor />} />
            <Route path="assessment" element={<Assessement />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
