import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link to="/" id="logo">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
          <Line
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
            transition={{ duration: 0.75 }}
          />
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
          <Line
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "50%" : "0%" }}
            transition={{ duration: 0.75 }}
          />
        </li>
        <li>
          <Link to="contact">3. Contact Us</Link>
          <Line
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
            transition={{ duration: 0.75 }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 5;
  li {
    padding-left: 10rem;
    position: relative;
  }

  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-weight: lighter;
    font-family: "Lobster", cursive;
  }
  @media (max-width: 1250px) {
    flex-direction: column;
    padding: 1rem;
    a {
      display: inline-block;
      margin: 1rem 0;
    }
    ul {
      padding: 1rem;
      justify-content: space-between;
      gap: 1rem;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  width: 0%;
  background-color: #23d997;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1250px) {
    height: 0;
  }
`;
export default Nav;
