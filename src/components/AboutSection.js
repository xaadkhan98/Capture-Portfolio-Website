import React from "react";
import home1 from "../img/home1.png";
//styles
import { About, Hide, Description, Image } from "../styles";
// Motion
import { motion } from "motion/react";
import { titleAnim, pageAnimation, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show">
      <About>
        <Description>
          <div className="title">
            <Hide>
              <motion.h2 variants={titleAnim}>We work to make</motion.h2>
            </Hide>
            <Hide>
              <motion.h2 variants={titleAnim}>
                your <span>dreams</span> come
              </motion.h2>
            </Hide>
            <Hide>
              <motion.h2 variants={titleAnim}>true.</motion.h2>
            </Hide>
          </div>
          <motion.p variants={fade}>
            Contact us for any photography and videography ideas tha you have.
            We have professionals with amazing skill to help you achieve
          </motion.p>
          <motion.button variants={fade}>Contact Us</motion.button>
        </Description>
        <Image>
          <motion.img variants={photoAnim} src={home1} alt="" />
        </Image>
        <Wave />
      </About>
    </motion.div>
  );
};

export default AboutSection;
