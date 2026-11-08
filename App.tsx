/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Maximize2,
  X,
  Check,
  Copy,
  Share2,
} from 'lucide-react';

import doorImg from './assets/images/luxury_walnut_door_1794147070671.jpg';
import wallDecorImg from './assets/images/modern_wood_wall_decor_1794147070100.jpg';
import bedroomImg from './assets/images/luxury_wood_bedroom_wardrobe_1794147071317.jpg';
import veneerSheetsImg from './assets/images/wood_veneer_craftsmanship_1794147071583.jpg';

const LOGO_IMAGE_PATH = '/assets/aistudio/1000202532_bd7d3f78.jpg';
const WHATSAPP_URL = 'https://wa.me/96176413148';
const WHATSAPP_DISPLAY = '0096176413148';
const WHATSAPP_INTL = '+961 76 413 148';
const PHONE_NUMBER = '0969048925';
const ADDRESS_TEXT = 'حمص . باب تدمر . شارع عبد الرحمن الغافقي';

interface WorkSample {
  id: string;
  title: string;
  category: 'أبواب' | 'ديكورات' | 'غرف' | 'قشور طبيعية';
  subtitle: string;
  image: string;
}

const WORK_SAMPLES: WorkSample[] = [
  {
    id: 'doors',
    title: 'تلبيس الأبواب الخشبية الفاخرة',
    category: 'أبواب',
    subtitle: 'قشرة الجوز الطبيعي والسنديان مع مطابقة متناظرة للعروق (Bookmatching)',
    image: doorImg,
  },
  {
    id: 'decor',
    title: 'الديكورات الجدارية والبانوهات',
    category: 'ديكورات',
    subtitle: 'تكسيات خشبية طبيعية وشرائح مضلعة عصرية للصالونات والمداخل',
    image: wallDecorImg,
  },
  {
    id: 'bedrooms',
    title: 'غرف النوم والخزائن الحائطية',
    category: 'غرف',
    subtitle: 'تلبيس قشور طبيعية متناسقة العروق مقاومة للرطوبة والحرارة',
    image: bedroomImg,
  },
  {
    id: 'veneers',
    title: 'تشكيلة القشور الخشبية الطبيعية',
    category: 'قشور طبيعية',
    subtitle: 'جوز أمريكي، عقد طبيعية، سنديان أبيض، بلوط، وماهوجني نخب أول',
    image: veneerSheetsImg,
  },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    title: string;
    subtitle?: string;
  } | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const filteredWorks =
    selectedCategory === 'الكل'
      ? WORK_SAMPLES
      : WORK_SAMPLES.filter((item) => item.category === selectedCategory);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#111113] text-[#f5f0e6] flex flex-col">
      {/* =====================================================================
          1. MINIMALIST TOP BAR WITH LOGO IN HEADER
         ===================================================================== */}
      <header className="sticky top-0 z-40 bg-[#111113]/90 backdrop-blur-md border-b border-[#c59b4c]/20 px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-8">
        <a
          href="#card"
          className="flex items-center gap-3 whitespace-nowrap shrink-0"
        >
          <svg
            viewBox="0 0 560 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-13 sm:w-24 sm:h-15 shrink-0 select-none"
            role="img"
            aria-label="DECOR Logo"
          >
            <defs>
              <linearGradient id="hdr-gold" x1="60" y1="60" x2="450" y2="320" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#e5c47f" />
                <stop offset="30%" stopColor="#f6e6c2" />
                <stop offset="60%" stopColor="#c89e51" />
                <stop offset="100%" stopColor="#e8cc8c" />
              </linearGradient>
            </defs>
            {/* Pitched Roof & Chimney */}
            <path
              d="M 124 106 L 194 64 L 225 83 L 225 62 L 247 62 L 247 96 L 263 106 L 263 119 L 194 78 L 124 120 Z"
              stroke="url(#hdr-gold)"
              strokeWidth="6"
              strokeLinejoin="miter"
            />
            {/* Window */}
            <path
              d="M 171 125 L 216 123 L 216 149 L 171 153 Z"
              stroke="url(#hdr-gold)"
              strokeWidth="6"
              strokeLinejoin="miter"
            />
            {/* Outer House Wall & Outer Crescent Swoosh */}
            <path
              d="M 266 135 L 194 92 L 124 134 L 124 166 C 42 198, 42 268, 148 302 C 236 330, 355 324, 428 290 C 350 314, 236 318, 154 292 C 62 262, 62 202, 130 171 Z"
              fill="url(#hdr-gold)"
            />
            <path
              d="M 124 166 L 124 134 L 194 92 L 267 136"
              stroke="url(#hdr-gold)"
              strokeWidth="6.5"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
            {/* City Skyline Silhouette */}
            <path
              d="M 265 135 L 265 112 L 265 144 L 277 144 L 277 125 L 283 125 L 283 112 L 288 112 L 288 132 L 294 132 L 294 95 L 299 95 L 299 144 L 306 144 L 306 132 L 311 132 L 311 142 L 319 142 L 319 102 L 322 102 L 323.5 82 L 325 102 L 328 102 L 328 130 L 336 130 L 336 110 L 340 110 L 340 132 L 346 132 L 346 122 L 346 141 L 354 141 L 354 149"
              stroke="url(#hdr-gold)"
              strokeWidth="5.2"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
            {/* Inner Crescent Swoosh */}
            <path
              d="M 352 147 C 386 151, 414 158, 436 168 C 374 153, 272 149, 188 167 C 82 190, 74 252, 174 285 C 254 311, 354 309, 430 289 C 356 315, 246 318, 164 291 C 58 256, 66 184, 182 159 C 252 144, 314 143, 352 147 Z"
              fill="url(#hdr-gold)"
            />
            {/* Center Bold Serif DECOR Text */}
            <text
              x="298"
              y="246"
              textAnchor="middle"
              fill="#f5e6c4"
              fontFamily="'Cinzel', Georgia, serif"
              fontWeight="800"
              fontSize="68"
              letterSpacing="3"
            >
              DECOR
            </text>
          </svg>
          <span className="text-lg sm:text-xl font-bold tracking-tight gold-gradient-text">
            أبو سمير
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#d6cec2]">
          <a
            href="#card"
            className="hover:text-[#e5c687] transition-colors whitespace-nowrap shrink-0"
          >
            بطاقة المحل
          </a>
          <a
            href="#works"
            className="hover:text-[#e5c687] transition-colors whitespace-nowrap shrink-0"
          >
            الأعمال الخشبية
          </a>
          <a
            href="#contact-card"
            className="hover:text-[#e5c687] transition-colors whitespace-nowrap shrink-0"
          >
            العنوان وأرقام التواصل
          </a>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-[#111113] gold-metallic-bg rounded transition-transform active:scale-95 whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>واتساب مباشر</span>
          </a>
        </div>
      </header>

      <main className="flex-1 max-w-[1100px] w-full mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-16 sm:space-y-20">
        {/* ===================================================================
            2. ARCHITECTURAL HERO & SPECIALTIES CARD (ترويسة تعريفية غير مكررة)
           =================================================================== */}
        <section
          id="card"
          className="relative overflow-hidden rounded-2xl border border-[#c59b4c]/30 walnut-surface shadow-2xl"
        >
          <div className="p-7 sm:p-11 lg:p-12 space-y-8">
            {/* Top Editorial Statement */}
            <div className="max-w-3xl space-y-3">
              <p className="text-xs sm:text-sm font-semibold text-[#dfba73] tracking-wide">
                اختصاصيون في القشور الخشبية الطبيعية · حمص
              </p>
              <h1 className="text-2xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-[#faf5eb] leading-[1.25] headline-balance">
                فن وإتقان تلبيس كافة أنواع{' '}
                <span className="gold-gradient-text">القشور الخشبية الطبيعية</span>
              </h1>
              <p className="text-sm sm:text-base text-[#c7bdb1] leading-relaxed max-w-2xl">
                نمنح الأخشاب والمساحات الداخلية روح الطبيعة وفخامتها عبر انتقاء أجود شرائح
                القشرة المستوردة ورصف عروقها بتناظر هندسي متقن يدوم لعقود.
              </p>
            </div>

            {/* 3 Core Specialties Grid (replaces repetitive text/numbers) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-[#121110]/90 border border-[#c59b4c]/25 rounded-xl p-5">
                <span className="text-xs font-mono-num text-[#dfba73]">01</span>
                <h2 className="mt-1 text-lg font-bold text-[#faf5eb]">الأبواب الخشبية الفاخرة</h2>
                <p className="mt-1.5 text-xs sm:text-sm text-[#b8aea0] leading-relaxed">
                  تلبيس الأبواب الرئيسية والداخلية بقشور الجوز والسنديان والبلوط مع مطابقة العروق.
                </p>
              </div>

              <div className="bg-[#121110]/90 border border-[#c59b4c]/25 rounded-xl p-5">
                <span className="text-xs font-mono-num text-[#dfba73]">02</span>
                <h2 className="mt-1 text-lg font-bold text-[#faf5eb]">الديكورات والبانوهات</h2>
                <p className="mt-1.5 text-xs sm:text-sm text-[#b8aea0] leading-relaxed">
                  تكسيات جدارية وشرائح خشبية مضلعة عصرية تضفي الدفء والفخامة على الصالونات.
                </p>
              </div>

              <div className="bg-[#121110]/90 border border-[#c59b4c]/25 rounded-xl p-5">
                <span className="text-xs font-mono-num text-[#dfba73]">03</span>
                <h2 className="mt-1 text-lg font-bold text-[#faf5eb]">غرف النوم والخزائن</h2>
                <p className="mt-1.5 text-xs sm:text-sm text-[#b8aea0] leading-relaxed">
                  تلبيس خزائن الملابس وغرف النوم بقشور طبيعية متناسقة العروق مقاومة للرطوبة.
                </p>
              </div>
            </div>

            {/* Clean Non-Repetitive Action Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#works"
                className="py-3 px-6 rounded-lg gold-metallic-bg text-[#111113] font-bold text-sm sm:text-base transition-transform active:scale-95 whitespace-nowrap"
              >
                استعرض صور الأعمال ↓
              </a>
              <a
                href="#contact-card"
                className="py-3 px-6 rounded-lg bg-[#141210]/90 hover:bg-[#221913] text-[#f5e6c4] border border-[#c59b4c]/40 font-semibold text-sm sm:text-base transition-colors whitespace-nowrap"
              >
                العنوان وأرقام التواصل
              </a>
            </div>
          </div>
        </section>

        {/* ===================================================================
            3. REAL WOODWORK PHOTO SHOWCASE (معرض الصور الحقيقية للأعمال الخشبية)
           =================================================================== */}
        <section id="works" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#c59b4c]/15 pb-5">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#faf5eb]">
                نماذج من أعمال القشور الخشبية الطبيعية
              </h2>
              <p className="mt-1 text-sm text-[#b8aea0]">
                إتقان في تلبيس ومطابقة عروق القشور الطبيعية للأبواب والديكورات وغرف النوم
              </p>
            </div>

            {/* Simple Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 bg-[#171615] p-1.5 rounded-lg border border-[#c59b4c]/20 self-start">
              {['الكل', 'أبواب', 'ديكورات', 'غرف', 'قشور طبيعية'].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    selectedCategory === cat
                      ? 'gold-metallic-bg text-[#111113]'
                      : 'text-[#c7bdb1] hover:text-[#faf5eb]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 2x2 Real Photography Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredWorks.map((work) => (
              <article
                key={work.id}
                onClick={() =>
                  setLightboxImage({
                    src: work.image,
                    title: work.title,
                    subtitle: work.subtitle,
                  })
                }
                className="group cursor-pointer bg-[#171615] border border-[#c59b4c]/20 hover:border-[#dfba73]/60 rounded-xl overflow-hidden transition-all duration-200 shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#120e0b]">
                  <img
                    src={work.image}
                    alt={work.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 p-2 rounded-lg bg-black/60 backdrop-blur-sm border border-[#c59b4c]/30 text-[#e5c687]">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                  <span className="absolute bottom-3 right-4 text-xs font-semibold text-[#dfba73]">
                    {work.category}
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-[#faf5eb] group-hover:text-[#e5c687] transition-colors">
                    {work.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#b8aea0] leading-relaxed">
                    {work.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ===================================================================
            4. DIRECT BUSINESS CARD CONTACT SECTION (كرت التواصل والعنوان المباشر)
           =================================================================== */}
        <section
          id="contact-card"
          className="walnut-surface border border-[#c59b4c]/30 rounded-xl p-7 sm:p-10 shadow-2xl"
        >
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-xs sm:text-sm font-semibold text-[#dfba73] tracking-wider">
              أبو سمير — DECOR · تلبيس كافة أنواع القشور الطبيعية
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#faf5eb]">
              تفضلوا بزيارتنا أو تواصلوا معنا مباشرة
            </h2>

            {/* 3 Clean Info Blocks: Address, Phone, WhatsApp */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-right">
              {/* Address Card */}
              <div className="bg-[#141210]/95 border border-[#c59b4c]/25 rounded-lg p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[#dfba73] mb-2">
                    <span className="text-xs font-semibold">العنوان</span>
                    <MapPin className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base font-bold text-[#faf5eb] leading-snug">
                    {ADDRESS_TEXT}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(ADDRESS_TEXT, 'address')}
                  className="mt-4 pt-2.5 border-t border-[#c59b4c]/15 inline-flex items-center gap-1.5 text-xs text-[#e5c687] hover:underline"
                >
                  {copiedField === 'address' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">تم نسخ العنوان</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>نسخ العنوان</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="bg-[#141210]/95 border border-[#c59b4c]/25 rounded-lg p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[#dfba73] mb-2">
                    <span className="text-xs font-semibold">اتصال هاتفي</span>
                    <Phone className="w-4 h-4" />
                  </div>
                  <p
                    dir="ltr"
                    className="text-lg sm:text-xl font-bold text-[#faf5eb] font-mono-num text-right"
                  >
                    {PHONE_NUMBER}
                  </p>
                </div>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="mt-4 pt-2.5 border-t border-[#c59b4c]/15 inline-flex items-center justify-between text-xs font-bold text-[#e5c687] hover:underline"
                >
                  <span>اضغط للاتصال المباشر</span>
                  <span>←</span>
                </a>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-[#141210]/95 border border-[#c59b4c]/25 rounded-lg p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[#dfba73] mb-2">
                    <span className="text-xs font-semibold">واتساب مباشر</span>
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <p
                    dir="ltr"
                    className="text-base sm:text-lg font-bold text-[#faf5eb] font-mono-num text-right"
                  >
                    {WHATSAPP_INTL}
                  </p>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 pt-2.5 border-t border-[#c59b4c]/15 inline-flex items-center justify-between text-xs font-bold text-[#e5c687] hover:underline"
                >
                  <span>بدء محادثة واتساب</span>
                  <span>←</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================================
          5. FULL-SCREEN PHOTO LIGHTBOX MODAL
         ===================================================================== */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="max-w-4xl w-full bg-[#171615] border border-[#c59b4c]/35 rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-3.5 bg-[#121110] border-b border-[#c59b4c]/20 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-[#faf5eb]">{lightboxImage.title}</h3>
                {lightboxImage.subtitle && (
                  <p className="text-xs text-[#b8aea0] mt-0.5">{lightboxImage.subtitle}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                aria-label="إغلاق الصورة"
                className="p-1.5 rounded-lg border border-[#c59b4c]/30 text-[#d6cec2] hover:text-[#e5c687]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-black flex items-center justify-center max-h-[78vh] overflow-hidden">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[78vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          6. FLOATING WHATSAPP BUTTON & SIMPLE FOOTER
         ===================================================================== */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
        className="fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 px-4 py-3 rounded-full gold-metallic-bg text-[#111113] font-bold text-xs sm:text-sm shadow-xl border border-[#f5e6c4]/40 transition-transform hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-5 h-5 shrink-0" />
        <span>واتساب</span>
      </a>

      <footer className="bg-[#0d0c0b] border-t border-[#c59b4c]/20 py-6 px-4 sm:px-8 text-center text-xs text-[#9c9183]">
        <p>جميع الحقوق محفوظة © أبو سمير - DECOR · {ADDRESS_TEXT}</p>
      </footer>
    </div>
  );
}
