
import React from "react";
import {
  HeartHandshake,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    sectionLabel: "WHO WE ARE",

    heading1: "Building Capabilities.",
    heading2: "Changing Lives.",

    paragraphs: [
      "Saksham Foundation is a non-profit organization based in Pune, Maharashtra, working towards the socio-economic empowerment of disadvantaged youth, women and underserved communities.",

      "The Foundation focuses on bridging the gap between education and employability through skill development programs, vocational education, healthcare training, digital literacy and career guidance.",

      "By combining community mobilization, structured learning, practical training and employment assistance, we aim to help individuals become confident, skilled and financially independent.",
    ],

    focusPoints: [
      "Skill Development",
      "Women Empowerment",
      "Healthcare Training",
      "Livelihood Opportunities",
    ],

    imageLabel1: "Empowering Communities",
    imageLabel2: "Through Skills & Education",

    mainImageAlt:
      "Youth participating in skill development and collaborative learning",

    secondaryImageAlt:
      "Healthcare education and practical skill development",

    button: "Explore Our Programs",
  },

  mr: {
    sectionLabel: "आमची ओळख",

    heading1: "कौशल्यांचा विकास.",
    heading2: "जीवनात परिवर्तन.",

    paragraphs: [
      "सक्षम फाउंडेशन ही पुणे, महाराष्ट्र येथे कार्यरत असलेली ना-नफा तत्त्वावरील संस्था आहे. वंचित युवक, महिला आणि गरजू समुदायांचे सामाजिक व आर्थिक सक्षमीकरण करण्यासाठी संस्था कार्यरत आहे.",

      "कौशल्य विकास कार्यक्रम, व्यावसायिक शिक्षण, आरोग्यसेवा प्रशिक्षण, डिजिटल साक्षरता आणि करिअर मार्गदर्शन यांच्या माध्यमातून शिक्षण आणि रोजगारक्षमता यांमधील दरी कमी करण्यावर संस्थेचा भर आहे.",

      "समुदाय संपर्क, नियोजनबद्ध शिक्षण, प्रात्यक्षिक प्रशिक्षण आणि रोजगार सहाय्य यांच्या एकत्रित माध्यमातून व्यक्तींमध्ये आत्मविश्वास, कौशल्ये आणि आर्थिक स्वावलंबन विकसित करण्याचा आमचा प्रयत्न आहे.",
    ],

    focusPoints: [
      "कौशल्य विकास",
      "महिला सक्षमीकरण",
      "आरोग्यसेवा प्रशिक्षण",
      "उपजीविकेच्या संधी",
    ],

    imageLabel1: "समुदायांचे सक्षमीकरण",
    imageLabel2: "कौशल्ये आणि शिक्षणाच्या माध्यमातून",

    mainImageAlt:
      "कौशल्य विकास आणि सामूहिक शिक्षणात सहभागी झालेले युवक",

    secondaryImageAlt:
      "आरोग्यसेवा शिक्षण आणि प्रात्यक्षिक कौशल्य विकास",

    button: "आमचे प्रशिक्षण कार्यक्रम पाहा",
  },
};

export default function WhoWeAreSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="who-we-are"
      aria-labelledby="who-we-are-heading"
      className="relative overflow-hidden bg-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {/* LEFT - IMAGE COMPOSITION */}
          <div className="relative lg:col-span-5">

            <div className="relative min-h-[370px] sm:min-h-[450px] lg:min-h-[490px]">

              {/* MAIN IMAGE */}
              <div className="absolute left-0 top-0 h-[80%] w-[82%] overflow-hidden rounded-[28px] bg-slate-100 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=85"
                  alt={t.mainImageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* SECONDARY IMAGE */}
              <div className="absolute bottom-0 right-0 h-[52%] w-[55%] overflow-hidden rounded-[24px] border-[6px] border-white bg-slate-100 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=85"
                  alt={t.secondaryImageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* DECORATIVE DETAIL */}
              <div
                aria-hidden="true"
                className="absolute -left-4 -top-4 -z-10 h-32 w-32 rounded-[30px] bg-orange-100"
              />

              {/* SMALL BRAND LABEL */}
              <div className="absolute bottom-6 left-0 flex items-center gap-3 rounded-r-2xl bg-[#061B50] px-5 py-4 text-white shadow-xl">
                <HeartHandshake className="h-6 w-6 shrink-0 text-orange-400" />

                <div>
                  <p className="text-sm font-bold">
                    {t.imageLabel1}
                  </p>

                  <p className="mt-0.5 text-xs text-blue-100">
                    {t.imageLabel2}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - CONTENT */}
          <div className="lg:col-span-7">

            {/* SECTION LABEL */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-orange-500" />

              <span className="text-xs font-bold uppercase tracking-[0.16em] text-orange-600">
                {t.sectionLabel}
              </span>
            </div>

            {/* SECTION HEADING */}
            <h2
              id="who-we-are-heading"
              className="text-3xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-4xl lg:text-5xl"
            >
              {t.heading1}

              <span className="mt-2 block text-orange-600">
                {t.heading2}
              </span>
            </h2>

            {/* DESCRIPTION PARAGRAPHS */}
            <div className="mt-6 space-y-5">
              {t.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm leading-7 text-slate-700 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* FOCUS POINTS */}
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {t.focusPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />

                  <span className="text-sm font-semibold text-[#061B50]">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9">
              <Link
                to="/programs"
                className="group inline-flex items-center gap-3 rounded-xl bg-orange-600 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-lg"
              >
                {t.button}

                <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
