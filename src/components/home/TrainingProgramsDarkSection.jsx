
import React from "react";
import {
  HeartPulse,
  Stethoscope,
  Laptop,
  Wrench,
  ArrowUpRight,
  ArrowRight,
  GraduationCap,
  Hospital,
  BriefcaseBusiness,
  Info,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    sectionLabel: "OUR PROGRAMS",

    heading1: "Learn Today.",
    heading2: "Lead Tomorrow.",

    description:
      "Saksham Foundation supports skill development across healthcare, technical, digital and vocational sectors to help participants develop employable skills.",

    featuredLabel: "Featured • Free Training",
    featuredTitle: "General Duty Assistant (GDA)",

    featuredDescription:
      "Free healthcare training with placement assistance for eligible candidates aged 18–35.",

    classroomDays: "45 Days",
    classroomLabel: "Classroom",

    hospitalDays: "45 Days",
    hospitalLabel: "Hospital OJT",

    placementValue: "100%",
    placementLabel: "Placement Support",

    exploreCourse: "Explore Course",
    exploreDetails: "Explore Details",

    programs: [
      {
        title: "Healthcare & Paramedical Programs",
        description:
          "OT Technician, Dialysis Technician, Nursing Care Assistant and ICU Technician.",
        label: "Past CSR Experience",
      },
      {
        title: "Computer & Digital Skills",
        description:
          "Computer literacy, Tally, Financial Accounting and GST-related skills.",
        label: "Digital Literacy",
      },
      {
        title: "Technical & Vocational Skills",
        description:
          "CNC/VMC Machine Operator and Fire & Safety training experience.",
        label: "Vocational Training",
      },
    ],

    notice:
      "GDA is the currently listed training program. Other areas reflect previous CSR training experience. Contact the team to confirm current admissions.",
  },

  mr: {
    sectionLabel: "आमचे प्रशिक्षण कार्यक्रम",

    heading1: "आज शिका.",
    heading2: "उद्याचे भविष्य घडवा.",

    description:
      "सक्षम फाउंडेशन आरोग्यसेवा, तांत्रिक, डिजिटल आणि व्यावसायिक क्षेत्रांमध्ये कौशल्य विकासाला प्रोत्साहन देते. सहभागी उमेदवारांना रोजगाराभिमुख कौशल्ये विकसित करण्यासाठी सहाय्य करणे हा आमचा उद्देश आहे.",

    featuredLabel: "विशेष • मोफत प्रशिक्षण",
    featuredTitle: "जनरल ड्युटी असिस्टंट (GDA)",

    featuredDescription:
      "१८ ते ३५ वयोगटातील पात्र उमेदवारांसाठी मोफत आरोग्यसेवा प्रशिक्षण आणि रोजगारासाठी सहाय्य.",

    classroomDays: "४५ दिवस",
    classroomLabel: "वर्गातील प्रशिक्षण",

    hospitalDays: "४५ दिवस",
    hospitalLabel: "रुग्णालयातील OJT",

    placementValue: "१००%",
    placementLabel: "प्लेसमेंट सहाय्य",

    exploreCourse: "प्रशिक्षणाची माहिती पाहा",
    exploreDetails: "अधिक माहिती पाहा",

    programs: [
      {
        title: "आरोग्यसेवा व पॅरामेडिकल प्रशिक्षण",
        description:
          "ओटी टेक्निशियन, डायलिसिस टेक्निशियन, नर्सिंग केअर असिस्टंट आणि आयसीयू टेक्निशियन.",
        label: "पूर्वीच्या CSR प्रकल्पांचा अनुभव",
      },
      {
        title: "संगणक व डिजिटल कौशल्ये",
        description:
          "संगणक साक्षरता, टॅली, आर्थिक लेखांकन आणि जीएसटी संबंधित कौशल्ये.",
        label: "डिजिटल साक्षरता",
      },
      {
        title: "तांत्रिक व व्यावसायिक कौशल्ये",
        description:
          "CNC/VMC मशीन ऑपरेटर आणि अग्निसुरक्षा प्रशिक्षण क्षेत्रातील अनुभव.",
        label: "व्यावसायिक प्रशिक्षण",
      },
    ],

    notice:
      "सध्या GDA प्रशिक्षण कार्यक्रमाची माहिती उपलब्ध आहे. इतर प्रशिक्षण क्षेत्रे ही पूर्वीच्या CSR प्रकल्पांतील अनुभवावर आधारित आहेत. सध्याच्या प्रवेशाबाबत खात्री करण्यासाठी संस्थेशी संपर्क साधा.",
  },
};

// DESIGN CONFIGURATION
// Icons, colors and card design remain unchanged.
const programStyles = [
  {
    id: "02",
    icon: Stethoscope,
    color: "#60A5FA",
    background: "bg-blue-500/10",
    link: "/programs#healthcare",
  },
  {
    id: "03",
    icon: Laptop,
    color: "#22D3EE",
    background: "bg-cyan-500/10",
    link: "/programs#digital",
  },
  {
    id: "04",
    icon: Wrench,
    color: "#4ADE80",
    background: "bg-green-500/10",
    link: "/programs#technical",
  },
];

export default function TrainingProgramsDarkSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="training-programs"
      className="relative overflow-hidden bg-[#07152B] py-12 text-white lg:py-16"
    >
      {/* SUBTLE BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADING */}
        <div className="mb-8 text-center">
          <span className="mb-3 inline-block rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-orange-400">
            {t.sectionLabel}
          </span>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {t.heading1}{" "}
            <span className="text-orange-400">
              {t.heading2}
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {t.description}
          </p>
        </div>

        {/* FEATURED GDA STRIP */}
        <div
          id="gda-course"
          className="group relative mb-4 scroll-mt-28 overflow-hidden rounded-2xl border border-orange-400/30 bg-gradient-to-r from-[#17365A] via-[#102B4B] to-[#0B213B] p-5 sm:p-6"
        >
          {/* RIGHT ORANGE BORDER */}
          <div className="absolute right-0 top-0 h-full w-1 bg-orange-500" />

          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            {/* MAIN INFORMATION */}
            <div className="flex min-w-0 items-start gap-4 lg:max-w-[40%]">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg shadow-orange-500/15">
                <HeartPulse className="h-6 w-6" />
              </div>

              <div className="min-w-0">
                <span className="mb-1 inline-block text-xs font-bold uppercase tracking-wide text-orange-400">
                  {t.featuredLabel}
                </span>

                <h3 className="text-xl font-bold text-white">
                  {t.featuredTitle}
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {t.featuredDescription}
                </p>
              </div>
            </div>

            {/* PROGRAM STATS */}
            <div className="grid grid-cols-3 gap-3 border-y border-white/10 py-4 lg:border-x lg:border-y-0 lg:px-5 lg:py-0">

              {/* CLASSROOM */}
              <div className="text-center">
                <GraduationCap className="mx-auto mb-1 h-5 w-5 text-orange-400" />

                <p className="text-sm font-bold text-white">
                  {t.classroomDays}
                </p>

                <p className="text-[10px] leading-relaxed text-slate-400">
                  {t.classroomLabel}
                </p>
              </div>

              {/* HOSPITAL OJT */}
              <div className="text-center">
                <Hospital className="mx-auto mb-1 h-5 w-5 text-blue-400" />

                <p className="text-sm font-bold text-white">
                  {t.hospitalDays}
                </p>

                <p className="text-[10px] leading-relaxed text-slate-400">
                  {t.hospitalLabel}
                </p>
              </div>

              {/* PLACEMENT SUPPORT */}
              <div className="text-center">
                <BriefcaseBusiness className="mx-auto mb-1 h-5 w-5 text-green-400" />

                <p className="text-sm font-bold text-white">
                  {t.placementValue}
                </p>

                <p className="text-[10px] leading-relaxed text-slate-400">
                  {t.placementLabel}
                </p>
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/programs#featured-gda"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-600"
            >
              {t.exploreCourse}
              <ArrowUpRight className="h-4 w-4 shrink-0" />
            </Link>
          </div>
        </div>

        {/* OTHER TRAINING AREAS */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

          {programStyles.map((prog, index) => {
            const Icon = prog.icon;
            const content = t.programs[index];

            return (
              <Link
                to={prog.link}
                key={prog.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.09]"
              >
                {/* TOP COLOR LINE */}
                <div
                  className="absolute left-0 top-0 h-[3px] w-16 transition-all duration-500 group-hover:w-full"
                  style={{
                    backgroundColor: prog.color,
                  }}
                />

                {/* ICON AND NUMBER */}
                <div className="mb-3 flex items-center justify-between">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${prog.background}`}
                  >
                    <Icon
                      className="h-5 w-5"
                      style={{ color: prog.color }}
                    />
                  </div>

                  <span className="text-xs font-semibold text-white/25">
                    {prog.id}
                  </span>
                </div>

                {/* PROGRAM LABEL */}
                <p
                  className="mb-1.5 text-xs font-semibold"
                  style={{
                    color: prog.color,
                  }}
                >
                  {content.label}
                </p>

                {/* PROGRAM TITLE */}
                <h3 className="text-base font-bold leading-snug text-white">
                  {content.title}
                </h3>

                {/* PROGRAM DESCRIPTION */}
                <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {content.description}
                </p>

                {/* EXPLORE LINK */}
                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                  <span className="text-xs font-bold text-white">
                    {t.exploreDetails}
                  </span>

                  <ArrowRight className="h-4 w-4 text-orange-400 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* NOTICE */}
        <div className="mt-5 flex items-start gap-2.5 text-xs leading-relaxed text-slate-400">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />

          <p>{t.notice}</p>
        </div>
      </div>
    </section>
  );
}
