"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { scaleVariant } from "@/variant";
import Image from "next/image";
import img from "@/assets/Mockup-2-2.png";
import {features} from "@/data/placeholder-data"

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const refList = useRef(null);
  const isInViewList = useInView(refList, { once: true, margin: "-50px 0px" });

  const variants = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
  };
  return (
    <div className="features-section" id="features">
      <div className="features-content">
        <h1 
        // style={{ fontSize: "44px" }}
        >Features</h1>
        <div className="features-list"
        //  style={{ fontSize: "20px" }}
         >
          <ul>
            {features.map((feature, index) => (
              <motion.li
              ref={ref}
                key={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <strong>{feature.title}</strong>:<br></br> {feature.description}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <motion.div
        ref={refList}
        initial="hidden"
        animate={isInViewList ? "visible" : "hidden"}
        variants={scaleVariant}
        transition={{ duration: 1, ease: "easeOut" }}
        className="features-image "
      >
        <Image src={img} alt="Image" height={500} />
      </motion.div>
    </div>
  );
}
