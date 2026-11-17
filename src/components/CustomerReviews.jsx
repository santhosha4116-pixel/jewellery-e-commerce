import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const REVIEWS_DATA = [
  {
    id: 1,
    name: "Eleanor Vance",
    role: "Verified Collector",
    location: "New York, USA",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    title: "Unmatched Craftsmanship & Radiance",
    review: "The Aurelia Solitaire Ring took my breath away. The certified lab diamond sparkles with an incredible brilliance, and the 18K solid yellow gold band feels substantial yet weightless. Truly timeless fine jewelry.",
    productPurchased: "Aurelia Solitaire Ring • 18K Gold",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Sophia Montclaire",
    role: "Verified Purchaser",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    title: "The Ultimate Statement Collar",
    review: "I ordered the Elysian Diamond Collar for a gala, and the compliments never stopped. The bezel silhouette and micro-hinged clasp make it sit completely flat and flush against the collarbone.",
    productPurchased: "Elysian Diamond Collar",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Camille Laurent",
    role: "Verified Collector",
    location: "Paris, France",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    title: "Inside-Out Hoops that Glow",
    review: "Finding hoops with continuous pavé on both the front and inside curve was impossible until Aurelia. They catch sunlight from every angle and the hollow-core casting makes them completely effortless to wear all day.",
    productPurchased: "Pavé Eternity Hoops",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Isabella Rossi",
    role: "Verified Purchaser",
    location: "Milan, Italy",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    title: "Silky Smooth Articulated Gold",
    review: "The Atelier Tennis Bracelet is pure liquid luxury. Each link moves like silk on the wrist, and the double safety lock gives me complete peace of mind. The packaging with personalized certification was magnificent.",
    productPurchased: "Atelier Tennis Bracelet",
    date: "Just yesterday"
  }
];

export default function CustomerReviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevReview = () => {
    setActiveIndex((prev) => (prev === 0 ? REVIEWS_DATA.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveIndex((prev) => (prev === REVIEWS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = REVIEWS_DATA[activeIndex];

  return (
    <section id="reviews" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#EEEEEC] border-t border-[#D9C6A5]/50 overflow-hidden relative">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Header with Luxury Brand Accent */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-5">
          <div>
            <span className="text-xs font-semibold text-[#A98955] tracking-[3px] uppercase block mb-1.5">
              Client Chronicles
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#191919] tracking-tight">
              Words From Our Patrons
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-lg leading-relaxed">
              Every creation is sculpted to celebrate life's most cherished milestones. Read authentic testimonials from certified collectors worldwide.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2.5 self-start md:self-auto">
            <button
              onClick={prevReview}
              className="w-10 h-10 rounded-full bg-white border border-[#D9C6A5]/80 flex items-center justify-center text-[#191919] hover:bg-[#191919] hover:text-white hover:border-[#191919] transition-all shadow-sm"
              aria-label="Previous review"
            >
              <ChevronLeft size={17} />
            </button>
            <div className="text-xs font-bold text-gray-600 px-2 tracking-widest">
              <span className="text-[#191919]">{String(activeIndex + 1).padStart(2, '0')}</span> / {String(REVIEWS_DATA.length).padStart(2, '0')}
            </div>
            <button
              onClick={nextReview}
              className="w-10 h-10 rounded-full bg-white border border-[#D9C6A5]/80 flex items-center justify-center text-[#191919] hover:bg-[#191919] hover:text-white hover:border-[#191919] transition-all shadow-sm"
              aria-label="Next review"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>

        {/* Featured Showcase Review Card with balanced inner padding */}
        <div className="relative bg-white rounded-3xl border border-[#D9C6A5]/60 shadow-xl overflow-hidden p-5 sm:p-8 md:p-10 lg:p-12">
          {/* Subtle Background Watermark Quote */}
          <Quote className="absolute right-4 bottom-3 md:right-8 md:bottom-6 text-[#D9C6A5]/15 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 pointer-events-none select-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center"
            >
              {/* Left Column: Customer Avatar & Verified Badge */}
              <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="relative mb-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-[#A98955] p-1 bg-[#FAF7F2] shadow-md">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-[#191919] text-white text-[8.5px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full border border-white shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A98955]"></span>
                    Verified
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#191919]">
                  {current.name}
                </h3>
                <p className="text-[11px] font-semibold text-[#A98955] tracking-wider uppercase mt-0.5">
                  {current.role}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {current.location} • {current.date}
                </p>

                {/* Star Ratings */}
                <div className="flex items-center gap-1.5 mt-3 bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#D9C6A5]/50">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-[#A98955] text-[#A98955]" />
                  ))}
                  <span className="text-xs font-bold text-[#191919] ml-1">5.0</span>
                </div>
              </div>

              {/* Right Column: Review Text & Details */}
              <div className="lg:col-span-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#D9C6A5]/40 pt-5 lg:pt-0 lg:pl-8 xl:pl-10">
                <div>
                  <h4 className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#191919] mb-3 leading-snug">
                    "{current.title}"
                  </h4>

                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed font-sans mb-5">
                    {current.review}
                  </p>
                </div>

                {/* Product Tag */}
                <div className="pt-3.5 border-t border-[#D9C6A5]/30 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs text-gray-600">
                    <span className="text-[#A98955] font-semibold uppercase tracking-wider block sm:inline sm:mr-2">
                      Acquired Design:
                    </span>
                    <span className="font-medium text-[#191919]">
                      {current.productPurchased}
                    </span>
                  </div>

                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#A98955] bg-[#FAF7F2] px-2.5 py-0.5 rounded-full border border-[#D9C6A5]/40">
                    100% Authentic Review
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mini Preview Selector Dots on Mobile / Cards on Tablet & Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4 mt-5 sm:mt-6">
          {REVIEWS_DATA.map((item, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`p-2.5 sm:p-3 md:p-4 rounded-2xl text-left transition-all duration-300 border flex items-center gap-2.5 sm:gap-3 ${
                  isSelected
                    ? 'bg-white border-[#A98955] shadow-md ring-1 ring-[#A98955]'
                    : 'bg-white/60 border-[#D9C6A5]/50 hover:bg-white hover:border-[#D9C6A5]'
                }`}
              >
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full object-cover border border-[#D9C6A5] shrink-0"
                />
                <div className="overflow-hidden">
                  <p className="font-serif text-xs sm:text-sm font-bold text-[#191919] truncate">
                    {item.name}
                  </p>
                  <div className="flex items-center gap-0.5 text-[#A98955]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={10} className="fill-[#A98955] text-[#A98955]" />
                    ))}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
