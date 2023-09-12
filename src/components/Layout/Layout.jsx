import React from "react";
import Routers from "../../routers/Routers";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ScrollToTop from "../UI/ScrollToTop";
import { ToastContainer } from "react-toastify";

export default function Layout(props) {
  return (
    <div style={{position: "relative"}}>
      {props.displayHeader && <Header />}
      <Routers />
      <ScrollToTop />
      {props.displayHeader && <Footer />}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
