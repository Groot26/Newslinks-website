"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { scaleVariant } from "@/variant";
import Image from "next/image";
import img from "@/assets/Mockup-2.png";

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const refList = useRef(null);
  const isInViewList = useInView(ref, { once: true, margin: "-50px 0px" });

  const variants = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
  };
  return (
    <div className="features-section" id="features">
      <div className="features-content">
        <h1 style={{ fontSize: "44px" }}>Features</h1>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
           transition={{ duration: 0.5, delay:  0.2 }}  // delay: index *  0.2
          className="features-list"
          style={{ fontSize: "20px" }}
        >
          <ul>
            <li>
              <strong>Comprehensive News Coverage</strong>: Get the latest and
              trending news across various categories.
            </li>
            <li>
              <strong>Easy Search</strong>: Quickly find news articles by
              keywords or topics.
            </li>
            <li>
              <strong>Trusted Sources</strong>: Access news from reputable
              publishers to ensure you get accurate information.
            </li>
            <li>
              <strong>Publisher Information</strong>: Check the source and
              publishing date of each news article.
            </li>
            <li>
              <strong>Engaging Visuals</strong>: View images related to the news
              to get a better understanding of the story.
            </li>
            <li>
              <strong>User-Friendly Interface</strong>: Enjoy a simple and
              intuitive design for a seamless news browsing experience.
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={scaleVariant}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="home-image "
      >
        <Image src={img} alt="Image" height={500} />
      </motion.div>
    </div>
  );
}
