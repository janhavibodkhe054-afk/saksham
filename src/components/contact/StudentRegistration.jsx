
import React, { useEffect, useRef, useState } from "react";

import {
  UserRound,
  Phone,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  ClipboardList,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ==========================================
// WHATSAPP CONFIGURATION
// ==========================================

// Country code 91 + mobile number
const WHATSAPP_NUMBER = "918830223458";

// ==========================================
// ENGLISH + MARATHI TRANSLATIONS
// ==========================================

const translations = {
  en: {
    sectionLabel: "STUDENT REGISTRATION",

    heading1: "Register for",
    heading2: "Skill Development Training",

    description:
      "Take the first step towards building practical skills and exploring new career opportunities. Complete the registration form and our team can guide you through the next steps.",

    benefits: [
      {
        title: "Practical Skill Training",
        description:
          "Explore training opportunities designed to develop job-relevant skills.",
      },
      {
        title: "Registration Guidance",
        description:
          "Get information about eligibility, enrolment and training requirements.",
      },
      {
        title: "Career-Focused Support",
        description:
          "Learn about practical training and available placement assistance.",
      },
    ],

    needHelp: "Need help with registration?",

    formTitle: "Student Registration Form",
    formDescription: "Please fill in your details below.",

    fullName: "Full Name",
    fullNamePlaceholder: "Enter your full name",

    mobile: "Mobile Number",
    mobilePlaceholder: "10-digit mobile number",
    mobileValidation:
      "Enter a valid 10-digit Indian mobile number",

    age: "Age",
    agePlaceholder: "Enter your age",

    gender: "Gender",
    genderPlaceholder: "Select gender",

    genderOptions: [
      "Male",
      "Female",
      "Other",
      "Prefer not to say",
    ],

    city: "City / Area",
    cityPlaceholder: "e.g. Chinchwad, Pune",

    qualification: "Educational Qualification",
    qualificationPlaceholder: "Select qualification",

    qualificationOptions: [
      "Below 10th",
      "10th Pass",
      "12th Pass",
      "ITI",
      "Diploma",
      "Graduate",
      "Postgraduate",
      "Other",
    ],

    program: "Interested Training Program",
    programPlaceholder: "Select a training program",

    programOptions: [
      "General Duty Assistant (GDA)",
      "Other Training Enquiry",
    ],

    programNotice:
      "Other training enquiries are subject to program availability and eligibility.",

    message: "Message",
    messagePlaceholder:
      "Any questions or additional details...",

    optional: "(Optional)",

    consent:
      "I consent to being contacted by Saksham Foundation through phone or other contact methods regarding my registration, training enquiries and relevant enrolment information.",

    privacyNotice:
      "Your details will be included in the WhatsApp message.",

    submit: "Submit via WhatsApp",

    bottomNotice:
      "Registration is an expression of interest and does not automatically confirm admission to a training program.",

    whatsappNotice:
      "WhatsApp will open with your completed registration details. Please press Send to submit your enquiry.",

    whatsappFallback:
      "If WhatsApp did not open, tap here to continue.",

    whatsappFallbackLink: "Open WhatsApp",

    notSpecified: "Not specified",
    noMessage: "No additional message",
  },

  mr: {
    sectionLabel: "विद्यार्थी नोंदणी",

    heading1: "कौशल्य विकास",
    heading2: "प्रशिक्षणासाठी नोंदणी करा",

    description:
      "व्यावहारिक कौशल्ये विकसित करण्यासाठी आणि करिअरच्या नवीन संधी जाणून घेण्यासाठी पहिले पाऊल टाका. खालील नोंदणी फॉर्म भरा. पुढील प्रक्रियेसाठी आमची टीम तुम्हाला मार्गदर्शन करू शकेल.",

    benefits: [
      {
        title: "प्रात्यक्षिक कौशल्य प्रशिक्षण",
        description:
          "रोजगारासाठी उपयुक्त कौशल्ये विकसित करणाऱ्या प्रशिक्षणाच्या संधी जाणून घ्या.",
      },
      {
        title: "नोंदणीसाठी मार्गदर्शन",
        description:
          "पात्रता निकष, प्रवेश प्रक्रिया आणि प्रशिक्षणाच्या आवश्यकतांची माहिती मिळवा.",
      },
      {
        title: "करिअर-केंद्रित सहाय्य",
        description:
          "प्रात्यक्षिक प्रशिक्षण आणि उपलब्ध प्लेसमेंट सहाय्याबद्दल माहिती मिळवा.",
      },
    ],

    needHelp: "नोंदणीसाठी मदत हवी आहे?",

    formTitle: "विद्यार्थी नोंदणी फॉर्म",
    formDescription: "कृपया खाली तुमची माहिती भरा.",

    fullName: "संपूर्ण नाव",
    fullNamePlaceholder: "तुमचे संपूर्ण नाव लिहा",

    mobile: "मोबाईल क्रमांक",
    mobilePlaceholder: "१० अंकी मोबाईल क्रमांक",
    mobileValidation:
      "कृपया वैध १० अंकी भारतीय मोबाईल क्रमांक लिहा",

    age: "वय",
    agePlaceholder: "तुमचे वय लिहा",

    gender: "लिंग",
    genderPlaceholder: "लिंग निवडा",

    genderOptions: [
      "पुरुष",
      "महिला",
      "इतर",
      "सांगू इच्छित नाही",
    ],

    city: "शहर / परिसर",
    cityPlaceholder: "उदा. चिंचवड, पुणे",

    qualification: "शैक्षणिक पात्रता",
    qualificationPlaceholder: "शैक्षणिक पात्रता निवडा",

    qualificationOptions: [
      "१० वी पेक्षा कमी",
      "१० वी उत्तीर्ण",
      "१२ वी उत्तीर्ण",
      "आयटीआय",
      "डिप्लोमा",
      "पदवीधर",
      "पदव्युत्तर",
      "इतर",
    ],

    program: "इच्छित प्रशिक्षण कार्यक्रम",
    programPlaceholder: "प्रशिक्षण कार्यक्रम निवडा",

    programOptions: [
      "जनरल ड्युटी असिस्टंट (GDA)",
      "इतर प्रशिक्षणासंबंधी चौकशी",
    ],

    programNotice:
      "इतर प्रशिक्षण कार्यक्रमांबाबतची चौकशी ही कार्यक्रमाची उपलब्धता आणि पात्रता निकषांवर अवलंबून असेल.",

    message: "संदेश",
    messagePlaceholder:
      "तुमचे प्रश्न किंवा अतिरिक्त माहिती येथे लिहा...",

    optional: "(ऐच्छिक)",

    consent:
      "माझी नोंदणी, प्रशिक्षणासंबंधी चौकशी आणि प्रवेश प्रक्रियेबाबत माहिती देण्यासाठी सक्षम फाउंडेशनने माझ्याशी फोन किंवा इतर संपर्क माध्यमांद्वारे संपर्क साधण्यास मी संमती देत आहे.",

    privacyNotice:
      "तुमची माहिती WhatsApp संदेशामध्ये समाविष्ट असेल.",

    submit: "WhatsApp वर नोंदणी पाठवा",

    bottomNotice:
      "हा फॉर्म भरल्याने प्रशिक्षणासाठी इच्छुक असल्याची नोंद होते. यामुळे प्रशिक्षण कार्यक्रमातील प्रवेश आपोआप निश्चित होत नाही.",

    whatsappNotice:
      "तुमची भरलेली माहिती WhatsApp वर उघडेल. चौकशी पाठवण्यासाठी Send बटण दाबा.",

    whatsappFallback:
      "WhatsApp उघडले नसल्यास येथे क्लिक करा.",

    whatsappFallbackLink: "WhatsApp उघडा",

    notSpecified: "माहिती दिलेली नाही",
    noMessage: "अतिरिक्त संदेश नाही",
  },
};

// ==========================================
// STABLE DROPDOWN VALUES
// ==========================================

const genderValues = [
  "Male",
  "Female",
  "Other",
  "Prefer not to say",
];

const qualificationValues = [
  "Below 10th",
  "10th Pass",
  "12th Pass",
  "ITI",
  "Diploma",
  "Graduate",
  "Postgraduate",
  "Other",
];

const programValues = [
  "General Duty Assistant (GDA)",
  "Other Training Enquiry",
];

// ==========================================
// INITIAL FORM DATA
// ==========================================

const initialForm = {
  fullName: "",
  mobile: "",
  age: "",
  gender: "",
  city: "",
  qualification: "",
  program: "",
  message: "",
  consent: false,
};

// ==========================================
// FORM STYLES
// ==========================================

const inputClass =
  "saksham-reg-input mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-[#061B50] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10";

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
    up: "translate3d(0, 45px, 0)",
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
          ? "translate3d(0, 0, 0) scale(1)"
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

export default function StudentRegistration() {
  const { language } = useLanguage();

  const t = translations[language] || translations.en;

  const [form, setForm] = useState(initialForm);

  const [whatsappUrl, setWhatsappUrl] = useState("");

  const [whatsappOpened, setWhatsappOpened] =
    useState(false);

  // ========================================
  // HANDLE INPUT CHANGES
  // ========================================

  const updateField = (event) => {
    const { name, value, type, checked } =
      event.target;

    let updatedValue =
      type === "checkbox" ? checked : value;

    // Accept only digits for mobile number
    if (name === "mobile") {
      updatedValue = value
        .replace(/\D/g, "")
        .slice(0, 10);
    }

    setForm((previous) => ({
      ...previous,
      [name]: updatedValue,
    }));

    // Previous WhatsApp message must not
    // remain available after edits.
    setWhatsappUrl("");
    setWhatsappOpened(false);
  };

  // ========================================
  // BUILD WHATSAPP MESSAGE
  // ========================================

  const buildWhatsAppMessage = () => {
    const genderIndex =
      genderValues.indexOf(form.gender);

    const qualificationIndex =
      qualificationValues.indexOf(
        form.qualification
      );

    const programIndex =
      programValues.indexOf(form.program);

    // Display values using selected language
    const genderText =
      genderIndex >= 0
        ? t.genderOptions[genderIndex]
        : t.notSpecified;

    const qualificationText =
      qualificationIndex >= 0
        ? t.qualificationOptions[
            qualificationIndex
          ]
        : form.qualification;

    const programText =
      programIndex >= 0
        ? t.programOptions[programIndex]
        : form.program;

    const message =
      language === "mr"
        ? [
            "*सक्षम फाउंडेशन*",
            "*नवीन विद्यार्थी नोंदणी*",
            "",
            "━━━━━━━━━━━━━━━━",
            "",
            `*संपूर्ण नाव:* ${form.fullName.trim()}`,
            `*मोबाईल क्रमांक:* ${form.mobile}`,
            `*वय:* ${form.age}`,
            `*लिंग:* ${genderText}`,
            `*शहर / परिसर:* ${form.city.trim()}`,
            `*शैक्षणिक पात्रता:* ${qualificationText}`,
            `*इच्छित प्रशिक्षण:* ${programText}`,
            "",
            "*अतिरिक्त संदेश:*",
            form.message.trim() || t.noMessage,
            "",
            "━━━━━━━━━━━━━━━━",
            "",
            "*संपर्कासाठी संमती:* होय",
            "",
            "कृपया मला प्रशिक्षण व प्रवेश प्रक्रियेबाबत मार्गदर्शन करावे.",
          ].join("\n")
        : [
            "*SAKSHAM FOUNDATION*",
            "*NEW STUDENT REGISTRATION*",
            "",
            "━━━━━━━━━━━━━━━━",
            "",
            `*Full Name:* ${form.fullName.trim()}`,
            `*Mobile Number:* ${form.mobile}`,
            `*Age:* ${form.age}`,
            `*Gender:* ${genderText}`,
            `*City / Area:* ${form.city.trim()}`,
            `*Qualification:* ${qualificationText}`,
            `*Interested Program:* ${programText}`,
            "",
            "*Additional Message:*",
            form.message.trim() || t.noMessage,
            "",
            "━━━━━━━━━━━━━━━━",
            "",
            "*Consent to be contacted:* Yes",
            "",
            "Please guide me regarding training and the admission process.",
          ].join("\n");

    return message;
  };

  // ========================================
  // HANDLE WHATSAPP SUBMISSION
  // ========================================

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.consent) return;

    // Additional mobile validation
    const mobileIsValid =
      /^[6-9]\d{9}$/.test(form.mobile);

    if (!mobileIsValid) {
      document
        .getElementById("reg-mobile")
        ?.focus();

      return;
    }

    const message = buildWhatsAppMessage();

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}` +
      `?text=${encodeURIComponent(message)}`;

    setWhatsappUrl(url);
    setWhatsappOpened(true);

    // Open WhatsApp using direct submit action.
    // Fallback link is shown if popups are blocked.
    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // ========================================
  // BENEFIT ICONS
  // ========================================

  const benefitIcons = [
    {
      icon: GraduationCap,
      color: "text-orange-600",
    },
    {
      icon: ClipboardList,
      color: "text-green-700",
    },
    {
      icon: CheckCircle2,
      color: "text-blue-700",
    },
  ];

  return (
    <section
      id="register"
      aria-labelledby="registration-heading"
      className="relative scroll-mt-28 overflow-hidden bg-[#F3F7FC] py-14 lg:py-20"
    >
      {/* ==================================== */}
      {/* ANIMATED BACKGROUND */}
      {/* ==================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="saksham-reg-bg-blue absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="saksham-reg-bg-orange absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">

          {/* ================================= */}
          {/* LEFT INFORMATION */}
          {/* ================================= */}

          <div className="lg:sticky lg:top-24 lg:col-span-4">

            {/* SECTION LABEL */}
            <Reveal
              direction="left"
              duration={850}
            >
              <div className="mb-5 flex items-center gap-3">

                <span className="saksham-reg-label-line h-0.5 w-8 bg-orange-500" />

                <span className="text-xs font-bold uppercase tracking-[0.15em] text-orange-600">
                  {t.sectionLabel}
                </span>

              </div>
            </Reveal>

            {/* HEADING */}
            <Reveal
              direction="up"
              delay={100}
              duration={1050}
            >
              <h2
                id="registration-heading"
                className="text-3xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-4xl"
              >
                {t.heading1}

                <span className="mt-1 block text-orange-600">
                  {t.heading2}
                </span>
              </h2>
            </Reveal>

            {/* DESCRIPTION */}
            <Reveal
              direction="up"
              delay={200}
              duration={950}
            >
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                {t.description}
              </p>
            </Reveal>

            {/* ================================= */}
            {/* THREE BENEFITS */}
            {/* ================================= */}

            <div className="mt-8 space-y-6">

              {t.benefits.map((benefit, index) => {
                const Icon = benefitIcons[index].icon;
                const color =
                  benefitIcons[index].color;

                return (
                  <Reveal
                    key={index}
                    direction="up"
                    delay={index * 120}
                    duration={900}
                  >
                    <div className="saksham-reg-benefit group flex items-start gap-4">

                      {/* BENEFIT ICON */}
                      <div
                        className={`saksham-reg-benefit-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md ${color}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-[#061B50]">
                          {benefit.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {benefit.description}
                        </p>
                      </div>

                    </div>
                  </Reveal>
                );
              })}

            </div>

            {/* ================================= */}
            {/* CONTACT NOTE */}
            {/* ================================= */}

            <Reveal
              direction="up"
              delay={150}
              duration={850}
            >
              <div className="mt-9 border-t border-slate-200 pt-6">

                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {t.needHelp}
                </p>

                <a
                  href="tel:+918830223458"
                  className="saksham-reg-phone mt-2 inline-flex items-center gap-2 text-base font-bold text-[#061B50] transition-colors hover:text-orange-600"
                >
                  <Phone className="h-4 w-4 text-orange-600" />

                  +91 88302 23458
                </a>

              </div>
            </Reveal>

          </div>

          {/* ================================= */}
          {/* RIGHT REGISTRATION FORM */}
          {/* ================================= */}

          <div className="lg:col-span-8">

            <Reveal
              direction="right"
              delay={130}
              duration={1100}
            >
              <div className="saksham-reg-form-card group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_12px_45px_rgba(6,27,80,0.06)]">

                {/* CARD MIRROR SHINE */}
                <span
                  aria-hidden="true"
                  className="saksham-reg-card-shine pointer-events-none absolute inset-0 z-10"
                />

                {/* ================================= */}
                {/* FORM HEADER */}
                {/* ================================= */}

                <div className="relative z-20 border-b border-slate-100 px-6 py-6 sm:px-9">

                  <div className="flex items-center gap-3">

                    <div className="saksham-reg-header-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">

                      <UserRound className="h-5 w-5" />

                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[#061B50] sm:text-xl">
                        {t.formTitle}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                        {t.formDescription}
                      </p>
                    </div>

                  </div>

                </div>

                {/* ================================= */}
                {/* FORM BODY */}
                {/* ================================= */}

                <form
                  onSubmit={handleSubmit}
                  className="relative z-20 space-y-6 px-6 py-7 sm:px-9 sm:py-9"
                >
                  <div className="grid gap-5 sm:grid-cols-2">

                    {/* FULL NAME */}
                    <div className="saksham-reg-field">
                      <label
                        htmlFor="reg-full-name"
                        className={labelClass}
                      >
                        {t.fullName}{" "}
                        <span className="text-orange-600">*</span>
                      </label>

                      <input
                        id="reg-full-name"
                        type="text"
                        name="fullName"
                        autoComplete="name"
                        required
                        maxLength={100}
                        value={form.fullName}
                        onChange={updateField}
                        placeholder={t.fullNamePlaceholder}
                        className={inputClass}
                      />
                    </div>

                    {/* MOBILE */}
                    <div className="saksham-reg-field">
                      <label
                        htmlFor="reg-mobile"
                        className={labelClass}
                      >
                        {t.mobile}{" "}
                        <span className="text-orange-600">*</span>
                      </label>

                      <input
                        id="reg-mobile"
                        type="tel"
                        name="mobile"
                        autoComplete="tel-national"
                        required
                        inputMode="numeric"
                        pattern="[6-9][0-9]{9}"
                        maxLength={10}
                        title={t.mobileValidation}
                        value={form.mobile}
                        onChange={updateField}
                        placeholder={t.mobilePlaceholder}
                        className={inputClass}
                      />
                    </div>

                    {/* AGE */}
                    <div className="saksham-reg-field">
                      <label
                        htmlFor="reg-age"
                        className={labelClass}
                      >
                        {t.age}{" "}
                        <span className="text-orange-600">*</span>
                      </label>

                      <input
                        id="reg-age"
                        type="number"
                        name="age"
                        min="1"
                        max="100"
                        required
                        value={form.age}
                        onChange={updateField}
                        placeholder={t.agePlaceholder}
                        className={inputClass}
                      />
                    </div>

                    {/* GENDER */}
                    <div className="saksham-reg-field">
                      <label
                        htmlFor="reg-gender"
                        className={labelClass}
                      >
                        {t.gender}{" "}
                        <span className="text-slate-400">
                          {t.optional}
                        </span>
                      </label>

                      <select
                        id="reg-gender"
                        name="gender"
                        value={form.gender}
                        onChange={updateField}
                        className={inputClass}
                      >
                        <option value="">
                          {t.genderPlaceholder}
                        </option>

                        {genderValues.map(
                          (value, index) => (
                            <option
                              key={value}
                              value={value}
                            >
                              {t.genderOptions[index]}
                            </option>
                          )
                        )}
                      </select>
                    </div>

                    {/* CITY */}
                    <div className="saksham-reg-field">
                      <label
                        htmlFor="reg-city"
                        className={labelClass}
                      >
                        {t.city}{" "}
                        <span className="text-orange-600">*</span>
                      </label>

                      <input
                        id="reg-city"
                        type="text"
                        name="city"
                        required
                        maxLength={100}
                        value={form.city}
                        onChange={updateField}
                        placeholder={t.cityPlaceholder}
                        className={inputClass}
                      />
                    </div>

                    {/* QUALIFICATION */}
                    <div className="saksham-reg-field">
                      <label
                        htmlFor="reg-qualification"
                        className={labelClass}
                      >
                        {t.qualification}{" "}
                        <span className="text-orange-600">*</span>
                      </label>

                      <select
                        id="reg-qualification"
                        name="qualification"
                        required
                        value={form.qualification}
                        onChange={updateField}
                        className={inputClass}
                      >
                        <option value="">
                          {t.qualificationPlaceholder}
                        </option>

                        {qualificationValues.map(
                          (value, index) => (
                            <option
                              key={value}
                              value={value}
                            >
                              {
                                t.qualificationOptions[
                                  index
                                ]
                              }
                            </option>
                          )
                        )}
                      </select>
                    </div>

                  </div>

                  {/* ================================= */}
                  {/* TRAINING PROGRAM */}
                  {/* ================================= */}

                  <div className="saksham-reg-field">
                    <label
                      htmlFor="reg-program"
                      className={labelClass}
                    >
                      {t.program}{" "}
                      <span className="text-orange-600">*</span>
                    </label>

                    <select
                      id="reg-program"
                      name="program"
                      required
                      value={form.program}
                      onChange={updateField}
                      className={inputClass}
                    >
                      <option value="">
                        {t.programPlaceholder}
                      </option>

                      {programValues.map(
                        (value, index) => (
                          <option
                            key={value}
                            value={value}
                          >
                            {t.programOptions[index]}
                          </option>
                        )
                      )}
                    </select>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {t.programNotice}
                    </p>
                  </div>

                  {/* ================================= */}
                  {/* MESSAGE */}
                  {/* ================================= */}

                  <div className="saksham-reg-field">
                    <label
                      htmlFor="reg-message"
                      className={labelClass}
                    >
                      {t.message}{" "}
                      <span className="text-slate-400">
                        {t.optional}
                      </span>
                    </label>

                    <textarea
                      id="reg-message"
                      name="message"
                      rows={4}
                      maxLength={1000}
                      value={form.message}
                      onChange={updateField}
                      placeholder={t.messagePlaceholder}
                      className={`${inputClass} resize-y`}
                    />
                  </div>

                  {/* ================================= */}
                  {/* CONSENT */}
                  {/* ================================= */}

                  <div className="saksham-reg-consent rounded-xl bg-[#F3F7FC] px-4 py-4">

                    <label className="flex cursor-pointer items-start gap-3">

                      <input
                        type="checkbox"
                        name="consent"
                        checked={form.consent}
                        onChange={updateField}
                        required
                        className="mt-1 h-4 w-4 shrink-0 accent-orange-600"
                      />

                      <span className="text-xs leading-6 text-slate-600 sm:text-sm">
                        {t.consent}

                        <span className="ml-1 text-orange-600">
                          *
                        </span>
                      </span>

                    </label>

                  </div>

                  {/* ================================= */}
                  {/* SUBMIT AREA */}
                  {/* ================================= */}

                  <div className="flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">

                    {/* PRIVACY NOTICE */}
                    <div className="flex items-center gap-2 text-xs text-slate-500">

                      <ShieldCheck className="h-4 w-4 shrink-0 text-green-700" />

                      <span>{t.privacyNotice}</span>

                    </div>

                    {/* WHATSAPP BUTTON */}
                    <button
                      type="submit"
                      className="saksham-reg-submit group relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-lg bg-orange-600 px-7 py-3 text-sm font-bold text-white shadow-[0_10px_25px_rgba(234,88,12,0.14)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-[0_15px_30px_rgba(234,88,12,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                    >
                      {/* BUTTON SHINE */}
                      <span
                        aria-hidden="true"
                        className="saksham-reg-button-shine pointer-events-none absolute inset-0"
                      />

                      <MessageCircle className="relative z-10 h-5 w-5" />

                      <span className="relative z-10">
                        {t.submit}
                      </span>

                      <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

                    </button>

                  </div>

                  {/* WHATSAPP INSTRUCTIONS */}
                  <div className="rounded-lg border border-green-100 bg-green-50/70 px-4 py-3">

                    <div className="flex items-start gap-2">

                      <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-700" />

                      <p className="text-xs leading-6 text-green-800">
                        {t.whatsappNotice}
                      </p>

                    </div>

                  </div>

                  {/* WHATSAPP FALLBACK LINK */}
                  {whatsappOpened && whatsappUrl && (
                    <div
                      className="saksham-reg-opened rounded-lg border border-orange-200 bg-orange-50 px-4 py-4"
                      role="status"
                    >
                      <p className="text-sm font-medium text-[#061B50]">
                        {t.whatsappFallback}
                      </p>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-orange-700 underline underline-offset-4 transition-colors hover:text-orange-900"
                      >
                        {t.whatsappFallbackLink}

                        <ExternalLink className="h-4 w-4" />
                      </a>

                    </div>
                  )}

                </form>

              </div>
            </Reveal>

            {/* ================================= */}
            {/* BOTTOM NOTICE */}
            {/* ================================= */}

            <Reveal
              direction="up"
              delay={200}
              duration={850}
            >
              <p className="mt-4 text-center text-xs leading-6 text-slate-500">
                {t.bottomNotice}
              </p>
            </Reveal>

          </div>

        </div>
      </div>

      {/* ==================================== */}
      {/* ALL ANIMATIONS IN SAME COMPONENT */}
      {/* ==================================== */}

      <style>{`
        /* ==========================
           BACKGROUND FLOAT
        ========================== */

        @keyframes sakshamRegBgBlue {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-30px, 25px);
          }
        }

        @keyframes sakshamRegBgOrange {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(30px, -20px);
          }
        }

        #register .saksham-reg-bg-blue {
          animation: sakshamRegBgBlue 12s
            ease-in-out infinite;
        }

        #register .saksham-reg-bg-orange {
          animation: sakshamRegBgOrange 14s
            ease-in-out infinite;
        }

        /* ==========================
           LABEL LINE REVEAL
        ========================== */

        @keyframes sakshamRegLabelLine {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }

        #register .saksham-reg-label-line {
          transform-origin: left center;

          animation: sakshamRegLabelLine 950ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* ==========================
           BENEFIT ICON HOVER
        ========================== */

        #register .saksham-reg-benefit-icon svg {
          transition: transform 400ms
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        #register .saksham-reg-benefit:hover
        .saksham-reg-benefit-icon svg {
          transform: translateY(-3px) scale(1.12);
        }

        /* ==========================
           PHONE HOVER
        ========================== */

        #register .saksham-reg-phone svg {
          transition: transform 350ms ease;
        }

        #register .saksham-reg-phone:hover svg {
          transform: rotate(-12deg) scale(1.15);
        }

        /* ==========================
           FORM CARD ELEVATION
        ========================== */

        #register .saksham-reg-form-card {
          transition:
            border-color 450ms ease,
            box-shadow 450ms ease;
        }

        #register .saksham-reg-form-card:hover {
          border-color: rgba(249,115,22,0.18);

          box-shadow:
            0 22px 60px rgba(6,27,80,0.09);
        }

        /* ==========================
           CARD MIRROR SHINE
        ========================== */

        #register .saksham-reg-card-shine {
          background: linear-gradient(
            115deg,
            transparent 25%,
            rgba(255,255,255,0.03) 38%,
            rgba(226,232,240,0.34) 50%,
            rgba(255,255,255,0.03) 62%,
            transparent 75%
          );

          transform: translateX(-165%);
          opacity: 0;
        }

        #register .saksham-reg-form-card:hover
        .saksham-reg-card-shine {
          animation: sakshamRegCardShine 950ms
            ease-out both;
        }

        @keyframes sakshamRegCardShine {
          0% {
            opacity: 0;
            transform: translateX(-165%);
          }

          25% {
            opacity: 0.7;
          }

          100% {
            opacity: 0;
            transform: translateX(165%);
          }
        }

        /* ==========================
           FORM HEADER ICON
        ========================== */

        @keyframes sakshamRegHeaderIcon {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-4px);
          }
        }

        #register .saksham-reg-header-icon {
          animation: sakshamRegHeaderIcon 4s
            ease-in-out infinite;
        }

        /* ==========================
           INPUT HOVER + FOCUS
        ========================== */

        #register .saksham-reg-input {
          transition:
            border-color 300ms ease,
            box-shadow 300ms ease,
            background-color 300ms ease,
            transform 300ms ease;
        }

        #register .saksham-reg-input:hover {
          border-color: #cbd5e1;
          background-color: #fdfefe;
        }

        #register .saksham-reg-input:focus {
          border-color: #f97316;

          box-shadow:
            0 0 0 4px rgba(249,115,22,0.1);

          transform: translateY(-1px);
        }

        #register .saksham-reg-field label {
          transition: color 300ms ease;
        }

        #register .saksham-reg-field:focus-within label {
          color: #ea580c;
        }

        /* ==========================
           CONSENT HOVER
        ========================== */

        #register .saksham-reg-consent {
          transition:
            background-color 350ms ease,
            box-shadow 350ms ease;
        }

        #register .saksham-reg-consent:hover {
          background-color: #edf4fc;
          box-shadow:
            0 5px 20px rgba(6,27,80,0.04);
        }

        /* ==========================
           WHATSAPP BUTTON SHINE
        ========================== */

        #register .saksham-reg-button-shine {
          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(255,255,255,0.06) 38%,
            rgba(255,255,255,0.45) 50%,
            rgba(255,255,255,0.06) 62%,
            transparent 80%
          );

          transform: translateX(-160%);
          transition: transform 850ms ease;
        }

        #register .saksham-reg-submit:hover
        .saksham-reg-button-shine {
          transform: translateX(160%);
        }

        /* ==========================
           WHATSAPP BUTTON ICON
        ========================== */

        #register .saksham-reg-submit
        > svg:first-of-type {
          transition: transform 350ms ease;
        }

        #register .saksham-reg-submit:hover
        > svg:first-of-type {
          transform: rotate(-8deg) scale(1.12);
        }

        /* ==========================
           FALLBACK LINK REVEAL
        ========================== */

        @keyframes sakshamRegOpened {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        #register .saksham-reg-opened {
          animation: sakshamRegOpened 500ms ease-out both;
        }

        /* ==========================
           ACCESSIBILITY
        ========================== */

        #register a:focus-visible,
        #register button:focus-visible {
          outline: 2px solid #ea580c;
          outline-offset: 4px;
        }

        /* ==========================
           REDUCED MOTION
        ========================== */

        @media (prefers-reduced-motion: reduce) {
          #register .saksham-reg-bg-blue,
          #register .saksham-reg-bg-orange,
          #register .saksham-reg-label-line,
          #register .saksham-reg-card-shine,
          #register .saksham-reg-header-icon,
          #register .saksham-reg-opened {
            animation: none !important;
          }

          #register .saksham-reg-input,
          #register .saksham-reg-button-shine,
          #register .saksham-reg-benefit-icon svg,
          #register .saksham-reg-submit {
            transition: none !important;
          }
        }
      `}</style>

    </section>
  );
}
