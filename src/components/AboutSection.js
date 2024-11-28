import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div className="">
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Contact us for any photography and videography ideas tha you have. We
          have professionals with amazing skill to help you achieve
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={home1} alt="" />
      </div>
    </div>
  );
};

export default AboutSection;
