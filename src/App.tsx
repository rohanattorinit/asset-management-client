import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHomePage from "./components/pages/AdminHomePage";
import AdminEmployeeList from "./components/pages/AdminEmployeeList";
import AdminAssetPageSW from "./components/pages/AdminAssetPageSW";
import AdminAssetPageHW from "./components/pages/AdminAssetPageHW";
import AdminServices from "./components/pages/AdminServices";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/list" element={<AdminEmployeeList />} />
        <Route path="/adminsw" element={<AdminAssetPageSW />} />
        <Route path="/adminhw" element={<AdminAssetPageHW />} />
        <Route path="/services" element={<AdminServices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
