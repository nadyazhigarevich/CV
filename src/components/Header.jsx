import React from "react";
import { upAnimation } from "../animation";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      className="header"
      initial="hidden"
      whileInView="visible"
      transition={{
        ease: "linear",
        duration: 0.5,
        x: { duration: 0.5 },
      }}
      variants={upAnimation}
      viewport={{ amount: 0.5, once: true }}
    >
      <img src="./ava.jpg" alt="ava" />
      <div className="header__right">
        <h1>NADYA ZHIGAREVICH</h1>
        <h2>FRONTEND DEVELOPER</h2>
        <p>
        I am currently a second-year student at the Faculty of Mechanics 
        and Mathematics at BSU. I have a strong enthusiasm for mathematics 
        and a keen interest in frontend development. Delving into the complexities 
        of mathematical ideas and their use in web technologies truly excites and fulfills me.
        </p>
      </div>
    </motion.div>
  );
};

export default Header;
