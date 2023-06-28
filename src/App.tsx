import React from "react";
import "./App.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./locale/i18n";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/page-home";

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  );
};

export default App;
