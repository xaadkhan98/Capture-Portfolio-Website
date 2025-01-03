import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem 0rem 10rem;

  color: white;
  @media (max-width: 1250px) {
    display: block;
    text-align: center;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1250px) {
    padding: 0;
    button {
      margin: 2rem 0 5rem 0;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  z-index: 2;
  overflow: hidden;

  img {
    width: 100%;
    height: 80vh;
    object-fit: contain;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
