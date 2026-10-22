
import React from "react";
import {
  Users,
  Handshake,
  GraduationCap,
  ClipboardCheck,
  FileCheck2,
  BriefcaseBusiness,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    heading1: "Experience That",
    heading2: "Strengthens Our Commitment",

    description:
      "Over the past three years, Saksham Foundation has contributed to CSR-supported skill development initiatives in collaboration with Morya Samajik Pratishthan and Sunrise Paramedical Institute under the Bajaj Finserv CSR Initiative. Through community outreach, training coordination and placement assistance, more than 500 youth have been mobilized and enrolled across various programs.",

    imageAlt:
      "Youth learning and participating in skill development training",

    experience: [
      {
        title: "Community Mobilization",
        description:
          "Connecting disadvantaged youth with skill development opportunities.",
      },
      {
        title: "CSR Project Experience",
        description:
          "Three years of experience in CSR-supported training initiatives.",
      },
      {
        title: "Candidate Counselling",
        description:
          "Guiding candidates through enrolment and career opportunities.",
      },
      {
        title: "Training Coordination",
        description:
          "Supporting structured learning and skill development programs.",
      },
      {
        title: "Documentation & Monitoring",
        description:
          "Maintaining training records and monitoring program progress.",
      },
      {
        title: "Placement Assistance",
        description:
          "Supporting employment readiness and career opportunities.",
      },
    ],
  },

  mr: {
    heading1: "आमचा अनुभव",
    heading2: "आमची बांधिलकी अधिक मजबूत करतो",

    description:
      "गेल्या तीन वर्षांमध्ये सक्षम फाउंडेशनने बजाज फिनसर्व्हच्या CSR उपक्रमांतर्गत मोरया सामाजिक प्रतिष्ठान आणि सनराईज पॅरामेडिकल इन्स्टिट्यूट यांच्या सहकार्याने राबविण्यात आलेल्या कौशल्य विकास उपक्रमांमध्ये योगदान दिले आहे. समुदाय संपर्क, प्रशिक्षण समन्वय आणि प्लेसमेंट सहाय्याच्या माध्यमातून विविध प्रशिक्षण कार्यक्रमांसाठी ५०० हून अधिक युवकांपर्यंत पोहोचून त्यांची नोंदणी करण्यात आली आहे.",

    imageAlt:
      "कौशल्य विकास प्रशिक्षणात सहभागी झालेले युवक",

    experience: [
      {
        title: "समुदाय संपर्क व जनजागृती",
        description:
          "वंचित युवकांना कौशल्य विकासाच्या संधींशी जोडण्यासाठी समुदायस्तरावर संपर्क साधणे.",
      },
      {
        title: "CSR प्रकल्पांचा अनुभव",
        description:
          "CSR सहाय्यित प्रशिक्षण उपक्रमांमध्ये तीन वर्षांचा अनुभव.",
      },
      {
        title: "उमेदवारांचे समुपदेशन",
        description:
          "उमेदवारांना प्रवेश प्रक्रिया आणि करिअरच्या संधींबाबत मार्गदर्शन करणे.",
      },
      {
        title: "प्रशिक्षण समन्वय",
        description:
          "नियोजनबद्ध शिक्षण आणि कौशल्य विकास कार्यक्रमांच्या अंमलबजावणीस सहाय्य करणे.",
      },
      {
        title: "दस्तऐवजीकरण व देखरेख",
        description:
          "प्रशिक्षणाच्या नोंदी ठेवणे आणि कार्यक्रमाच्या प्रगतीवर देखरेख करणे.",
      },
      {
        title: "प्लेसमेंट सहाय्य",
        description:
          "उमेदवारांना रोजगारासाठी तयार करण्यास आणि करिअरच्या संधी शोधण्यास सहाय्य करणे.",
      },
    ],
  },
};

// ICONS AND COLORS REMAIN UNCHANGED
const experienceStyles = [
  {
    icon: Users,
    bg: "bg-[#061B50]",
  },
  {
    icon: Handshake,
    bg: "bg-[#0B7B65]",
  },
  {
    icon: GraduationCap,
    bg: "bg-[#0B7B65]",
  },
  {
    icon: ClipboardCheck,
    bg: "bg-[#061B50]",
  },
  {
    icon: FileCheck2,
    bg: "bg-[#061B50]",
  },
  {
    icon: BriefcaseBusiness,
    bg: "bg-[#0B7B65]",
  },
];

export default function OurJourneyExperienceSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="our-journey"
      aria-labelledby="journey-heading"
      className="relative overflow-hidden bg-white py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">

          {/* LEFT IMAGE */}
          <div className="lg:col-span-4">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">

              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=85"
                alt={t.imageAlt}
                loading="lazy"
                decoding="async"
                className="h-[350px] w-full object-cover object-center sm:h-[420px] lg:h-[500px]"
              />

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-8">

            {/* HEADING */}
            <h2
              id="journey-heading"
              className="text-3xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-4xl lg:text-5xl"
            >
              {t.heading1}

              <span className="block text-orange-600">
                {t.heading2}
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-700 sm:text-base">
              {t.description}
            </p>

            {/* EXPERIENCE GRID */}
            <div className="mt-9 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">

              {experienceStyles.map((item, index) => {
                const Icon = item.icon;
                const content = t.experience[index];

                return (
                  <div
                    key={index}
                    className="group flex items-start gap-4"
                  >
                    {/* CIRCULAR ICON */}
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${item.bg} text-white transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon
                        className="h-5 w-5"
                        strokeWidth={2}
                      />
                    </div>

                    {/* TEXT */}
                    <div>
                      <h3 className="text-base font-bold text-[#061B50] sm:text-lg">
                        {content.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {content.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
