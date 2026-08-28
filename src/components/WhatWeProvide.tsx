import React, { useRef } from 'react';
import backImageSrc from '../assets/backImage';
import { Language, getTranslation } from '../translations/translations';

interface WhatWeProvideProps {
  language: Language;
}

const PracticalTrainingIcon: React.FC = () => (
  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FEF9C3] via-[#EFF6FF] to-[#DBEAFE] border border-[#FDE047]/50 shadow-xs flex items-center justify-center overflow-hidden relative group-hover:scale-110 transition-transform duration-300">
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Soft Glow & Orbit */}
      <circle cx="100" cy="100" r="92" fill="#FEFCE8" opacity="0.9" />
      <circle cx="100" cy="100" r="76" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />

      {/* Orbiting Tech Icons */}
      {/* Top Left: Magnifier + Gear */}
      <g transform="translate(32, 28) scale(0.65)">
        <circle cx="20" cy="20" r="14" stroke="#2563EB" strokeWidth="3" fill="#EFF6FF" />
        <path d="M30 30L42 42" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
        <circle cx="20" cy="20" r="5" fill="#3B82F6" />
      </g>

      {/* Top Right: AI Brain */}
      <g transform="translate(136, 22) scale(0.6)">
        <ellipse cx="25" cy="20" rx="18" ry="14" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2.5" />
        <path d="M15 15C18 10 32 10 35 15M25 8V32M12 22H38" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Bottom Left: Bar Chart */}
      <g transform="translate(16, 75) scale(0.55)">
        <rect x="5" y="30" width="8" height="15" rx="2" fill="#3B82F6" />
        <rect x="16" y="20" width="8" height="25" rx="2" fill="#EAB308" />
        <rect x="27" y="10" width="8" height="35" rx="2" fill="#2563EB" />
        <path d="M0 48H40" stroke="#64748B" strokeWidth="2" />
      </g>

      {/* Middle Right: Mail / Message with Gear */}
      <g transform="translate(148, 62) scale(0.5)">
        <rect x="5" y="10" width="36" height="24" rx="4" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2.5" />
        <path d="M5 12L23 24L41 12" stroke="#2563EB" strokeWidth="2" fill="none" />
        <circle cx="38" cy="28" r="7" fill="#EAB308" />
      </g>

      {/* Gears */}
      <g transform="translate(112, 10) scale(0.4)" stroke="#3B82F6" strokeWidth="3" fill="#BFDBFE">
        <circle cx="20" cy="20" r="12" />
        <path d="M20 2V8M20 32V38M2 20H8M32 20H38" strokeWidth="4" />
      </g>
      <g transform="translate(155, 110) scale(0.4)" stroke="#3B82F6" strokeWidth="3" fill="#BFDBFE">
        <circle cx="20" cy="20" r="12" />
        <path d="M20 2V8M20 32V38M2 20H8M32 20H38" strokeWidth="4" />
      </g>

      {/* AI Robot Companion (Left side) */}
      <g id="robot" transform="translate(30, 72) scale(0.85)">
        {/* Antenna */}
        <line x1="42" y1="18" x2="42" y2="8" stroke="#3B82F6" strokeWidth="3" />
        <circle cx="42" cy="7" r="4" fill="#60A5FA" />
        {/* Robot Head */}
        <rect x="18" y="18" width="48" height="38" rx="19" fill="#FFFFFF" stroke="#2563EB" strokeWidth="3" />
        {/* Visor / Face */}
        <rect x="24" y="24" width="36" height="22" rx="11" fill="#1E3A8A" />
        {/* Glowing Eyes */}
        <ellipse cx="33" cy="35" rx="4" ry="5" fill="#38BDF8" />
        <ellipse cx="51" cy="35" rx="4" ry="5" fill="#38BDF8" />
        {/* Robot Body */}
        <rect x="26" y="58" width="32" height="30" rx="14" fill="#FFFFFF" stroke="#2563EB" strokeWidth="3" />
        <ellipse cx="42" cy="72" rx="7" ry="5" fill="#93C5FD" />
        {/* Robot Arm holding Lightbulb */}
        <path d="M26 68C15 68 8 80 12 90" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* Yellow Glowing Lightbulb */}
        <g transform="translate(2, 78) scale(0.8)">
          <circle cx="12" cy="12" r="10" fill="#FACC15" />
          <rect x="9" y="21" width="6" height="4" rx="1" fill="#94A3B8" />
          <path d="M12 6V2M6 12H2M18 12H22M8 8L5 5M16 8L19 5" stroke="#EAB308" strokeWidth="1.5" />
        </g>
      </g>

      {/* Girl Student Mascot (Center & Right) */}
      <g id="student-girl" transform="translate(68, 38)">
        {/* Long Brown Hair (Back layer) */}
        <path
          d="M32 20C15 20 8 38 6 65C12 75 22 80 32 82C40 82 52 75 58 65C56 38 49 20 32 20Z"
          fill="#6B371E"
        />

        {/* Neck */}
        <rect x="27" y="56" width="10" height="12" fill="#FCD34D" opacity="0.4" />
        <rect x="28" y="56" width="8" height="10" fill="#FDBA74" />

        {/* Head / Face */}
        <ellipse cx="32" cy="42" rx="17" ry="19" fill="#FED7AA" />

        {/* Hair Front / Bangs */}
        <path
          d="M16 34C20 22 35 20 48 28C44 26 34 26 26 36C22 41 18 45 16 34Z"
          fill="#854D0E"
        />
        <path
          d="M15 35C15 45 18 52 19 55C17 48 16 42 16 35Z"
          fill="#78350F"
        />

        {/* Eyes */}
        <ellipse cx="26" cy="42" rx="2.5" ry="3.5" fill="#451A03" />
        <circle cx="27" cy="40.5" r="1" fill="#FFFFFF" />
        <ellipse cx="38" cy="42" rx="2.5" ry="3.5" fill="#451A03" />
        <circle cx="39" cy="40.5" r="1" fill="#FFFFFF" />

        {/* Cheeks Blush */}
        <ellipse cx="23" cy="47" rx="3" ry="1.5" fill="#F472B6" opacity="0.6" />
        <ellipse cx="41" cy="47" rx="3" ry="1.5" fill="#F472B6" opacity="0.6" />

        {/* Cheerful Smile */}
        <path d="M28 48Q32 54 36 48" stroke="#9A3412" strokeWidth="1.8" strokeLinecap="round" fill="#FFFFFF" />

        {/* Bright Yellow Hoodie (Body) */}
        <path
          d="M14 70C14 64 22 62 32 62C42 62 50 64 50 70L54 110H10L14 70Z"
          fill="#FACC15"
          stroke="#CA8A04"
          strokeWidth="1.5"
        />

        {/* Hoodie Strings & Collar */}
        <path d="M26 63L24 84M38 63L40 84" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="85" r="1.5" fill="#E2E8F0" />
        <circle cx="40" cy="85" r="1.5" fill="#E2E8F0" />

        {/* Hoodie Pocket / Detail */}
        <rect x="20" y="92" width="24" height="15" rx="3" fill="#EAB308" />

        {/* Left Arm holding Digital Tablet */}
        <path d="M14 72L6 90L16 100" stroke="#FACC15" strokeWidth="7" strokeLinecap="round" />
        {/* Tablet */}
        <rect
          x="-2"
          y="84"
          width="26"
          height="18"
          rx="3"
          transform="rotate(-15 -2 84)"
          fill="#1E293B"
          stroke="#60A5FA"
          strokeWidth="1.5"
        />
        <rect
          x="1"
          y="86"
          width="20"
          height="12"
          rx="1.5"
          transform="rotate(-15 1 86)"
          fill="#38BDF8"
          opacity="0.8"
        />

        {/* Right Arm Waving Hand */}
        <path d="M48 72L58 54L64 42" stroke="#FACC15" strokeWidth="7" strokeLinecap="round" />
        {/* Waving Hand */}
        <g transform="translate(60, 32) rotate(15)">
          <path
            d="M0 8C-2 4 2 0 6 2C8 3 10 5 10 8C12 5 14 5 15 8C16 7 18 7 18 10C18 14 13 18 8 18C4 18 0 14 0 8Z"
            fill="#FED7AA"
            stroke="#FDBA74"
            strokeWidth="0.8"
          />
        </g>
      </g>
    </svg>
  </div>
);

const ModernLabIcon: React.FC = () => (
  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F8FAFC] via-[#EDF2F7] to-[#E2E8F0] border border-[#CBD5E1] shadow-xs flex items-center justify-center overflow-hidden relative group-hover:scale-110 transition-transform duration-300">
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Lab Room Background with Perspective */}
      <rect width="200" height="200" fill="#F1F5F9" />

      {/* Ceiling & Overhead Lighting Tubes */}
      <path d="M0 0 L200 0 L180 35 L20 35 Z" fill="#E2E8F0" />
      <line x1="30" y1="12" x2="90" y2="28" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
      <line x1="110" y1="12" x2="170" y2="28" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
      <line x1="30" y1="12" x2="90" y2="28" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="110" y1="12" x2="170" y2="28" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Back Wall Windows / Ventilation / Shelving */}
      <rect x="150" y="32" width="38" height="55" fill="#E0F2FE" stroke="#64748B" strokeWidth="2" />
      <line x1="169" y1="32" x2="169" y2="87" stroke="#64748B" strokeWidth="1.5" />
      <line x1="150" y1="58" x2="188" y2="58" stroke="#64748B" strokeWidth="1.5" />

      {/* Shelving with Reagent Glass Bottles (Top-Back Wall) */}
      <rect x="40" y="42" width="95" height="4" fill="#94A3B8" />
      <rect x="40" y="58" width="95" height="4" fill="#94A3B8" />
      {/* Tiny bottles on shelves */}
      <rect x="48" y="33" width="8" height="9" rx="1.5" fill="#38BDF8" opacity="0.8" />
      <rect x="59" y="31" width="9" height="11" rx="1.5" fill="#60A5FA" opacity="0.8" />
      <rect x="72" y="34" width="7" height="8" rx="1.5" fill="#38BDF8" opacity="0.8" />
      <rect x="83" y="30" width="10" height="12" rx="1.5" fill="#93C5FD" opacity="0.8" />
      <rect x="98" y="32" width="8" height="10" rx="1.5" fill="#0284C7" opacity="0.8" />
      <rect x="110" y="34" width="8" height="8" rx="1.5" fill="#38BDF8" opacity="0.8" />

      <rect x="52" y="48" width="8" height="10" rx="1.5" fill="#0284C7" opacity="0.8" />
      <rect x="65" y="49" width="7" height="9" rx="1.5" fill="#38BDF8" opacity="0.8" />
      <rect x="76" y="47" width="9" height="11" rx="1.5" fill="#60A5FA" opacity="0.8" />
      <rect x="90" y="50" width="8" height="8" rx="1.5" fill="#93C5FD" opacity="0.8" />
      <rect x="104" y="48" width="8" height="10" rx="1.5" fill="#0284C7" opacity="0.8" />

      {/* Left Fume Hood Station */}
      <path d="M4 35 L34 38 L34 110 L4 110 Z" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.5" />
      <rect x="8" y="55" width="22" height="30" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1" />
      <path d="M4 35 L34 38 L28 48 L4 48 Z" fill="#E2E8F0" />

      {/* Secondary Bench in Midground */}
      <polygon points="50,90 145,90 148,97 47,97" fill="#334155" />
      <rect x="52" y="97" width="90" height="22" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />

      {/* Computer Workstation on Side Counter */}
      <g transform="translate(154, 74)">
        <rect x="0" y="0" width="18" height="13" rx="1.5" fill="#1E293B" stroke="#0F172A" strokeWidth="1" />
        <rect x="2" y="2" width="14" height="9" fill="#38BDF8" opacity="0.7" />
        <line x1="9" y1="13" x2="9" y2="18" stroke="#334155" strokeWidth="2" />
        <line x1="4" y1="18" x2="14" y2="18" stroke="#334155" strokeWidth="2" />
      </g>

      {/* Main Foreground Lab Bench (Large Dark Countertop & White Cabinets) */}
      {/* Front Table Top */}
      <polygon points="10,118 190,118 198,135 2,135" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
      {/* Table Top Highlight Reflection */}
      <line x1="16" y1="122" x2="184" y2="122" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />

      {/* Lab Drawers / Cabinets underneath */}
      <rect x="12" y="135" width="80" height="60" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
      <rect x="108" y="135" width="80" height="60" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
      {/* Drawer Lines & Handles */}
      <line x1="12" y1="152" x2="92" y2="152" stroke="#E2E8F0" strokeWidth="1" />
      <line x1="12" y1="172" x2="92" y2="172" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="36" y="142" width="32" height="3" rx="1" fill="#94A3B8" />
      <rect x="36" y="159" width="32" height="3" rx="1" fill="#94A3B8" />
      <rect x="36" y="179" width="32" height="3" rx="1" fill="#94A3B8" />

      <line x1="108" y1="152" x2="188" y2="152" stroke="#E2E8F0" strokeWidth="1" />
      <line x1="108" y1="172" x2="188" y2="172" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="132" y="142" width="32" height="3" rx="1" fill="#94A3B8" />
      <rect x="132" y="159" width="32" height="3" rx="1" fill="#94A3B8" />
      <rect x="132" y="179" width="32" height="3" rx="1" fill="#94A3B8" />

      {/* Center Stool under Desk */}
      <ellipse cx="100" cy="148" rx="10" ry="3" fill="#0F172A" />
      <line x1="100" y1="151" x2="100" y2="185" stroke="#475569" strokeWidth="2.5" />

      {/* Laboratory Equipment on Counter */}
      {/* 1. Precision Compound Microscope (Left Foreground) */}
      <g transform="translate(24, 85)">
        {/* Base */}
        <rect x="4" y="32" width="22" height="6" rx="2" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
        {/* Stage */}
        <rect x="6" y="22" width="16" height="3" fill="#0F172A" />
        {/* Arm / Spine */}
        <path d="M22 32 C26 26 26 14 18 10" stroke="#FFFFFF" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M22 32 C26 26 26 14 18 10" stroke="#0F172A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Objective Lens */}
        <line x1="14" y1="12" x2="14" y2="20" stroke="#0F172A" strokeWidth="3" />
        <line x1="14" y1="20" x2="14" y2="22" stroke="#94A3B8" strokeWidth="2" />
        {/* Eyepiece / Head angled */}
        <line x1="18" y1="10" x2="10" y2="2" stroke="#0F172A" strokeWidth="4.5" strokeLinecap="round" />
        <circle cx="9" cy="1" r="3" fill="#334155" />
      </g>

      {/* 2. Glassware: Erlenmeyer Flask & Beaker with Liquid (Center) */}
      <g transform="translate(68, 98)">
        {/* Flask 1 */}
        <polygon points="12,12 16,12 24,28 4,28" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.2" opacity="0.9" />
        <polygon points="7,23 21,23 24,28 4,28" fill="#38BDF8" opacity="0.8" />
        {/* Flask 2 */}
        <polygon points="30,14 34,14 42,28 22,28" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.2" opacity="0.9" />
        <polygon points="25,23 39,23 42,28 22,28" fill="#60A5FA" opacity="0.8" />
        {/* Graduated Cylinder */}
        <rect x="48" y="10" width="7" height="18" rx="1" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.2" opacity="0.9" />
        <rect x="49" y="16" width="5" height="11" fill="#38BDF8" opacity="0.8" />
      </g>

      {/* 3. Modern Benchtop Centrifuge / Thermal Instrument (Right Foreground) */}
      <g transform="translate(136, 96)">
        <path d="M4 14 C4 8 10 4 20 4 C30 4 36 8 36 14 L38 28 L2 28 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
        <path d="M8 8 C12 6 28 6 32 8" stroke="#0284C7" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Digital Screen & Buttons */}
        <rect x="12" y="18" width="16" height="7" rx="1.5" fill="#0F172A" />
        <rect x="14" y="20" width="6" height="3" fill="#38BDF8" />
        <circle cx="24" cy="21.5" r="1.5" fill="#38BDF8" />
      </g>
    </svg>
  </div>
);

const StudyMaterialIcon: React.FC = () => (
  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1b3a36] via-[#132c29] to-[#0d1e1c] border border-[#2d554f] shadow-xs flex items-center justify-center overflow-hidden relative group-hover:scale-110 transition-transform duration-300">
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Chalkboard Background */}
      <rect width="200" height="200" fill="#183632" />
      {/* Soft Chalk Texture / Equations in background */}
      <path
        d="M20 30 Q60 25 100 35 M120 40 Q150 45 180 35 M130 65 Q160 60 185 70 M15 75 Q45 70 75 80"
        stroke="#427870"
        strokeWidth="1.2"
        strokeDasharray="2 3"
        opacity="0.4"
      />
      <circle cx="150" cy="50" r="18" stroke="#427870" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />

      {/* Wooden Desk Surface at bottom */}
      <rect x="0" y="172" width="200" height="28" fill="#784724" />
      <line x1="0" y1="172" x2="200" y2="172" stroke="#A76738" strokeWidth="2" />
      <line x1="0" y1="184" x2="200" y2="184" stroke="#5E3516" strokeWidth="1.5" />

      {/* ================= STACK OF 5 BOOKS ================= */}

      {/* --- BOOK 1 (BOTTOM) : Thick Vintage Tan Leather --- */}
      <g id="book-1">
        {/* Cover & Spine */}
        <path d="M28 152 L172 152 L170 172 L26 172 Z" fill="#6B3F21" stroke="#3D210F" strokeWidth="1.5" />
        <rect x="25" y="152" width="12" height="20" rx="3" fill="#88502B" />
        {/* Page Block (Pages edges) */}
        <path d="M37 155 L166 155 L164 169 L37 169 Z" fill="#FFFBEB" stroke="#E2D4B7" strokeWidth="1" />
        {/* Visible Page Line Texture */}
        <line x1="42" y1="159" x2="160" y2="159" stroke="#D4C3A3" strokeWidth="0.8" />
        <line x1="42" y1="163" x2="158" y2="163" stroke="#D4C3A3" strokeWidth="0.8" />
        <line x1="42" y1="166" x2="161" y2="166" stroke="#D4C3A3" strokeWidth="0.8" />
      </g>

      {/* --- BOOK 2 : Golden Ochre Hardcover --- */}
      <g id="book-2">
        {/* Cover */}
        <path d="M32 134 L164 134 L162 152 L30 152 Z" fill="#854D0E" stroke="#422006" strokeWidth="1.5" />
        <rect x="29" y="134" width="11" height="18" rx="2" fill="#A16207" />
        {/* Page Block */}
        <path d="M40 137 L158 137 L156 149 L40 149 Z" fill="#FEFCE8" stroke="#E2D4B7" strokeWidth="1" />
        {/* Page Lines */}
        <line x1="45" y1="141" x2="152" y2="141" stroke="#D4C3A3" strokeWidth="0.8" />
        <line x1="45" y1="145" x2="150" y2="145" stroke="#D4C3A3" strokeWidth="0.8" />
      </g>

      {/* --- BOOK 3 : Classic Navy / Slate Bound Book --- */}
      <g id="book-3">
        {/* Cover */}
        <path d="M36 116 L160 116 L158 134 L34 134 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
        <rect x="33" y="116" width="10" height="18" rx="2" fill="#334155" />
        {/* Crisp White Page Block */}
        <path d="M43 119 L154 119 L152 131 L43 131 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
        {/* Page Lines */}
        <line x1="48" y1="123" x2="148" y2="123" stroke="#94A3B8" strokeWidth="0.8" />
        <line x1="48" y1="127" x2="146" y2="127" stroke="#94A3B8" strokeWidth="0.8" />
      </g>

      {/* --- BOOK 4 : Burgundy / Crimson Cloth Spine --- */}
      <g id="book-4">
        {/* Cover */}
        <path d="M42 98 L152 98 L150 116 L40 116 Z" fill="#701A28" stroke="#450A0A" strokeWidth="1.5" />
        <rect x="39" y="98" width="10" height="18" rx="2" fill="#991B1B" />
        {/* Page Block */}
        <path d="M49 101 L146 101 L144 113 L49 113 Z" fill="#FFFDF5" stroke="#E2D4B7" strokeWidth="1" />
        {/* Page Lines */}
        <line x1="54" y1="105" x2="140" y2="105" stroke="#D4C3A3" strokeWidth="0.8" />
        <line x1="54" y1="109" x2="138" y2="109" stroke="#D4C3A3" strokeWidth="0.8" />
      </g>

      {/* --- BOOK 5 (TOP) : Warm Sand / Ivory Volume --- */}
      <g id="book-5">
        {/* Cover */}
        <path d="M46 80 L146 80 L144 98 L44 98 Z" fill="#9A3412" stroke="#431407" strokeWidth="1.5" />
        <rect x="43" y="80" width="10" height="18" rx="2" fill="#C2410C" />
        {/* Page Block */}
        <path d="M53 83 L140 83 L138 95 L53 95 Z" fill="#FFFFFF" stroke="#E2D4B7" strokeWidth="1" />
        {/* Page Lines */}
        <line x1="58" y1="87" x2="134" y2="87" stroke="#CBD5E1" strokeWidth="0.8" />
        <line x1="58" y1="91" x2="132" y2="91" stroke="#CBD5E1" strokeWidth="0.8" />
      </g>

      {/* ================= GRADUATION CAP (MORTARBOARD) ================= */}
      <g id="graduation-cap">
        {/* Cap Skullcap Base sitting on the top book */}
        <path d="M66 65 Q95 56 124 65 L120 78 Q95 84 68 78 Z" fill="#18181B" stroke="#09090B" strokeWidth="1.5" />
        <path d="M70 76 Q95 82 118 76" stroke="#3F3F46" strokeWidth="1" fill="none" />

        {/* Diamond Top Mortarboard (Angled Perspective) */}
        <polygon points="95,24 165,46 95,68 25,46" fill="#18181B" stroke="#09090B" strokeWidth="2" />
        {/* Cap Thickness edge */}
        <polygon points="25,46 95,68 95,72 25,50" fill="#27272A" />
        <polygon points="95,68 165,46 165,50 95,72" fill="#09090B" />
        {/* Top Highlight line */}
        <line x1="28" y1="46" x2="95" y2="26" stroke="#52525B" strokeWidth="1.2" />

        {/* Golden Center Button */}
        <ellipse cx="95" cy="46" rx="5" ry="3.5" fill="#F59E0B" stroke="#D97706" strokeWidth="1" />

        {/* Golden Braided Tassel Cord draped over to the right */}
        <path d="M95 46 Q122 43 138 60 Q144 72 144 82" stroke="#FBBF24" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="144" cy="82" r="3" fill="#D97706" />

        {/* Hanging Golden Tassel Fringe */}
        <path d="M141 84 L147 84 L149 110 L139 110 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="1" />
        <line x1="142" y1="85" x2="140" y2="109" stroke="#EAB308" strokeWidth="0.8" />
        <line x1="144" y1="85" x2="144" y2="110" stroke="#FEF08A" strokeWidth="0.8" />
        <line x1="146" y1="85" x2="148" y2="109" stroke="#EAB308" strokeWidth="0.8" />
      </g>
    </svg>
  </div>
);

const CertificationIcon: React.FC = () => (
  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F0F9FF] via-[#E0F2FE] to-[#BAE6FD] border border-[#7DD3FC] shadow-xs flex items-center justify-center overflow-hidden relative group-hover:scale-110 transition-transform duration-300">
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Soft Glow */}
      <rect width="200" height="200" fill="#F8FAFC" />

      {/* 3D Certificate Plaque / Frame with Blue Rounded Border */}
      {/* Drop Shadow of Certificate */}
      <rect x="18" y="24" width="164" height="132" rx="14" fill="#0284C7" opacity="0.2" />

      {/* Vibrant Blue 3D Border Frame */}
      <rect x="14" y="20" width="168" height="136" rx="14" fill="#38BDF8" />
      <rect x="14" y="20" width="168" height="136" rx="14" stroke="#0284C7" strokeWidth="2.5" />

      {/* Inner White Certificate Sheet with Soft Gradient */}
      <rect x="22" y="28" width="152" height="120" rx="8" fill="#FFFFFF" />

      {/* Top Highlight on border */}
      <path d="M26 22 L170 22" stroke="#BAE6FD" strokeWidth="2.5" strokeLinecap="round" />

      {/* "CERTIFICATE" Bold Header Text */}
      <text
        x="98"
        y="58"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontWeight="900"
        fontSize="20"
        letterSpacing="1.2"
        fill="#334155"
      >
        CERTIFICATE
      </text>

      {/* 3D Rounded Horizontal Content Bars */}
      {/* Line 1 (Short Title Underline) */}
      <rect x="62" y="70" width="76" height="5.5" rx="2.75" fill="#475569" />

      {/* Line 2 (Body text) */}
      <rect x="42" y="86" width="112" height="5" rx="2.5" fill="#64748B" />

      {/* Line 3 (Body text) */}
      <rect x="42" y="101" width="112" height="5" rx="2.5" fill="#64748B" />

      {/* Line 4 (Lower text line) */}
      <rect x="42" y="116" width="80" height="5" rx="2.5" fill="#64748B" />

      {/* Blue Ribbon / Signature Loop (Bottom Left) */}
      <path
        d="M44 138 C48 132 54 132 58 137 C62 142 66 142 70 137"
        stroke="#3B82F6"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* ================= GOLDEN 3D ROSETTE BADGE & RIBBONS (Bottom Right) ================= */}
      {/* Dark Charcoal / Black Ribbons hanging down */}
      <g id="ribbons" transform="translate(132, 134)">
        {/* Left Hanging Ribbon with V-Notch */}
        <path
          d="M12 8 L-4 54 L12 44 L24 54 L16 8 Z"
          fill="#334155"
          stroke="#1E293B"
          strokeWidth="1.5"
        />
        {/* Right Hanging Ribbon with V-Notch */}
        <path
          d="M22 8 L32 54 L44 44 L56 54 L38 8 Z"
          fill="#475569"
          stroke="#1E293B"
          strokeWidth="1.5"
        />
      </g>

      {/* 8-Pointed Golden Star / Rosette Seal Badge */}
      <g id="gold-seal" transform="translate(150, 132)">
        {/* Rosette Shadow */}
        <circle cx="0" cy="2" r="30" fill="#CA8A04" opacity="0.3" />

        {/* 8-Star Polygon (3D Yellow-Gold) */}
        <path
          d="M 0 -28 L 8 -16 L 22 -20 L 18 -6 L 30 0 L 18 6 L 22 20 L 8 16 L 0 28 L -8 16 L -22 20 L -18 6 L -30 0 L -18 -6 L -22 -20 L -8 -16 Z"
          fill="#FACC15"
          stroke="#EAB308"
          strokeWidth="2"
        />

        {/* 3D Highlight Bevel on Seal */}
        <circle cx="0" cy="0" r="18" fill="#FDE047" />
        <circle cx="0" cy="0" r="14" fill="#FFFFFF" stroke="#FACC15" strokeWidth="2" />
      </g>
    </svg>
  </div>
);

const CareerGuidanceIcon: React.FC = () => (
  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#EFF6FF] via-[#DBEAFE] to-[#BFDBFE] border border-[#93C5FD] shadow-xs flex items-center justify-center overflow-hidden relative group-hover:scale-110 transition-transform duration-300">
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Soft Blue Vector Background Blob */}
      <rect width="200" height="200" fill="#F0F7FF" />
      <path
        d="M20 50 C40 20 160 10 180 50 C200 90 190 160 160 180 C130 200 50 190 20 170 C-10 150 0 80 20 50 Z"
        fill="#E0F0FE"
        opacity="0.8"
      />

      {/* ================= BACKGROUND ELEMENTS ================= */}
      {/* 1. Bar Chart Growth Indicator (Top Center-Left) */}
      <g transform="translate(68, 14)">
        <rect x="0" y="24" width="6" height="14" rx="1.5" fill="#3B82F6" opacity="0.85" />
        <rect x="9" y="16" width="6" height="22" rx="1.5" fill="#2563EB" opacity="0.85" />
        <rect x="18" y="8" width="6" height="30" rx="1.5" fill="#1D4ED8" opacity="0.9" />
        <rect x="27" y="0" width="6" height="38" rx="1.5" fill="#1E40AF" />
      </g>

      {/* 2. Gear Icon (Left Midground) */}
      <g transform="translate(18, 48) scale(0.75)" fill="#2563EB" stroke="#1D4ED8" strokeWidth="2">
        <circle cx="24" cy="24" r="16" fill="#3B82F6" />
        <path d="M24 2V10M24 38V46M2 24H10M38 24H46M8 8L14 14M34 34L40 40M8 40L14 34M34 14L40 8" strokeWidth="5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="9" fill="#F0F7FF" stroke="#1D4ED8" strokeWidth="3" />
      </g>

      {/* 3. Dartboard & Target Arrow (Top Right) */}
      <g transform="translate(150, 48)">
        {/* Outer Ring */}
        <circle cx="0" cy="0" r="34" stroke="#2563EB" strokeWidth="7" fill="#EFF6FF" />
        {/* Middle Ring */}
        <circle cx="0" cy="0" r="22" stroke="#2563EB" strokeWidth="6" fill="#EFF6FF" />
        {/* Bullseye Center */}
        <circle cx="0" cy="0" r="8" fill="#1D4ED8" />
        {/* Arrow Hit into Bullseye */}
        <line x1="28" y1="-28" x2="3" y2="-3" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" />
        {/* Arrow Fletching */}
        <path d="M28 -28 L35 -20 L32 -32 L20 -35 Z" fill="#1E293B" />
      </g>

      {/* 4. Chat Bubble (Right Side) */}
      <g transform="translate(152, 98) scale(0.75)">
        <rect x="0" y="0" width="44" height="32" rx="6" fill="#3B82F6" />
        <polygon points="8,32 18,32 10,40" fill="#3B82F6" />
        {/* Chat text lines */}
        <line x1="8" y1="9" x2="36" y2="9" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="8" y1="16" x2="36" y2="16" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="8" y1="23" x2="26" y2="23" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* 5. Laptop with Candidate Profile (Left Foreground) */}
      <g transform="translate(22, 112)">
        {/* Laptop Screen Frame */}
        <rect x="4" y="2" width="60" height="42" rx="4" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
        {/* Screen Display */}
        <rect x="8" y="6" width="52" height="34" rx="2" fill="#BAE6FD" />
        {/* Candidate Profile Avatar & Resume Details */}
        <rect x="12" y="10" width="14" height="14" rx="2" fill="#60A5FA" />
        <line x1="30" y1="13" x2="52" y2="13" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" />
        <line x1="30" y1="19" x2="46" y2="19" stroke="#1E3A8A" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="12" y1="28" x2="52" y2="28" stroke="#1E3A8A" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="12" y1="34" x2="42" y2="34" stroke="#1E3A8A" strokeWidth="1.8" strokeLinecap="round" />
        {/* Laptop Base */}
        <path d="M0 44 L68 44 L64 47 L4 47 Z" fill="#0F172A" />
      </g>

      {/* 6. Central Clipboard / Evaluation Checklist */}
      <g transform="translate(62, 52)">
        {/* Clipboard Wooden / Board Backing */}
        <rect x="0" y="8" width="62" height="88" rx="6" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
        {/* Sheet of Paper */}
        <rect x="4" y="14" width="54" height="78" rx="3" fill="#FFFFFF" />
        {/* Blue Top Clip */}
        <rect x="18" y="2" width="26" height="12" rx="3" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1.5" />
        <rect x="25" y="5" width="12" height="4" rx="2" fill="#FFFFFF" opacity="0.6" />

        {/* Checklist Item 1: Checked */}
        <rect x="9" y="24" width="13" height="13" rx="2" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1.5" />
        <path d="M12 30 L15 33 L20 26" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="26" y1="28" x2="52" y2="28" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
        <line x1="26" y1="33" x2="44" y2="33" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />

        {/* Checklist Item 2: Checked */}
        <rect x="9" y="44" width="13" height="13" rx="2" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1.5" />
        <path d="M12 50 L15 53 L20 46" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="26" y1="48" x2="52" y2="48" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
        <line x1="26" y1="53" x2="42" y2="53" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />

        {/* Checklist Item 3: In-Progress / Box */}
        <rect x="9" y="64" width="13" height="13" rx="2" fill="#F8FAFC" stroke="#2563EB" strokeWidth="1.5" />
        <line x1="26" y1="68" x2="50" y2="68" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
        <line x1="26" y1="73" x2="38" y2="73" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* 7. Professional Career Counselor / Mentor (Foreground Right) */}
      <g id="mentor-lady" transform="translate(90, 70)">
        {/* Long Dark Hair (Back) */}
        <path
          d="M42 2C24 2 20 18 18 36C24 45 42 46 48 38C48 20 48 2 42 2Z"
          fill="#1E293B"
        />

        {/* Neck */}
        <rect x="30" y="24" width="10" height="12" fill="#FDBA74" />

        {/* Face */}
        <ellipse cx="32" cy="18" rx="12" ry="14" fill="#FED7AA" />

        {/* Hair Front / Styling */}
        <path
          d="M22 10C26 4 38 2 44 10C42 16 38 24 38 32C34 26 28 20 22 10Z"
          fill="#0F172A"
        />

        {/* Blue Professional Blazer / Suit (Body) */}
        <path
          d="M16 38C22 34 44 34 52 38L62 90H10L16 38Z"
          fill="#1D4ED8"
          stroke="#1E40AF"
          strokeWidth="1.5"
        />

        {/* White Inner Shirt / Blouse V-Neck */}
        <polygon points="28,36 38,36 34,60 32,60" fill="#FFFFFF" />

        {/* Left Arm Pointing Directly at the Clipboard Checklist */}
        <path
          d="M20 46 L0 58 L-12 50"
          stroke="#1D4ED8"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Pointing Hand & Finger */}
        <g transform="translate(-14, 46)">
          <circle cx="0" cy="0" r="4" fill="#FED7AA" />
          <line x1="0" y1="0" x2="-8" y2="-6" stroke="#FED7AA" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Right Arm & Hand resting */}
        <path
          d="M48 46 L54 68 L40 76"
          stroke="#1D4ED8"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <circle cx="38" cy="76" r="4.5" fill="#FED7AA" />
      </g>
    </svg>
  </div>
);

export const WhatWeProvide: React.FC<WhatWeProvideProps> = ({ language }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const t = (key: string) => getTranslation(key, language);

  const provisions = [
    {
      id: 'practical-training',
      customIllustration: 'practical',
      icon: 'handyman',
      title: t('provide.practical'),
      desc: t('provide.practicalDesc')
    },
    {
      id: 'modern-labs',
      customIllustration: 'lab',
      icon: 'computer',
      title: t('provide.labs'),
      desc: t('provide.labsDesc')
    },
    {
      id: 'study-material',
      customIllustration: 'study',
      icon: 'menu_book',
      title: t('provide.material'),
      desc: t('provide.materialDesc')
    },
    {
      id: 'certification',
      customIllustration: 'cert',
      icon: 'verified',
      title: t('provide.certification'),
      desc: t('provide.certDesc')
    },
    {
      id: 'career-guidance',
      customIllustration: 'career',
      icon: 'trending_up',
      title: t('provide.career'),
      desc: t('provide.careerDesc')
    },
    {
      icon: 'support_agent',
      title: t('provide.support'),
      desc: t('provide.supportDesc')
    },
  ];

  const handleScroll = (dir: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = dir === 'left' ? -280 : 280;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative px-4 md:px-6 max-w-[1200px] mx-auto mb-16 py-12 rounded-3xl border border-[#E2E8F0] overflow-hidden shadow-sm">
      {/* 100% Visible Background Image: back.jpg */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <img
          src={backImageSrc}
          alt="What We Provide Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-8 md:mb-10 px-4">
          <h2 className="font-['Manrope'] text-2xl sm:text-3xl md:text-4xl text-[#002760] font-extrabold mb-3">
            {t('provide.title')}
          </h2>
          <div className="w-16 h-1 bg-[#FFD21F] mx-auto rounded-full" />
          <p className="font-['Work_Sans'] text-sm md:text-base text-[#172033]/80 mt-3 max-w-2xl mx-auto font-medium">
            {t('provide.subtitle')}
          </p>
        </div>

        <div className="relative px-2 sm:px-4">
          <div
            ref={containerRef}
            className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth gap-4 pb-6"
          >
            {provisions.map((item, idx) => (
              <div
                key={idx}
                className="w-[75%] sm:w-[220px] md:w-[calc(33.333%-12px)] lg:w-[calc(16.666%-14px)] snap-center shrink-0"
              >
                <div className="bg-white rounded-2xl p-5 md:p-6 border border-[#E6ECF3] shadow-xs hover:shadow-lg transition-all flex flex-col items-center text-center h-full justify-center group">
                  {item.customIllustration === 'practical' ? (
                    <div className="mb-3">
                      <PracticalTrainingIcon />
                    </div>
                  ) : item.customIllustration === 'lab' ? (
                    <div className="mb-3">
                      <ModernLabIcon />
                    </div>
                  ) : item.customIllustration === 'study' ? (
                    <div className="mb-3">
                      <StudyMaterialIcon />
                    </div>
                  ) : item.customIllustration === 'cert' ? (
                    <div className="mb-3">
                      <CertificationIcon />
                    </div>
                  ) : item.customIllustration === 'career' ? (
                    <div className="mb-3">
                      <CareerGuidanceIcon />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[#1557C0]/10 text-[#1557C0] group-hover:bg-[#002760] group-hover:text-white transition-colors flex items-center justify-center mb-3">
                      <span className="material-symbols-outlined text-2xl md:text-3xl">{item.icon}</span>
                    </div>
                  )}
                  <h3 className="font-['Manrope'] font-bold text-[#002760] text-sm md:text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#172033]/60 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-2">
            <button
              onClick={() => handleScroll('left')}
              aria-label="Previous provision"
              className="w-10 h-10 rounded-full border border-[#E6ECF3] flex items-center justify-center text-[#002760] hover:bg-[#F4F8FD] transition-colors shadow-xs bg-white cursor-pointer"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div className="flex gap-2">
              {provisions.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-[#002760]' : 'bg-[#E6ECF3]'}`}
                />
              ))}
            </div>
            <button
              onClick={() => handleScroll('right')}
              aria-label="Next provision"
              className="w-10 h-10 rounded-full border border-[#E6ECF3] flex items-center justify-center text-[#002760] hover:bg-[#F4F8FD] transition-colors shadow-xs bg-white cursor-pointer"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
