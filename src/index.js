import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import ClassDetails from "./pages/ClassDetails";
import Search from "./pages/Search";
import MySchedule from "./pages/MySchedule";
import NotFound from "./pages/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/classes/:id" element={<ClassDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/schedule" element={<MySchedule />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
