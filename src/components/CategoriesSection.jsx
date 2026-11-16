import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// CATEGORIES DATA: In strict order 01 -> 02 -> 03 -> 04
const CATEGORIES_DATA = [
  {
    id: 'rings',
    num: '01',
    title: 'Rings & Solitaires',
    subtitle: 'Elegance, shaped timelessly',
    desc: 'Soft reflective curves, structural prong settings, and timeless silhouettes crafted in solid recycled 18k gold for everyday wear.',
    btnText: 'Read about it',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop',
    countIndicator: '01 / 04'
  },
  {
    id: 'necklaces',
    num: '02',
    title: 'Necklaces & Pendants',
    subtitle: 'Grace starts here',
    desc: 'Calm proportions and tactile articulated gold segments create a silhouette that feels warm, graceful, and effortless along the collar.',
    btnText: 'Read about it',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop',
    countIndicator: '02 / 04'
  },
  {
    id: 'earrings',
    num: '03',
    title: 'Earrings & Hoops',
    subtitle: 'Luminous light in motion',
    desc: 'Inside-out diamond pavé engineered with balanced hollow-core casting for sublime weightless wear with brilliance from every perspective.',
    btnText: 'Read about it',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1200&auto=format&fit=crop',
    countIndicator: '03 / 04'
  },
  {
    id: 'bracelets',
    num: '04',
    title: 'Bracelets & Cuffs',
    subtitle: 'Articulated perfection',
    desc: 'Individually hand-set brilliant stones linked in flexible solid gold segments, secured by our signature concealed double-locking closure.',
    btnText: 'Read about it',
    image: 'https://images.unsplash.com/photo-1611598935678-c88dca238fce?q=80&w=1200&auto=format&fit=crop',
    countIndicator: '04 / 04'
  }
];

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop';

const CategoriesSection = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);

  const categoriesContainerRef = useRef(null);
  const sectionRefs = useRef([]);
  const isClickScrollingRef = useRef(false);

  // Accurate scroll calculation for desktop & tablet scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrollingRef.current) return;
      if (!categoriesContainerRef.current) return;

      const container = categoriesContainerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // 1. Calculate continuous line progress based on container scroll
      const totalDist = rect.height - windowHeight * 0.5;
      const scrolled = Math.max(0, -rect.top + windowHeight * 0.2);
      const progress = Math.min(1, Math.max(0, scrolled / totalDist));
      setLineProgress(progress);

      // 2. Accurate section detection based on actual element bounding rects
      const triggerY = windowHeight * 0.45;
      let currentIndex = 0;

      sectionRefs.current.forEach((el, index) => {
        if (!el) return;
        const elRect = el.getBoundingClientRect();
        if (elRect.top <= triggerY) {
          currentIndex = index;
        }
      });

      setActiveCategoryIndex(currentIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth click navigation
  const scrollToCategory = (index) => {
    setActiveCategoryIndex(index);

    // On mobile screens, don't trigger massive page jumps
    if (window.innerWidth < 1024) return;

    const targetEl = sectionRefs.current[index];
    if (!targetEl) return;

    isClickScrollingRef.current = true;
    const navOffset = 120;
    const targetTop = targetEl.getBoundingClientRect().top + window.pageYOffset - navOffset;

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth'
    });

    setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 800);
  };

  const activeCategory = CATEGORIES_DATA[activeCategoryIndex];

  return (
    <section
      id="categories"
      ref={categoriesContainerRef}
      className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-36"
    >
      {/* =========================================================================
          1. MOBILE VIEW (< 1024px: Phones and Tablets)
          Intuitive, touch-friendly tab selector + visual preview card with circular reveal
         ========================================================================= */}
      <div className="block lg:hidden">
        {/* Section Title */}
        <div className="mb-6">
          <span className="text-xs font-semibold text-[#A98955] tracking-[3px] uppercase block mb-1">
            Collections & Categories
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#191919] tracking-tight">
            Curated Categories
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-lg">
            Tap through each category to explore signature silhouettes crafted in 18k solid gold.
          </p>
        </div>

        {/* Clean, horizontally scrollable category tabs */}
        <div className="overflow-x-auto scrollbar-none py-1 mb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="inline-flex items-center gap-2 p-1.5 rounded-2xl bg-white/80 border border-[#D9C6A5]/60 shadow-sm backdrop-blur-md">
            {CATEGORIES_DATA.map((cat, idx) => {
              const isSelected = activeCategoryIndex === idx;
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(idx)}
                  className={`relative whitespace-nowrap px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors duration-200 shrink-0 ${
                    isSelected ? 'text-white' : 'text-gray-600 hover:text-[#191919]'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="mobileCategoryTabActive"
                      transition={{ type: 'spring', damping: 25, stiffness: 320 }}
                      className="absolute inset-0 bg-[#191919] rounded-xl shadow-md z-0"
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <span className={isSelected ? 'text-[#A98955]' : 'text-gray-400'}>
                      {cat.num}
                    </span>
                    {cat.title.split('&')[0].trim()}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Dynamic Card with circular reveal transition */}
        <div className="bg-white rounded-3xl border border-[#D9C6A5]/60 p-5 sm:p-7 shadow-lg overflow-hidden">
          {/* Circular mask image reveal on category change */}
          <div className="h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-[#F1E9DC] relative mb-6 shadow-inner">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{
                  clipPath: 'circle(0% at 50% 50%)',
                  scale: 1.08,
                  opacity: 0
                }}
                animate={{
                  clipPath: 'circle(150% at 50% 50%)',
                  scale: 1,
                  opacity: 1
                }}
                exit={{
                  clipPath: 'circle(0% at 50% 50%)',
                  scale: 0.96,
                  opacity: 0
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={activeCategory.image}
                  alt={activeCategory.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = FALLBACK_IMG;
                  }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-4 left-4 z-20 px-4 py-1.5 rounded-full bg-[#191919]/90 backdrop-blur-md text-white text-[11px] font-bold tracking-widest shadow-md flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A98955] animate-pulse"></span>
              <span>{activeCategory.countIndicator}</span>
            </div>
          </div>

          {/* Details & Button */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-widest text-[#A98955]">
                {activeCategory.num}
              </span>
              <span className="w-6 h-[1.5px] bg-[#A98955]"></span>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                {activeCategory.subtitle}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#191919]">
              {activeCategory.title}
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {activeCategory.desc}
            </p>

            <div className="pt-3">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3 rounded-full bg-[#191919] text-white text-xs font-semibold hover:bg-[#A98955] transition-all group shadow-md"
              >
                <span>{activeCategory.btnText}</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] group-hover:rotate-45 transition-transform">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. DESKTOP VIEW (≥ 1024px: Desktops & Laptops)
          The full FurnitureOne scroll-spy experience with vertical line and sticky reveal
         ========================================================================= */}
      <div className="hidden lg:grid grid-cols-12 gap-12 lg:gap-16 items-start relative">
        
        {/* Left Column: Vertical Progress Line + Sequential Categories */}
        <div className="lg:col-span-5 relative pl-10 pt-4 pb-20">
          
          {/* Animated Track */}
          <div className="absolute left-2 top-6 bottom-24 w-[2px] bg-[#D9C6A5]/40 rounded-full">
            <motion.div
              className="w-full bg-[#191919] rounded-full origin-top"
              style={{ height: `${lineProgress * 100}%` }}
              transition={{ ease: 'easeOut', duration: 0.15 }}
            />
            {/* Arrow Pointer Moving Down */}
            <motion.div
              className="absolute -left-[5px] w-3.5 h-3.5 rounded-full bg-[#A98955] border-2 border-[#FAF7F2] shadow-md flex items-center justify-center text-[7px] text-white"
              style={{ top: `${lineProgress * 100}%` }}
              transition={{ ease: 'easeOut', duration: 0.15 }}
            >
              ▼
            </motion.div>
          </div>

          {/* Sequential Categories: 01 Rings -> 02 Necklaces -> 03 Earrings -> 04 Bracelets */}
          <div className="space-y-48">
            {CATEGORIES_DATA.map((item, index) => {
              const isCurrent = activeCategoryIndex === index;

              return (
                <div
                  key={item.id}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  onClick={() => scrollToCategory(index)}
                  className={`cursor-pointer transition-all duration-500 transform ${
                    isCurrent
                      ? 'opacity-100 translate-x-2'
                      : 'opacity-30 hover:opacity-70 translate-x-0'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-bold tracking-widest ${isCurrent ? 'text-[#A98955]' : 'text-gray-500'}`}>
                      {item.num}
                    </span>
                    {isCurrent && (
                      <span className="w-8 h-[1.5px] bg-[#A98955] inline-block"></span>
                    )}
                  </div>

                  <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-[#191919] mb-4">
                    {item.title}
                  </h2>

                  <p className="text-base font-medium text-gray-700 mb-2">
                    {item.subtitle}
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed mb-8 max-w-md">
                    {item.desc}
                  </p>

                  <a
                    href="#products"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#191919] text-white text-xs font-semibold hover:bg-[#A98955] hover:shadow-md transition-all group"
                  >
                    <span>{item.btnText}</span>
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] group-hover:rotate-45 transition-transform">
                      ↗
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Sticky Image with FurnitureOne Circular Reveal Mask Effect */}
        <div className="lg:col-span-7 sticky top-28 hidden lg:block">
          <div className="h-[540px] rounded-[36px] overflow-hidden bg-[#F1E9DC] border border-[#D9C6A5]/80 shadow-2xl relative p-3">
            
            <div className="w-full h-full rounded-[28px] overflow-hidden relative shadow-inner bg-[#EAE3D6]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.id}
                  initial={{
                    clipPath: 'circle(0% at 50% 50%)',
                    scale: 1.08,
                    opacity: 0
                  }}
                  animate={{
                    clipPath: 'circle(150% at 50% 50%)',
                    scale: 1,
                    opacity: 1
                  }}
                  exit={{
                    clipPath: 'circle(0% at 50% 50%)',
                    scale: 0.96,
                    opacity: 0
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={activeCategory.image}
                    alt={activeCategory.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = FALLBACK_IMG;
                    }}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </motion.div>
              </AnimatePresence>

              {/* Counter Pill in bottom left corner */}
              <div className="absolute bottom-6 left-6 z-20 px-5 py-2 rounded-full bg-[#191919]/90 backdrop-blur-md text-white text-xs font-bold tracking-widest shadow-xl flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A98955] animate-pulse"></span>
                <span>{activeCategory.countIndicator}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CategoriesSection;
