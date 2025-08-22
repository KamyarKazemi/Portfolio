import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AnimatePresence, motion } from "motion/react";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

function MainPage() {
  const isDarkMode = useContext(ThemeContext);

  const [isProjectsVisible, setIsProjectsVisible] = useState<boolean>(false);

  return (
    <>
      <div className={`mt-3 ${isDarkMode ? "main-dark" : "main-light"}`}>
        <div
          className={`flex flex-col items-center justify-center gap-7 ${
            isDarkMode ? "main-container-dark" : "main-container-light"
          }`}
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-8xl bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] bg-clip-text text-transparent"
          >
            Hi, I'm Kamyar
          </motion.h1>
          <motion.p
            className="text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Frontend Developer crafting responsive & interactive experiences.
          </motion.p>
          <motion.div
            className="flex flex-row gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <button
              className="cursor-pointer px-5 py-2 sm:px-6 sm:py-3 rounded-full font-medium 
              bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] text-white shadow-lg hover:scale-105 transition-transform text-sm sm:text-base"
              onClick={() => setIsProjectsVisible((prev) => !prev)}
            >
              View Projects
            </button>
            <button
              className="cursor-pointer px-5 py-2 sm:px-6 sm:py-3 rounded-full font-medium border 
              border-current hover:scale-105 transition-transform text-sm sm:text-base"
            >
              Contact Me
            </button>
          </motion.div>
        </div>
        <AnimatePresence>
          {isProjectsVisible ? (
            <motion.div className="mt-40">
              <motion.div className="flex flex-col gap-8 items-center justify-center">
                <motion.h1
                  className="text-6xl flex items-center justify-center"
                  initial={{ opacity: 0, y: -40, x: -30 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, y: -40, x: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  Projects
                </motion.h1>

                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <BsArrowRight />
                  slider
                  <BsArrowLeft />
                </motion.div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
}

export default MainPage;
