import React, { useState, useEffect } from 'react';
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
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  // Detect screen size for responsive pagination
  useEffect(() => {
    const checkScreen = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const handleCategoryChange = (tabId) => {
    setSelectedCategory(tabId);
    setCurrentPage(1);
  };

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((item) => item.categoryId === selectedCategory);

  const itemsPerPage = isMobileOrTablet ? 3 : filteredProducts.length;
  const totalPages = Math.ceil(filteredProducts.length / (isMobileOrTablet ? 3 : filteredProducts.length));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = isMobileOrTablet
    ? filteredProducts.slice(startIndex, startIndex + itemsPerPage)
    : filteredProducts;

  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#FAF7F2] border-t border-[#D9C6A5]/50">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Section Header & Filter Tabs */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end justify-between mb-8 md:mb-12">
          <div>
            <span className="text-xs font-semibold text-[#A98955] tracking-[3px] uppercase block mb-1.5">
              Curated Catalog
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#191919] tracking-tight">
              Signature Pieces
            </h2>
          </div>

          {/* Horizontally scrollable tabs on mobile, pill bar on tablet/desktop */}
          <div className="w-full md:w-auto overflow-x-auto scrollbar-none py-1 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl md:rounded-full bg-white/90 border border-[#D9C6A5]/60 shadow-sm backdrop-blur-md">
              {CATEGORY_TABS.map((tab) => {
                const isActive = selectedCategory === tab.id;
                const count = tab.id === 'all'
                  ? PRODUCTS_DATA.length
                  : PRODUCTS_DATA.filter(p => p.categoryId === tab.id).length;

                return (
                  <button
                    key={tab.id}
                    onClick={() => handleCategoryChange(tab.id)}
                    className={`relative whitespace-nowrap px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors duration-200 shrink-0 ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-600 hover:text-[#191919]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryPill"
                        transition={{ type: 'spring', damping: 25, stiffness: 320 }}
                        className="absolute inset-0 bg-[#191919] rounded-full shadow-md z-0"
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      {tab.label}
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isActive ? 'bg-white/20 text-white' : 'bg-[#FAF7F2] text-[#A98955]'
                      }`}>
                        {count}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Responsive Products Grid with balanced gap & card padding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${currentPage}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="contents"
            >
              {paginatedProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="group bg-white rounded-2xl border border-[#D9C6A5]/60 overflow-hidden flex flex-col justify-between shadow-sm hover:border-[#A98955] hover:shadow-xl transition-all duration-300 cursor-pointer relative"
                >
                  {/* Image Box */}
                  <div className="h-60 sm:h-68 md:h-72 lg:h-76 bg-[#F1E9DC] overflow-hidden relative">
                    <span className="absolute top-3 left-3 z-10 text-[9.5px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#D9C6A5] text-[#191919] shadow-sm">
                      {product.tag}
                    </span>

                    <img
                      src={product.image}
                      alt={product.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = FALLBACK_IMG;
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Luxury Shimmer Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>

                    {/* Quick View Button */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 px-3.5 py-1.5 rounded-full bg-[#191919]/90 text-white text-[11px] font-semibold backdrop-blur-sm whitespace-nowrap shadow-md">
                      Quick View
                    </div>
                  </div>

                  {/* Details Footer with comfortable padding */}
                  <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#A98955] mb-1 block">
                        {product.categoryName} • 18K Solid Gold
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#191919] group-hover:text-[#A98955] transition-colors line-clamp-1">
                        {product.title}
                      </h3>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2 leading-relaxed">
                        {product.specs}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 mt-3.5 border-t border-[#D9C6A5]/40">
                      <div>
                        {product.originalPrice && (
                          <span className="text-[10.5px] line-through text-gray-400 block leading-tight">
                            {product.originalPrice}
                          </span>
                        )}
                        <span className="text-base sm:text-lg font-bold text-[#191919]">
                          {product.price}
                        </span>
                      </div>

                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#EEEEEC] border border-[#D9C6A5] flex items-center justify-center text-[#191919] group-hover:bg-[#191919] group-hover:text-white transition-all text-xs">
                        &rarr;
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile & Tablet Pagination Controls */}
        {isMobileOrTablet && totalPages > 1 && (
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#D9C6A5]/40">
            <span className="text-xs text-gray-600 font-medium">
              Showing <span className="font-bold text-[#191919]">{startIndex + 1}–{Math.min(startIndex + itemsPerPage, filteredProducts.length)}</span> of <span className="font-bold text-[#191919]">{filteredProducts.length}</span> pieces
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  currentPage === 1
                    ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                    : 'border-[#D9C6A5] text-[#191919] bg-white hover:bg-[#191919] hover:text-white hover:border-[#191919] shadow-sm'
                }`}
                aria-label="Previous Page"
              >
                &larr; Prev
              </button>

              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  const isActive = currentPage === pageNum;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs font-bold transition-all duration-200 ${
                        isActive
                          ? 'bg-[#191919] text-white shadow-md'
                          : 'bg-white text-gray-600 border border-[#D9C6A5]/60 hover:border-[#A98955] hover:text-[#A98955]'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  currentPage === totalPages
                    ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                    : 'border-[#D9C6A5] text-[#191919] bg-white hover:bg-[#191919] hover:text-white hover:border-[#191919] shadow-sm'
                }`}
                aria-label="Next Page"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Clean Quick View Modal with proportional padding */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 md:p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl border border-[#D9C6A5] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative grid grid-cols-1 md:grid-cols-2"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-[#EEEEEC] border border-[#D9C6A5] flex items-center justify-center text-[#191919] font-bold hover:bg-[#191919] hover:text-white transition-all shadow-md"
                aria-label="Close"
              >
                &times;
              </button>

              <div className="h-56 sm:h-72 md:h-full bg-[#F1E9DC] overflow-hidden relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = FALLBACK_IMG;
                  }}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3.5 left-3.5 z-10 text-[10.5px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-white/95 border border-[#D9C6A5] text-[#191919]">
                  {selectedProduct.tag}
                </span>
              </div>

              <div className="p-5 sm:p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#A98955] font-bold">
                    {selectedProduct.categoryName} • Certified 18K Gold
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#191919] mt-1 tracking-tight">
                    {selectedProduct.title}
                  </h3>

                  <div className="flex items-baseline gap-3 my-3">
                    <span className="text-2xl sm:text-3xl font-bold text-[#191919]">
                      {selectedProduct.price}
                    </span>
                    {selectedProduct.originalPrice && (
                      <span className="text-xs sm:text-sm line-through text-gray-400">
                        {selectedProduct.originalPrice}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#A98955] font-semibold uppercase tracking-wider mb-2">
                    {selectedProduct.specs}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {selectedProduct.desc}
                  </p>
                </div>

                <div className="pt-4 sm:pt-5 border-t border-[#D9C6A5]/40 mt-5 flex gap-2.5 sm:gap-3">
                  <button
                    onClick={() => {
                      alert(`Added ${selectedProduct.title} to bag!`);
                      setSelectedProduct(null);
                    }}
                    className="flex-1 py-3 rounded-full bg-[#191919] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#A98955] transition-colors shadow-md"
                  >
                    Add to Bag
                  </button>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="px-5 py-3 rounded-full border border-[#D9C6A5] text-xs font-semibold uppercase tracking-wider text-[#191919] hover:border-[#191919] transition-colors"
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
