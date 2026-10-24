
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ==========================================
// ENGLISH + MARATHI TRANSLATIONS
// ==========================================

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

// ==========================================
// GALLERY IMAGES
// ==========================================

const galleryImages = [
  "/g10.jpeg",
  "/g19.jpeg",
  "/g28.jpeg",
];

// ==========================================
// LOCAL SCROLL REVEAL
// ==========================================

function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 900,
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
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
        threshold: 0.1,
        rootMargin: "0px 0px 20px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const transforms = {
    up: "translate3d(0, 45px, 0)",
    down: "translate3d(0, -45px, 0)",
    left: "translate3d(-55px, 0, 0)",
    right: "translate3d(55px, 0, 0)",
    zoom: "scale(0.9)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate3d(0, 0, 0) scale(1)"
          : transforms[direction] || transforms.up,
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction:
          "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </div>
  );
}

// ==========================================
// MAIN GALLERY HERO
// ==========================================

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

    // Supports existing Lenis scrolling if enabled
    if (window.__sakshamLenis && !reduceMotion) {
      window.__sakshamLenis.scrollTo(target, {
        offset: -110,
        duration: 1.2,
      });
      return;
    }

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

          {/* ================================= */}
          {/* LEFT ANIMATED CONTENT */}
          {/* ================================= */}

          <div className="lg:col-span-5">

            {/* SECTION LABEL */}
            <Reveal direction="left" delay={100}>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-0.5 w-8 bg-green-600" />

                <span className="text-xs font-bold uppercase tracking-[0.15em] text-green-700">
                  {t.sectionLabel}
                </span>
              </div>
            </Reveal>

            {/* MAIN HEADING */}
            <Reveal
              direction="up"
              delay={220}
              duration={1100}
            >
              <h1
                id="gallery-hero-heading"
                className="text-3xl font-extrabold leading-[1.15] tracking-tight text-[#061B50] sm:text-4xl lg:text-[46px]"
              >
                {t.heading1}

                <span className="block text-orange-600">
                  {t.heading2}
                </span>
              </h1>
            </Reveal>

            {/* DESCRIPTION */}
            <Reveal
              direction="up"
              delay={350}
              duration={1050}
            >
              <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                {t.description}
              </p>
            </Reveal>

            {/* CTA BUTTON */}
            <Reveal
              direction="up"
              delay={500}
              duration={1100}
            >
              <a
                href="#gallery"
                onClick={scrollToGallery}
                className="group mt-6 inline-flex items-center gap-3 rounded-lg bg-[#061B50] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B3270] hover:shadow-[0_12px_30px_rgba(6,27,80,0.2)]"
              >
                {t.button}

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>

          </div>

          {/* ================================= */}
          {/* RIGHT ANIMATED PHOTO COLLAGE */}
          {/* ================================= */}

          <div className="lg:col-span-7">

            <div className="relative mx-auto h-[300px] w-full max-w-[620px] sm:h-[350px] lg:h-[370px]">

              {/* SOFT GREEN BACKGROUND SHAPE */}
              <div
                aria-hidden="true"
                className="gallery-shape-float absolute left-[20%] top-[12%] h-[73%] w-[62%] rounded-[45%] bg-[#EDF7F0]"
              />

              {/* MAIN CENTER PHOTO */}
              <div
                className="gallery-photo-center absolute left-[23%] top-[12%] z-20 h-[77%] w-[57%]"
              >
                <div className="gallery-float-main h-full w-full">
                  <div
                    className="
                      group h-full w-full
                      rotate-[-3deg]
                      overflow-hidden rounded-[18px]
                      border-[5px] border-white
                      bg-slate-100
                      shadow-[0_18px_45px_rgba(6,27,80,0.16)]
                      transition-transform duration-500
                      hover:rotate-0 hover:scale-[1.04]
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
                </div>
              </div>

              {/* TOP RIGHT PHOTO */}
              <div
                className="gallery-photo-right absolute right-[1%] top-[1%] z-10 h-[43%] w-[38%] hover:z-40"
              >
                <div className="gallery-float-right h-full w-full">
                  <div
                    className="
                      group h-full w-full
                      rotate-[7deg]
                      overflow-hidden rounded-[17px]
                      border-[5px] border-white
                      bg-slate-100
                      shadow-[0_12px_30px_rgba(6,27,80,0.14)]
                      transition-transform duration-500
                      hover:rotate-0 hover:scale-[1.05]
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
                </div>
              </div>

              {/* BOTTOM LEFT PHOTO */}
              <div
                className="gallery-photo-left absolute bottom-[2%] left-[1%] z-30 h-[48%] w-[37%] hover:z-40"
              >
                <div className="gallery-float-left h-full w-full">
                  <div
                    className="
                      group h-full w-full
                      rotate-[6deg]
                      overflow-hidden rounded-[17px]
                      border-[5px] border-white
                      bg-slate-100
                      shadow-[0_12px_30px_rgba(6,27,80,0.14)]
                      transition-transform duration-500
                      hover:rotate-0 hover:scale-[1.05]
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
                </div>
              </div>

              {/* GREEN OUTLINE CIRCLE */}
              <div
                aria-hidden="true"
                className="gallery-circle-pulse absolute bottom-[12%] right-[3%] h-12 w-12 rounded-full border-[7px] border-green-100 sm:h-16 sm:w-16"
              />

              {/* DECORATIVE DOTS */}
              <div
                aria-hidden="true"
                className="absolute left-[10%] top-[7%] flex gap-2"
              >
                <span className="gallery-dot-1 h-2 w-2 rounded-full bg-green-600" />
                <span className="gallery-dot-2 h-2 w-2 rounded-full bg-green-300" />
                <span className="gallery-dot-3 h-2 w-2 rounded-full bg-orange-400" />
              </div>

              {/* ORANGE ACCENT */}
              <span
                aria-hidden="true"
                className="gallery-accent-pulse absolute bottom-[17%] right-[8%] h-4 w-4 rounded-full bg-orange-400"
              />

            </div>
          </div>

        </div>
      </div>

      {/* ================================= */}
      {/* COMPONENT-SCOPED ANIMATIONS */}
      {/* ================================= */}

      <style>{`
        @keyframes galleryCenterEntrance {
          from {
            opacity: 0;
            transform: translateY(55px) scale(0.88) rotate(-8deg);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0);
          }
        }

        @keyframes galleryRightEntrance {
          from {
            opacity: 0;
            transform: translate(55px, -35px) scale(0.85);
          }

          to {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
        }

        @keyframes galleryLeftEntrance {
          from {
            opacity: 0;
            transform: translate(-55px, 45px) scale(0.85);
          }

          to {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
        }

        @keyframes galleryFloatingMain {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes galleryFloatingRight {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(8px);
          }
        }

        @keyframes galleryFloatingLeft {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes galleryShapeMotion {
          0%, 100% {
            transform: rotate(0deg) scale(1);
          }

          50% {
            transform: rotate(6deg) scale(1.06);
          }
        }

        @keyframes galleryCircleMotion {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }

          50% {
            transform: scale(1.12);
            opacity: 1;
          }
        }

        @keyframes galleryDotMotion {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-5px);
          }
        }

        .gallery-photo-center {
          animation: galleryCenterEntrance 1.1s
            cubic-bezier(0.22, 1, 0.36, 1) 0.15s both;
        }

        .gallery-photo-right {
          animation: galleryRightEntrance 1.1s
            cubic-bezier(0.22, 1, 0.36, 1) 0.4s both;
        }

        .gallery-photo-left {
          animation: galleryLeftEntrance 1.1s
            cubic-bezier(0.22, 1, 0.36, 1) 0.6s both;
        }

        .gallery-float-main {
          animation: galleryFloatingMain 5s ease-in-out infinite;
        }

        .gallery-float-right {
          animation: galleryFloatingRight 6s ease-in-out infinite;
        }

        .gallery-float-left {
          animation: galleryFloatingLeft 5.5s ease-in-out infinite;
        }

        .gallery-shape-float {
          animation: galleryShapeMotion 8s ease-in-out infinite;
        }

        .gallery-circle-pulse,
        .gallery-accent-pulse {
          animation: galleryCircleMotion 4s ease-in-out infinite;
        }

        .gallery-dot-1,
        .gallery-dot-2,
        .gallery-dot-3 {
          animation: galleryDotMotion 2.5s ease-in-out infinite;
        }

        .gallery-dot-2 {
          animation-delay: 0.3s;
        }

        .gallery-dot-3 {
          animation-delay: 0.6s;
        }

        @media (prefers-reduced-motion: reduce) {
          #gallery-hero .gallery-photo-center,
          #gallery-hero .gallery-photo-right,
          #gallery-hero .gallery-photo-left,
          #gallery-hero .gallery-float-main,
          #gallery-hero .gallery-float-right,
          #gallery-hero .gallery-float-left,
          #gallery-hero .gallery-shape-float,
          #gallery-hero .gallery-circle-pulse,
          #gallery-hero .gallery-accent-pulse,
          #gallery-hero .gallery-dot-1,
          #gallery-hero .gallery-dot-2,
          #gallery-hero .gallery-dot-3 {
            animation: none !important;
          }
        }
      `}</style>

    </section>
  );
}
