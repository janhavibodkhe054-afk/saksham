
import React, { useEffect, useRef, useState } from "react";

import {
  Menu,
  X,
  Phone,
  HeartHandshake,
  ArrowUpRight,
  Mail,
  ChevronRight,
  BookOpen,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

// ==========================================
// NAVIGATION LINKS
// ==========================================

const navLinks = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "programs", href: "/programs" },
  { key: "impact", href: "/impact" },
  { key: "csr", href: "/csr" },
  { key: "courses", href: "/course" },
  { key: "gallery", href: "/gallery" },
  { key: "contact", href: "/contact" },
];

// ==========================================
// ENGLISH + MARATHI TRANSLATIONS
// ==========================================

const translations = {
  en: {
    tagline: "Empowering Lives Through Skill Development",

    brandName: "SAKSHAM",
    foundation: "FOUNDATION",

    home: "Home",
    about: "About Us",
    programs: "Our Programs",
    impact: "Our Impact",
    csr: "CSR & Partnerships",
    courses: "Courses",
    gallery: "Gallery",
    contact: "Contact",

    donate: "Donate Us",

    menuOpen: "Open menu",
    menuClose: "Close menu",
    navigationLabel: "Main navigation",
    mobileNavigationLabel: "Mobile navigation",

    logoLabel: "Saksham Foundation Home",
    logoAlt: "Saksham Foundation Logo",
  },

  mr: {
    tagline: "कौशल्य विकासातून सक्षम जीवनाची निर्मिती",

    brandName: "सक्षम",
    foundation: "फाउंडेशन",

    home: "मुख्यपृष्ठ",
    about: "आमच्याबद्दल",
    programs: "आमचे प्रशिक्षण",
    impact: "आमचे कार्य",
    csr: "सीएसआर व भागीदारी",
    courses: "कोर्सेस",
    gallery: "फोटो गॅलरी",
    contact: "संपर्क",

    donate: "देणगी द्या",

    menuOpen: "मेनू उघडा",
    menuClose: "मेनू बंद करा",
    navigationLabel: "मुख्य नेव्हिगेशन",
    mobileNavigationLabel: "मोबाईल नेव्हिगेशन",

    logoLabel: "सक्षम फाउंडेशन मुख्यपृष्ठ",
    logoAlt: "सक्षम फाउंडेशनचा लोगो",
  },
};

// ==========================================
// MAIN NAVBAR
// ==========================================

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { language } = useLanguage();
  const location = useLocation();

  const t = translations[language] || translations.en;

  const menuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // ========================================
  // CLOSE MOBILE MENU ON ROUTE CHANGE
  // ========================================

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.search, location.hash]);

  // ========================================
  // ESC KEY + MOBILE FOCUS
  // ========================================

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // ========================================
  // LOCK SCROLL WHILE MENU IS OPEN
  // ========================================

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // ========================================
  // CLOSE MENU IF SCREEN BECOMES DESKTOP
  // ========================================

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(min-width: 1280px)"
    );

    const handleDesktop = (event) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };

    mediaQuery.addEventListener?.(
      "change",
      handleDesktop
    );

    return () => {
      mediaQuery.removeEventListener?.(
        "change",
        handleDesktop
      );
    };
  }, []);

  // ========================================
  // ACTIVE PAGE CHECK
  // ========================================

  const isActive = (href) => {
    const currentPath =
      location.pathname.replace(/\/+$/, "") || "/";

    const targetPath =
      href.replace(/\/+$/, "") || "/";

    return (
      currentPath === targetPath ||
      (targetPath !== "/" &&
        currentPath.startsWith(`${targetPath}/`))
    );
  };

  // ========================================
  // CLOSE MENU
  // ========================================

  const closeMenu = () => {
    setIsOpen(false);
  };

  // ========================================
  // RENDER
  // ========================================

  return (
    <header className="saksham-navbar-enter sticky top-0 z-50 w-full border-b border-slate-100 bg-white shadow-sm">

      {/* ===================================== */}
      {/* TOP CONTACT BAR */}
      {/* ===================================== */}

      <div className="bg-[#061B50] text-white">

        <div className="mx-auto flex min-h-[34px] max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">

          {/* TAGLINE */}
          <p className="saksham-navbar-tagline hidden text-[13px] font-medium tracking-wide text-white/85 md:block lg:text-[13px]">
            {t.tagline}
          </p>

          {/* CONTACT DETAILS */}
          <div className="ml-auto flex items-center gap-3 sm:gap-5">

            {/* EMAIL */}
            <a
              href="mailto:sakshamfoundationsmartskills@gmail.com"
              className="group hidden items-center gap-1.5 text-[13px] text-white/85 transition-colors hover:text-orange-300 lg:inline-flex xl:text-[13px]"
            >
              <Mail className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />

              sakshamfoundationsmartskills@gmail.com
            </a>

            {/* PRIMARY PHONE */}
            <a
              href="tel:+918830223458"
              className="group inline-flex items-center gap-1.5 whitespace-nowrap text-[13px] font-semibold text-white transition-colors hover:text-orange-300 sm:text-[13px]"
            >
              <Phone className="h-3.5 w-3.5 shrink-0 text-orange-400 transition-transform duration-300 group-hover:rotate-12" />

              +91 88302 23458
            </a>

            <span className="hidden h-3 w-px bg-white/30 sm:block" />

          </div>
        </div>
      </div>

      {/* ===================================== */}
      {/* MAIN NAVBAR */}
      {/* ===================================== */}

      <nav
        aria-label={t.navigationLabel}
        className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8"
      >
        <div className="flex h-[70px] items-center justify-between gap-3 lg:h-[78px]">

          {/* ================================= */}
          {/* ANIMATED LOGO */}
          {/* ================================= */}

          <Link
            to="/"
            onClick={closeMenu}
            className="saksham-navbar-logo group flex min-w-0 shrink-0 items-center gap-1.5 sm:gap-2"
            aria-label={t.logoLabel}
          >

            {/* LOGO IMAGE */}
            <div className="relative shrink-0 overflow-hidden">
              <img
                src="/logo.jpeg"
                alt={t.logoAlt}
                className="h-12 w-12 object-contain transition-transform duration-500 group-hover:scale-110 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
              />

              {/* SHINE EFFECT */}
              <span
                aria-hidden="true"
                className="saksham-navbar-logo-shine pointer-events-none absolute inset-0"
              />
            </div>

            {/* ================================= */}
            {/* BRAND NAME - SINGLE LINE */}
            {/* ================================= */}

            <div className="min-w-0 shrink-0">
              <span
                className={`block whitespace-nowrap font-extrabold leading-none text-[#061B50] ${
                  language === "mr"
                    ? "text-[18px] sm:text-[23px] lg:text-[25px] 2xl:text-[27px]"
                    : "text-[16px] tracking-tight sm:text-[21px] lg:text-[23px] 2xl:text-[25px]"
                }`}
              >
                {t.brandName}{" "}
                <span className="text-green-700">
                  {t.foundation}
                </span>
              </span>
            </div>

          </Link>

          {/* ================================= */}
          {/* DESKTOP NAVIGATION */}
          {/* ================================= */}

          <div className="hidden min-w-0 items-center justify-center gap-0.5 xl:flex">

            {navLinks.map((link, index) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.key}
                  to={link.href}
                  aria-current={active ? "page" : undefined}
                  style={{
                    animationDelay: `${120 + index * 55}ms`,
                  }}
                  className={`saksham-desktop-link group relative whitespace-nowrap rounded-lg px-2 py-2.5 text-[12px] font-semibold transition-all duration-300 hover:-translate-y-0.5 2xl:px-3 2xl:text-[14px] ${
                    active
                      ? "bg-orange-50 text-orange-600"
                      : "text-[#061B50] hover:bg-slate-50 hover:text-orange-600"
                  }`}
                >
                  {t[link.key]}

                  {/* ANIMATED UNDERLINE */}
                  <span
                    aria-hidden="true"
                    className={`saksham-nav-underline absolute bottom-0 left-2 right-2 h-[2px] origin-left rounded-full bg-orange-500 transition-transform duration-300 ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />

                </Link>
              );
            })}

          </div>

          {/* ================================= */}
          {/* DESKTOP DONATE BUTTON */}
          {/* ================================= */}

          <Link
            to="/donate"
            aria-current={
              isActive("/donate") ? "page" : undefined
            }
            className="saksham-navbar-donate group relative hidden shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-lg bg-orange-600 px-3 py-3 text-[12px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-[0_12px_28px_rgba(234,88,12,0.25)] xl:inline-flex 2xl:gap-2 2xl:px-4 2xl:text-[14px]"
          >

            {/* MIRROR SHINE */}
            <span
              aria-hidden="true"
              className="saksham-donate-shine pointer-events-none absolute inset-0"
            />

            <HeartHandshake className="relative z-10 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />

            <span className="relative z-10 whitespace-nowrap">
              {t.donate}
            </span>

            <ArrowUpRight className="relative z-10 h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

          </Link>

          {/* ================================= */}
          {/* MOBILE / TABLET TOGGLE */}
          {/* ================================= */}

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label={isOpen ? t.menuClose : t.menuOpen}
            aria-expanded={isOpen}
            aria-controls="saksham-mobile-menu"
            className="group relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white text-[#061B50] transition-all duration-300 hover:border-orange-200 hover:bg-orange-50 xl:hidden"
          >
            <span
              key={isOpen ? "close" : "menu"}
              className="saksham-toggle-icon"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </span>
          </button>

        </div>
      </nav>

      {/* ===================================== */}
      {/* MOBILE + TABLET MENU */}
      {/* ===================================== */}

      {isOpen && (
        <div
          id="saksham-mobile-menu"
          ref={mobileMenuRef}
          role="region"
          aria-label={t.mobileNavigationLabel}
          className="saksham-mobile-panel absolute left-0 right-0 top-full z-50 max-h-[calc(100dvh-104px)] overflow-y-auto overscroll-contain border-t border-slate-100 bg-white shadow-[0_20px_45px_rgba(6,27,80,0.15)] xl:hidden"
        >
          <div className="px-4 pb-6 pt-3 sm:px-6">

            {/* MOBILE NAVIGATION LINKS */}
            <div className="space-y-1">

              {navLinks.map((link, index) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.key}
                    to={link.href}
                    onClick={closeMenu}
                    aria-current={
                      active ? "page" : undefined
                    }
                    style={{
                      animationDelay: `${65 + index * 45}ms`,
                    }}
                    className={`saksham-mobile-link group flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-300 hover:translate-x-1 ${
                      active
                        ? "border-l-[3px] border-orange-500 bg-orange-50 text-orange-600"
                        : "text-[#061B50] hover:bg-slate-50 hover:text-orange-600"
                    }`}
                  >
                    <span className="flex items-center gap-3">

                      {link.key === "courses" && (
                        <BookOpen className="h-4 w-4 text-orange-600" />
                      )}

                      {t[link.key]}
                    </span>

                    {active ? (
                      <span className="h-2 w-2 rounded-full bg-orange-500" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-orange-500" />
                    )}

                  </Link>
                );
              })}

            </div>

            {/* ================================= */}
            {/* MOBILE DONATE + CONTACT */}
            {/* ================================= */}

            <div className="mt-4 border-t border-slate-100 pt-5">

              {/* DONATE */}
              <Link
                to="/donate"
                onClick={closeMenu}
                className="saksham-mobile-donate group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-orange-600 px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-700"
              >
                <span
                  aria-hidden="true"
                  className="saksham-donate-shine pointer-events-none absolute inset-0"
                />

                <HeartHandshake className="relative z-10 h-4 w-4" />

                <span className="relative z-10">
                  {t.donate}
                </span>

                <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              {/* CONTACT NUMBERS */}
              <div className="mt-5 grid gap-3 sm:grid-cols-2">

                <a
                  href="tel:+918830223458"
                  className="saksham-mobile-contact group flex items-center gap-3 rounded-lg bg-[#F3F7FC] px-4 py-3 text-sm font-semibold text-[#061B50] transition-all duration-300 hover:bg-orange-50"
                >
                  <Phone className="h-4 w-4 shrink-0 text-orange-600 transition-transform group-hover:rotate-12" />

                  +91 88302 23458
                </a>

              </div>

            </div>

          </div>
        </div>
      )}

      {/* ===================================== */}
      {/* NAVBAR ANIMATIONS */}
      {/* ===================================== */}

      <style>{`
        /* NAVBAR ENTRANCE */

        @keyframes sakshamNavbarEnter {
          from {
            opacity: 0;
            transform: translateY(-18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .saksham-navbar-enter {
          animation: sakshamNavbarEnter 650ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* LOGO ENTRANCE */

        @keyframes sakshamLogoEnter {
          from {
            opacity: 0;
            transform: translateX(-18px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .saksham-navbar-logo {
          animation: sakshamLogoEnter 750ms
            cubic-bezier(0.22, 1, 0.36, 1) 130ms both;
        }

        /* LOGO SHINE */

        .saksham-navbar-logo-shine {
          background: linear-gradient(
            115deg,
            transparent 20%,
            rgba(255,255,255,0.04) 35%,
            rgba(255,255,255,0.6) 50%,
            rgba(255,255,255,0.04) 65%,
            transparent 80%
          );

          transform: translateX(-160%);
        }

        .saksham-navbar-logo:hover
        .saksham-navbar-logo-shine {
          animation: sakshamLogoShine 950ms ease-out both;
        }

        @keyframes sakshamLogoShine {
          from {
            transform: translateX(-160%);
          }

          to {
            transform: translateX(160%);
          }
        }

        /* DESKTOP NAV LINKS */

        @keyframes sakshamNavLinkEnter {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .saksham-desktop-link {
          animation: sakshamNavLinkEnter 650ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* DONATE SHINE */

        .saksham-donate-shine {
          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(255,255,255,0.08) 38%,
            rgba(255,255,255,0.55) 50%,
            rgba(255,255,255,0.08) 62%,
            transparent 80%
          );

          transform: translateX(-150%);
        }

        .saksham-navbar-donate:hover
        .saksham-donate-shine,
        .saksham-mobile-donate:hover
        .saksham-donate-shine {
          animation: sakshamDonateShine 850ms ease-out both;
        }

        @keyframes sakshamDonateShine {
          from {
            transform: translateX(-150%);
          }

          to {
            transform: translateX(150%);
          }
        }

        /* MOBILE PANEL */

        @keyframes sakshamMobilePanelEnter {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .saksham-mobile-panel {
          animation: sakshamMobilePanelEnter 300ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* MOBILE LINK STAGGER */

        @keyframes sakshamMobileLinkEnter {
          from {
            opacity: 0;
            transform: translateX(-18px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .saksham-mobile-link {
          animation: sakshamMobileLinkEnter 450ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* MOBILE DONATE ENTRANCE */

        .saksham-mobile-donate {
          animation: sakshamMobileLinkEnter 550ms
            cubic-bezier(0.22, 1, 0.36, 1) 420ms both;
        }

        /* TOGGLE ICON */

        @keyframes sakshamToggleIconEnter {
          from {
            opacity: 0;
            transform: rotate(-80deg) scale(0.7);
          }

          to {
            opacity: 1;
            transform: rotate(0) scale(1);
          }
        }

        .saksham-toggle-icon {
          animation: sakshamToggleIconEnter 260ms ease-out both;
        }

        /* FOCUS STATES */

        .saksham-navbar-enter a:focus-visible,
        .saksham-navbar-enter button:focus-visible {
          outline: 2px solid #f97316;
          outline-offset: 3px;
        }

        /* SMALL DESKTOP ADJUSTMENTS */

        @media (min-width: 1280px) and (max-width: 1399px) {
          .saksham-desktop-link {
            letter-spacing: -0.025em;
          }
        }

        /* REDUCED MOTION */

        @media (prefers-reduced-motion: reduce) {
          .saksham-navbar-enter,
          .saksham-navbar-logo,
          .saksham-desktop-link,
          .saksham-mobile-panel,
          .saksham-mobile-link,
          .saksham-mobile-donate,
          .saksham-toggle-icon,
          .saksham-navbar-logo-shine,
          .saksham-donate-shine {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </header>
  );
}
