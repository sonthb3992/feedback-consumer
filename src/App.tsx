import React from "react";
import "./App.css";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/page-home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
