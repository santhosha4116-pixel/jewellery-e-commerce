
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import faqBg from "../assets/images/fqa.jpg";

const faqData = [
  {
    question: "What types of jewellery do you offer?",
    answer:
      "We offer a beautiful collection of rings, necklaces, earrings, bracelets and timeless gold and diamond jewellery, designed for every special occasion.",
  },
  {
    question: "Can I order jewellery online?",
    answer:
      "Yes! Explore our collections, select your favourite design, choose the available options and place your order securely through our website.",
  },
  {
    question: "Do you offer custom jewellery designs?",
    answer:
      "Absolutely. We offer custom jewellery services. Share your design ideas, preferred materials, budget and reference images through our custom order form.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is confirmed and dispatched, you can track its status from your customer profile using your order details.",
  },

];

export default function FAQ() {
  const [openItems, setOpenItems] = useState([0, 1]);

  const toggleFAQ = (index) => {
    setOpenItems((previous) =>
      previous.includes(index)
        ? previous.filter((item) => item !== index)
        : [...previous, index]
    );
  };

  return (
    <section
      id="faq"
      className="relative min-h-fit overflow-hidden bg-[#9B6B32] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14"
      style={{
        backgroundImage: `url(${faqBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#593817]/35" />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-7 text-center sm:mb-9"
        >
          {/* Label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#F7F3ED] px-6 py-2.5 text-xs font-semibold tracking-wide text-[#29251F] sm:text-sm">
            FREQUENTLY ASKED QUESTIONS
            <span className="text-lg">›</span>
          </div>

          {/* Main title */}
          <h2 className="text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Everything You Need
            <br className="hidden sm:block" />
            To Know About Us
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base md:text-lg">
            From choosing the perfect piece to caring for your jewellery,
            we're here to make every moment special.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="mx-auto flex max-w-3xl flex-col gap-3">
          {faqData.map((faq, index) => {
            const isOpen = openItems.includes(index);

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="overflow-hidden rounded-xl border border-white/10 bg-[#56391E]/85 shadow-lg backdrop-blur-md"
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-7 sm:py-5"
                >
                  <span className="text-base font-medium text-white sm:text-lg md:text-xl">
                    {faq.question}
                  </span>

                  {/* Plus / Minus icon */}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#29251F] sm:h-10 sm:w-10">
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-3xl font-light leading-none"
                    >
                      {isOpen ? "−" : "+"}
                    </motion.span>
                  </span>
                </button>

                {/* Answer animation */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: {
                          duration: 0.35,
                          ease: [0.25, 0.1, 0.25, 1],
                        },
                        opacity: { duration: 0.25 },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl px-5 pb-5 text-sm leading-relaxed text-white/90 sm:px-7 sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom contact text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-7 text-center"
        >
          <p className="text-sm text-white/90 sm:text-base">
            Still have questions?
            <a
              href="/contact"
              className="ml-2 font-semibold text-white underline underline-offset-4 transition hover:text-[#E8C98F]"
            >
              Contact our team
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
}

