import React from "react";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import goodTimes from "../img/goodtimes-small.png";
import theRacer from "../img/theracer-small.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const OurWork = () => {
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="hidden"
      style={{ background: "#fff" }}
    >
      <Movie>
        <h2>The Athelete</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={athlete} alt="athlete" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Raacer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theRacer} alt="theRacer" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodTimes} alt="goodTimes" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;
  overflow: hidden;
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  h2 {
    padding: 1rem 0;
  }
  img {
    height: 70vh;
    width: 100%;
    object-fit: cover;
  }
  .line {
    height: 0.5rem;
    width: 100%;
    background-color: #ccc;
    margin-bottom: 3rem;
  }
`;
export default OurWork;
