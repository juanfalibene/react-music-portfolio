import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className='header'>
      <Link to={"/home"}>
        <h1 className='logo'>mP</h1>
      </Link>
      <Navbar />
      <Footer />
    </header>
  );
};
