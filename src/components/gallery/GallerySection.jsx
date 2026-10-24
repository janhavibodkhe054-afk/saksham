
import React, { useEffect, useRef, useState } from "react";

import {
  X,
  ChevronLeft,
  ChevronRight,
  BookOpenCheck,
  Images,
  ArrowUpRight,
  Users,
  HeartHandshake,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// =======================================
// TRANSLATIONS
// =======================================

const translations = {
  en: {
    galleryLabel: "PHOTO GALLERY",
    galleryHeading1: "Glimpses of Our",
    galleryHeading2: "Journey",

    galleryDescription:
      "Explore meaningful moments from our training programs, activities and community initiatives.",

    tallyLabel: "SPECIAL TRAINING HIGHLIGHTS",
    tallyHeading1: "Financial Accounting",
    tallyHeading2: "with Tally Course",

    tallyDescription:
      "A glimpse into our Financial Accounting with Tally training activities, focused on accounting knowledge, computer-based learning and practical skill development.",

    tallyTag1: "Financial Accounting",
    tallyTag2: "Tally Training",
    tallyTag3: "Practical Learning",

    communityLabel: "COMMUNITY ENGAGEMENT",
    communityHeading1: "Community",
    communityHeading2: "Mobilization",

    communityDescription:
      "Connecting with local communities, spreading awareness about skill development opportunities and guiding eligible youth and women towards training and livelihood pathways.",

    communityTags: [
      "Community Outreach",
      "Awareness Activities",
      "Youth & Women Engagement",
    ],

    galleryAlt:
      "Saksham Foundation training and community gallery photograph",

    tallyAlt:
      "Financial Accounting with Tally Course training photograph",

    communityAlt:
      "Community mobilization and outreach activity",

    openImage: "View gallery photo",
    preview: "Gallery photo preview",
    close: "Close photo",
    previous: "Previous photo",
    next: "Next photo",

    photo: "Photo",
    of: "of",
  },

  mr: {
    galleryLabel: "फोटो गॅलरी",
    galleryHeading1: "आमच्या प्रवासातील",
    galleryHeading2: "अविस्मरणीय क्षण",

    galleryDescription:
      "आमच्या प्रशिक्षण कार्यक्रम, विविध उपक्रम आणि समुदाय विकास कार्यातील महत्त्वपूर्ण क्षणांची झलक पाहा.",

    tallyLabel: "विशेष प्रशिक्षणाची झलक",
    tallyHeading1: "फायनान्शियल अकाउंटिंग",
    tallyHeading2: "विथ टॅली कोर्स",

    tallyDescription:
      "आर्थिक लेखांकन, संगणकाधारित शिक्षण आणि प्रात्यक्षिक कौशल्य विकासावर भर देणाऱ्या फायनान्शियल अकाउंटिंग विथ टॅली प्रशिक्षण उपक्रमातील काही खास क्षण.",

    tallyTag1: "आर्थिक लेखांकन",
    tallyTag2: "टॅली प्रशिक्षण",
    tallyTag3: "प्रात्यक्षिक शिक्षण",

    communityLabel: "समुदाय सहभाग उपक्रम",
    communityHeading1: "समुदाय संपर्क",
    communityHeading2: "व जनजागृती",

    communityDescription:
      "स्थानिक समुदायांशी संवाद साधणे, कौशल्य विकासाच्या संधींबाबत जनजागृती करणे आणि पात्र युवक व महिलांना प्रशिक्षण व रोजगाराभिमुख संधींसाठी मार्गदर्शन करणे.",

    communityTags: [
      "समुदाय संपर्क",
      "जनजागृती उपक्रम",
      "युवक व महिला सहभाग",
    ],

    galleryAlt:
      "सक्षम फाउंडेशनच्या प्रशिक्षण व सामाजिक उपक्रमांचा फोटो",

    tallyAlt:
      "फायनान्शियल अकाउंटिंग विथ टॅली कोर्स प्रशिक्षण फोटो",

    communityAlt:
      "समुदाय संपर्क व जनजागृती उपक्रम",

    openImage: "गॅलरीमधील फोटो पाहा",
    preview: "गॅलरी फोटोचे मोठे दृश्य",
    close: "फोटो बंद करा",
    previous: "मागील फोटो",
    next: "पुढील फोटो",

    photo: "फोटो",
    of: "पैकी",
  },
};

// =======================================
// IMAGES
// =======================================

const mainGalleryImages = Array.from(
  { length: 44 },
  (_, index) => `/g${index + 1}.jpeg`
);

const tallyImages = [
  "/a1.jpeg",
  "/a2.jpeg",
  "/a3.jpeg",
  "/a4.jpeg",
];

// NEW: COMMUNITY MOBILIZATION PHOTOS
const communityImages = [
  "/c1.jpeg",
  "/c2.jpeg",
  "/c3.jpeg",
  "/c4.jpeg",
];

// LIGHTBOX ORDER
const allImages = [
  ...mainGalleryImages,
  ...tallyImages,
  ...communityImages,
];

// =======================================
// NUMBER FORMATTER
// =======================================

const formatNumber = (number, language) => {
  const value = String(number);

  if (language !== "mr") return value;

  return value.replace(
    /[0-9]/g,
    (digit) => "०१२३४५६७८९"[Number(digit)]
  );
};

// =======================================
// SCROLL REVEAL
// =======================================

function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 800,
  className = "",
}) {
  const elementRef = useRef(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      reduceMotion ||
      !("IntersectionObserver" in window)
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
        rootMargin: "0px 0px 45px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const transforms = {
    up: "translate3d(0,45px,0)",
    down: "translate3d(0,-45px,0)",
    left: "translate3d(-55px,0,0)",
    right: "translate3d(55px,0,0)",
    zoom: "scale(0.90)",
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: visible ? 1 : 0,

        transform: visible
          ? "translate3d(0,0,0) scale(1)"
          : transforms[direction] || transforms.up,

        transitionProperty: "opacity, transform",

        transitionDuration: `${duration}ms`,

        transitionTimingFunction:
          "cubic-bezier(0.22,1,0.36,1)",

        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// =======================================
// MAIN GALLERY SECTION
// =======================================

export default function GallerySection() {
  const { language } = useLanguage();

  const t = translations[language] || translations.en;

  const [activeIndex, setActiveIndex] =
    useState(null);

  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  const isOpen = activeIndex !== null;

  // =====================================
  // IMAGE ALT TEXT
  // =====================================

  const getImageAlt = (index) => {
    const tallyStart = mainGalleryImages.length;

    const communityStart =
      tallyStart + tallyImages.length;

    if (index >= communityStart) {
      return `${t.communityAlt} ${formatNumber(
        index - communityStart + 1,
        language
      )}`;
    }

    if (index >= tallyStart) {
      return `${t.tallyAlt} ${formatNumber(
        index - tallyStart + 1,
        language
      )}`;
    }

    return `${t.galleryAlt} ${formatNumber(
      index + 1,
      language
    )}`;
  };

  // =====================================
  // LIGHTBOX
  // =====================================

  const openLightbox = (index) => {
    previousFocusRef.current =
      document.activeElement;

    setActiveIndex(index);
  };

  const closeLightbox = () => {
    setActiveIndex(null);
  };

  const nextImage = () => {
    setActiveIndex((index) =>
      index === null
        ? null
        : (index + 1) % allImages.length
    );
  };

  const previousImage = () => {
    setActiveIndex((index) =>
      index === null
        ? null
        : (index - 1 + allImages.length) %
          allImages.length
    );
  };

  // =====================================
  // KEYBOARD + SCROLL LOCK
  // =====================================

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }

      // KEEP KEYBOARD FOCUS INSIDE LIGHTBOX
      if (
        event.key === "Tab" &&
        event.shiftKey &&
        document.activeElement ===
          closeButtonRef.current
      ) {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      previousFocusRef.current?.focus?.();
    };
  }, [isOpen]);

  return (
    <>
      <section
        id="gallery"
        aria-labelledby="gallery-heading"
        className="scroll-mt-24 overflow-hidden bg-[#F0F7F3] py-14 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* ============================= */}
          {/* MAIN GALLERY HEADING */}
          {/* ============================= */}

          <Reveal
            direction="up"
            duration={1000}
          >
            <div className="mb-10 text-center sm:mb-12">

              <div className="mb-3 flex items-center justify-center gap-3">

                <span className="h-[2px] w-7 bg-green-600" />

                <span className="text-xs font-bold uppercase tracking-[0.14em] text-green-700">
                  {t.galleryLabel}
                </span>

                <span className="h-[2px] w-7 bg-green-600" />

              </div>

              <h2
                id="gallery-heading"
                className="text-2xl font-extrabold tracking-tight text-[#061B50] sm:text-3xl lg:text-4xl"
              >
                {t.galleryHeading1}{" "}

                <span className="text-orange-600">
                  {t.galleryHeading2}
                </span>
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                {t.galleryDescription}
              </p>

            </div>
          </Reveal>

          {/* ============================= */}
          {/* MAIN 44 PHOTOS */}
          {/* ============================= */}

          <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4 lg:gap-5">

            {mainGalleryImages.map(
              (image, index) => (
                <Reveal
                  key={image}
                  direction="zoom"
                  duration={850}
                  delay={(index % 4) * 90}
                  className="mb-3 break-inside-avoid sm:mb-4 lg:mb-5"
                >
                  <button
                    type="button"
                    onClick={() =>
                      openLightbox(index)
                    }
                    aria-label={`${t.openImage} ${formatNumber(
                      index + 1,
                      language
                    )}`}
                    className="group relative block w-full overflow-hidden rounded-xl bg-white text-left shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(6,27,80,0.16)] sm:rounded-2xl"
                  >
                    <img
                      src={image}
                      alt={getImageAlt(index)}
                      loading="lazy"
                      decoding="async"
                      className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                    />

                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-[#061B50]/0 transition-colors duration-500 group-hover:bg-[#061B50]/15"
                    />

                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-0 left-0 h-1 w-0 bg-orange-500 transition-all duration-500 group-hover:w-full"
                    />

                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-4 top-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/90 text-[#061B50] opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>

                  </button>
                </Reveal>
              )
            )}

          </div>

          {/* ============================= */}
          {/* TALLY COURSE DIVIDER */}
          {/* ============================= */}

          <div className="my-14 h-px bg-green-900/10 lg:my-20" />

          {/* ============================= */}
          {/* TALLY COURSE HEADER */}
          {/* ============================= */}

          <div className="mb-9 grid items-center gap-6 lg:mb-11 lg:grid-cols-[1fr_auto]">

            <Reveal
              direction="left"
              duration={950}
            >
              <div>
                <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-orange-100 bg-orange-50 px-4 py-2">

                  <BookOpenCheck className="h-4 w-4 text-orange-600" />

                  <span className="text-[11px] font-bold uppercase tracking-[0.13em] text-orange-700 sm:text-xs">
                    {t.tallyLabel}
                  </span>

                </div>

                <h3 className="max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-3xl lg:text-4xl">
                  {t.tallyHeading1}{" "}

                  <span className="text-orange-600">
                    {t.tallyHeading2}
                  </span>
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  {t.tallyDescription}
                </p>

              </div>
            </Reveal>

            <Reveal
              direction="right"
              duration={950}
            >
              <div className="hidden h-24 w-24 items-center justify-center rounded-3xl border border-green-100 bg-white text-green-700 shadow-sm lg:flex">

                <Images
                  className="h-10 w-10"
                  strokeWidth={1.5}
                />

              </div>
            </Reveal>
          </div>

          {/* ============================= */}
          {/* TALLY COURSE 4 PHOTOS */}
          {/* ============================= */}

          <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">

            {tallyImages.map(
              (image, index) => {
                const globalIndex =
                  mainGalleryImages.length +
                  index;

                return (
                  <Reveal
                    key={image}
                    direction="up"
                    delay={index * 120}
                    duration={950}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        openLightbox(
                          globalIndex
                        )
                      }
                      aria-label={`${t.openImage} ${formatNumber(
                        globalIndex + 1,
                        language
                      )}`}
                      className="group relative block w-full overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(6,27,80,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(6,27,80,0.17)]"
                    >
                      <img
                        src={image}
                        alt={getImageAlt(
                          globalIndex
                        )}
                        loading="lazy"
                        decoding="async"
                        className="block h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />

                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061B50]/30 via-transparent to-transparent"
                      />

                      <span className="absolute bottom-4 left-4 rounded-lg border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                        {formatNumber(
                          String(index + 1).padStart(
                            2,
                            "0"
                          ),
                          language
                        )}
                      </span>

                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#061B50] opacity-0 transition-all duration-300 group-hover:opacity-100"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </span>

                    </button>
                  </Reveal>
                );
              }
            )}

          </div>

          {/* ============================= */}
          {/* COMMUNITY MOBILIZATION DIVIDER */}
          {/* ============================= */}

          <div className="my-14 h-px bg-green-900/10 lg:my-20" />

          {/* ============================= */}
          {/* COMMUNITY MOBILIZATION HEADER */}
          {/* ============================= */}

          <div
            id="community-mobilization"
            className="mb-9 grid scroll-mt-28 items-center gap-6 lg:mb-11 lg:grid-cols-[1fr_auto]"
          >
            <Reveal
              direction="left"
              duration={950}
            >
              <div>

                {/* CATEGORY BADGE */}
                <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-green-100 bg-green-50 px-4 py-2">

                  <HeartHandshake className="h-4 w-4 text-green-700" />

                  <span className="text-[11px] font-bold uppercase tracking-[0.13em] text-green-700 sm:text-xs">
                    {t.communityLabel}
                  </span>

                </div>

                {/* HEADING */}
                <h3 className="max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-3xl lg:text-4xl">
                  {t.communityHeading1}{" "}

                  <span className="text-orange-600">
                    {t.communityHeading2}
                  </span>
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  {t.communityDescription}
                </p>

                {/* TAGS */}
                <div className="mt-5 flex flex-wrap gap-2">

                  {t.communityTags.map(
                    (tag, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-green-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-green-800 sm:text-xs"
                      >
                        {tag}
                      </span>
                    )
                  )}

                </div>

              </div>
            </Reveal>

            {/* DECORATIVE ICON */}
            <Reveal
              direction="right"
              duration={950}
            >
              <div className="community-header-icon hidden h-24 w-24 items-center justify-center rounded-3xl border border-green-100 bg-white text-green-700 shadow-sm lg:flex">

                <Users
                  className="h-10 w-10"
                  strokeWidth={1.5}
                />

              </div>
            </Reveal>

          </div>

          {/* ============================= */}
          {/* COMMUNITY MOBILIZATION IMAGES */}
          {/* 4 PHOTOS - FULL HEIGHT */}
          {/* ============================= */}

          <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">

            {communityImages.map(
              (image, index) => {
                const globalIndex =
                  mainGalleryImages.length +
                  tallyImages.length +
                  index;

                return (
                  <Reveal
                    key={image}
                    direction="up"
                    delay={index * 120}
                    duration={950}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        openLightbox(
                          globalIndex
                        )
                      }
                      aria-label={`${t.openImage} ${formatNumber(
                        globalIndex + 1,
                        language
                      )}`}
                      className="community-gallery-card group relative block w-full overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(6,27,80,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(6,27,80,0.17)]"
                    >
                      {/* FULL ORIGINAL IMAGE */}
                      <img
                        src={image}
                        alt={getImageAlt(
                          globalIndex
                        )}
                        loading="lazy"
                        decoding="async"
                        className="block h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      />

                      {/* MIRROR SHINE */}
                      <span
                        aria-hidden="true"
                        className="community-image-shine pointer-events-none absolute inset-0"
                      />

                      {/* GRADIENT OVERLAY */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061B50]/35 via-transparent to-transparent"
                      />

                      {/* PHOTO NUMBER */}
                      <span className="absolute bottom-4 left-4 rounded-lg border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                        {formatNumber(
                          String(index + 1).padStart(
                            2,
                            "0"
                          ),
                          language
                        )}
                      </span>

                      {/* VIEW ICON */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/90 text-[#061B50] opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </span>

                    </button>
                  </Reveal>
                );
              }
            )}

          </div>

        </div>
      </section>

      {/* ================================= */}
      {/* FULLSCREEN LIGHTBOX */}
      {/* ================================= */}

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.preview}
          onClick={closeLightbox}
          className="saksham-lightbox fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
        >
          {/* CLOSE */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              closeLightbox();
            }}
            aria-label={t.close}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-all duration-300 hover:rotate-90 hover:bg-white/25"
          >
            <X className="h-6 w-6" />
          </button>

          {/* PREVIOUS */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            aria-label={t.previous}
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* ACTIVE IMAGE */}
          <img
            key={activeIndex}
            src={allImages[activeIndex]}
            alt={getImageAlt(activeIndex)}
            onClick={(event) =>
              event.stopPropagation()
            }
            className="saksham-lightbox-image max-h-[85vh] max-w-[calc(100vw-110px)] rounded-lg object-contain shadow-2xl sm:max-w-[85vw]"
          />

          {/* NEXT */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            aria-label={t.next}
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* COUNTER */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-5 py-2 text-xs font-semibold text-white backdrop-blur-sm sm:text-sm">
            {t.photo}{" "}
            {formatNumber(
              activeIndex + 1,
              language
            )}{" "}
            {t.of}{" "}
            {formatNumber(
              allImages.length,
              language
            )}
          </div>

        </div>
      )}

      {/* ================================= */}
      {/* ANIMATIONS */}
      {/* ================================= */}

      <style>{`
        /* LIGHTBOX FADE */

        @keyframes sakshamLightboxFade {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        /* IMAGE ZOOM */

        @keyframes sakshamImageZoom {
          from {
            opacity: 0;
            transform: scale(0.88);
            filter: blur(5px);
          }

          to {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }

        .saksham-lightbox {
          animation: sakshamLightboxFade
            350ms ease-out both;
        }

        .saksham-lightbox-image {
          animation: sakshamImageZoom
            500ms cubic-bezier(0.22,1,0.36,1) both;
        }

        /* COMMUNITY CARD MIRROR SHINE */

        .community-image-shine {
          background: linear-gradient(
            115deg,
            transparent 20%,
            rgba(255,255,255,0.03) 35%,
            rgba(255,255,255,0.35) 48%,
            rgba(255,255,255,0.5) 50%,
            rgba(255,255,255,0.15) 57%,
            transparent 75%
          );

          transform: translateX(-160%);
          opacity: 0;
        }

        .community-gallery-card:hover
        .community-image-shine {
          animation: communityMirrorShine
            1000ms ease-out both;
        }

        @keyframes communityMirrorShine {
          0% {
            opacity: 0;
            transform: translateX(-160%);
          }

          25% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translateX(160%);
          }
        }

        /* DECORATIVE ICON FLOAT */

        @keyframes communityIconFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        .community-header-icon {
          animation: communityIconFloat
            4s ease-in-out infinite;
        }

        /* KEYBOARD FOCUS */

        #gallery button:focus-visible,
        .saksham-lightbox button:focus-visible {
          outline: 3px solid #f97316;
          outline-offset: 3px;
        }

        /* REDUCED MOTION */

        @media (prefers-reduced-motion: reduce) {
          .saksham-lightbox,
          .saksham-lightbox-image,
          .community-image-shine,
          .community-header-icon {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}
