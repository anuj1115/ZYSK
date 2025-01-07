import React, { useState } from "react";

const faqItems = [
    {
      question: "Is there a free trial available?",
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can change your plan at any time through your account settings."
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel your subscription at any time through your account settings."
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can add additional information to your invoices through the billing settings."
    },
    {
      question: "How does billing work?",
      answer: "We bill monthly based on your selected plan and usage."
    },
    {
      question: "How do I change my account email?",
      answer: "You can change your account email in your profile settings."
    }
  ];

  const FAQItem = ({ question, answer, isOpen, onToggle }) => {
    return (
      <div className="border-b border-gray-200 py-4">
        <button 
          className="w-full flex justify-between items-center text-left"
          onClick={onToggle}
        >
          <h3 className="text-base font-[500] text-[18px] text-[#101828] md:pt-[20px]">{question}</h3>
          <div 
            className={`ml-4 flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full border border-gray-400 transition-transform duration-200`}
          >
            {isOpen ? (
              <svg 
                className="h-4 w-4 text-[#98A2B3]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M20 12H4" 
                />
              </svg>
            ) : (
              <svg 
                className="h-4 w-4 text-gray-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 4v16m8-8H4" 
                />
              </svg>
            )}
          </div>
        </button>
        {isOpen && (
          <div className="mt-2 pr-12">
            <p className="text-gray-600">{answer}</p>
          </div>
        )}
      </div>
    );
  };
  
  
  const FAQ = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const handleToggle = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <div className="max-w-[768px] w-full px-8 md:px-0">
        <div className="divide-y divide-gray-200">
          {items.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export {FAQ, faqItems};