import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import DefaultLayout from "./components/DefaultLayout";

import HomePage from "./pages/HomePage";
import AddressesPage from "./pages/AddressesPage";

function App() {
  return (
    <Router>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/address" element={<AddressesPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </DefaultLayout>
    </Router>
  );
}

export default App;
