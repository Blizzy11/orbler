import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Swoop() {
  const ref = useRef<SVGPathElement>(null);
  const isInView = useInView(ref);
  return (
    <motion.svg
      width="100%"
      viewBox="0 0 68 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        ref={ref}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isInView ? 1 : 0 }}
        transition={{ repeat: Infinity, duration: 4, repeatType: "reverse" }}
        d="M1 1C1 1 3.31145 101 68 101"
        stroke="#BA75E8"
        stroke-width="1.85714"
      />
    </motion.svg>
  );
}
