import React from 'react';

const WhatsAppWidget: React.FC = () => {
  const whatsappUrl = "https://wa.me/919423488174?text=Hello%20Abhinav%20Technical%20Institute%20Jalgaon,%20I%20have%20an%20enquiry%20about%20admissions%20and%20courses.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      title="Chat on WhatsApp"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        className="h-6 w-6 fill-white"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.328 1.971 13.89 1.95 12.005 1.95 6.568 1.95 2.145 6.32 2.14 11.75c-.001 1.705.452 3.37 1.31 4.8l-.946 3.454 3.543-.93zM18.06 14.8c-.33-.165-1.937-.957-2.235-1.066-.298-.11-.515-.165-.73.165-.215.33-.83 1.04-.1015 1.258-.185.22-.37.33-.7.165-.33-.165-1.4-.516-2.666-1.644-1.012-.9-1.694-2.012-1.892-2.34-.198-.33-.021-.508.144-.672.148-.148.33-.385.496-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.028-.578-.083-.165-.73-1.76-1.002-2.414-.264-.636-.554-.55-.73-.558-.174-.008-.37-.01-.567-.01-.198 0-.52.074-.79.37-.27.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.936-.79 2.21-1.55.275-.76.275-1.41.194-1.55-.083-.14-.302-.22-.631-.385z" />
      </svg>
      
      {/* Floating text tool-tip */}
      <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow border border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with Admissions
      </span>
    </a>
  );
};

export default WhatsAppWidget;
