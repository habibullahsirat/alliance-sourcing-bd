import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqsData = [
  {
    question: "What types of garments do you manufacture?",
    answer:
      "We specialize in a comprehensive range of apparel including woven items (denim, twill pants, dresses, jackets) and knitwear (t-shirts, polo shirts, hoodies, and activewear).",
  },
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer:
      "Our standard MOQ typically starts at 1,000 pieces per style/colorway. However, we offer flexible terms for sampling and strategic brand partnerships.",
  },
  {
    question: "How long does production typically take?",
    answer:
      "Bulk production usually takes 45 to 60 days following sample approval and lab dip confirmation, depending on fabric sourcing lead times.",
  },
  {
    question: "Do you offer sample production before bulk orders?",
    answer:
      "Yes, we provide full proto sampling, fit sampling, and salesman samples (SMS) to ensure design accuracy and specifications before starting main production.",
  },
  {
    question: "What quality control measures do you have in place?",
    answer:
      "We enforce AQL 2.5 standards with in-line inspections at every manufacturing phase, from raw fabric testing to final pre-shipment audits.",
  },
  {
    question:
      "Are your facilities certified for ethical and sustainable production?",
    answer:
      "Yes, our manufacturing partner network is certified by major global compliance bodies including OEKO-TEX, WRAP, BSCI, and SEDEX.",
  },
  {
    question: "How do you handle shipping and logistics?",
    answer:
      "We support FOB, CIF, and DDP shipping terms, managing custom clearances, port logistics, and documentation seamlessly out of Bangladesh ports.",
  },
  {
    question: "What payment terms do you offer?",
    answer:
      "We accept standard trade financing options including irrevocable Letter of Credit (L/C at sight) and TT payments based on client agreement.",
  },
];

export default function FAQS() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 bg-[#F2F2F2]">
      <div className="flex flex-col items-center gap-8 sm:gap-12 w-full max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-2 sm:gap-4 text-center max-w-2xl">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium text-[#24201D] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-lg lg:text-xl text-[#54524F] leading-relaxed">
            Everything you need to know about partnering with Alliance Sourcing
            BD
          </p>
        </div>

        {/* Accordion FAQ List */}
        <div className="flex flex-col gap-3 sm:gap-4 w-full">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 shadow-xs"
              >
                {/* Question Header Button */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left hover:bg-gray-50/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-base sm:text-lg font-semibold text-[#24201D] leading-snug">
                    {faq.question}
                  </h3>

                  <div
                    className={`shrink-0 flex justify-center items-center w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-transform duration-300 ${
                      isOpen ? "bg-gray-800 rotate-180" : "bg-[#0A66C2]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    )}
                  </div>
                </button>

                {/* Collapsible Answer Body */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-5 px-4 sm:px-6"
                      : "grid-rows-[0fr] opacity-0 py-0 px-4 sm:px-6"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs sm:text-base text-[#54524F] leading-relaxed border-t border-gray-100 pt-3">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
