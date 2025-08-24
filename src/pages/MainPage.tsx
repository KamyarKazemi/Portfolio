import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AnimatePresence, motion } from "motion/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function MainPage() {
  const isDarkMode = useContext(ThemeContext);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isExpanded, setIsExpanded] = useState<number | null>(null);

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

  // Direction-aware variants
  const variants = {
    enter: (dir: "next" | "prev") => ({
      x: dir === "next" ? 200 : -200,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "absolute",
    },
    exit: (dir: "next" | "prev") => ({
      x: dir === "next" ? -200 : 200,
      opacity: 0,
      position: "absolute",
    }),
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
      <div
        className={`mt-3 transition-colors duration-500 ${
          isDarkMode ? "bg-[#0d1117] text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        {/* Header */}
        <div
          className={`flex flex-col items-center justify-center gap-7 ${
            isDarkMode ? "main-container-dark" : "main-container-light"
          }`}
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
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
              className="cursor-pointer px-5 py-2 sm:px-6 sm:py-3 rounded-full font-medium bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] text-white shadow-lg hover:scale-105 transition-transform text-sm sm:text-base"
              onClick={() => setIsProjectsVisible((prev) => !prev)}
            >
              View Projects
            </button>
            <button
              className={`cursor-pointer px-5 py-2 sm:px-6 sm:py-3 rounded-full font-medium border hover:scale-105 transition-transform text-sm sm:text-base ${
                isDarkMode
                  ? "border-gray-700 hover:bg-gray-800"
                  : "border-gray-300 hover:bg-gray-50"
              }`}
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ delay: 2.2, duration: 0.5 }}
        >
          <div className="flex items-center justify-center w-full">
            <p className="text-3xl max-w-[55ch] text-center leading-12">
              <span className="bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] bg-clip-text text-transparent">
                I'm Kamyar
              </span>{" "}
              - a junior front-end developer passionate about building clean,
              responsive, and user-friendly web experiences. I love solving
              problems with code, learning modern technologies, and growing
              every day as a programmer.
            </p>
          </div>
        </motion.div>

        {/* Projects Section */}
        <AnimatePresence>
          {isProjectsVisible && (
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
                    className={`p-2 rounded-full transition ${
                      isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                    }`}
                  >
                    <BsArrowLeft className="w-6 h-6" />
                  </button>

                  <div className="relative w-full h-[250px] sm:h-[400px] overflow-hidden rounded-2xl shadow-lg">
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.img
                        key={projects[current].title}
                        src={projects[current].image}
                        alt={projects[current].title}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute w-full h-full object-cover cursor-pointer"
                        layoutId={`image-${current}`}
                        onClick={() => setIsExpanded(current)}
                      />
                    </AnimatePresence>
                  </div>

                  <button
                    onClick={nextSlide}
                    className={`p-2 rounded-full transition ${
                      isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                    }`}
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
          )}
        </AnimatePresence>

        {/* Expanded Image Modal */}
        {/* Expanded Image Modal */}
        <AnimatePresence>
          {isExpanded !== null && (
            <>
              {/* Backdrop + Click Area */}
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-md z-40 flex flex-col items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsExpanded(null)} // Clicking anywhere closes
              >
                {/* Image */}
                <motion.img
                  src={projects[isExpanded].image}
                  alt={projects[isExpanded].title}
                  layoutId={`image-${isExpanded}`}
                  className="max-w-[90%] max-h-[90%] object-contain rounded-xl shadow-2xl cursor-pointer"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
                />

                <motion.p
                  className={`absolute left-80 top-20 text-2xl ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  example
                </motion.p>

                <motion.div
                  className={`absolute left-70 bottom-10 rounded-2xl para-div ${
                    isDarkMode ? "bg-black" : "bg-white"
                  }`}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  <motion.p
                    className={`text-2xl max-w-[70ch] ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores repellendus sequi laudantium placeat voluptate quas
                    veniam iure cupiditate, vero voluptatum.
                  </motion.p>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default MainPage;
