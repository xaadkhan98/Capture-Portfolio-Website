import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <h1>Contacttt Ussss!</h1>
    </motion.div>
  );
};

export default ContactUs;
