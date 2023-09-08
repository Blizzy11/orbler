import { motion } from "framer-motion";

interface LinesProps {
  isInView: boolean;
}
export function Lines({ isInView }: LinesProps) {
  return (
    <motion.svg
      viewBox="0 0 1440 948"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isInView ? 1 : 0 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 5 }}
        d="M-40.0001 240.041C82.3334 221.87 335.206 214.536 368.029 330.58C409.057 475.634 109.457 585.657 161.649 706.348C203.402 802.901 455.81 817.909 576.795 813.344"
        stroke="black"
        stroke-width="0.5"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isInView ? 1 : 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 5,
          repeatDelay: 2,
        }}
        d="M721 820C889.472 816.647 1521.43 583.633 1226.42 288.872C988.81 51.4735 1481.47 -56.4957 1609 31.355"
        stroke="black"
        stroke-width="0.5"
      />
    </motion.svg>
  );
}
