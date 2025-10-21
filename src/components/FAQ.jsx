import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What makes a great dropshipper?",
    answer:
      "A great dropshipper understands market demand, builds strong supplier relationships, and leverages automation to scale effortlessly.",
  },
  {
    question: "How is this different from free YouTube videos?",
    answer:
      "YouTube shows pieces. This webinar gives you the complete roadmap — tested, proven, and designed to actually get results.",
  },
  {
    question: "Do I need prior experience to start dropshipping?",
    answer:
      "No! Dropshipping is beginner-friendly. You can learn step-by-step strategies to build your first profitable store even if you’re new.",
  },
  {
    question: "How much investment is required to start?",
    answer:
      "You can start with minimal investment — primarily for product testing, store setup, and basic marketing to validate your ideas.",
  },
  {
    question: "Can I do dropshipping part-time?",
    answer:
      "Yes, you can start part-time and scale it into a full-time business once your systems are in place and revenue becomes consistent.",
  },
  {
    question: "Will I get any support after the webinar?",
    answer:
      "Yes! You’ll get access to a community and resources to help you take your next steps confidently.",
  },
  {
    question: "Will this webinar help me find winning products?",
    answer:
      "Absolutely! You’ll learn proven product research frameworks used by 7-figure sellers to identify high-demand, low-competition items.",
  },
  {
    question: "Is this really possible for me?",
    answer:
      "If you can follow simple steps and stay consistent — yes, 100%. This system has already worked for hundreds of beginners just like you.",
  },
];

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-[#0B3C41] py-20 px-6 text-white text-center">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
          Frequently Asked <span className="text-yellow-400">Questions!</span>
        </h2>

        {/* FAQ List */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                activeIndex === index
                  ? "bg-emerald-700 text-black"
                  : "bg-gray-100 text-black"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center px-6 py-2 font-semibold text-left text-lg transition-all ${
                  activeIndex === index
                    ? "bg-yellow-400"
                    : "hover:bg-yellow-400"
                }`}
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <Minus className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  activeIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="bg-white text-gray-800 text-base px-6 py-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
