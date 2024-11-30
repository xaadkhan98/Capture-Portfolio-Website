import React from "react";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import goodTimes from "../img/goodtimes-small.png";
import theRacer from "../img/theracer-small.png";
import styled from "styled-components";

const OurWork = () => {
  return (
    <Work>
      <Movie>
        <h2>The Athelete</h2>
        <div className="line"></div>
        <Link>
          <img src={athlete} alt="athlete" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Raacer</h2>
        <div className="line"></div>
        <Link>
          <img src={theRacer} alt="theRacer" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link>
          <img src={goodTimes} alt="goodTimes" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled.div`
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
