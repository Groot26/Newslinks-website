"use client";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { baselineTextVariant } from "@/variant";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="about-section" id="about">
      <div className="about-content">
        {/* <h1 style={{fontSize: "44px"}}>About NewsLinks</h1> */}
        <motion.h1
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={baselineTextVariant}
          // style={{ fontSize: "40px" }}
        >
          About NewsLinks
        </motion.h1>

        <motion.p
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={baselineTextVariant}
          //  style={{ fontSize: "20px" }}
        >
          NewsLinks is designed to make staying informed easy and enjoyable. The
          app offers a seamless experience for accessing the latest news from a
          variety of reputable sources. With NewsLinks, you can quickly find the
          news that matters to you, explore different perspectives, and stay
          connected with the world. Designed with simplicity and
          user-friendliness in mind, NewsLinks empowers users with timely
          information, helping them make well-informed decisions in their daily
          lives.
        </motion.p>
      </div>
    </div>
  );
}
