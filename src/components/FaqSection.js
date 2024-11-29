import React from "react";
//styles
import styled from "styled-components";
import { About } from "../styles";

const FaqSection = () => {
  return (
    <FAQ>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do i start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            beatae.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Daily schedule?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            beatae.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Different payment methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            beatae.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>what product do you offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            beatae.
          </p>
        </div>{" "}
        <div className="faq-line"></div>
      </div>
    </FAQ>
  );
};

const FAQ = styled(About)`
  display: block;
  h2 {
    font-weight: lighter;
    padding-bottom: 2rem;
  }
  span {
    display: block;
  }
  .faq-line {
    background-color: #ccc;
    width: 100%;
    height: 0.2rem;
    margin: 2rem 0;
  }
  .question {
    cursor: pointer;
    padding: 3rem 0rem;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;

export default FaqSection;
