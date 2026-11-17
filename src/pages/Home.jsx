

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import nacklace from "../assets/images/nacklace.png";

const Home = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="bg-[#F7F3ED] overflow-hidden">

      <section
        className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-[72px]
        pt-8 pb-10 min-h-[calc(100svh-108px)]"
      >

        <div
          className="grid grid-cols-1 lg:grid-cols-2
          gap-8 lg:gap-12 items-center min-h-[560px]"
        >

          {/* LEFT CONTENT */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center
            max-w-[620px] py-8 lg:py-0"
          >

            <motion.p
              variants={textVariants}
              className="text-xs md:text-sm tracking-[5px]
              uppercase text-[#B08D57] mb-7"
            >
              The Art of Fine Jewellery
            </motion.p>

            <motion.h1
              variants={textVariants}
              className="font-serif text-[58px] max-sm:text-5xl
              lg:text-[76px] xl:text-[88px]
              leading-[0.92] tracking-[-2px]
              text-[#29251F]"
            >
              Elegance
              <br />
              That Lasts
              <br />
              <span className="text-[#B08D57]">
                Forever.
              </span>
            </motion.h1>

            <motion.p
              variants={textVariants}
              className="text-[#716A61] text-base md:text-lg
              leading-[1.9] max-w-[540px] mt-7 max-sm:text-sm"
            >
              Discover timeless jewellery crafted with beauty,
              passion and exceptional craftsmanship.
              Make every moment unforgettable with Aurelia.
            </motion.p>

            {/* BUTTONS */}

            <motion.div
              variants={textVariants}
              className="flex flex-nowrap items-center gap-3 mt-8 w-full"
            >

              {/* EXPLORE COLLECTION */}

              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="shrink-0"
              >
                <Link
                  to="/collections"
                  className="bg-[#29251F] text-white
                  px-5 sm:px-8 py-4 rounded-full
                  flex items-center justify-center gap-2
                  text-xs sm:text-sm whitespace-nowrap
                  hover:bg-[#B08D57]
                  transition-colors duration-300"
                >
                  Explore Collection
                  <ArrowUpRight size={18} />
                </Link>
              </motion.div>

              {/* DISCOVER PRODUCTS */}

              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="shrink-0"
              >
                <Link
                  to="/products"
                  className="border border-[#29251F]
                  text-[#29251F] px-5 sm:px-8 py-4 rounded-full
                  text-xs sm:text-sm whitespace-nowrap
                  hover:bg-[#29251F] hover:text-white
                  transition-all duration-300"
                >
                  Discover Products
                </Link>
              </motion.div>

            </motion.div>

          </motion.div>

          {/* RIGHT JEWELLERY IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.2,
            }}
            className="relative flex items-center justify-center
            w-full h-[430px] sm:h-[500px] lg:h-[560px]"
          >

            {/* TRANSPARENT NECKLACE IMAGE */}

            <motion.img
              src={nacklace}
              alt="Aurelia Gold Necklace"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                delay: 0.3,
              }}
              whileHover={{ scale: 1.035 }}
              className="w-full h-full max-h-[520px]
              object-contain object-center"
            />

            {/* COLLECTION LABEL */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 1,
              }}
              className="absolute bottom-3 left-2
              sm:bottom-5 sm:left-5
              bg-white/90 backdrop-blur-sm
              border border-[#D9C6A5]/50
              px-5 py-4 shadow-sm"
            >

              <p
                className="text-[11px] tracking-[3px]
                text-[#B08D57] uppercase"
              >
                Aurelia Collection
              </p>

              <p
                className="font-serif text-xl md:text-2xl
                text-[#29251F] mt-1"
              >
                Timeless Beauty
              </p>

            </motion.div>

          </motion.div>

        </div>

      </section>

    </main>
  );
};

export default Home;
