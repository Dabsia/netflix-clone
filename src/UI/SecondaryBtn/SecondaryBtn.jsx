import React from "react";
import "./SecondaryBtn.css";
import { useNavigate } from "react-router-dom";

const SecondaryBtn = ({ path }) => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/netflix-show");
  };
  return (
    <button className="secondaryBtn" onClick={redirect}>
      Sign In
    </button>
  );
};

export default SecondaryBtn;
