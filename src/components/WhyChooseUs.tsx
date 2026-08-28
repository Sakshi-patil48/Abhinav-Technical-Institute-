import React from 'react';
import backImageSrc from '../assets/backImage';
import { Language, getTranslation } from '../translations/translations';

interface WhyChooseUsProps {
  language: Language;
}

// 1. Experienced Faculty (matching teacher with glasses, curly hair, notebook in classroom)
const ExperiencedFacultyIcon: React.FC = () => (
  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-[#F4F9F5] via-[#E8F3EB] to-[#D1E7D8] border-2 border-white shadow-xs flex items-center justify-center overflow-hidden relative group-hover:scale-105 transition-all duration-300 ring-4 ring-[#1557C0]/5">
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Classroom Chalkboard Background */}
      <rect width="200" height="200" fill="#1C3D37" />
      <path d="M20 40 Q60 35 100 45 M120 50 Q160 40 180 45 M30 80 Q70 75 110 85" stroke="#3D7065" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
      
      {/* Classroom Desk Edge */}
      <rect x="0" y="165" width="200" height="35" fill="#D97706" opacity="0.8" />
      <line x1="0" y1="165" x2="200" y2="165" stroke="#B45309" strokeWidth="2" />

      {/* Professor / Teacher (Experienced Woman with glasses & stylish curly grey hair) */}
      <g transform="translate(100, 110)">
        {/* Grey Curly Hair (Back) */}
        <ellipse cx="0" cy="-45" rx="34" ry="36" fill="#94A3B8" />
        <circle cx="-25" cy="-55" r="14" fill="#CBD5E1" />
        <circle cx="25" cy="-55" r="14" fill="#CBD5E1" />
        <circle cx="-28" cy="-35" r="12" fill="#94A3B8" />
        <circle cx="28" cy="-35" r="12" fill="#94A3B8" />
        <circle cx="0" cy="-68" r="15" fill="#CBD5E1" />

        {/* Neck */}
        <rect x="-9" y="-22" width="18" height="20" fill="#FDBA74" />
        <circle cx="0" cy="-5" r="2.5" fill="#1E293B" /> {/* Necklace pendant */}

        {/* Face */}
        <ellipse cx="0" cy="-40" rx="19" ry="22" fill="#FED7AA" />

        {/* Hair Curls Framing Face */}
        <circle cx="-16" cy="-52" r="9" fill="#94A3B8" />
        <circle cx="16" cy="-52" r="9" fill="#94A3B8" />
        <path d="M-18 -50 Q0 -60 18 -50 Q12 -42 0 -44 Q-12 -42 -18 -50 Z" fill="#CBD5E1" />

        {/* Modern Black-Rimmed Glasses */}
        <rect x="-16" y="-45" width="13" height="10" rx="4" stroke="#0F172A" strokeWidth="2" fill="#E0F2FE" fillOpacity="0.4" />
        <rect x="3" y="-45" width="13" height="10" rx="4" stroke="#0F172A" strokeWidth="2" fill="#E0F2FE" fillOpacity="0.4" />
        <line x1="-3" y1="-41" x2="3" y2="-41" stroke="#0F172A" strokeWidth="2" />
        {/* Eyes & Smile */}
        <circle cx="-9" cy="-40" r="2" fill="#1E293B" />
        <circle cx="9" cy="-40" r="2" fill="#1E293B" />
        <path d="M-6 -29 Q0 -24 6 -29" stroke="#9A3412" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Plaid / Checkered Green Teacher Over-Shirt */}
        <path d="M-28 -2 L-36 75 L36 75 L28 -2 C18 6 -18 6 -28 -2 Z" fill="#2D5A4C" stroke="#16382E" strokeWidth="1.5" />
        {/* Inner Black T-shirt */}
        <polygon points="-12,-2 12,-2 8,24 -8,24" fill="#0F172A" />
        {/* Plaid Grid Lines */}
        <line x1="-28" y1="18" x2="28" y2="18" stroke="#447A6B" strokeWidth="1.5" />
        <line x1="-32" y1="42" x2="32" y2="42" stroke="#447A6B" strokeWidth="1.5" />
        <line x1="-12" y1="0" x2="-16" y2="75" stroke="#447A6B" strokeWidth="1.5" />
        <line x1="12" y1="0" x2="16" y2="75" stroke="#447A6B" strokeWidth="1.5" />

        {/* Left Expressive Gesture Hand (teaching) */}
        <path d="M-28 6 L-52 14 L-58 -4" stroke="#2D5A4C" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="-58" cy="-5" r="4.5" fill="#FED7AA" />
        <line x1="-58" y1="-5" x2="-64" y2="-12" stroke="#FED7AA" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="-55" y1="-5" x2="-58" y2="-14" stroke="#FED7AA" strokeWidth="2" strokeLinecap="round" />

        {/* Right Hand Holding Tablet / Class Planner */}
        <path d="M28 6 L44 32 L20 42" stroke="#2D5A4C" strokeWidth="9" strokeLinecap="round" />
        <rect x="0" y="32" width="34" height="18" rx="2" fill="#0F172A" stroke="#334155" strokeWidth="1.5" transform="rotate(-10 17 41)" />
        <rect x="2" y="34" width="30" height="14" rx="1" fill="#E2E8F0" transform="rotate(-10 17 41)" />
        <circle cx="18" cy="42" r="4.5" fill="#FED7AA" />
      </g>
    </svg>
  </div>
);

// 2. Practical Training (matching workbench with tools & machinery)
const PracticalTrainingIcon: React.FC = () => (
  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-[#EFF6FF] via-[#DBEAFE] to-[#BFDBFE] border-2 border-white shadow-xs flex items-center justify-center overflow-hidden relative group-hover:scale-105 transition-all duration-300 ring-4 ring-[#1557C0]/5">
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#0F172A" />
      {/* Workshop Blueprint Grid */}
      <line x1="0" y1="40" x2="200" y2="40" stroke="#1E293B" strokeWidth="1" />
      <line x1="0" y1="80" x2="200" y2="80" stroke="#1E293B" strokeWidth="1" />
      <line x1="0" y1="120" x2="200" y2="120" stroke="#1E293B" strokeWidth="1" />
      <line x1="40" y1="0" x2="40" y2="200" stroke="#1E293B" strokeWidth="1" />
      <line x1="80" y1="0" x2="80" y2="200" stroke="#1E293B" strokeWidth="1" />
      <line x1="120" y1="0" x2="120" y2="200" stroke="#1E293B" strokeWidth="1" />
      <line x1="160" y1="0" x2="160" y2="200" stroke="#1E293B" strokeWidth="1" />

      {/* Industrial Gears */}
      <g transform="translate(142, 45) scale(0.6)" fill="#F59E0B">
        <circle cx="0" cy="0" r="28" fill="#D97706" />
        <path d="M-6 -42 H6 V-28 H-6 Z M-6 28 H6 V42 H-6 Z M-42 -6 V6 H-28 V-6 Z M28 -6 V6 H42 V-6 Z" fill="#F59E0B" />
        <path d="M-30 -30 L-22 -22 L-14 -30 L-22 -38 Z M22 22 L30 30 L38 22 L30 14 Z M-30 30 L-22 22 L-30 14 L-38 22 Z M22 -22 L30 -30 L22 -38 L14 -30 Z" fill="#F59E0B" />
        <circle cx="0" cy="0" r="14" fill="#0F172A" />
      </g>

      <g transform="translate(100, 30) scale(0.42)" fill="#38BDF8">
        <circle cx="0" cy="0" r="28" fill="#0284C7" />
        <path d="M-6 -42 H6 V-28 H-6 Z M-6 28 H6 V42 H-6 Z M-42 -6 V6 H-28 V-6 Z M28 -6 V6 H42 V-6 Z" fill="#38BDF8" />
        <circle cx="0" cy="0" r="12" fill="#0F172A" />
      </g>

      {/* Heavy Machinery Workbench Base */}
      <rect x="18" y="130" width="164" height="52" rx="4" fill="#1E293B" stroke="#334155" strokeWidth="2" />
      <line x1="18" y1="145" x2="182" y2="145" stroke="#334155" strokeWidth="2" />
      <rect x="30" y="152" width="40" height="22" fill="#0F172A" rx="2" />
      <rect x="80" y="152" width="40" height="22" fill="#0F172A" rx="2" />
      <rect x="130" y="152" width="40" height="22" fill="#0F172A" rx="2" />

      {/* Industrial Lathe / CNC Machine Tool Setup */}
      {/* Motor Housing */}
      <rect x="28" y="85" width="45" height="45" rx="3" fill="#0284C7" stroke="#0369A1" strokeWidth="1.5" />
      <circle cx="50" cy="108" r="12" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
      {/* Chuck & Rotating Workpiece */}
      <rect x="73" y="100" width="22" height="15" fill="#94A3B8" stroke="#475569" strokeWidth="1.5" />
      <rect x="95" y="103" width="45" height="9" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" />
      {/* Tailstock */}
      <polygon points="140,95 160,95 165,130 140,130" fill="#0284C7" stroke="#0369A1" strokeWidth="1.5" />
      <line x1="140" y1="107" x2="135" y2="107" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />

      {/* Toolholder with Gold Cutting Tip throwing sparks */}
      <rect x="110" y="112" width="16" height="18" fill="#F59E0B" />
      <polygon points="112,112 118,107 122,112" fill="#EF4444" />
      {/* Sparks */}
      <circle cx="118" cy="102" r="2" fill="#FEF08A" />
      <circle cx="124" cy="98" r="1.5" fill="#F59E0B" />
      <circle cx="114" cy="95" r="1" fill="#FDE047" />
    </svg>
  </div>
);

// 3. Industry-Oriented Curriculum (matching uploaded "CURRICULUM" graphic with rocket, pencil, ruler, grad cap)
const IndustryCurriculumIcon: React.FC = () => (
  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-[#F0FDF4] via-[#DCFCE7] to-[#BBF7D0] border-2 border-white shadow-xs flex items-center justify-center overflow-hidden relative group-hover:scale-105 transition-all duration-300 ring-4 ring-[#1557C0]/5">
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* White Clean Canvas */}
      <rect width="200" height="200" fill="#FFFFFF" />

      {/* Curriculum Milestone Dotted Roadmap Line */}
      <path d="M22 105 L55 105 L55 55 L145 55 L145 105 L178 105" stroke="#334155" strokeWidth="2" strokeDasharray="3 4" fill="none" />
      <circle cx="22" cy="105" r="3" fill="#334155" />
      <circle cx="178" cy="105" r="3" fill="#334155" />

      {/* Launch Rocket (Milestone 1) */}
      <g transform="translate(55, 36) scale(0.65)">
        <path d="M0 -22 C8 -10 10 10 10 20 L-10 20 C-10 10 -8 -10 0 -22 Z" fill="#EF4444" stroke="#991B1B" strokeWidth="2" />
        <circle cx="0" cy="-2" r="4" fill="#FFFFFF" stroke="#991B1B" strokeWidth="1.5" />
        <polygon points="-10,12 -18,24 -10,22" fill="#F97316" />
        <polygon points="10,12 18,24 10,22" fill="#F97316" />
        <polygon points="-4,20 0,28 4,20" fill="#FBBF24" />
      </g>

      {/* Graduation Mortarboard (Milestone 2 - Center) */}
      <g transform="translate(100, 48) scale(0.65)">
        <polygon points="0,-16 28,-4 0,8 -28,-4" fill="#DC2626" stroke="#991B1B" strokeWidth="2" />
        <path d="M-14 0 L-14 12 Q0 18 14 12 L14 0" fill="#DC2626" stroke="#991B1B" strokeWidth="1.5" />
        <line x1="0" y1="-4" x2="20" y2="6" stroke="#FDE047" strokeWidth="2" />
        <circle cx="20" cy="8" r="2.5" fill="#EAB308" />
      </g>

      {/* Backpack & Tools */}
      <g transform="translate(55, 114) scale(0.55)">
        <rect x="-14" y="-12" width="28" height="24" rx="6" fill="#F87171" stroke="#991B1B" strokeWidth="2" />
        <rect x="-8" y="0" width="16" height="8" rx="2" fill="#FFFFFF" stroke="#991B1B" strokeWidth="1.5" />
      </g>

      {/* Big Teal "CURRICULUM" Typography Motif */}
      <text x="100" y="98" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="23" letterSpacing="0.5" fill="#14B8A6">
        CURRICULUM
      </text>

      {/* Pencil & Ruler Design Elements in foreground */}
      {/* Ruler integrated into letter 'L' / 'U' */}
      <g transform="translate(136, 75)">
        <rect x="0" y="0" width="6" height="24" fill="#0D9488" stroke="#115E59" strokeWidth="1" />
        <line x1="0" y1="4" x2="3" y2="4" stroke="#FFFFFF" strokeWidth="1" />
        <line x1="0" y1="8" x2="4" y2="8" stroke="#FFFFFF" strokeWidth="1" />
        <line x1="0" y1="12" x2="3" y2="12" stroke="#FFFFFF" strokeWidth="1" />
        <line x1="0" y1="16" x2="4" y2="16" stroke="#FFFFFF" strokeWidth="1" />
        <line x1="0" y1="20" x2="3" y2="20" stroke="#FFFFFF" strokeWidth="1" />
      </g>

      {/* Three Colored Drafting Pencils (Pink, Cyan, Yellow) at bottom angle */}
      <g transform="translate(20, 150) rotate(-35)">
        <rect x="0" y="0" width="45" height="5" rx="1" fill="#F472B6" />
        <polygon points="45,0 52,2.5 45,5" fill="#FBCFE8" />
        <polygon points="50,1.8 52,2.5 50,3.2" fill="#0F172A" />
      </g>
      <g transform="translate(38, 162) rotate(-35)">
        <rect x="0" y="0" width="45" height="5" rx="1" fill="#38BDF8" />
        <polygon points="45,0 52,2.5 45,5" fill="#BAE6FD" />
        <polygon points="50,1.8 52,2.5 50,3.2" fill="#0F172A" />
      </g>
      <g transform="translate(56, 174) rotate(-35)">
        <rect x="0" y="0" width="45" height="5" rx="1" fill="#FBBF24" />
        <polygon points="45,0 52,2.5 45,5" fill="#FEF08A" />
        <polygon points="50,1.8 52,2.5 50,3.2" fill="#0F172A" />
      </g>

      {/* Hand Sketching with Yellow Pencil */}
      <g transform="translate(130, 140)">
        <g transform="rotate(-30)">
          <rect x="-30" y="-3" width="55" height="6" rx="1" fill="#EAB308" stroke="#CA8A04" strokeWidth="1" />
          <polygon points="25,-3 35,0 25,3" fill="#FEF08A" />
          <polygon points="32,-1 35,0 32,1" fill="#0F172A" />
          <rect x="-38" y="-3.5" width="8" height="7" rx="1" fill="#F43F5E" />
        </g>
        {/* Hand Illustration */}
        <path d="M22 8 C15 0 0 12 -8 18 L-2 28 C8 24 28 22 22 8 Z" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1" />
      </g>
    </svg>
  </div>
);

// 4. Government Approved (matching wooden rubber stamp pressing red "APPROVED" bordered stamp)
const GovernmentApprovedIcon: React.FC = () => (
  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-[#FFF1F2] via-[#FFE4E6] to-[#FECDD3] border-2 border-white shadow-xs flex items-center justify-center overflow-hidden relative group-hover:scale-105 transition-all duration-300 ring-4 ring-[#1557C0]/5">
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Light Clean Grey/Silver Background Surface */}
      <rect width="200" height="200" fill="#E2E8F0" />

      {/* Official Red Stamp Box Outline */}
      <rect x="42" y="82" width="138" height="52" rx="4" stroke="#DC2626" strokeWidth="3.5" fill="#FFFFFF" fillOpacity="0.8" />
      <rect x="46" y="86" width="130" height="44" rx="2" stroke="#DC2626" strokeWidth="1.2" fill="none" />

      {/* Bold Red "APPROVED" Text */}
      <text
        x="111"
        y="118"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontWeight="900"
        fontSize="22"
        letterSpacing="2"
        fill="#DC2626"
      >
        APPROVED
      </text>

      {/* Wooden Vintage Stamp Handle with 3D grain & yellow sponge layer */}
      <g transform="translate(68, 86) rotate(-38)">
        {/* Stamp Cast Shadow */}
        <ellipse cx="0" cy="18" rx="38" ry="12" fill="#0F172A" opacity="0.25" />

        {/* Rubber Base Block (Dark Wood Finish) */}
        <rect x="-42" y="-12" width="84" height="22" rx="3" fill="#5C2C16" stroke="#381A0B" strokeWidth="2" />
        {/* Yellow Cushion Sponge Layer */}
        <rect x="-40" y="8" width="80" height="4" fill="#FACC15" />

        {/* Ergonomic Wooden Knob Handle */}
        <path d="M-8 -12 C-8 -30 -18 -45 -18 -62 C-18 -75 -10 -84 0 -84 C10 -84 18 -75 18 -62 C18 -45 8 -30 8 -12 Z" fill="#78350F" stroke="#451A03" strokeWidth="2" />
        {/* Wood Texture Highlight Streak */}
        <path d="M-4 -80 C-10 -72 -10 -55 -2 -35 C3 -25 3 -12 3 -12" stroke="#9A3412" strokeWidth="3" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  </div>
);

// 5. Student Support (matching online mentoring / screen with students on books, bulb & grad cap)
const StudentSupportIcon: React.FC = () => (
  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-[#FAF5FF] via-[#F3E8FF] to-[#E9D5FF] border-2 border-white shadow-xs flex items-center justify-center overflow-hidden relative group-hover:scale-105 transition-all duration-300 ring-4 ring-[#1557C0]/5">
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Soft Purple Vector Organic Blob */}
      <rect width="200" height="200" fill="#EDE9FE" />
      <path d="M15 45 C40 10 160 5 185 45 C205 90 195 160 165 185 C130 205 50 195 20 165 C-10 135 0 80 15 45 Z" fill="#DDD6FE" />

      {/* Graduation Cap on top of monitor */}
      <g transform="translate(100, 30) scale(0.65)">
        <polygon points="0,-16 32,-4 0,8 -32,-4" fill="#312E81" stroke="#1E1B4B" strokeWidth="2" />
        <path d="M-16 0 L-16 12 Q0 18 16 12 L16 0" fill="#312E81" stroke="#1E1B4B" strokeWidth="1.5" />
        <line x1="0" y1="-4" x2="-22" y2="8" stroke="#FDE047" strokeWidth="2" />
        <circle cx="-22" cy="10" r="3" fill="#EAB308" />
      </g>

      {/* Idea Lightbulb (Top Right) */}
      <g transform="translate(150, 42) scale(0.55)">
        <circle cx="0" cy="0" r="16" fill="#FDE047" stroke="#CA8A04" strokeWidth="2" />
        <path d="M-8 12 L8 12 L6 20 L-6 20 Z" fill="#94A3B8" stroke="#475569" strokeWidth="1.5" />
        <line x1="0" y1="-22" x2="0" y2="-28" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="16" y1="-14" x2="22" y2="-18" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="-16" y1="-14" x2="-22" y2="-18" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Central Computer Monitor / Live Mentoring Screen */}
      <rect x="42" y="52" width="116" height="74" rx="5" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
      <rect x="46" y="56" width="108" height="66" rx="3" fill="#FFFFFF" />
      {/* Monitor Stand */}
      <rect x="94" y="126" width="12" height="18" fill="#475569" />
      <rect x="80" y="142" width="40" height="5" rx="2" fill="#334155" />

      {/* Live Online Trainer on Screen (Presenting Bar & Wave Charts) */}
      <g transform="translate(100, 78)">
        {/* Mentor Figure inside Screen */}
        <ellipse cx="14" cy="-5" rx="10" ry="11" fill="#FED7AA" />
        <path d="M6 -14 C12 -20 22 -18 24 -10 C24 -4 20 2 18 4 C12 4 8 0 6 -6 Z" fill="#78350F" />
        <path d="M0 8 C6 4 24 4 28 8 L32 30 H-4 Z" fill="#FED7AA" />
        {/* Explaining Arm */}
        <path d="M2 14 L-16 6 L-24 -4" stroke="#FED7AA" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Graphs on Screen */}
        <rect x="-38" y="-12" width="4" height="18" fill="#3B82F6" />
        <rect x="-32" y="-18" width="4" height="24" fill="#2563EB" />
        <rect x="-26" y="-8" width="4" height="14" fill="#60A5FA" />
        <path d="M-40 18 Q-30 8 -20 18 Q-10 8 0 18" stroke="#38BDF8" strokeWidth="2" fill="none" />
      </g>

      {/* Book Stacks on both sides with Students with laptops */}
      {/* Left Stack of 3 Books & Student Girl */}
      <g transform="translate(36, 142)">
        <rect x="-16" y="0" width="36" height="8" rx="1.5" fill="#DC2626" />
        <rect x="-18" y="7" width="38" height="8" rx="1.5" fill="#D97706" />
        <rect x="-20" y="14" width="42" height="9" rx="1.5" fill="#7C2D12" />
        {/* Student sitting */}
        <circle cx="2" cy="-14" r="5" fill="#FED7AA" />
        <path d="M-2 -8 L6 -8 L8 0 L-4 0 Z" fill="#0284C7" />
        {/* Mini Laptop */}
        <polygon points="-4,-2 4,-2 6,0 -6,0" fill="#0F172A" />
      </g>

      {/* Right Stack of Books & Student Boy */}
      <g transform="translate(154, 148)">
        <rect x="-16" y="0" width="34" height="7" rx="1.5" fill="#2563EB" />
        <rect x="-18" y="6" width="38" height="8" rx="1.5" fill="#15803D" />
        <rect x="-20" y="13" width="42" height="9" rx="1.5" fill="#4338CA" />
        {/* Student sitting */}
        <circle cx="-2" cy="-14" r="5" fill="#FED7AA" />
        <path d="M-6 -8 L2 -8 L4 0 L-8 0 Z" fill="#F59E0B" />
        {/* Mini Laptop */}
        <polygon points="-8,-2 0,-2 2,0 -10,0" fill="#0F172A" />
      </g>
    </svg>
  </div>
);

// 6. Career Guidance (matching counselor pointing at clipboard checklist, laptop, target bullseye & gear)
const CareerGuidanceFeatureIcon: React.FC = () => (
  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-[#EFF6FF] via-[#DBEAFE] to-[#BFDBFE] border-2 border-white shadow-xs flex items-center justify-center overflow-hidden relative group-hover:scale-105 transition-all duration-300 ring-4 ring-[#1557C0]/5">
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#F0F7FF" />
      <path d="M20 50 C40 20 160 10 180 50 C200 90 190 160 160 180 C130 200 50 190 20 170 Z" fill="#E0F0FE" opacity="0.8" />

      {/* Target Bullseye with Arrow (Top Right) */}
      <g transform="translate(150, 48)">
        <circle cx="0" cy="0" r="32" stroke="#2563EB" strokeWidth="6" fill="#EFF6FF" />
        <circle cx="0" cy="0" r="20" stroke="#2563EB" strokeWidth="5" fill="#EFF6FF" />
        <circle cx="0" cy="0" r="8" fill="#1D4ED8" />
        <line x1="26" y1="-26" x2="3" y2="-3" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
        <path d="M26 -26 L32 -18 L30 -30 L18 -32 Z" fill="#1E293B" />
      </g>

      {/* Gear (Left) */}
      <g transform="translate(18, 52) scale(0.68)" fill="#2563EB" stroke="#1D4ED8" strokeWidth="2">
        <circle cx="24" cy="24" r="16" fill="#3B82F6" />
        <path d="M24 2V10M24 38V46M2 24H10M38 24H46M8 8L14 14M34 34L40 40M8 40L14 34M34 14L40 8" strokeWidth="5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="9" fill="#F0F7FF" stroke="#1D4ED8" strokeWidth="3" />
      </g>

      {/* Central Clipboard with Checkboxes */}
      <g transform="translate(62, 52)">
        <rect x="0" y="8" width="62" height="88" rx="6" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
        <rect x="4" y="14" width="54" height="78" rx="3" fill="#FFFFFF" />
        <rect x="18" y="2" width="26" height="12" rx="3" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1.5" />

        {/* Item 1 Checked */}
        <rect x="9" y="24" width="13" height="13" rx="2" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1.5" />
        <path d="M12 30 L15 33 L20 26" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="26" y1="28" x2="52" y2="28" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />

        {/* Item 2 Checked */}
        <rect x="9" y="44" width="13" height="13" rx="2" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1.5" />
        <path d="M12 50 L15 53 L20 46" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="26" y1="48" x2="52" y2="48" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />

        {/* Item 3 Pending Box */}
        <rect x="9" y="64" width="13" height="13" rx="2" fill="#F8FAFC" stroke="#2563EB" strokeWidth="1.5" />
        <line x1="26" y1="68" x2="50" y2="68" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Professional Counselor pointing to the checklist */}
      <g id="mentor-figure" transform="translate(90, 70)">
        <path d="M42 2C24 2 20 18 18 36C24 45 42 46 48 38C48 20 48 2 42 2Z" fill="#1E293B" />
        <rect x="30" y="24" width="10" height="12" fill="#FDBA74" />
        <ellipse cx="32" cy="18" rx="12" ry="14" fill="#FED7AA" />
        <path d="M22 10C26 4 38 2 44 10C42 16 38 24 38 32C34 26 28 20 22 10Z" fill="#0F172A" />

        {/* Navy Blazer */}
        <path d="M16 38C22 34 44 34 52 38L62 90H10L16 38Z" fill="#1D4ED8" stroke="#1E40AF" strokeWidth="1.5" />
        <polygon points="28,36 38,36 34,60 32,60" fill="#FFFFFF" />

        {/* Pointing Hand */}
        <path d="M20 46 L0 58 L-12 50" stroke="#1D4ED8" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <g transform="translate(-14, 46)">
          <circle cx="0" cy="0" r="4" fill="#FED7AA" />
          <line x1="0" y1="0" x2="-8" y2="-6" stroke="#FED7AA" strokeWidth="3" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  </div>
);

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ language }) => {
  const t = (key: string) => getTranslation(key, language);

  const features = [
    {
      id: 'faculty',
      title: t('whyUs.facultyTitle'),
      desc: t('whyUs.facultyDesc'),
    },
    {
      id: 'practical',
      title: t('whyUs.practicalTitle'),
      desc: t('whyUs.practicalDesc'),
    },
    {
      id: 'curriculum',
      title: t('whyUs.curriculumTitle'),
      desc: t('whyUs.curriculumDesc'),
    },
    {
      id: 'approved',
      title: t('whyUs.approvedTitle'),
      desc: t('whyUs.approvedDesc'),
    },
    {
      id: 'support',
      title: t('whyUs.supportTitle'),
      desc: t('whyUs.supportDesc'),
    },
    {
      id: 'career',
      title: t('whyUs.careerTitle'),
      desc: t('whyUs.careerDesc'),
    }
  ];

  return (
    <section
      id="why-us"
      className="relative py-16 md:py-24 px-4 md:px-6 mb-16 rounded-3xl border border-[#E2E8F0] overflow-hidden shadow-sm"
    >
      {/* 100% Visible Background Image: back.jpg */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <img
          src={backImageSrc}
          alt="Why Choose Us Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-['Manrope'] text-2xl sm:text-3xl md:text-4xl text-[#002760] font-extrabold mb-3 tracking-tight">
            {t('whyUs.title')}
          </h2>
          <div className="w-14 h-1 bg-[#FFD21F] mx-auto rounded-full mb-4" />
          <p className="font-['Work_Sans'] text-sm md:text-base text-[#475569] max-w-2xl mx-auto leading-relaxed">
            {t('whyUs.subtitle')}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl md:rounded-[22px] p-6 sm:p-7 md:p-8 border border-[#E2E8F0] shadow-[0_4px_20px_-4px_rgba(0,39,96,0.06)] hover:shadow-[0_16px_32px_-8px_rgba(0,39,96,0.12)] hover:border-[#1557C0]/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center h-full group relative"
            >
              {/* Custom SVG Illustration Container */}
              <div className="mb-5 shrink-0">
                {feature.id === 'faculty' && <ExperiencedFacultyIcon />}
                {feature.id === 'practical' && <PracticalTrainingIcon />}
                {feature.id === 'curriculum' && <IndustryCurriculumIcon />}
                {feature.id === 'approved' && <GovernmentApprovedIcon />}
                {feature.id === 'support' && <StudentSupportIcon />}
                {feature.id === 'career' && <CareerGuidanceFeatureIcon />}
              </div>

              {/* Card Title */}
              <h3 className="font-['Manrope'] text-base sm:text-lg font-bold text-[#002760] mb-2 leading-snug group-hover:text-[#1557C0] transition-colors">
                {feature.title}
              </h3>

              {/* Subtle Yellow Accent Underline */}
              <div className="w-8 h-0.5 bg-[#FFD21F] mb-3.5 shrink-0 rounded-full group-hover:w-12 transition-all duration-300" />

              {/* Card Description */}
              <p className="font-['Work_Sans'] text-xs sm:text-sm text-[#475569] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

