
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";

/* SOCIAL ICONS */

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

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Programs", href: "/programs" },
  { name: "Our Impact", href: "/impact" },
  { name: "CSR & Partnerships", href: "/csr" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

const programs = [
  "General Duty Assistant (GDA)",
  "Healthcare & Paramedical",
  "Computer & Digital Skills",
  "Technical & Vocational Skills",
];

// Add official social media URLs when available.
const socialLinks = [
  { name: "Facebook", icon: FacebookIcon, href: "" },
  { name: "Instagram", icon: InstagramIcon, href: "" },
  { name: "LinkedIn", icon: LinkedinIcon, href: "" },
  { name: "YouTube", icon: YoutubeIcon, href: "" },
];

export default function Footer() {
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

      {/* TOP PARTNERSHIP CTA */}
      <div className="relative border-b border-white/10 bg-white/[0.045]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">

          <div className="flex items-start gap-3 sm:items-center sm:gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400 sm:h-12 sm:w-12">
              <HeartHandshake className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>

            <div>
              <h3 className="text-base font-bold leading-snug text-white sm:text-lg">
                Together, We Can Create Opportunities.
              </h3>

              <p className="mt-1 text-xs leading-6 text-blue-100/80 sm:text-sm">
                Partner with us to empower youth and women through skills.
              </p>
            </div>
          </div>

          <a
            href="/contact#csr-enquiry"
            className="group inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-600"
          >
            Partner With Us
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-12 sm:px-8 lg:px-10 lg:pt-14">

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* COLUMN 1 — FOUNDATION BRAND */}
          <div className="sm:col-span-2 lg:col-span-4">

            <a
              href="/"
              className="inline-flex max-w-full items-center gap-3"
              aria-label="Saksham Foundation Home"
            >
              {/* ACTUAL LOGO */}
              <img
                src="/logo.jpeg"
                alt="Saksham Foundation Logo"
                loading="lazy"
                className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16"
              />

              <div>
                <span className="block text-xl font-extrabold leading-none tracking-tight text-white sm:text-2xl">
                  SAKSHAM
                </span>

                <span className="mt-1 block text-xs font-bold uppercase tracking-[0.15em] text-green-400">
                  FOUNDATION
                </span>
              </div>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-blue-100/80">
              Saksham Foundation is dedicated to empowering youth
              and women through skill development, vocational
              education, healthcare training and sustainable
              livelihood opportunities.
            </p>

            <p className="mt-4 text-sm font-semibold text-orange-300">
              Empowering Lives Through Skill Development.
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
                    title={`${social.name} link coming soon`}
                    aria-label={`${social.name} link unavailable`}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/60"
                  >
                    <Icon />
                  </span>
                );
              })}
            </div>
          </div>

          {/* COLUMN 2 — QUICK LINKS */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-base font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-blue-100/75 transition-colors hover:text-orange-300"
                  >
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-orange-400 transition-transform group-hover:translate-x-1" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 — PROGRAMS */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-base font-bold text-white">
              Our Training Areas
            </h3>

            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program}>
                  <a
                    href="/programs"
                    className="group inline-flex items-start gap-2 text-sm leading-relaxed text-blue-100/75 transition-colors hover:text-orange-300"
                  >
                    <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4 — CONTACT */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-base font-bold text-white">
              Get in Touch
            </h3>

            <div className="space-y-5">

              {/* ADDRESS */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />

                <p className="text-sm leading-6 text-blue-100/80">
                  Chinchwad Station,
                  <br />
                  Pune – 411019,
                  <br />
                  Maharashtra, India.
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

                  <a
                    href="tel:+918830186623"
                    className="text-sm text-blue-100/80 transition-colors hover:text-orange-300"
                  >
                    +91 88301 86623
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

      {/* BOTTOM COPYRIGHT BAR */}
      <div className="relative border-t border-white/10 bg-[#04143C]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-center sm:px-8 lg:flex-row lg:gap-6 lg:px-10 lg:py-5 lg:text-left">

          <p className="text-xs leading-6 text-blue-100/70">
            © {currentYear} Saksham Foundation. All Rights Reserved.
          </p>

          

          {/* HASHGRID CREDIT */}
          <p className="text-xs leading-6 text-blue-100/70">
            Designed &amp; Developed by{" "}
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
