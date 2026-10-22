
import React from "react";
import { ArrowRight } from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    sectionLabel: "SAKSHAM FOUNDATION GALLERY",

    heading1: "Moments of",
    heading2: "Learning & Impact",

    description:
      "Explore moments of learning, skill development and community engagement that reflect our commitment to creating better opportunities.",

    button: "Explore Gallery",

    imageAlts: [
      "Participants attending a training workshop",
      "People collaborating during a learning session",
      "Participants using computers for learning",
    ],
  },

  mr: {
    sectionLabel: "सक्षम फाउंडेशन फोटो गॅलरी",

    heading1: "शिक्षणाचे क्षण",
    heading2: "आणि सकारात्मक परिवर्तन",

    description:
      "शिक्षण, कौशल्य विकास आणि समुदाय सहभागाच्या विविध क्षणांची झलक पाहा. अधिक चांगल्या संधी निर्माण करण्यासाठी असलेली आमची बांधिलकी या उपक्रमांमधून दिसून येते.",

    button: "फोटो गॅलरी पाहा",

    imageAlts: [
      "प्रशिक्षण कार्यशाळेत सहभागी झालेले प्रशिक्षणार्थी",
      "शिक्षण सत्रादरम्यान एकत्र काम करणारे सहभागी",
      "संगणकाच्या माध्यमातून शिकणारे प्रशिक्षणार्थी",
    ],
  },
};

// SAME IMAGES FOR BOTH LANGUAGES
const galleryImages = [
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=85",
];

export default function GalleryHero() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const scrollToGallery = (event) => {
    const target = document.getElementById("gallery");

    if (!target) return;

    event.preventDefault();

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    target.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="gallery-hero"
      aria-labelledby="gallery-hero-heading"
      className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-5">

            {/* SECTION LABEL */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-green-700">
                {t.sectionLabel}
              </span>
            </div>

            {/* HEADING */}
            <h1
              id="gallery-hero-heading"
              className="text-3xl font-extrabold leading-[1.15] tracking-tight text-[#061B50] sm:text-4xl lg:text-[46px]"
            >
              {t.heading1}

              <span className="block text-orange-600">
                {t.heading2}
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
              {t.description}
            </p>

            {/* SAME PAGE SCROLL BUTTON */}
            <a
              href="#gallery"
              onClick={scrollToGallery}
              className="group mt-6 inline-flex items-center gap-3 rounded-lg bg-[#061B50] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#0B3270] hover:shadow-lg"
            >
              {t.button}

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* RIGHT SIDE - OVERLAPPING PHOTO COLLAGE */}
          <div className="lg:col-span-7">
            <div className="relative mx-auto h-[300px] w-full max-w-[620px] sm:h-[350px] lg:h-[370px]">

              {/* SOFT GREEN SHAPE */}
              <div
                aria-hidden="true"
                className="absolute left-[20%] top-[12%] h-[73%] w-[62%] rounded-[45%] bg-[#EDF7F0]"
              />

              {/* MAIN CENTER PHOTO */}
              <div
                className="
                  group absolute
                  left-[23%] top-[12%] z-20
                  h-[77%] w-[57%]
                  rotate-[-3deg]
                  overflow-hidden rounded-[18px]
                  border-[5px] border-white
                  bg-slate-100
                  shadow-[0_18px_45px_rgba(6,27,80,0.16)]
                  transition-transform duration-500
                  hover:z-40 hover:rotate-0 hover:scale-[1.04]
                  sm:rounded-[22px]
                "
              >
                <img
                  src={galleryImages[0]}
                  alt={t.imageAlts[0]}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* TOP RIGHT PHOTO */}
              <div
                className="
                  group absolute
                  right-[1%] top-[1%] z-10
                  h-[43%] w-[38%]
                  rotate-[7deg]
                  overflow-hidden rounded-[17px]
                  border-[5px] border-white
                  bg-slate-100
                  shadow-[0_12px_30px_rgba(6,27,80,0.14)]
                  transition-transform duration-500
                  hover:z-40 hover:rotate-0 hover:scale-[1.05]
                  sm:rounded-[20px]
                "
              >
                <img
                  src={galleryImages[1]}
                  alt={t.imageAlts[1]}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* BOTTOM LEFT PHOTO */}
              <div
                className="
                  group absolute
                  bottom-[2%] left-[1%] z-30
                  h-[48%] w-[37%]
                  rotate-[6deg]
                  overflow-hidden rounded-[17px]
                  border-[5px] border-white
                  bg-slate-100
                  shadow-[0_12px_30px_rgba(6,27,80,0.14)]
                  transition-transform duration-500
                  hover:z-40 hover:rotate-0 hover:scale-[1.05]
                  sm:rounded-[20px]
                "
              >
                <img
                  src={galleryImages[2]}
                  alt={t.imageAlts[2]}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* GREEN OUTLINE CIRCLE */}
              <div
                aria-hidden="true"
                className="absolute bottom-[12%] right-[3%] h-12 w-12 rounded-full border-[7px] border-green-100 sm:h-16 sm:w-16"
              />

              {/* DECORATIVE DOTS */}
              <div
                aria-hidden="true"
                className="absolute left-[10%] top-[7%] flex gap-2"
              >
                <span className="h-2 w-2 rounded-full bg-green-600" />
                <span className="h-2 w-2 rounded-full bg-green-300" />
                <span className="h-2 w-2 rounded-full bg-orange-400" />
              </div>

              {/* ORANGE ACCENT */}
              <span
                aria-hidden="true"
                className="absolute bottom-[17%] right-[8%] h-4 w-4 rounded-full bg-orange-400"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
