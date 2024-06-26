// "use client";
// import { useInView, motion } from "framer-motion";
// import { useRef } from "react";
// import { fadeInUpVariants } from "@/variant";
// import { baselineTextVariant } from "@/variant";
// import Image from "next/image";
// import img from "@/assets/Mockup.jpg";

// export default function Home() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <div className="home-section" id="home">
//       <div className="home-container">
//         <motion.section
//           ref={ref}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           variants={fadeInUpVariants}
//         >
//           <div className="home-image ">
//             <Image src={img} alt="Image" height={600} />
//           </div>
//         </motion.section>

//         <div className="home-content">
//           <motion.h1
//             ref={ref}
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={baselineTextVariant}
//             style={{ fontSize: "54px" }}
//           >
//             Stay Informed, Stay Ahead with NewsLinks
//           </motion.h1>
//           <motion.p
//            ref={ref}
//            initial="hidden"
//            animate={isInView ? "visible" : "hidden"}
//             variants={baselineTextVariant}
//             style={{ fontSize: "22px" }}
//           >
//             Welcome to NewsLinks, your go-to app for the latest and trending
//             news from around the world. With a sleek and simple user interface,
//             NewsLinks makes it easy to stay updated on the stories that matter
//             most to you. Whether you want to search for specific news, check the
//             publisher, view publishing dates, or see images, NewsLinks has got
//             you covered. Explore the news from trusted sources and never miss a
//             beat with NewsLinks.
//           </motion.p>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { fadeInUpVariants } from "@/variant";
import { baselineTextVariant } from "@/variant";
import Image from "next/image";
import img from "@/assets/Mockup.jpg";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="home-section" id="home">
    <div className="home-container">
      <motion.section
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUpVariants}
      >
        <div className="home-image">
          <Image src={img} alt="Image" layout="responsive"  />
        </div>
      </motion.section>

      <div className="home-content" >
        <motion.h1
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={baselineTextVariant}
          // style={{ fontSize: "40px" }}
        >
          Stay Informed,<br></br> Stay Ahead with NewsLinks
        </motion.h1>
        <motion.p
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={baselineTextVariant}
          // style={{ fontSize: "20px" }}
        >
          Welcome to NewsLinks, your go-to app for the latest and trending
          news from around the world. With a sleek and simple user interface,
          NewsLinks makes it easy to stay updated on the stories that matter
          most to you. Whether you want to search for specific news, check the
          publisher, view publishing dates, or see images, NewsLinks has got
          you covered. Explore the news from trusted sources and never miss a
          beat with NewsLinks.
        </motion.p>
      </div>
    </div>
  </div>
  );
}
