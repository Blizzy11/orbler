import { motion } from "framer-motion";

export default function Ornament() {
  return (
    <motion.svg
      width="222"
      height="191"
      viewBox="0 0 222 191"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ transform: "rotate(0deg)" }}
        animate={{ transform: `rotate(360deg)` }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        d="M118.28 49.1785L118.454 50.293L119.163 49.4151L148.371 13.2221L131.63 56.6133L131.224 57.6658L132.277 57.2597L175.668 40.5196L139.475 69.7274L138.597 70.4358L139.712 70.6104L185.66 77.8086L139.712 85.0068L138.597 85.1814L139.475 85.8899L175.668 115.098L132.277 98.3575L131.224 97.9515L131.63 99.004L148.371 142.395L119.163 106.202L118.454 105.324L118.28 106.439L111.082 152.387L103.883 106.439L103.709 105.324L103 106.202L73.7925 142.395L90.5327 99.004L90.9387 97.9515L89.8862 98.3575L46.4951 115.098L82.688 85.8899L83.5659 85.1814L82.4514 85.0068L36.5035 77.8086L82.4514 70.6104L83.5659 70.4358L82.688 69.7274L46.4951 40.5196L89.8862 57.2597L90.9387 57.6658L90.5327 56.6133L73.7925 13.2221L103 49.4151L103.709 50.293L103.883 49.1785L111.082 3.23054L118.28 49.1785Z"
        fill="white"
        stroke="black"
      />
      <path
        d="M76.158 59.2092C49.8453 37.185 15.929 45.1268 2.66406 57.895L15.3764 67.7299C23.5001 59.5642 46.033 49.4504 73.8389 70.9624C98.4161 89.9765 125.105 77.6592 133.693 67.1429L122.676 58.6193C122.676 58.6193 102.471 81.2333 76.158 59.2092Z"
        fill="#2BEDE1"
        stroke="black"
      />
      <path
        d="M74.494 70.1144C48.1813 48.0903 14.2649 56.0321 1 68.8003L13.7124 78.6352C21.836 70.4695 44.3689 60.3556 72.1748 81.8676C96.7521 100.882 123.441 88.5645 132.029 78.0482L121.011 69.5246C121.011 69.5246 100.807 92.1386 74.494 70.1144Z"
        fill="black"
        stroke="black"
      />
      <path
        d="M163.465 113.755C137.152 91.7304 103.236 99.6722 89.9712 112.44L102.684 122.275C110.807 114.11 133.34 103.996 161.146 125.508C185.723 144.522 212.412 132.205 221 121.688L209.983 113.165C209.983 113.165 189.778 135.779 163.465 113.755Z"
        fill="#EDB72B"
        stroke="black"
      />
      <path
        d="M161.802 124.66C135.489 102.636 101.573 110.578 88.3076 123.346L101.02 133.181C109.144 125.015 131.677 114.901 159.482 136.413C184.06 155.427 210.749 143.11 219.336 132.594L208.319 124.07C208.319 124.07 188.114 146.684 161.802 124.66Z"
        fill="black"
        stroke="black"
      />
    </motion.svg>
  );
}