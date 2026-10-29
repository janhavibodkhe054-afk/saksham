
import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

// ==========================================
// SOCIAL ICONS
// ==========================================

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.36-1.53 2.8-1.53 3 0 3.57 1.97 3.57 4.53v5.25Z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.55 3.58 12 3.58 12 3.58s-7.55 0-9.4.5A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.85.5 9.4.5 9.4.5s7.55 0 9.4-.5a3 3 0 0 0 2.1-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.23 3.6-6.23 3.6Z" />
  </svg>
);

// ==========================================
// ENGLISH + MARATHI TRANSLATIONS
// ==========================================

const translations = {
  en: {
    partnershipTitle:
      "Together, We Can Create Opportunities.",
    partnershipDescription:
      "Partner with us to empower youth and women through skills.",
    partnershipButton: "Partner With Us",

    brandHomeLabel: "Saksham Foundation Home",
    brandName1: "SAKSHAM",
    brandName2: "FOUNDATION",
    logoAlt: "Saksham Foundation Logo",

    aboutDescription:
      "Saksham Foundation is dedicated to empowering youth and women through skill development, vocational education, healthcare training and sustainable livelihood opportunities.",

    tagline:
      "Empowering Lives Through Skill Development.",

    quickLinksHeading: "Quick Links",
    quickLinks: [
      "Home",
      "About Us",
      "Our Programs",
      "Courses",
      "Our Impact",
      "CSR & Partnerships",
      "Gallery",
      "Donate",
      "Contact Us",
    ],

    programsHeading: "Our Training Areas",
    programs: [
      "General Duty Assistant (GDA)",
      "Healthcare & Paramedical",
      "Computer & Digital Skills",
      "Technical & Vocational Skills",
    ],

    contactHeading: "Get in Touch",

    addressLines: [
      "Chinchwad Station,",
      "Pune – 411019,",
      "Maharashtra, India.",
    ],

    socialComingSoon: "link coming soon",
    socialUnavailable: "link unavailable",

    copyright: "All Rights Reserved.",
    developedBy: "Designed & Developed by",
  },

  mr: {
    partnershipTitle:
      "एकत्र येऊन नव्या संधी निर्माण करूया.",
    partnershipDescription:
      "कौशल्य विकासाच्या माध्यमातून युवक आणि महिलांच्या सक्षमीकरणासाठी आमच्यासोबत भागीदारी करा.",
    partnershipButton: "आमच्यासोबत भागीदारी करा",

    brandHomeLabel: "सक्षम फाउंडेशन मुख्यपृष्ठ",
    brandName1: "SAKSHAM",
    brandName2: "FOUNDATION",
    logoAlt: "सक्षम फाउंडेशनचा लोगो",

    aboutDescription:
      "सक्षम फाउंडेशन कौशल्य विकास, व्यावसायिक शिक्षण, आरोग्यसेवा प्रशिक्षण आणि शाश्वत उपजीविकेच्या संधींच्या माध्यमातून युवक व महिलांचे सक्षमीकरण करण्यासाठी कार्यरत आहे.",

    tagline:
      "कौशल्य विकासातून जीवनात सकारात्मक परिवर्तन.",

    quickLinksHeading: "महत्त्वाच्या लिंक्स",
    quickLinks: [
      "मुख्यपृष्ठ",
      "आमच्याविषयी",
      "आमचे प्रशिक्षण कार्यक्रम",
      "कोर्सेस",
      "आमचा प्रभाव",
      "CSR आणि भागीदारी",
      "फोटो गॅलरी",
      "देणगी द्या",
      "संपर्क साधा",
    ],

    programsHeading: "आमची प्रशिक्षण क्षेत्रे",
    programs: [
      "जनरल ड्युटी असिस्टंट (GDA)",
      "आरोग्यसेवा व पॅरामेडिकल",
      "संगणक व डिजिटल कौशल्ये",
      "तांत्रिक व व्यावसायिक कौशल्ये",
    ],

    contactHeading: "आमच्याशी संपर्क साधा",

    addressLines: [
      "चिंचवड स्टेशन,",
      "पुणे – ४११०१९,",
      "महाराष्ट्र, भारत.",
    ],

    socialComingSoon: "लिंक लवकरच उपलब्ध होईल",
    socialUnavailable: "लिंक उपलब्ध नाही",

    copyright: "सर्व हक्क राखीव.",
    developedBy: "डिझाइन आणि डेव्हलपमेंट",
  },
};

// ==========================================
// ROUTES
// ==========================================

const quickLinkRoutes = [
  "/",
  "/about",
  "/programs",
  "/course",
  "/impact",
  "/csr",
  "/gallery",
  "/donate",
  "/contact",
];

const programRoutes = [
  "/programs#featured-gda",
  "/courses#course-categories",
  "/courses#course-categories",
  "/courses#course-categories",
];

// ==========================================
// SOCIAL MEDIA LINKS
// ==========================================

const socialLinks = [
  {
    name: "Facebook",
    icon: FacebookIcon,
    href: "",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    href: "",
  },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    href: "",
  },
  {
    name: "YouTube",
    icon: YoutubeIcon,
    href: "",
  },
];

// ==========================================
// FORMAT YEAR
// ==========================================

const formatYear = (year, language) => {
  if (language !== "mr") {
    return String(year);
  }

  return String(year).replace(
    /[0-9]/g,
    (digit) => "०१२३४५६७८९"[Number(digit)]
  );
};

// ==========================================
// FOOTER COMPONENT
// ==========================================

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#061B50] text-white">

      {/* BACKGROUND EFFECTS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-36 -top-36 h-96 w-96 rounded-full bg-blue-400/10 blur-[100px]" />
        <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-green-500/10 blur-[100px]" />
      </div>

      {/* ===================================== */}
      {/* TOP PARTNERSHIP CTA */}
      {/* ===================================== */}

      <div className="relative border-b border-white/10 bg-white/[0.045]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">

          <div className="flex items-start gap-3 sm:items-center sm:gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400 sm:h-12 sm:w-12">
              <HeartHandshake className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>

            <div>
              <h3 className="text-base font-bold leading-snug text-white sm:text-lg">
                {t.partnershipTitle}
              </h3>

              <p className="mt-1 text-xs leading-6 text-blue-100/80 sm:text-sm">
                {t.partnershipDescription}
              </p>
            </div>
          </div>

          <Link
            to="/contact#csr-enquiry"
            className="group inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-600"
          >
            {t.partnershipButton}

            <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>

      {/* ===================================== */}
      {/* MAIN FOOTER */}
      {/* ===================================== */}

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-12 sm:px-8 lg:px-10 lg:pt-14">

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* ================================= */}
          {/* COLUMN 1 — FOUNDATION BRAND */}
          {/* ================================= */}

          <div className="sm:col-span-2 lg:col-span-4">

            <Link
              to="/"
              className="inline-flex max-w-full items-center gap-3"
              aria-label={t.brandHomeLabel}
            >
              <img
                src="/logo.jpeg"
                alt={t.logoAlt}
                loading="lazy"
                className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16"
              />

              <div>
                <span className="block text-xl font-extrabold leading-none tracking-tight text-white sm:text-2xl">
                  {t.brandName1}
                </span>

                <span className="mt-1 block text-xs font-bold uppercase tracking-[0.15em] text-green-400">
                  {t.brandName2}
                </span>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-blue-100/80">
              {t.aboutDescription}
            </p>

            <p className="mt-4 text-sm font-semibold text-orange-300">
              {t.tagline}
            </p>

            {/* SOCIAL MEDIA */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return social.href ? (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] text-white transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:bg-orange-500"
                  >
                    <Icon />
                  </a>
                ) : (
                  <span
                    key={social.name}
                    title={`${social.name} ${t.socialComingSoon}`}
                    aria-label={`${social.name} ${t.socialUnavailable}`}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/60"
                  >
                    <Icon />
                  </span>
                );
              })}
            </div>
          </div>

          {/* ================================= */}
          {/* COLUMN 2 — QUICK LINKS */}
          {/* ================================= */}

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-base font-bold text-white">
              {t.quickLinksHeading}
            </h3>

            <ul className="space-y-3">
              {t.quickLinks.map((name, index) => (
                <li key={quickLinkRoutes[index]}>
                  <Link
                    to={quickLinkRoutes[index]}
                    className="group inline-flex items-center gap-2 text-sm text-blue-100/75 transition-colors hover:text-orange-300"
                  >
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-orange-400 transition-transform group-hover:translate-x-1" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================================= */}
          {/* COLUMN 3 — TRAINING AREAS */}
          {/* ================================= */}

          <div className="lg:col-span-3">
            <h3 className="mb-5 text-base font-bold text-white">
              {t.programsHeading}
            </h3>

            <ul className="space-y-3">
              {t.programs.map((program, index) => (
                <li key={index}>
                  <Link
                    to={programRoutes[index]}
                    className="group inline-flex items-start gap-2 text-sm leading-relaxed text-blue-100/75 transition-colors hover:text-orange-300"
                  >
                    <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================================= */}
          {/* COLUMN 4 — CONTACT */}
          {/* ================================= */}

          <div className="lg:col-span-3">
            <h3 className="mb-5 text-base font-bold text-white">
              {t.contactHeading}
            </h3>

            <div className="space-y-5">

              {/* ADDRESS */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />

                <p className="text-sm leading-6 text-blue-100/80">
                  {t.addressLines.map((line, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && <br />}
                      {line}
                    </React.Fragment>
                  ))}
                </p>
              </div>

              {/* PHONE NUMBERS */}
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />

                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+918830223458"
                    className="text-sm text-blue-100/80 transition-colors hover:text-orange-300"
                  >
                    +91 88302 23458
                  </a>

                  
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />

                <a
                  href="mailto:sakshamfoundationsmartskills@gmail.com"
                  className="min-w-0 break-all text-sm leading-6 text-blue-100/80 transition-colors hover:text-orange-300"
                >
                  sakshamfoundationsmartskills@gmail.com
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ===================================== */}
      {/* COPYRIGHT BAR */}
      {/* ===================================== */}

      <div className="relative border-t border-white/10 bg-[#04143C]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-center sm:px-8 lg:flex-row lg:gap-6 lg:px-10 lg:py-5 lg:text-left">

          <p className="text-xs leading-6 text-blue-100/70">
            © {formatYear(currentYear, language)}{" "}
            {language === "mr"
              ? "सक्षम फाउंडेशन."
              : "Saksham Foundation."}{" "}
            {t.copyright}
          </p>

          <p className="text-xs leading-6 text-blue-100/70">
            {t.developedBy}{" "}

            <a
              href="https://hashgridtechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-orange-400 transition-colors hover:text-orange-300"
            >
              HashGrid Technologies Pvt. Ltd.
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}
