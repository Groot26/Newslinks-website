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
          At NewsLinks, we believe that staying informed should be easy and
          accessible. Our app is designed to provide users with a seamless
          experience in accessing the latest news from a variety of reputable
          sources. With NewsLinks, you can quickly find the news you care about,
          explore different perspectives, and stay connected with the world. Our
          mission is to empower users with timely information, enabling them to
          make well-informed decisions in their daily lives.
        </motion.p>

      </div>
    </div>
  );
}
