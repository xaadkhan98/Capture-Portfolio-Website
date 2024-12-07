import React from "react";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import goodTimes from "../img/goodtimes-small.png";
import theRacer from "../img/theracer-small.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [controls, element] = useScroll();
  const [controlsTwo, elementsTwo] = useScroll();
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="hidden"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athelete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie ref={element} variants={fade} animate={controls}>
        <h2>The Raacer</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <img src={theRacer} alt="theRacer" />
        </Link>
      </Movie>
      <Movie ref={elementsTwo} variants={fade} animate={controlsTwo}>
        <h2>Good Times</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <img src={goodTimes} alt="goodTimes" />
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;
  overflow: hidden;
  @media (max-width: 1250px) {
    padding: 2rem;
  }
`;

const Movie = styled(motion.div)`
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
    background-color: #23d997;
    margin-bottom: 3rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background-color: #fffebf;
`;

const Frame2 = styled(Frame1)`
  background-color: #ff83fb;
`;
const Frame3 = styled(Frame1)`
  background-color: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background-color: #8effa0;
`;
export default OurWork;
