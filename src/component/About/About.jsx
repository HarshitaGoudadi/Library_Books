import React from "react";
import "./about.css";
import Nav from "../Navbar/Nav";

const About = () => {
  return (
    <>
      <Nav />
      <div className="about-block">
        <h1>
          <b>ABOUT BOOKBUDDY</b>
        </h1>
        <br></br>
        <p>
          Books constitute capital. A library book lasts as long as a house, for
          hundreds of years. It is not, then, an article of mere consumption but
          fairly of capital, and often in the case of professional men, setting
          out in life, it is their only capital. BookBuddy is a powerful book
          management app that gives you access to your entire book catalog,
          anywhere. Using BookBuddy is fun and easy, allowing you to quickly
          find any book in your library.
        </p>
      </div>
    </>
  );
};

export default About;
