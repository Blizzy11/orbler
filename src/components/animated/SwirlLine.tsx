import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SwirlLine() {
  const ref = useRef<SVGPathElement>(null);
  const isInView = useInView(ref);

  return (
    <motion.svg
      height="100%"
      viewBox="0 0 128 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        ref={ref}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isInView ? 1 : 0 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
        d="M60.0149 1.00012C61.9568 28.0737 94.9168 45.9496 93.0162 60.9725C91.1157 75.9954 48.7987 53.5985 52.645 43.5738C56.4914 33.5492 96.4487 58.3655 90.1203 77.0689C83.7918 95.7722 39.4383 82.769 43.0606 70.7235C46.6829 58.678 87.1254 71.5748 86.4154 95.4322C85.7054 119.29 66.8642 137.681 66.8642 137.681"
        stroke="#00FFFF"
        stroke-width="1.85714"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </motion.svg>
  );
}
