import { FC } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

type DarkmodeIconProps = {
  isDark: boolean;
};

const iconVariants: Variants = {
  initial: { opacity: 0, scale: 0.5, rotate: -90 },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "tween",
      ease: "easeInOut" as const,
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    rotate: 90,
    transition: {
      type: "tween",
      ease: "easeInOut" as const,
      duration: 0.2,
    },
  },
};

const DarkmodeIcon: FC<DarkmodeIconProps> = ({ isDark }) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {isDark ? (
        <motion.svg
          key="moon"
          variants={iconVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      ) : (
        <motion.svg
          key="sun"
          variants={iconVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="5"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.svg>
      )}
    </AnimatePresence>
  );
};

export default DarkmodeIcon;
