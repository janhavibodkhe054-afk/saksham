
import React, { useEffect, useRef, useState } from "react";

import {
  Building2,
  Handshake,
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  ShieldCheck,
  MapPin,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ==========================================
// WHATSAPP CONFIGURATION
// ==========================================

const WHATSAPP_NUMBER = "918830223458";

// ==========================================
// ENGLISH + MARATHI TRANSLATIONS
// ==========================================

const translations = {
  en: {
    sectionLabel: "CSR & PARTNERSHIPS",
    heading1: "Explore a",
    heading2: "Partnership With Us",

    description:
      "Connect with Saksham Foundation to explore meaningful collaborations in skill development, education, community empowerment and sustainable livelihoods.",

    sidebarHeading1: "Let's Create",
    sidebarHeading2: "Lasting Impact",

    sidebarDescription:
      "We welcome organizations, CSR teams and institutions interested in working together to expand access to practical skills and livelihood opportunities.",

    partnershipFocus: [
      "CSR-Supported Skill Development",
      "Youth & Women Empowerment",
      "Healthcare & Vocational Training",
      "Employment-Focused Initiatives",
    ],

    directContact: "DIRECT CONTACT",

    formTitle: "Partnership Enquiry Form",
    formDescription:
      "Share your organization's details and project requirements with us.",

    organization: "Organization Name",
    organizationPlaceholder: "Enter organization name",

    contactPerson: "Contact Person",
    contactPersonPlaceholder: "Enter full name",

    designation: "Designation",
    designationPlaceholder: "e.g. CSR Manager",

    email: "Email Address",
    emailPlaceholder: "name@organization.com",

    mobile: "Mobile Number",
    mobilePlaceholder: "Enter contact number",

    partnershipType: "Partnership Type",
    partnershipPlaceholder: "Select partnership type",

    partnershipTypes: [
      "CSR Project Partnership",
      "Skill Development Collaboration",
      "Healthcare Training Partnership",
      "Women Empowerment Initiative",
      "Youth Employment & Livelihood",
      "Training / Institutional Partnership",
      "Other Partnership Enquiry",
    ],

    location: "Project Location",
    locationPlaceholder: "e.g. Pune, Maharashtra",

    requirements: "Project Requirements / Message",
    requirementsPlaceholder:
      "Tell us about your proposed CSR initiative, project objectives, target beneficiaries, location or partnership requirements...",

    privacyNotice:
      "Your details will be included in the WhatsApp enquiry message.",

    submit: "Send Enquiry via WhatsApp",

    bottomNotice:
      "Submitting an enquiry does not constitute a confirmed partnership or project commitment.",

    whatsappNotice:
      "WhatsApp will open with your enquiry details. Press Send in WhatsApp to submit your enquiry.",

    whatsappFallback:
      "If WhatsApp did not open, use the link below.",

    whatsappFallbackLink: "Open WhatsApp",

    optional: "(Optional)",
    notProvided: "Not provided",
    notSpecified: "Not specified",
  },

  mr: {
    sectionLabel: "CSR आणि भागीदारी",
    heading1: "आमच्यासोबत",
    heading2: "भागीदारीच्या संधी शोधा",

    description:
      "कौशल्य विकास, शिक्षण, समुदाय सक्षमीकरण आणि शाश्वत उपजीविकेच्या क्षेत्रांमध्ये अर्थपूर्ण सहकार्याच्या संधी शोधण्यासाठी सक्षम फाउंडेशनशी संपर्क साधा.",

    sidebarHeading1: "एकत्र येऊया",
    sidebarHeading2: "शाश्वत परिवर्तन घडवूया",

    sidebarDescription:
      "व्यावहारिक कौशल्ये आणि उपजीविकेच्या संधी अधिकाधिक लोकांपर्यंत पोहोचवण्यासाठी सहकार्य करू इच्छिणाऱ्या संस्था, CSR टीम्स आणि शैक्षणिक संस्थांचे आम्ही स्वागत करतो.",

    partnershipFocus: [
      "CSR सहाय्यित कौशल्य विकास",
      "युवक व महिला सक्षमीकरण",
      "आरोग्यसेवा व व्यावसायिक प्रशिक्षण",
      "रोजगाराभिमुख उपक्रम",
    ],

    directContact: "थेट संपर्क",

    formTitle: "भागीदारी चौकशी फॉर्म",
    formDescription:
      "तुमच्या संस्थेची माहिती आणि प्रस्तावित प्रकल्पाच्या गरजा आमच्यासोबत शेअर करा.",

    organization: "संस्थेचे नाव",
    organizationPlaceholder: "संस्थेचे नाव लिहा",

    contactPerson: "संपर्क व्यक्ती",
    contactPersonPlaceholder: "संपूर्ण नाव लिहा",

    designation: "पदनाम",
    designationPlaceholder: "उदा. CSR व्यवस्थापक",

    email: "ईमेल पत्ता",
    emailPlaceholder: "name@organization.com",

    mobile: "मोबाईल क्रमांक",
    mobilePlaceholder: "संपर्क क्रमांक लिहा",

    partnershipType: "भागीदारीचा प्रकार",
    partnershipPlaceholder: "भागीदारीचा प्रकार निवडा",

    partnershipTypes: [
      "CSR प्रकल्प भागीदारी",
      "कौशल्य विकासासाठी सहकार्य",
      "आरोग्यसेवा प्रशिक्षण भागीदारी",
      "महिला सक्षमीकरण उपक्रम",
      "युवक रोजगार व उपजीविका",
      "प्रशिक्षण / संस्थात्मक भागीदारी",
      "इतर भागीदारीसंबंधी चौकशी",
    ],

    location: "प्रकल्पाचे ठिकाण",
    locationPlaceholder: "उदा. पुणे, महाराष्ट्र",

    requirements: "प्रकल्पाच्या गरजा / संदेश",
    requirementsPlaceholder:
      "प्रस्तावित CSR उपक्रम, प्रकल्पाची उद्दिष्टे, लाभार्थी, ठिकाण किंवा भागीदारीसंबंधी गरजांची माहिती लिहा...",

    privacyNotice:
      "तुमची माहिती WhatsApp चौकशी संदेशामध्ये समाविष्ट असेल.",

    submit: "WhatsApp वर चौकशी पाठवा",

    bottomNotice:
      "चौकशी पाठवल्याने भागीदारी किंवा प्रकल्पाची निश्चित मंजुरी झाल्याचे मानले जाणार नाही.",

    whatsappNotice:
      "तुमची माहिती WhatsApp वर उघडेल. चौकशी पाठवण्यासाठी Send दाबा.",

    whatsappFallback:
      "WhatsApp उघडले नसल्यास खालील लिंक वापरा.",

    whatsappFallbackLink: "WhatsApp उघडा",

    optional: "(ऐच्छिक)",
    notProvided: "दिलेले नाही",
    notSpecified: "दिलेले नाही",
  },
};

// ==========================================
// STABLE DROPDOWN VALUES
// ==========================================

const partnershipTypeValues = [
  "CSR Project Partnership",
  "Skill Development Collaboration",
  "Healthcare Training Partnership",
  "Women Empowerment Initiative",
  "Youth Employment & Livelihood",
  "Training / Institutional Partnership",
  "Other Partnership Enquiry",
];

// ==========================================
// INITIAL FORM
// ==========================================

const initialForm = {
  organization: "",
  contactPerson: "",
  designation: "",
  email: "",
  mobile: "",
  partnershipType: "",
  location: "",
  requirements: "",
};

// ==========================================
// STYLES
// ==========================================

const inputClass =
  "csr-input mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-[#061B50] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10";

const labelClass =
  "block text-sm font-semibold text-[#061B50]";

// ==========================================
// SCROLL REVEAL COMPONENT
// ==========================================

function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 850,
  className = "",
}) {
  const elementRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const query = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotion = () => {
      setReducedMotion(query.matches);

      if (query.matches) {
        setVisible(true);
      }
    };

    updateMotion();

    if (
      query.matches ||
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
        threshold: 0.06,
        rootMargin: "0px 0px 35px 0px",
      }
    );

    observer.observe(element);

    query.addEventListener?.("change", updateMotion);

    return () => {
      observer.disconnect();

      query.removeEventListener?.(
        "change",
        updateMotion
      );
    };
  }, []);

  const transforms = {
    up: "translate3d(0, 40px, 0)",
    left: "translate3d(-45px, 0, 0)",
    right: "translate3d(45px, 0, 0)",
    zoom: "scale(0.95)",
  };

  const show = visible || reducedMotion;

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: show ? 1 : 0,

        transform: show
          ? "translate3d(0,0,0) scale(1)"
          : transforms[direction] || transforms.up,

        transitionProperty: "opacity, transform",

        transitionDuration: reducedMotion
          ? "0ms"
          : `${duration}ms`,

        transitionDelay: reducedMotion
          ? "0ms"
          : `${delay}ms`,

        transitionTimingFunction:
          "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </div>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function CSRPartnershipEnquiry() {
  const { language } = useLanguage();

  const t = translations[language] || translations.en;

  const [form, setForm] = useState(initialForm);

  const [whatsappUrl, setWhatsappUrl] = useState("");

  // ========================================
  // INPUT CHANGE
  // ========================================

  const updateField = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    // Clear older message if fields change.
    setWhatsappUrl("");
  };

  // ========================================
  // WHATSAPP SUBMISSION
  // ========================================

  const handleSubmit = (event) => {
    event.preventDefault();

    const partnershipIndex =
      partnershipTypeValues.indexOf(
        form.partnershipType
      );

    const partnershipText =
      partnershipIndex >= 0
        ? t.partnershipTypes[partnershipIndex]
        : form.partnershipType;

    const message =
      language === "mr"
        ? [
            "*सक्षम फाउंडेशन*",
            "*नवीन CSR / भागीदारी चौकशी*",
            "",
            "━━━━━━━━━━━━━━━━",
            "",
            `*संस्थेचे नाव:* ${form.organization.trim()}`,
            `*संपर्क व्यक्ती:* ${form.contactPerson.trim()}`,
            `*पदनाम:* ${
              form.designation.trim() || t.notProvided
            }`,
            `*ईमेल:* ${form.email.trim()}`,
            `*मोबाईल:* ${form.mobile.trim()}`,
            `*भागीदारीचा प्रकार:* ${partnershipText}`,
            `*प्रकल्पाचे ठिकाण:* ${
              form.location.trim() || t.notSpecified
            }`,
            "",
            "*प्रकल्पाच्या गरजा / संदेश:*",
            form.requirements.trim(),
            "",
            "━━━━━━━━━━━━━━━━",
            "",
            "कृपया आमच्याशी भागीदारीसंबंधी संपर्क साधावा.",
          ].join("\n")
        : [
            "*SAKSHAM FOUNDATION*",
            "*NEW CSR / PARTNERSHIP ENQUIRY*",
            "",
            "━━━━━━━━━━━━━━━━",
            "",
            `*Organization Name:* ${form.organization.trim()}`,
            `*Contact Person:* ${form.contactPerson.trim()}`,
            `*Designation:* ${
              form.designation.trim() || t.notProvided
            }`,
            `*Email Address:* ${form.email.trim()}`,
            `*Mobile Number:* ${form.mobile.trim()}`,
            `*Partnership Type:* ${partnershipText}`,
            `*Project Location:* ${
              form.location.trim() || t.notSpecified
            }`,
            "",
            "*PROJECT REQUIREMENTS / MESSAGE:*",
            form.requirements.trim(),
            "",
            "━━━━━━━━━━━━━━━━",
            "",
            "Please contact us regarding this partnership enquiry.",
          ].join("\n");

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}` +
      `?text=${encodeURIComponent(message)}`;

    setWhatsappUrl(url);

    // Open a new WhatsApp tab from submit interaction.
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // ========================================
  // MAIN RENDER
  // ========================================

  return (
    <section
      id="csr-enquiry"
      aria-labelledby="csr-enquiry-heading"
      className="relative scroll-mt-28 overflow-hidden bg-[#F7F9FC] py-14 lg:py-20"
    >
      {/* ==================================== */}
      {/* ANIMATED BACKGROUND */}
      {/* ==================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="csr-bg-blue absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="csr-bg-orange absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ==================================== */}
        {/* SECTION HEADING */}
        {/* ==================================== */}

        <div className="mb-10 text-center lg:mb-12">

          <Reveal direction="up" duration={800}>
            <div className="mb-4 inline-flex items-center gap-3">

              <span className="csr-label-line h-px w-8 bg-orange-500" />

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-orange-600">
                {t.sectionLabel}
              </span>

              <span className="csr-label-line h-px w-8 bg-orange-500" />

            </div>
          </Reveal>

          <Reveal
            direction="up"
            delay={100}
            duration={1050}
          >
            <h2
              id="csr-enquiry-heading"
              className="text-3xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-4xl lg:text-5xl"
            >
              {t.heading1}{" "}

              <span className="text-orange-600">
                {t.heading2}
              </span>
            </h2>
          </Reveal>

          <Reveal
            direction="up"
            delay={200}
            duration={900}
          >
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              {t.description}
            </p>
          </Reveal>

        </div>

        {/* ==================================== */}
        {/* MAIN PARTNERSHIP PANEL */}
        {/* ==================================== */}

        <div className="grid items-stretch gap-0 overflow-visible rounded-2xl bg-white shadow-[0_15px_55px_rgba(6,27,80,0.07)] lg:grid-cols-12">

          {/* ================================= */}
          {/* LEFT INFORMATION PANEL */}
          {/* ================================= */}

          <div className="lg:col-span-4">

            <Reveal
              direction="left"
              delay={100}
              duration={1000}
              className="h-full"
            >
              <aside className="csr-sidebar relative h-full overflow-hidden rounded-t-2xl bg-[#061B50] px-6 py-9 text-white sm:px-9 lg:rounded-l-2xl lg:rounded-tr-none lg:px-10 lg:py-12">

                {/* DECORATIVE CIRCLES */}
                <div
                  aria-hidden="true"
                  className="csr-decor-circle pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border-[35px] border-white/5"
                />

                <div
                  aria-hidden="true"
                  className="csr-decor-circle pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full border-[35px] border-white/5"
                />

                <div className="relative z-10">

                  {/* ICON */}
                  <div className="csr-sidebar-icon mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-orange-400">
                    <Handshake className="h-7 w-7" />
                  </div>

                  {/* HEADING */}
                  <h3 className="text-2xl font-extrabold leading-snug sm:text-3xl">
                    {t.sidebarHeading1}

                    <span className="block text-orange-400">
                      {t.sidebarHeading2}
                    </span>
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-5 text-sm leading-7 text-white/75">
                    {t.sidebarDescription}
                  </p>

                  {/* PARTNERSHIP FOCUS */}
                  <div className="mt-9 space-y-5">

                    {t.partnershipFocus.map(
                      (item, index) => (
                        <div
                          key={index}
                          className="csr-focus-item flex items-start gap-3"
                          style={{
                            animationDelay: `${
                              120 + index * 110
                            }ms`,
                          }}
                        >
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />

                          <span className="text-sm font-medium leading-6 text-white/90">
                            {item}
                          </span>
                        </div>
                      )
                    )}

                  </div>

                  {/* DIRECT CONTACT */}
                  <div className="mt-10 border-t border-white/20 pt-7">

                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-orange-300">
                      {t.directContact}
                    </p>

                    {/* EMAIL */}
                    <a
                      href="mailto:sakshamfoundationsmartskills@gmail.com"
                      className="csr-contact-link flex items-start gap-3 text-sm leading-6 text-white/85 transition-colors hover:text-white"
                    >
                      <Mail className="mt-1 h-4 w-4 shrink-0 text-orange-400" />

                      <span className="break-all">
                        sakshamfoundationsmartskills@gmail.com
                      </span>
                    </a>

                    {/* PHONE */}
                    <a
                      href="tel:+918830223458"
                      className="csr-contact-link mt-4 flex items-center gap-3 text-sm text-white/85 transition-colors hover:text-white"
                    >
                      <Phone className="h-4 w-4 shrink-0 text-orange-400" />

                      +91 88302 23458
                    </a>

                  </div>

                </div>

              </aside>
            </Reveal>

          </div>

          {/* ================================= */}
          {/* RIGHT FORM PANEL */}
          {/* ================================= */}

          <div className="lg:col-span-8">

            <Reveal
              direction="right"
              delay={150}
              duration={1050}
              className="h-full"
            >
              <div className="csr-form-panel relative h-full rounded-b-2xl bg-white px-6 py-8 sm:px-9 sm:py-10 lg:rounded-r-2xl lg:rounded-bl-none lg:px-11 lg:py-12">

                {/* FORM INTRO */}
                <div className="mb-8 flex items-start gap-4">

                  <div className="csr-form-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <Building2 className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#061B50]">
                      {t.formTitle}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {t.formDescription}
                    </p>
                  </div>

                </div>

                {/* ================================= */}
                {/* FORM */}
                {/* ================================= */}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* TWO COLUMN FIELDS */}
                  <div className="grid gap-5 sm:grid-cols-2">

                    {/* ORGANIZATION */}
                    <div className="csr-field">
                      <label
                        htmlFor="csr-organization"
                        className={labelClass}
                      >
                        {t.organization}{" "}
                        <span className="text-orange-600">*</span>
                      </label>

                      <input
                        id="csr-organization"
                        name="organization"
                        type="text"
                        required
                        maxLength={150}
                        value={form.organization}
                        onChange={updateField}
                        placeholder={t.organizationPlaceholder}
                        className={inputClass}
                      />
                    </div>

                    {/* CONTACT PERSON */}
                    <div className="csr-field">
                      <label
                        htmlFor="csr-contact-person"
                        className={labelClass}
                      >
                        {t.contactPerson}{" "}
                        <span className="text-orange-600">*</span>
                      </label>

                      <input
                        id="csr-contact-person"
                        name="contactPerson"
                        type="text"
                        required
                        autoComplete="name"
                        maxLength={100}
                        value={form.contactPerson}
                        onChange={updateField}
                        placeholder={t.contactPersonPlaceholder}
                        className={inputClass}
                      />
                    </div>

                    {/* DESIGNATION */}
                    <div className="csr-field">
                      <label
                        htmlFor="csr-designation"
                        className={labelClass}
                      >
                        {t.designation}{" "}

                        <span className="text-slate-400">
                          {t.optional}
                        </span>
                      </label>

                      <input
                        id="csr-designation"
                        name="designation"
                        type="text"
                        maxLength={100}
                        value={form.designation}
                        onChange={updateField}
                        placeholder={t.designationPlaceholder}
                        className={inputClass}
                      />
                    </div>

                    {/* EMAIL */}
                    <div className="csr-field">
                      <label
                        htmlFor="csr-email"
                        className={labelClass}
                      >
                        {t.email}{" "}
                        <span className="text-orange-600">*</span>
                      </label>

                      <input
                        id="csr-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        maxLength={150}
                        value={form.email}
                        onChange={updateField}
                        placeholder={t.emailPlaceholder}
                        className={inputClass}
                      />
                    </div>

                    {/* MOBILE */}
                    <div className="csr-field">
                      <label
                        htmlFor="csr-mobile"
                        className={labelClass}
                      >
                        {t.mobile}{" "}
                        <span className="text-orange-600">*</span>
                      </label>

                      <input
                        id="csr-mobile"
                        name="mobile"
                        type="tel"
                        required
                        inputMode="tel"
                        autoComplete="tel"
                        maxLength={16}
                        value={form.mobile}
                        onChange={updateField}
                        placeholder={t.mobilePlaceholder}
                        className={inputClass}
                      />
                    </div>

                    {/* PARTNERSHIP TYPE */}
                    <div className="csr-field">
                      <label
                        htmlFor="csr-partnership-type"
                        className={labelClass}
                      >
                        {t.partnershipType}{" "}
                        <span className="text-orange-600">*</span>
                      </label>

                      <select
                        id="csr-partnership-type"
                        name="partnershipType"
                        required
                        value={form.partnershipType}
                        onChange={updateField}
                        className={inputClass}
                      >
                        <option value="">
                          {t.partnershipPlaceholder}
                        </option>

                        {partnershipTypeValues.map(
                          (type, index) => (
                            <option
                              key={type}
                              value={type}
                            >
                              {t.partnershipTypes[index]}
                            </option>
                          )
                        )}
                      </select>
                    </div>

                  </div>

                  {/* PROJECT LOCATION */}
                  <div className="csr-field">
                    <label
                      htmlFor="csr-location"
                      className={labelClass}
                    >
                      {t.location}{" "}

                      <span className="text-slate-400">
                        {t.optional}
                      </span>
                    </label>

                    <div className="relative">
                      <MapPin className="pointer-events-none absolute left-4 top-[22px] h-4 w-4 text-slate-400" />

                      <input
                        id="csr-location"
                        name="location"
                        type="text"
                        maxLength={150}
                        value={form.location}
                        onChange={updateField}
                        placeholder={t.locationPlaceholder}
                        className={`${inputClass} pl-11`}
                      />
                    </div>
                  </div>

                  {/* PROJECT REQUIREMENTS */}
                  <div className="csr-field">
                    <label
                      htmlFor="csr-requirements"
                      className={labelClass}
                    >
                      {t.requirements}{" "}
                      <span className="text-orange-600">*</span>
                    </label>

                    <textarea
                      id="csr-requirements"
                      name="requirements"
                      rows={5}
                      required
                      maxLength={3000}
                      value={form.requirements}
                      onChange={updateField}
                      placeholder={t.requirementsPlaceholder}
                      className={`${inputClass} resize-y`}
                    />
                  </div>

                  {/* ================================= */}
                  {/* SUBMIT SECTION */}
                  {/* ================================= */}

                  <div className="flex flex-col gap-5 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">

                    {/* PRIVACY NOTICE */}
                    <div className="flex items-start gap-2">

                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-700" />

                      <p className="max-w-xs text-xs leading-5 text-slate-500">
                        {t.privacyNotice}
                      </p>

                    </div>

                    {/* WHATSAPP SUBMIT BUTTON */}
                    <button
                      type="submit"
                      className="csr-whatsapp-btn group relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-lg bg-orange-600 px-7 py-3 text-sm font-bold text-white shadow-[0_10px_25px_rgba(234,88,12,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-[0_15px_35px_rgba(234,88,12,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                    >
                      {/* MIRROR SHINE */}
                      <span
                        aria-hidden="true"
                        className="csr-whatsapp-shine pointer-events-none absolute inset-0"
                      />

                      <MessageCircle className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />

                      <span className="relative z-10">
                        {t.submit}
                      </span>

                      <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>

                  </div>

                  {/* WHATSAPP INSTRUCTIONS */}
                  <div className="rounded-xl border border-green-100 bg-green-50/70 px-4 py-3">

                    <div className="flex items-start gap-2">
                      <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-700" />

                      <p className="text-xs leading-6 text-green-800">
                        {t.whatsappNotice}
                      </p>
                    </div>

                  </div>

                  {/* WHATSAPP FALLBACK LINK */}
                  {whatsappUrl && (
                    <div
                      role="status"
                      className="csr-whatsapp-fallback rounded-xl border border-orange-200 bg-orange-50 px-4 py-4"
                    >
                      <p className="text-sm font-medium text-[#061B50]">
                        {t.whatsappFallback}
                      </p>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-orange-700 underline underline-offset-4 hover:text-orange-900"
                      >
                        {t.whatsappFallbackLink}

                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  )}

                </form>

                {/* BOTTOM NOTICE */}
                <p className="mt-5 text-xs leading-6 text-slate-500">
                  {t.bottomNotice}
                </p>

              </div>
            </Reveal>

          </div>

        </div>
      </div>

      {/* ==================================== */}
      {/* ANIMATIONS IN SAME FILE */}
      {/* ==================================== */}

      <style>{`
        /* BACKGROUND */

        @keyframes csrBgBlue {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-25px, 25px);
          }
        }

        @keyframes csrBgOrange {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(25px, -20px);
          }
        }

        #csr-enquiry .csr-bg-blue {
          animation: csrBgBlue 11s
            ease-in-out infinite;
        }

        #csr-enquiry .csr-bg-orange {
          animation: csrBgOrange 13s
            ease-in-out infinite;
        }

        /* HEADING LABEL LINES */

        @keyframes csrLabelDraw {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }

        #csr-enquiry .csr-label-line {
          transform-origin: center;
          animation: csrLabelDraw 900ms ease-out both;
        }

        /* SIDEBAR CIRCLES */

        @keyframes csrCircleFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-15px);
          }
        }

        #csr-enquiry .csr-decor-circle {
          animation: csrCircleFloat 8s
            ease-in-out infinite;
        }

        /* SIDEBAR ICON */

        @keyframes csrIconFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-5px);
          }
        }

        #csr-enquiry .csr-sidebar-icon,
        #csr-enquiry .csr-form-icon {
          animation: csrIconFloat 4s
            ease-in-out infinite;
        }

        /* FOCUS ITEMS */

        @keyframes csrFocusEnter {
          from {
            opacity: 0;
            transform: translateX(-15px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        #csr-enquiry .csr-focus-item {
          animation: csrFocusEnter 650ms
            ease-out both;
        }

        /* CONTACT HOVER */

        #csr-enquiry .csr-contact-link svg {
          transition: transform 350ms ease;
        }

        #csr-enquiry .csr-contact-link:hover svg {
          transform: translateX(3px);
        }

        /* FORM INPUTS */

        #csr-enquiry .csr-input {
          transition:
            border-color 300ms ease,
            background-color 300ms ease,
            box-shadow 300ms ease,
            transform 300ms ease;
        }

        #csr-enquiry .csr-input:hover {
          border-color: #cbd5e1;
        }

        #csr-enquiry .csr-input:focus {
          border-color: #f97316;
          box-shadow: 0 0 0 4px rgba(249,115,22,0.1);
          transform: translateY(-1px);
        }

        #csr-enquiry .csr-field label {
          transition: color 300ms ease;
        }

        #csr-enquiry .csr-field:focus-within label {
          color: #ea580c;
        }

        /* WHATSAPP BUTTON MIRROR SHINE */

        #csr-enquiry .csr-whatsapp-shine {
          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(255,255,255,0.08) 38%,
            rgba(255,255,255,0.45) 50%,
            rgba(255,255,255,0.08) 62%,
            transparent 80%
          );

          transform: translateX(-160%);
          transition: transform 850ms ease;
        }

        #csr-enquiry .csr-whatsapp-btn:hover
        .csr-whatsapp-shine {
          transform: translateX(160%);
        }

        /* FALLBACK REVEAL */

        @keyframes csrFallbackEnter {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        #csr-enquiry .csr-whatsapp-fallback {
          animation: csrFallbackEnter 500ms
            ease-out both;
        }

        /* KEYBOARD FOCUS */

        #csr-enquiry a:focus-visible,
        #csr-enquiry button:focus-visible {
          outline: 2px solid #f97316;
          outline-offset: 4px;
        }

        /* REDUCED MOTION */

        @media (prefers-reduced-motion: reduce) {
          #csr-enquiry .csr-bg-blue,
          #csr-enquiry .csr-bg-orange,
          #csr-enquiry .csr-label-line,
          #csr-enquiry .csr-decor-circle,
          #csr-enquiry .csr-sidebar-icon,
          #csr-enquiry .csr-form-icon,
          #csr-enquiry .csr-focus-item,
          #csr-enquiry .csr-whatsapp-fallback {
            animation: none !important;
          }

          #csr-enquiry .csr-input,
          #csr-enquiry .csr-whatsapp-shine {
            transition: none !important;
          }
        }
      `}</style>

    </section>
  );
}
