import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

export const AppLayout=() => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

