
import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  Phone,
  HeartHandshake,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const navLinks = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "programs", href: "/programs" },
  { key: "impact", href: "/impact" },
  { key: "csr", href: "/csr" },
  { key: "gallery", href: "/gallery" },
  { key: "contact", href: "/contact" },
];

const translations = {
  en: {
    tagline: "Empowering Lives Through Skill Development",
    home: "Home",
    about: "About Us",
    programs: "Our Programs",
    impact: "Our Impact",
    csr: "CSR & Partnerships",
    gallery: "Gallery",
    contact: "Contact",
    support: "Support Us",
    foundation: "FOUNDATION",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },

  mr: {
    tagline: "कौशल्य विकासातून सक्षम जीवनाची निर्मिती",
    home: "मुख्यपृष्ठ",
    about: "आमच्याबद्दल",
    programs: "आमचे प्रशिक्षण",
    impact: "आमचे कार्य",
    csr: "सीएसआर व भागीदारी",
    gallery: "फोटो गॅलरी",
    contact: "संपर्क",
    support: "आम्हाला सहकार्य करा",
    foundation: "फाउंडेशन",
    menuOpen: "मेनू उघडा",
    menuClose: "मेनू बंद करा",
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { language } = useLanguage();
  const location = useLocation();

  const t = translations[language] || translations.en;

  // Close mobile menu when page changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const isActive = (href) => {
    return (
      location.pathname.replace(/\/+$/, "") ===
      href.replace(/\/+$/, "")
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white shadow-sm">

      {/* TOP CONTACT BAR */}
      <div className="bg-[#061B50] text-white">
        <div className="mx-auto flex min-h-[34px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">

          <p className="hidden text-[12px] font-medium tracking-wide text-white/85 sm:block">
            {t.tagline}
          </p>

          <div className="ml-auto flex items-center gap-3 sm:gap-5">
            <a
              href="mailto:sakshamfoundationsmartskills@gmail.com"
              className="hidden items-center gap-1.5 text-[12px] text-white/85 transition-colors hover:text-orange-300 lg:inline-flex"
            >
              <Mail className="h-3.5 w-3.5" />
              sakshamfoundationsmartskills@gmail.com
            </a>

            <a
              href="tel:+918830223458"
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-white transition-colors hover:text-orange-300"
            >
              <Phone className="h-3.5 w-3.5 text-orange-400" />
              +91 88302 23458
            </a>

            <span className="hidden h-3 w-px bg-white/30 sm:block" />

            <a
              href="tel:+918830186623"
              className="hidden items-center gap-1.5 text-[12px] font-semibold text-white transition-colors hover:text-orange-300 sm:inline-flex"
            >
              +91 88301 86623
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex h-[70px] items-center justify-between gap-4 lg:h-[78px]">

          {/* LOGO */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3"
            aria-label="Saksham Foundation Home"
          >
            <img
              src="/logo.jpeg"
              alt="Saksham Foundation Logo"
              className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16"
            />

            <div className="min-w-0">
              <span className="block text-[19px] font-extrabold leading-none tracking-tight text-[#061B50] sm:text-[22px]">
                SAKSHAM
              </span>

              <span className="mt-1 block text-[11px] font-bold uppercase tracking-[0.15em] text-green-700 sm:text-xs">
                {t.foundation}
              </span>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden items-center gap-0.5 xl:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.key}
                  to={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative whitespace-nowrap rounded-lg px-3 py-2.5 text-[14px] font-semibold transition-all duration-200 ${
                    active
                      ? "bg-orange-50 text-orange-600"
                      : "text-[#061B50] hover:bg-slate-50 hover:text-orange-600"
                  }`}
                >
                  {t[link.key]}

                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-orange-500" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* DESKTOP CTA */}
          <Link
            to="/contact#csr-enquiry"
            className="group hidden shrink-0 items-center justify-center gap-2 rounded-lg bg-orange-600 px-4 py-3 text-[13px] font-bold text-white transition-all duration-300 hover:bg-orange-700 hover:shadow-md xl:inline-flex"
          >
            <HeartHandshake className="h-4 w-4" />
            {t.support}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* MOBILE / TABLET TOGGLE */}
          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label={isOpen ? t.menuClose : t.menuOpen}
            aria-expanded={isOpen}
            aria-controls="saksham-mobile-menu"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#061B50] transition-colors hover:border-orange-200 hover:bg-orange-50 xl:hidden"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE / TABLET MENU */}
      {isOpen && (
        <div
          id="saksham-mobile-menu"
          className="border-t border-slate-100 bg-white shadow-xl xl:hidden"
        >
          <div className="max-h-[calc(100dvh-110px)] overflow-y-auto px-4 pb-6 pt-3 sm:px-6">

            {/* NAV LINKS */}
            <div className="space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.key}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                      active
                        ? "border-l-[3px] border-orange-500 bg-orange-50 text-orange-600"
                        : "text-[#061B50] hover:bg-slate-50 hover:text-orange-600"
                    }`}
                  >
                    {t[link.key]}

                    {active && (
                      <span className="h-2 w-2 rounded-full bg-orange-500" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* SUPPORT BUTTON */}
            <div className="mt-4 border-t border-slate-100 pt-5">
              <Link
                to="/contact#csr-enquiry"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-600 px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-orange-700"
              >
                <HeartHandshake className="h-4 w-4" />
                {t.support}
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              {/* CONTACT NUMBERS */}
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <a
                  href="tel:+918830223458"
                  className="flex items-center gap-3 rounded-lg bg-[#F3F7FC] px-4 py-3 text-sm font-semibold text-[#061B50]"
                >
                  <Phone className="h-4 w-4 text-orange-600" />
                  +91 88302 23458
                </a>

                <a
                  href="tel:+918830186623"
                  className="flex items-center gap-3 rounded-lg bg-[#F3F7FC] px-4 py-3 text-sm font-semibold text-[#061B50]"
                >
                  <Phone className="h-4 w-4 text-orange-600" />
                  +91 88301 86623
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
