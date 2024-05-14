"use client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Component/Header.jsx";
import { Layout } from "./Component/Layout.jsx";
import { LandingPage } from "./Pages/LandingPage/LandingPage.jsx";
import { Footer } from "../src/Component/Footer.jsx";
import { SignUp } from "./Pages/SignUp.jsx";
import { LogIn } from "./Pages/LogIn.jsx";
import { Home } from "./Pages/Dashboard/Home.jsx";
import { DashboardLayout } from "./Pages/Dashboard/DashboardLayout.jsx";
import { ConditionalRoute } from "./Component/ConditionalRoute.jsx";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <ConditionalRoute>
          <Header />
        </ConditionalRoute>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
          </Route>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<Home />} />
          </Route>       
        </Routes>
        <ConditionalRoute>
          <Footer />
        </ConditionalRoute>
      </BrowserRouter>
    </>
  );
}
