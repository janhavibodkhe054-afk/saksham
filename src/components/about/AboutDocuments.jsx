
import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";

import {
  FileCheck2,
  FileText,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  ArrowUpRight,
  Award,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ==========================================
// DOCUMENT IMAGES
// ==========================================

const documents = [
  {
    id: 1,
    image: "/doc1.png",
  },
  {
    id: 2,
    image: "/doc2.png",
  },
  {
    id: 3,
    image: "/doc3.png",
  },
  {
    id: 4,
    image: "/doc4.png",
  },
  {
    id: 7,
    image: "/doc7.png",
  },
];

// ==========================================
// TRANSLATIONS
// ==========================================

const translations = {
  en: {
    eyebrow: "OFFICIAL DOCUMENTS",
    heading1: "Our Documents.",
    heading2: "Our Commitment to Transparency.",
    description:
      "Explore the official documents of Saksham Foundation. View each document clearly to learn more about our organisation.",

    verifiedTitle: "Verified & Certified",
    verifiedDescription:
      "Saksham Foundation's official registration and compliance details:",
    official: "OFFICIAL",
    registration: "REGISTRATION NUMBER",
    csr: "CSR REGISTRATION NUMBER",
    pan: "PAN NUMBER",
    benefit: "80G TAX BENEFIT",
    approval: "PROVISIONAL APPROVAL",
    approvalNote:
      "Subject to applicable approval validity",

    document: "Document",
    view: "View Document",
    preview: "Document Preview",
    download: "Download",
    close: "Close Preview",
    previous: "Previous Document",
    next: "Next Document",
    unavailable: "Document image not available",
  },

  mr: {
    eyebrow: "अधिकृत कागदपत्रे",
    heading1: "आमची कागदपत्रे.",
    heading2: "पारदर्शकतेप्रती आमची बांधिलकी.",
    description:
      "सक्षम फाउंडेशनची अधिकृत कागदपत्रे येथे पाहा. प्रत्येक कागदपत्र स्पष्टपणे पाहून संस्थेबद्दल अधिक माहिती जाणून घ्या.",

    verifiedTitle: "Verified & Certified",
    verifiedDescription:
      "सक्षम फाउंडेशनची अधिकृत नोंदणी आणि संबंधित माहिती:",
    official: "OFFICIAL",
    registration: "नोंदणी क्रमांक",
    csr: "CSR नोंदणी क्रमांक",
    pan: "PAN क्रमांक",
    benefit: "80G कर सवलत",
    approval: "तात्पुरती मान्यता",
    approvalNote:
      "संबंधित मान्यतेच्या वैधतेच्या अधीन",

    document: "कागदपत्र",
    view: "कागदपत्र पाहा",
    preview: "कागदपत्र पूर्वावलोकन",
    download: "डाउनलोड",
    close: "बंद करा",
    previous: "मागील कागदपत्र",
    next: "पुढील कागदपत्र",
    unavailable: "कागदपत्राची प्रतिमा उपलब्ध नाही",
  },
};

// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px 40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="h-full"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0)"
          : "translateY(35px)",
        transition:
          `opacity 750ms ease ${delay}ms, ` +
          `transform 750ms ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ==========================================
// VERIFIED & CERTIFIED CARD
// NAVY + GOLD REFERENCE DESIGN
// ==========================================

function VerifiedCertifiedCard({ t }) {
  const details = [
    {
      label: t.registration,
      value: "F-49558/Pune",
    },
    {
      label: t.csr,
      value: "CSR00075938",
    },
    {
      label: t.pan,
      value: "AAVTS1928A",
    },
  ];

  return (
    <article className="group relative flex h-full w-full min-w-0 flex-col overflow-hidden rounded-[22px] border-[2px] border-[#CBA735] bg-[#111729] px-5 pb-6 pt-7 shadow-[0_12px_35px_rgba(6,27,80,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_55px_rgba(6,27,80,0.2)] sm:px-6">

      {/* OFFICIAL CORNER RIBBON */}
      <div className="absolute right-[-37px] top-[23px] z-10 w-[155px] rotate-45 bg-[#D5AE3D] py-[8px] text-center shadow-md">
        <span className="block text-[10px] font-black tracking-[0.05em] text-[#101729]">
          {t.official}
        </span>
      </div>

      {/* HEADING */}
      <h3 className="relative z-[1] max-w-[250px] font-serif text-[27px] font-bold leading-[1.2] tracking-[-0.6px] text-[#D9B448] sm:text-[29px]">
        {t.verifiedTitle}
      </h3>

      {/* DESCRIPTION */}
      <p className="relative z-[1] mt-4 max-w-[270px] text-xs leading-[1.8] text-[#B9BDCA]">
        {t.verifiedDescription}
      </p>

      {/* INFORMATION BOXES */}
      <div className="mt-6 space-y-3">
        {details.map((item) => (
          <div
            key={item.value}
            className="relative overflow-hidden rounded-[10px] bg-[#232A3C] px-4 py-3.5"
          >
            <span className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#D5AE3D]" />

            <p className="text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#D5AE3D]">
              {item.label}
            </p>

            <p className="mt-1.5 break-words text-sm font-extrabold leading-5 text-white">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* 80G BENEFIT */}
      <div className="mt-auto pt-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center text-[#D5AE3D]">
            <Award size={39} strokeWidth={2.4} />
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-wide text-white">
              {t.benefit}
            </p>

            <p className="mt-1 text-[10px] font-black uppercase tracking-[0.04em] text-[#D5AE3D]">
              {t.approval}
            </p>
          </div>
        </div>

        <p className="mt-3 text-[10px] leading-5 text-[#B9BDCA]">
          {t.approvalNote}
        </p>
      </div>
    </article>
  );
}

// ==========================================
// DOCUMENT CARD
// ==========================================

function DocumentCard({
  document: doc,
  t,
  onOpen,
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_10px_35px_rgba(6,27,80,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-green-200 hover:shadow-[0_24px_50px_rgba(6,27,80,0.12)]">

      {/* DOCUMENT IMAGE */}
      <button
        type="button"
        onClick={onOpen}
        aria-label={`${t.view} ${doc.id}`}
        className="relative flex h-[340px] w-full items-center justify-center overflow-hidden bg-[#F5F7FA] p-4 sm:h-[380px] lg:h-[390px]"
      >
        {!imageError ? (
          <img
            src={doc.image}
            alt={`${t.document} ${doc.id}`}
            loading="lazy"
            decoding="async"
            onError={() => setImageError(true)}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.035]"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 text-slate-400">
            <FileText className="h-14 w-14" />

            <span className="text-xs">
              {t.unavailable}
            </span>
          </div>
        )}

        {/* DOCUMENT NUMBER */}
        <div className="absolute left-4 top-4 rounded-lg bg-[#061B50] px-3 py-2 text-xs font-bold text-white shadow-md">
          {String(doc.id).padStart(2, "0")}
        </div>

        {/* VIEW ICON */}
        <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-green-700 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500">
          <Eye className="h-5 w-5" />
        </div>
      </button>

      {/* CARD FOOTER */}
      <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 p-5">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700">
            <FileCheck2 className="h-5 w-5" />
          </div>

          <h3 className="text-sm font-bold text-[#061B50] sm:text-base">
            {t.document} {String(doc.id).padStart(2, "0")}
          </h3>
        </div>

        <button
          type="button"
          onClick={onOpen}
          className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold text-orange-600 transition-colors hover:text-green-700"
        >
          {t.view}
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function AboutDocuments() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const [activeIndex, setActiveIndex] = useState(null);

  const closeRef = useRef(null);
  const modalRef = useRef(null);
  const triggerRef = useRef(null);

  const closePreview = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const nextDocument = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null
        ? 0
        : (prev + 1) % documents.length
    );
  }, []);

  const previousDocument = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null
        ? 0
        : (prev - 1 + documents.length) %
          documents.length
    );
  }, []);

  // ========================================
  // MODAL KEYBOARD + SCROLL LOCK
  // ========================================

  useEffect(() => {
    if (activeIndex === null) return;

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closePreview();
      }

      if (event.key === "ArrowRight") {
        nextDocument();
      }

      if (event.key === "ArrowLeft") {
        previousDocument();
      }

      if (event.key === "Tab") {
        const focusable =
          modalRef.current?.querySelectorAll(
            'button:not([disabled]), a[href]'
          );

        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (
          event.shiftKey &&
          document.activeElement === first
        ) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow = oldOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      triggerRef.current?.focus?.();
    };
  }, [
    activeIndex !== null,
    closePreview,
    nextDocument,
    previousDocument,
  ]);

  const openPreview = (index) => {
    triggerRef.current = document.activeElement;
    setActiveIndex(index);
  };

  const activeDocument =
    activeIndex !== null
      ? documents[activeIndex]
      : null;

  return (
    <>
      {/* ==================================== */}
      {/* DOCUMENTS SECTION */}
      {/* ==================================== */}

      <section
        id="official-documents"
        aria-labelledby="official-documents-heading"
        className="relative overflow-hidden bg-[#F6F9FC] py-16 lg:py-24"
      >
        {/* BACKGROUND */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-green-100/50 blur-3xl" />

          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-10">

          {/* ================================= */}
          {/* SECTION HEADING */}
          {/* ================================= */}

          <Reveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">

              <div className="mb-4 inline-flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-green-600" />

                <span className="text-xs font-bold uppercase tracking-[0.14em] text-green-700">
                  {t.eyebrow}
                </span>

                <span className="h-px w-8 bg-green-600" />
              </div>

              <h2
                id="official-documents-heading"
                className="text-3xl font-extrabold leading-tight text-[#061B50] sm:text-4xl lg:text-5xl"
              >
                {t.heading1}{" "}

                <span className="text-orange-600">
                  {t.heading2}
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                {t.description}
              </p>
            </div>
          </Reveal>

          {/* ================================= */}
          {/* 3 X 2 GRID */}
          {/* ================================= */}

          <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">

            {/* FIRST CARD — VERIFIED */}
            <Reveal>
              <VerifiedCertifiedCard t={t} />
            </Reveal>

            {/* DOCUMENTS 1, 2, 3, 4, 7 */}
            {documents.map((doc, index) => (
              <Reveal
                key={doc.id}
                delay={(index % 3) * 100}
              >
                <DocumentCard
                  document={doc}
                  t={t}
                  onOpen={() => openPreview(index)}
                />
              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* ==================================== */}
      {/* FULL DOCUMENT PREVIEW MODAL */}
      {/* ==================================== */}

      {activeDocument && (
        <div
          className="doc-modal-backdrop fixed inset-0 z-[9999] flex items-center justify-center bg-[#020B20]/90 p-3 backdrop-blur-md sm:p-5"
          onMouseDown={(event) => {
            if (
              event.target === event.currentTarget
            ) {
              closePreview();
            }
          }}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="document-preview-heading"
            className="doc-modal-panel flex h-[94dvh] w-full max-w-[1100px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            {/* MODAL HEADER */}
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-slate-200 px-4 py-3 sm:px-6">

              <div className="flex min-w-0 items-center gap-3">
                <FileCheck2 className="h-5 w-5 shrink-0 text-green-700" />

                <div>
                  <h3
                    id="document-preview-heading"
                    className="text-sm font-extrabold text-[#061B50] sm:text-base"
                  >
                    {t.preview}
                  </h3>

                  <p className="text-xs text-slate-500">
                    {activeIndex + 1} /{" "}
                    {documents.length}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">

                {/* DOWNLOAD */}
                <a
                  href={activeDocument.image}
                  download
                  className="inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-green-700 px-3 text-xs font-bold text-white transition hover:bg-green-800"
                  aria-label={t.download}
                >
                  <Download className="h-4 w-4" />

                  <span className="hidden sm:inline">
                    {t.download}
                  </span>
                </a>

                {/* CLOSE */}
                <button
                  ref={closeRef}
                  type="button"
                  onClick={closePreview}
                  aria-label={t.close}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-[#061B50] transition hover:bg-orange-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* FULL IMAGE */}
            <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-auto bg-[#EEF2F6] p-3 sm:p-6">
              <img
                key={activeDocument.id}
                src={activeDocument.image}
                alt={`${t.document} ${activeDocument.id}`}
                className="max-h-full max-w-full object-contain shadow-[0_8px_35px_rgba(0,0,0,0.12)]"
              />
            </div>

            {/* NAVIGATION */}
            <div className="flex shrink-0 items-center justify-between gap-3 border-t border-slate-200 bg-white px-4 py-3 sm:px-6">

              <button
                type="button"
                onClick={previousDocument}
                aria-label={t.previous}
                className="flex h-10 items-center gap-2 rounded-lg border border-slate-200 px-3 text-xs font-bold text-[#061B50] transition hover:border-green-400 hover:bg-green-50"
              >
                <ChevronLeft className="h-4 w-4" />

                <span className="hidden sm:inline">
                  {t.previous}
                </span>
              </button>

              <span className="text-xs font-bold text-slate-500">
                {String(activeIndex + 1).padStart(2, "0")}
                {" / "}
                {String(documents.length).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={nextDocument}
                aria-label={t.next}
                className="flex h-10 items-center gap-2 rounded-lg border border-slate-200 px-3 text-xs font-bold text-[#061B50] transition hover:border-green-400 hover:bg-green-50"
              >
                <span className="hidden sm:inline">
                  {t.next}
                </span>

                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ==================================== */}
      {/* ANIMATIONS */}
      {/* ==================================== */}

      <style>{`
        @keyframes docModalFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes docModalEnter {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .doc-modal-backdrop {
          animation: docModalFade 250ms ease-out both;
        }

        .doc-modal-panel {
          animation: docModalEnter 350ms
            cubic-bezier(0.22,1,0.36,1) both;
        }

        #official-documents button:focus-visible,
        .doc-modal-panel button:focus-visible,
        .doc-modal-panel a:focus-visible {
          outline: 3px solid #f97316;
          outline-offset: 3px;
        }

        @media (prefers-reduced-motion: reduce) {
          .doc-modal-backdrop,
          .doc-modal-panel {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}
