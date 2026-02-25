"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="font-medium">Senior Full Stack Engineer</span> with 5+ years of experience 
        <br></br>
        building and scaling SaaS platforms using <span className="font-medium"> React, Redux, Node.js, and MongoDB</span>. 
        <br></br>
        Strong background in 
        <span className="font-medium"> performance optimization, database design</span> and
        <br></br>
        <span className="font-medium"> scalable API architecture</span>.
        Experienced working in product-driven, fast-growing tech companies.
        Comfortable collaborating in international English-speaking teams and contributing to system design decisions.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        badminton, watching movies, listening to music or <br></br>taking walks for a
        breath of fresh air.
      </p>
    </motion.section>
  );
}
