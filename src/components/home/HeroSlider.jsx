
import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  HeartPulse,
  Users,
  CheckCircle2,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  en: [
    {
      id: 1,
      badge: "SKILL DEVELOPMENT",
      title: "Empowering Lives Through",
      highlight: "Skill Development",
      description:
        "Building skills, creating opportunities and empowering youth and women for a brighter, self-reliant future.",
      primaryCta: "Explore Our Programs",
      primaryLink: "/programs",
      secondaryCta: "Register Now",
      secondaryLink: "/contact#register",
      features: [
        "Vocational Training",
        "Youth Empowerment",
        "Self-Reliant Future",
      ],
    },
    {
      id: 2,
      badge: "HEALTHCARE TRAINING",
      title: "Learn Healthcare Skills.",
      highlight: "Build Your Career.",
      description:
        "Join our free General Duty Assistant (GDA) training program with classroom learning, hospital OJT and placement support.",
      primaryCta: "Explore GDA Course",
      primaryLink: "/programs#featured-gda",
      secondaryCta: "Apply Now",
      secondaryLink: "/contact#register",
      features: [
        "Free GDA Training",
        "Hospital OJT",
        "100% Placement Support",
      ],
    },
    {
      id: 3,
      badge: "WOMEN & YOUTH EMPOWERMENT",
      title: "Creating Opportunities.",
      highlight: "Transforming Communities.",
      description:
        "Supporting underprivileged youth and women through vocational education, digital literacy and sustainable livelihood initiatives.",
      primaryCta: "About Our Foundation",
      primaryLink: "/about",
      secondaryCta: "Partner With Us",
      secondaryLink: "/csr",
      features: [
        "Digital Literacy",
        "Women Livelihood",
        "Community Impact",
      ],
    },
  ],

  mr: [
    {
      id: 1,
      badge: "कौशल्य विकास",
      title: "कौशल्य विकासातून",
      highlight: "सक्षम जीवनाची निर्मिती",
      description:
        "युवक आणि महिलांना आवश्यक कौशल्ये, नवीन संधी आणि उज्ज्वल भविष्यासाठी मार्गदर्शन देत स्वावलंबनाच्या दिशेने सक्षम बनवण्याचा आमचा प्रयत्न आहे.",
      primaryCta: "आमचे प्रशिक्षण पाहा",
      primaryLink: "/programs",
      secondaryCta: "आता नोंदणी करा",
      secondaryLink: "/contact#register",
      features: [
        "व्यावसायिक प्रशिक्षण",
        "युवक सक्षमीकरण",
        "स्वावलंबी भविष्य",
      ],
    },
    {
      id: 2,
      badge: "आरोग्यसेवा प्रशिक्षण",
      title: "आरोग्यसेवेतील कौशल्ये शिका.",
      highlight: "करिअर घडवा.",
      description:
        "आमच्या मोफत जनरल ड्युटी असिस्टंट (GDA) प्रशिक्षण कार्यक्रमात सहभागी व्हा. वर्गातील शिक्षण, रुग्णालयातील प्रत्यक्ष प्रशिक्षण आणि रोजगारासाठी सहाय्य मिळवा.",
      primaryCta: "GDA प्रशिक्षण जाणून घ्या",
      primaryLink: "/programs#featured-gda",
      secondaryCta: "आता अर्ज करा",
      secondaryLink: "/contact#register",
      features: [
        "मोफत GDA प्रशिक्षण",
        "रुग्णालयातील OJT",
        "१००% प्लेसमेंट सहाय्य",
      ],
    },
    {
      id: 3,
      badge: "महिला व युवक सक्षमीकरण",
      title: "नवीन संधी निर्माण करूया.",
      highlight: "समाजात परिवर्तन घडवूया.",
      description:
        "व्यावसायिक शिक्षण, डिजिटल साक्षरता आणि शाश्वत उपजीविकेच्या उपक्रमांद्वारे वंचित युवक व महिलांच्या सक्षमीकरणासाठी आम्ही कार्यरत आहोत.",
      primaryCta: "आमच्या संस्थेबद्दल",
      primaryLink: "/about",
      secondaryCta: "आमच्यासोबत भागीदारी करा",
      secondaryLink: "/csr",
      features: [
        "डिजिटल साक्षरता",
        "महिला स्वावलंबन",
        "सामाजिक परिवर्तन",
      ],
    },
  ],
};

// Design and images stay independent from language
const slideStyles = [
  {
    badgeIcon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    highlightColor: "text-orange-600",
    badgeBg: "bg-orange-100 text-orange-800 border-orange-200",
  },
  {
    badgeIcon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    highlightColor: "text-green-700",
    badgeBg: "bg-green-100 text-green-800 border-green-200",
  },
  {
    badgeIcon: Users,
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    highlightColor: "text-orange-600",
    badgeBg: "bg-blue-100 text-blue-900 border-blue-200",
  },
];

export default function HeroSliderWhite() {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = translations[language] || translations.en;
  const current = slides[currentSlide];
  const style = slideStyles[currentSlide];

  const IconComponent = style.badgeIcon;

  // AUTO SLIDER
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <section
      aria-label={
        language === "mr"
          ? "सक्षम फाउंडेशन मुख्य स्लायडर"
          : "Saksham Foundation hero slider"
      }
      className="relative overflow-hidden bg-white py-16 lg:py-24"
    >
      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute left-10 top-10 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl" />

      <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">

          {/* LEFT CONTENT */}
          <div className="space-y-6 text-left lg:col-span-7">

            {/* BADGE */}
            <div
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-500 sm:text-sm ${style.badgeBg}`}
            >
              <IconComponent className="h-4 w-4" />
              <span>{current.badge}</span>
            </div>

            {/* HEADING */}
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 transition-all duration-500 sm:text-5xl lg:text-5xl">
              {current.title}
              <br />
              <span className={style.highlightColor}>
                {current.highlight}
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="max-w-xl text-base font-normal leading-relaxed text-slate-600 transition-all duration-500 sm:text-lg">
              {current.description}
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
              {current.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col items-stretch gap-4 pt-4 sm:flex-row sm:items-center">

              <Link
                to={current.primaryLink}
                className="inline-flex items-center justify-center rounded-xl bg-blue-900 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-900/20 transition-all hover:-translate-y-0.5 hover:bg-blue-800"
              >
                {current.primaryCta}
                <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
              </Link>

              <Link
                to={current.secondaryLink}
                className="inline-flex items-center justify-center rounded-xl border-2 border-slate-200 bg-white px-8 py-3.5 text-base font-semibold text-slate-800 transition-all hover:bg-slate-50"
              >
                {current.secondaryCta}
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:col-span-5">

            {/* DECORATIVE BACKING */}
            <div className="absolute inset-0 rotate-2 scale-105 rounded-3xl bg-gradient-to-tr from-orange-200 to-blue-200 opacity-70 blur-sm" />

            <div className="relative h-[380px] w-full overflow-hidden rounded-3xl border-4 border-white bg-white shadow-2xl sm:h-[420px]">
              <img
                key={current.id}
                src={style.image}
                alt={current.badge}
                className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
              />

              {/* IMAGE BADGE */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/90 p-4 shadow-lg backdrop-blur-md">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {language === "mr"
                      ? "सक्षम फाउंडेशनचे ध्येय"
                      : "Saksham Mission"}
                  </p>

                  <p className="text-sm font-bold text-blue-900">
                    {current.badge}
                  </p>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-600 text-white shadow-md">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDER CONTROLS */}
        <div className="mt-12 flex items-center justify-between border-t border-slate-100 pt-8">

          {/* DOTS */}
          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={
                  language === "mr"
                    ? `स्लाइड ${index + 1} पहा`
                    : `Go to slide ${index + 1}`
                }
                aria-current={
                  currentSlide === index ? "true" : undefined
                }
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-10 bg-orange-600"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* NAVIGATION ARROWS */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prevSlide}
              className="rounded-xl bg-slate-100 p-3 text-slate-700 shadow-sm transition-all hover:bg-slate-200"
              aria-label={
                language === "mr"
                  ? "मागील स्लाइड"
                  : "Previous slide"
              }
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="rounded-xl bg-blue-900 p-3 text-white shadow-md transition-all hover:bg-blue-800"
              aria-label={
                language === "mr"
                  ? "पुढील स्लाइड"
                  : "Next slide"
              }
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
