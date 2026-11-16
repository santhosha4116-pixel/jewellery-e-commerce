import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// PRODUCTS DATA categorized individually
const PRODUCTS_DATA = [
  {
    id: 'prod-1',
    categoryId: 'rings',
    categoryName: 'Rings',
    title: 'Aurelia Solitaire Ring',
    price: '$2,450',
    originalPrice: '$2,750',
    tag: 'Bestseller',
    specs: '1.8ct Lab Diamond • D/VVS1 • 18K Solid Gold',
    desc: 'An architectural 4-prong cathedral band hand-sculpted in solid recycled 18k yellow gold, centering an ideal-cut certified diamond.',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'prod-2',
    categoryId: 'rings',
    categoryName: 'Rings',
    title: 'Serpentine Signet Band',
    price: '$1,420',
    originalPrice: null,
    tag: 'Limited Edition',
    specs: 'Satin Brushed Finish • Flush Baguette Diamond • 18K Gold',
    desc: 'Substantial signet silhouette cast in heavyweight 18k gold with hand-brushed satin surface and flush-set baguette diamond.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'prod-3',
    categoryId: 'necklaces',
    categoryName: 'Necklaces',
    title: 'Elysian Diamond Collar',
    price: '$3,200',
    originalPrice: '$3,600',
    tag: 'Iconic Atelier',
    specs: 'Bezel Solitaire Center • Micro-hinged clasp • 18K Gold',
    desc: 'Sculpted 18K solid yellow gold choker collar featuring an exquisite brilliant-cut diamond focal point in a bezel architectural profile.',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'prod-4',
    categoryId: 'necklaces',
    categoryName: 'Necklaces',
    title: 'Celestial Pearl Pendant',
    price: '$890',
    originalPrice: null,
    tag: 'Classic',
    specs: '9.0mm Japanese Akoya Pearl • 18K Gold Wheat Chain',
    desc: 'Lustrous Japanese Akoya pearl surmounted by an accent brilliant diamond on an adjustable 18-inch solid gold wheat chain.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'prod-5',
    categoryId: 'earrings',
    categoryName: 'Earrings',
    title: 'Pavé Eternity Hoops',
    price: '$1,150',
    originalPrice: null,
    tag: 'New Season',
    specs: '0.85ct F/VS1 Diamonds • Inside-Out Setting • 18K White Gold',
    desc: 'Twin hinged 18k solid gold hoops paved inside and outside with round brilliant-cut diamonds for continuous light refraction.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'prod-6',
    categoryId: 'earrings',
    categoryName: 'Earrings',
    title: 'Solitaire Stud Drops',
    price: '$980',
    originalPrice: '$1,100',
    tag: 'Hand-Cast',
    specs: '1.20ct Total Weight • Secure Screw-Back • 18K Gold',
    desc: 'Delicate bezel-set round brilliant diamond drops that catch light with every gesture, cast in solid recycled 18k yellow gold.',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'prod-7',
    categoryId: 'bracelets',
    categoryName: 'Bracelets',
    title: 'Atelier Tennis Bracelet',
    price: '$4,800',
    originalPrice: '$5,200',
    tag: 'Signature',
    specs: '4.50 Carats Total Weight • Double-Clasp Safety • 18K Gold',
    desc: 'Continuous ribbon of 4.5 carats of prong-set lab diamonds linked in individual articulated 18k solid gold segments.',
    image: 'https://images.unsplash.com/photo-1611598935678-c88dca238fce?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'prod-8',
    categoryId: 'bracelets',
    categoryName: 'Bracelets',
    title: 'Sculpted Minimalist Bangle',
    price: '$2,100',
    originalPrice: null,
    tag: 'Solid 18K',
    specs: 'Solid Oval Profile • Concealed Spring Hinge • Heavy Cast',
    desc: 'Seamless architectural oval bangle with polished comfort interior and refined brushed gold exterior silhouette.',
    image: 'https://images.unsplash.com/photo-1611591475816-7788426f4f2c?q=80&w=800&auto=format&fit=crop'
  }
];

// Individual Category Tabs
const CATEGORY_TABS = [
  { id: 'all', label: 'All Pieces' },
  { id: 'rings', label: 'Rings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'bracelets', label: 'Bracelets' }
];

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop';

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((item) => item.categoryId === selectedCategory);

  return (
    <section id="products" className="py-24 bg-[#FAF7F2] border-t border-[#D9C6A5]/50">
      <div className="max-w-[1340px] mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold text-[#A98955] tracking-[3px] uppercase block mb-1">
              Curated Catalog
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#191919] tracking-tight">
              Our Signature Pieces
            </h2>
          </div>

          {/* Individual Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-white/70 backdrop-blur-md p-1.5 rounded-full border border-[#D9C6A5]/60 shadow-sm">
            {CATEGORY_TABS.map((tab) => {
              const isActive = selectedCategory === tab.id;
              const count = tab.id === 'all'
                ? PRODUCTS_DATA.length
                : PRODUCTS_DATA.filter(p => p.categoryId === tab.id).length;

              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`relative px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-600 hover:text-[#191919]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                      className="absolute inset-0 bg-[#191919] rounded-full shadow-md z-0"
                    />
                  )}
                  <span className="relative z-10">
                    {tab.label} ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Perspective Card-Flip & Shimmer Transition Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7"
          style={{ perspective: 1000 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                layout
                key={product.id}
                initial={{
                  opacity: 0,
                  rotateY: -35,
                  rotateX: 15,
                  scale: 0.8,
                  y: 40
                }}
                animate={{
                  opacity: 1,
                  rotateY: 0,
                  rotateX: 0,
                  scale: 1,
                  y: 0
                }}
                exit={{
                  opacity: 0,
                  rotateY: 35,
                  rotateX: -15,
                  scale: 0.75,
                  y: -30
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  type: 'spring',
                  damping: 20,
                  stiffness: 220
                }}
                whileHover={{
                  y: -10,
                  rotateY: 4,
                  rotateX: -4,
                  boxShadow: '0 25px 50px -12px rgba(169, 137, 85, 0.25)',
                  transition: { duration: 0.25 }
                }}
                onClick={() => setSelectedProduct(product)}
                className="group bg-white rounded-2xl border border-[#D9C6A5]/60 overflow-hidden flex flex-col justify-between shadow-sm hover:border-[#A98955] transition-colors duration-300 cursor-pointer relative"
              >
                {/* Image Box with Shimmer Effect */}
                <div className="h-72 bg-[#F1E9DC] overflow-hidden relative">
                  <span className="absolute top-3.5 left-3.5 z-10 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#D9C6A5] text-[#191919] shadow-sm">
                    {product.tag}
                  </span>

                  <img
                    src={product.image}
                    alt={product.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = FALLBACK_IMG;
                    }}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Elegant Golden Shimmer Sheen on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                </div>

                {/* Details */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#A98955] mb-1 block">
                      {product.categoryName} • 18K Solid Gold
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#191919] group-hover:text-[#A98955] transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1 leading-relaxed">
                      {product.specs}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 mt-5 border-t border-[#D9C6A5]/40">
                    <div>
                      {product.originalPrice && (
                        <span className="text-[11px] line-through text-gray-400 block">
                          {product.originalPrice}
                        </span>
                      )}
                      <span className="text-lg font-bold text-[#191919]">
                        {product.price}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-[#EEEEEC] border border-[#D9C6A5] flex items-center justify-center text-[#191919] group-hover:bg-[#191919] group-hover:text-white transition-all text-xs">
                      &rarr;
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Pop Up Bigger Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.82, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.82, y: 40, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl border border-[#D9C6A5] max-w-3xl w-full overflow-hidden shadow-2xl relative grid grid-cols-1 md:grid-cols-2"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#EEEEEC] border border-[#D9C6A5] flex items-center justify-center text-[#191919] font-bold hover:bg-[#191919] hover:text-white transition-all shadow-md"
              >
                &times;
              </button>

              <div className="h-72 md:h-full bg-[#F1E9DC] overflow-hidden relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = FALLBACK_IMG;
                  }}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 z-10 text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-white/95 border border-[#D9C6A5] text-[#191919]">
                  {selectedProduct.tag}
                </span>
              </div>

              <div className="p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#A98955] font-bold">
                    {selectedProduct.categoryName} • Certified 18K Gold
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#191919] mt-1 tracking-tight">
                    {selectedProduct.title}
                  </h3>

                  <div className="flex items-baseline gap-3 my-4">
                    <span className="text-3xl font-bold text-[#191919]">
                      {selectedProduct.price}
                    </span>
                    {selectedProduct.originalPrice && (
                      <span className="text-sm line-through text-gray-400">
                        {selectedProduct.originalPrice}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#A98955] font-semibold uppercase tracking-wider mb-2">
                    {selectedProduct.specs}
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {selectedProduct.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#D9C6A5]/40 mt-6 flex gap-3">
                  <button
                    onClick={() => {
                      alert(`Added ${selectedProduct.title} to bag!`);
                      setSelectedProduct(null);
                    }}
                    className="flex-1 py-3.5 rounded-full bg-[#191919] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#A98955] transition-colors shadow-md"
                  >
                    Add to Bag
                  </button>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="px-6 py-3.5 rounded-full border border-[#D9C6A5] text-xs font-semibold uppercase tracking-wider text-[#191919] hover:border-[#191919] transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductsSection;
