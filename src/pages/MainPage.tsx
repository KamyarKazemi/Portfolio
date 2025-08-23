import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AnimatePresence, motion } from "motion/react";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

function MainPage() {
  const isDarkMode = useContext(ThemeContext);

  const [isProjectsVisible, setIsProjectsVisible] = useState<boolean>(false);
  const [current, setCurrent] = useState<number>(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const projects = [
    {
      title: "Portfolio Website",
      image:
        "https://s6.uupload.ir/files/20250815_2344_carrying_soldier_support_remix_01k2qnrhq6fjb82yh815ygw3mj_f762.png",
    },
    {
      title: "E-Commerce App",
      image:
        "https://s6.uupload.ir/files/20250815_2348_widescreen_battlefield_chaos_remix_01k2qp0qdwfc98488rxhgecswk_zc0c.png",
    },
    {
      title: "Blog Platform",
      image:
        "https://s6.uupload.ir/files/20250815_2348_widescreen_battlefield_chaos_remix_01k2qp0qdxeyyrccn87eq67rsf_ydn0.png",
    },
  ];

  // Variants you defined
  const variants = {
    enterNext: { opacity: 0, x: 200 },
    center: { opacity: 1, x: 0 },
    exitNext: { opacity: 0, x: -200 },
    enterPrevious: { opacity: 0, x: -200 },
    exitPrevious: { opacity: 0, x: 200 },
  };

  const nextSlide = () => {
    setDirection("next");
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setDirection("prev");
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

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
            <motion.div className="mt-40 mb-10">
              <motion.div className="flex flex-col gap-10 items-center justify-center">
                <motion.h1
                  className="text-4xl sm:text-6xl flex items-center justify-center"
                  initial={{ opacity: 0, y: -40, x: -30 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, y: -40, x: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  Projects
                </motion.h1>

                {/* Slider */}
                <motion.div
                  className="flex items-center gap-4 w-full max-w-3xl px-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <button
                    onClick={prevSlide}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  >
                    <BsArrowLeft className="w-6 h-6" />
                  </button>

                  <div className="relative w-full h-[250px] sm:h-[400px] overflow-hidden rounded-2xl shadow-lg">
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.img
                        key={projects[current].title}
                        src={projects[current].image}
                        alt={projects[current].title}
                        className="absolute w-full h-full object-cover"
                        variants={variants}
                        initial={
                          direction === "next" ? "enterNext" : "enterPrevious"
                        }
                        animate="center"
                        exit={
                          direction === "next" ? "exitNext" : "exitPrevious"
                        }
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      />
                    </AnimatePresence>
                  </div>

                  <button
                    onClick={nextSlide}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  >
                    <BsArrowRight className="w-6 h-6" />
                  </button>
                </motion.div>

                {/* Title */}
                <motion.p
                  key={projects[current].title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 text-lg sm:text-xl font-semibold"
                >
                  {projects[current].title}
                </motion.p>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
}

export default MainPage;
