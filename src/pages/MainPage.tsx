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
      description:
        "A modern portfolio website built with React, TypeScript, and Framer Motion. Features responsive design, smooth animations, and a clean user interface showcasing my projects and skills.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "E-Commerce App",
      image:
        "https://s6.uupload.ir/files/20250815_2348_widescreen_battlefield_chaos_remix_01k2qp0qdwfc98488rxhgecswk_zc0c.png",
      description:
        "A full-featured e-commerce application with shopping cart, product filtering, user authentication, and payment integration. Built with modern web technologies for optimal performance.",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
    },
    {
      title: "Blog Platform",
      image:
        "https://s6.uupload.ir/files/20250815_2348_widescreen_battlefield_chaos_remix_01k2qp0qdxeyyrccn87eq67rsf_ydn0.png",
      description:
        "A content management system for bloggers with markdown support, comment system, and admin dashboard. Features real-time updates and responsive design for all devices.",
      tech: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
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
            className="text-4xl sm:text-6xl lg:text-8xl bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] bg-clip-text text-transparent text-center px-4"
          >
            Hi, I'm Kamyar
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl lg:text-3xl text-center px-4 max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Frontend Developer crafting responsive & interactive experiences.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-5 px-4"
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
          className="mt-20 px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ delay: 2.2, duration: 0.5 }}
        >
          <div className="flex items-center justify-center w-full">
            <p className="text-lg sm:text-xl lg:text-3xl max-w-[55ch] text-center leading-relaxed">
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
            <motion.div className="mt-20 sm:mt-40 mb-10 px-4">
              <motion.div className="flex flex-col gap-10 items-center justify-center">
                <motion.h1
                  className="text-3xl sm:text-4xl lg:text-6xl flex items-center justify-center"
                  initial={{ opacity: 0, y: -40, x: -30 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, y: -40, x: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  Projects
                </motion.h1>

                {/* Slider */}
                <motion.div
                  className="flex items-center gap-2 sm:gap-4 w-full max-w-5xl"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <button
                    onClick={prevSlide}
                    className={`p-2 rounded-full transition flex-shrink-0 ${
                      isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                    }`}
                  >
                    <BsArrowLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                  </button>

                  <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[400px] overflow-hidden rounded-2xl shadow-lg">
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
                    className={`p-2 rounded-full transition flex-shrink-0 ${
                      isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                    }`}
                  >
                    <BsArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />
                  </button>
                </motion.div>

                {/* Title */}
                <motion.p
                  key={projects[current].title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 text-lg sm:text-xl font-semibold text-center"
                >
                  {projects[current].title}
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Responsive Expanded Image Modal */}
        <AnimatePresence>
          {isExpanded !== null && (
            <>
              {/* Backdrop + Click Area */}
              <motion.div
                className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex flex-col items-center justify-start overflow-y-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsExpanded(null)}
              >
                {/* Close button */}
                <motion.button
                  className="absolute top-4 right-4 z-60 text-white hover:text-gray-300 text-2xl sm:text-3xl font-bold w-10 h-10 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => setIsExpanded(null)}
                  aria-label="Close modal"
                >
                  ×
                </motion.button>

                {/* Modal Content Container */}
                <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 min-h-full flex flex-col justify-center">
                  {/* Title - Mobile at top, Desktop floating */}
                  <motion.h3
                    className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center lg:absolute lg:top-16 lg:left-8 lg:mb-0 text-white"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {projects[isExpanded].title}
                  </motion.h3>

                  {/* Image */}
                  <motion.div
                    className="relative w-full flex justify-center mb-6 sm:mb-8"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <motion.img
                      src={projects[isExpanded].image}
                      alt={projects[isExpanded].title}
                      layoutId={`image-${isExpanded}`}
                      className="w-full max-w-4xl h-auto max-h-[50vh] sm:max-h-[60vh] lg:max-h-[70vh] object-contain rounded-xl shadow-2xl"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>

                  {/* Description */}
                  <motion.div
                    className={`w-full max-w-4xl mx-auto rounded-2xl p-4 sm:p-6 lg:p-8 ${
                      isDarkMode
                        ? "bg-gray-900/80 backdrop-blur-sm border border-gray-700"
                        : "bg-white/90 backdrop-blur-sm border border-gray-200"
                    }`}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <motion.p
                      className={`text-sm sm:text-base lg:text-lg leading-relaxed mb-4 ${
                        isDarkMode ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      {projects[isExpanded].description}
                    </motion.p>

                    {/* Project details - Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[isExpanded].tech.map((tech, index) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                            isDarkMode
                              ? "bg-blue-600/20 text-blue-300 border border-blue-600/30"
                              : "bg-blue-100 text-blue-700 border border-blue-200"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <button
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] text-white rounded-lg font-medium hover:scale-105 transition-transform"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Live Demo
                      </button>
                      <button
                        className={`flex-1 px-6 py-3 border rounded-lg font-medium hover:scale-105 transition-transform ${
                          isDarkMode
                            ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                            : "border-gray-300 text-gray-700 hover:bg-gray-50"
                        }`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Source Code
                      </button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default MainPage;
