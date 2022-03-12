import React from "react";
import "./Navigation.css";
import logo from "../../Assets/netflixLogo.png";
import SecondaryBtn from "../../UI/SecondaryBtn/SecondaryBtn";
import { Link } from "react-router-dom";

const Navigation = () => {
  const url = "/netflix-show";
  return (
    <nav className="navBar">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <SecondaryBtn path={url} />
    </nav>
  );
};

export default Navigation;
