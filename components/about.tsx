"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a passionate React full stack developer who fell in love with
        programming after graduating from university. Using languages such as{" "}
        <span className="font-medium">
          React, Meteor, Next.js, Node.js, and MongoDB
        </span>
        , I have been involved in developing diverse web applications, from
        small projects to complex systems. The flexibility of these technologies
        allows me to design and develop both the user interface and the backend
        of applications, ensuring an optimal user experience.
      </p>
      <p>
        I always keep an eye on new trends and update my technology stack to
        ensure that my products are at their best and meet the highest industry
        standards in software development.
      </p>
    </motion.section>
  );
}
