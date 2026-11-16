

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Home = () => {

  // Parent animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Child animation
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 35,
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
    <main className="bg-[#EEEEEC] min-h-screen">

      <section className="max-w-[1400px] mx-auto px-5 md:px-10 pt-8 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-5"
          >

            {/* Subtitle */}
            <motion.p
              variants={textVariants}
              className="text-sm tracking-[4px] uppercase text-[#A98955]"
            >
              The Art of Fine Jewellery
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              variants={textVariants}
              className="text-5xl md:text-7xl lg:text-7xl font-serif leading-[1.05] text-[#191919]"
            >
              Elegance
              <br />
              That Lasts
              <br />
              Forever.
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={textVariants}
              className="text-gray-600 text-base md:text-lg max-w-md leading-8"
            >
              Discover timeless jewellery crafted with beauty,
              passion and exceptional craftsmanship.
              Make every moment unforgettable with Aurelia.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={textVariants}
              className="flex flex-wrap gap-4 pt-3"
            >

              <motion.a
                href="/collections"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#A98955",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-[#191919] text-white px-8 py-4 rounded-full flex items-center gap-3"
              >
                Explore Collection
                <ArrowUpRight size={18} />
              </motion.a>

              <motion.a
                href="/about"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#191919",
                  color: "#FFFFFF",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="border border-[#191919] px-8 py-4 rounded-full"
              >
                Our Story
              </motion.a>

            </motion.div>

          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{
              opacity: 0,
              x: 80,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.3,
            }}
            className="relative overflow-hidden"
          >

            <motion.img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1000"
              alt="Aurelia Jewellery"
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              className="w-full h-[380px] md:h-[480px] object-cover rounded-[5px]"
            />

            {/* Image Label */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 1,
              }}
              className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm px-6 py-4"
            >

              <p className="text-xs tracking-[3px] text-[#A98955]">
                AURELIA COLLECTION
              </p>

              <p className="font-serif text-xl mt-1">
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
