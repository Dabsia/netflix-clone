import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
        <div className="footer__wrapper">
        
            <Link to="/"> Questions? Contact us</Link>
            <div className="links">
                <div className="link1">
                <Link to="/"> FAQ</Link>
                <Link to="/"> Investor Relations</Link>
                <Link to="/"> Privacy</Link>
                <Link to="/"> Speed Test</Link>
                </div>
                <div className="link2">
                <Link to="/"> Help Center</Link>
                <Link to="/"> Jobs</Link>
                <Link to="/"> Cookie Preferences</Link>
                <Link to="/"> Legal Notices</Link>
                </div>
                <div className="link3">
                <Link to="/"> Account</Link>
                <Link to="/"> Ways to Watch</Link>
                <Link to="/"> Cooperate Information</Link>
                <Link to="/"> Only on Netflix</Link>
                </div>
                <div className="link4">
                <L