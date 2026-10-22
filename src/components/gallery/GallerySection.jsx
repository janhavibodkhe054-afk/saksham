
import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    sectionLabel: "PHOTO GALLERY",

    heading1: "Glimpses of Our",
    heading2: "Journey",

    description:
      "Explore meaningful moments from our training programs, activities and community initiatives.",

    openImage: "Open gallery image",
    imageAlt: "Saksham Foundation gallery photograph",

    previewLabel: "Gallery photo preview",
    closePreview: "Close preview",
    previousPhoto: "Previous photo",
    nextPhoto: "Next photo",
  },

  mr: {
    sectionLabel: "फोटो गॅलरी",

    heading1: "आमच्या प्रवासातील",
    heading2: "अविस्मरणीय क्षण",

    description:
      "आमच्या प्रशिक्षण कार्यक्रम, विविध उपक्रम आणि समुदाय विकास कार्यातील महत्त्वपूर्ण क्षणांची झलक पाहा.",

    openImage: "गॅलरीमधील फोटो उघडा",
    imageAlt: "सक्षम फाउंडेशनच्या गॅलरीमधील फोटो",

    previewLabel: "गॅलरी फोटोचे मोठे दृश्य",
    closePreview: "फोटो बंद करा",
    previousPhoto: "मागील फोटो",
    nextPhoto: "पुढील फोटो",
  },
};

// ACTUAL GALLERY IMAGES
// Replace these files with Saksham Foundation's real photographs.
const galleryImages = [
  "/images/gallery/training-1.jpg",
  "/images/gallery/community-1.jpg",
  "/images/gallery/workshop-1.jpg",
  "/images/gallery/training-2.jpg",
  "/images/gallery/event-1.jpg",
  "/images/gallery/community-2.jpg",
  "/images/gallery/workshop-2.jpg",
  "/images/gallery/event-2.jpg",
  "/images/gallery/training-3.jpg",
];

export default function GallerySection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const [activeIndex, setActiveIndex] = useState(null);

  const isOpen = activeIndex !== null;

  // FORMAT NUMBERS IN ENGLISH / MARATHI
  const formatNumber = (number) => {
    if (language === "mr") {
      return String(number).replace(/[0-9]/g, (digit) =>
        "०१२३४५६७८९"[Number(digit)]
      );
    }

    return String(number);
  };

  const closeLightbox = () => setActiveIndex(null);

  const nextImage = () => {
    setActiveIndex((index) =>
      index === null
        ? null
        : (index + 1) % galleryImages.length
    );
  };

  const previousImage = () => {
    setActiveIndex((index) =>
      index === null
        ? null
        : (index - 1 + galleryImages.length) %
          galleryImages.length
    );
  };

  // KEYBOARD CONTROLS AND SCROLL LOCK
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowRight") {
        setActiveIndex(
          (index) =>
            (index + 1) % galleryImages.length
        );
      } else if (event.key === "ArrowLeft") {
        setActiveIndex(
          (index) =>
            (index - 1 + galleryImages.length) %
            galleryImages.length
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isOpen]);

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="scroll-mt-24 bg-[#F0F7F3] py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* SECTION HEADING */}
        <div className="mb-9 text-center sm:mb-11">

          <div className="mb-3 flex items-center justify-center gap-3">

            <span className="h-[2px] w-7 bg-green-600" />

            <span className="text-xs font-bold uppercase tracking-[0.14em] text-green-700">
              {t.sectionLabel}
            </span>

            <span className="h-[2px] w-7 bg-green-600" />
          </div>

          <h2
            id="gallery-heading"
            className="text-2xl font-extrabold tracking-tight text-[#061B50] sm:text-3xl lg:text-4xl"
          >
            {t.heading1}{" "}

            <span className="text-orange-600">
              {t.heading2}
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            {t.description}
          </p>
        </div>

        {/* MASONRY GALLERY */}
        <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4 lg:gap-5">

          {galleryImages.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`${t.openImage} ${formatNumber(
                index + 1
              )}`}
              className="group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-xl bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:mb-4 sm:rounded-2xl lg:mb-5"
            >

              {/* GALLERY IMAGE */}
              <img
                src={image}
                alt={`${t.imageAlt} ${formatNumber(
                  index + 1
                )}`}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.04]"
              />

              {/* HOVER OVERLAY */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[#061B50]/0 transition-colors duration-300 group-hover:bg-[#061B50]/10"
              />
            </button>
          ))}
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.previewLabel}
          onClick={closeLightbox}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
        >
          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              closeLightbox();
            }}
            aria-label={t.closePreview}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
          >
            <X className="h-6 w-6" />
          </button>

          {/* PREVIOUS BUTTON */}
          {galleryImages.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              aria-label={t.previousPhoto}
              className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* FULLSCREEN IMAGE */}
          <img
            src={galleryImages[activeIndex]}
            alt={`${t.imageAlt} ${formatNumber(
              activeIndex + 1
            )}`}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[85vh] max-w-[calc(100vw-110px)] rounded-lg object-contain shadow-2xl sm:max-w-[85vw]"
          />

          {/* NEXT BUTTON */}
          {galleryImages.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              aria-label={t.nextPhoto}
              className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 sm:right-6"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>
      )}
    </section>
  );
}
