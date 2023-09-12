import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Cars from "../pages/Cars";
import Contact from "../pages/Contact";
import Driver from "../pages/Driver";
import Faq from "../pages/Faq";
import Home from "../pages/Home";
import Policy from "../pages/Policy";
import Register from "../pages/Register";
import SelectedBlog from "../pages/SelectedBlog";
import SignIn from "../pages/SignIn";
import Error from "../pages/Error";
import Reserve from "../pages/Reserve";

export default function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/WheelsonDemand" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:id" element={<SelectedBlog />} />
        <Route path="/cars/:id" element={<Cars />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/become-a-driver" element={<Driver />} />
        <Route path="/FAQS" element={<Faq />} />
        <Route path="/privacy-policy" element={<Policy />} />
        <Route path="/*" element={<Error />} />
        <Route path="/reserve/:id" element={<Reserve />} />
      </Routes>
    </div>
  );
}
