
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import aboutImage from "../assets/images/aboutus.jpg";

const AboutUs = () => {
  return (
    <main className="bg-[#F7F3ED] text-[#29251F] overflow-hidden">

      {/* HERO SECTION */}

      <section className="max-w-[1200px] mx-auto px-6 pt-15 pb-10 md:pt-15 md:pb-12 text-center">

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs tracking-[5px] uppercase text-[#B08D57] mb-5"
        >
          About Aurelia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-tight"
        >
          Crafted for Beauty,
          <br />
          <span className="italic text-[#B08D57]">
            Made to Last.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-[#716A61] max-w-[650px] mx-auto mt-5 leading-[1.8] text-base md:text-lg"
        >
          At Aurelia, we believe jewellery is more than an
          accessory. It is a timeless expression of beauty,
          love and individuality.
        </motion.p>

      </section>

      {/* OUR STORY SECTION */}

      <section className="max-w-[1350px] mx-auto px-6 md:px-12 pb-14 md:pb-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* JEWELLERY IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[260px] sm:h-[320px] lg:h-[380px] overflow-hidden"
          >
            <img
              src={aboutImage}
              alt="Aurelia jewellery collection"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* STORY CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >

            <p className="text-xs tracking-[4px] uppercase text-[#B08D57] mb-5">
              Our Story
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl leading-tight">
              Elegance in
              <br />
              Every Detail.
            </h2>

            <p className="text-[#716A61] leading-[1.8] mt-5">
              Inspired by timeless beauty and modern elegance,
              Aurelia brings you thoughtfully selected jewellery
              designed to make every moment special.
            </p>

            <p className="text-[#716A61] leading-[1.8] mt-3">
              From everyday essentials to statement pieces,
              discover jewellery that reflects your unique style.
            </p>

            <Link
              to="/collections"
              className="inline-flex items-center gap-3 mt-7 bg-[#29251F] text-white px-7 py-3.5 rounded-full w-fit hover:bg-[#B08D57] transition-colors duration-300"
            >
              Explore Collection
              <ArrowUpRight size={18} />
            </Link>

          </motion.div>

        </div>

      </section>


    </main>
  );
};

export default AboutUs;
