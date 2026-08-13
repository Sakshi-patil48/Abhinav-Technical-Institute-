import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'What courses and trades are offered at Abhinav Technical Institute?',
      answer: 'We offer structured industrial training and skill certifications including the Electrician Trade, Technical Institutes Trade, Online Computer Training, and various short-term vocational repair courses.'
    },
    {
      question: 'Is Abhinav Technical Institute government-approved?',
      answer: 'Yes, our courses and certifications are structured around national technical standards (aligned with NCVT curriculum trade guidelines) to ensure the certificates are widely accepted by public and private employers.'
    },
    {
      question: 'Where is the institute located in Jalgaon?',
      answer: 'Our main campus is at Mansingh Market, Near Z P Road (Near Railway Station / Near Ramnivas Hotel), Navi Peth Jalgaon, Maharashtra 425001. It is a highly central and easily accessible location.'
    },
    {
      question: 'How do I apply or register for a batch?',
      answer: 'You can use our interactive Admission Advisor wizard above to find courses matching your qualification, fill out the Send Inquiry form at the bottom, or call Punjo Patil directly at +91-9423488174.'
    },
    {
      question: 'Do you provide practical hands-on laboratory work?',
      answer: 'Absolutely. We believe technical skills are best acquired by doing. Our campus is equipped with professional electrical boards, domestic wiring mock-ups, tools, and computer units for 100% practical lab practice.'
    },
    {
      question: 'What are the timing schedules of the classes?',
      answer: 'Classes run between Monday to Saturday, from 09:00 AM to 06:00 PM. Batches are structured at convenient morning, afternoon, and evening slots. Sunday is our weekly holiday.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-orangeAccent">Got Questions?</span>
          <h2 className="text-3xl font-bold text-slate-900 font-serif">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-12 bg-orangeAccent mx-auto rounded-full" />
          <p className="text-slate-600 text-sm">
            Quick answers regarding admissions, certifications, schedules, and lab infrastructure.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? 'border-orange-200 bg-orange-50/20 shadow-sm'
                    : 'border-slate-100 bg-white hover:border-slate-200'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none"
                >
                  <span className="font-bold text-slate-800 text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full shrink-0 transition-colors ${
                    isOpen ? 'bg-orange-100 text-orangeAccent' : 'bg-slate-50 text-slate-400'
                  }`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>
                
                {/* Collapsible Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-48 border-t border-slate-100' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 py-5 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
