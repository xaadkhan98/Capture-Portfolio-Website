import React from "react";
//styles
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimatePresence } from "framer-motion";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const FaqSection = () => {
  const [controls, element] = useScroll();
  return (
    <FAQ
      ref={element}
      variants={scrollReveal}
      initial="hidden"
      animate={controls}
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimatePresence layout>
        <Toggle title="How do i start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              beatae.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily schedule?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              beatae.
            </p>
          </div>
        </Toggle>
        <Toggle title="Different payment methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              beatae.
            </p>
          </div>
        </Toggle>
        <Toggle title="what product do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              beatae.
            </p>
          </div>
        </Toggle>
      </AnimatePresence>
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
