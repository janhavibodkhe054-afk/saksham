
import React, { useState } from "react";
import {
  Building2,
  Handshake,
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  ShieldCheck,
  MapPin,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
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
      "Your details will be used to respond to your partnership enquiry.",

    submit: "Submit Partnership Enquiry",

    bottomNotice:
      "Submitting an enquiry does not constitute a confirmed partnership or project commitment.",
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
      "तुमच्या भागीदारीसंबंधी चौकशीला उत्तर देण्यासाठी दिलेल्या माहितीचा वापर केला जाईल.",

    submit: "भागीदारी चौकशी पाठवा",

    bottomNotice:
      "चौकशी पाठवल्याने भागीदारी किंवा प्रकल्पाची निश्चित मंजुरी झाल्याचे मानले जाणार नाही.",
  },
};

// PARTNERSHIP TYPES WITH STABLE VALUES
// The displayed label changes with language, but the stored value
// remains in English so switching languages does not reset the selection.
const partnershipTypeValues = [
  "CSR Project Partnership",
  "Skill Development Collaboration",
  "Healthcare Training Partnership",
  "Women Empowerment Initiative",
  "Youth Employment & Livelihood",
  "Training / Institutional Partnership",
  "Other Partnership Enquiry",
];

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

const inputClass =
  "mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-[#061B50] outline-none transition-all placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10";

const labelClass =
  "block text-sm font-semibold text-[#061B50]";

export default function CSRPartnershipEnquiry() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const [form, setForm] = useState(initialForm);

  // UPDATE INPUT FIELDS
  const updateField = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // FORM SUBMISSION VIA EMAIL CLIENT
  const handleSubmit = (event) => {
    event.preventDefault();

    const recipient =
      "sakshamfoundationsmartskills@gmail.com";

    const subject =
      `Partnership Enquiry - ${form.organization}`;

    // Email body uses English field names for consistency.
    const body = [
      "NEW CSR / PARTNERSHIP ENQUIRY",
      "",
      `Organization Name: ${form.organization}`,
      `Contact Person: ${form.contactPerson}`,
      `Designation: ${form.designation || "Not provided"}`,
      `Email Address: ${form.email}`,
      `Mobile Number: ${form.mobile}`,
      `Partnership Type: ${form.partnershipType}`,
      `Project Location: ${form.location || "Not specified"}`,
      "",
      "PROJECT REQUIREMENTS / MESSAGE:",
      form.requirements,
    ].join("\n");

    window.location.href =
      `mailto:${recipient}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="csr-enquiry"
      aria-labelledby="csr-enquiry-heading"
      className="scroll-mt-28 bg-[#F7F9FC] py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* SECTION HEADING */}
        <div className="mb-10 text-center lg:mb-12">

          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-orange-500" />

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-orange-600">
              {t.sectionLabel}
            </span>

            <span className="h-px w-8 bg-orange-500" />
          </div>

          <h2
            id="csr-enquiry-heading"
            className="text-3xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-4xl lg:text-5xl"
          >
            {t.heading1}{" "}
            <span className="text-orange-600">
              {t.heading2}
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            {t.description}
          </p>
        </div>

        {/* MAIN PARTNERSHIP PANEL */}
        <div className="grid overflow-hidden rounded-2xl bg-white shadow-[0_15px_55px_rgba(6,27,80,0.07)] lg:grid-cols-12">

          {/* LEFT INFORMATION PANEL */}
          <aside className="relative overflow-hidden bg-[#061B50] px-6 py-9 text-white sm:px-9 lg:col-span-4 lg:px-10 lg:py-12">

            {/* DECORATIVE CIRCLES */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border-[35px] border-white/5"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full border-[35px] border-white/5"
            />

            <div className="relative z-10">

              {/* ICON */}
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-orange-400">
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

              {/* KEY PARTNERSHIP FOCUS */}
              <div className="mt-9 space-y-5">

                {t.partnershipFocus.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />

                    <span className="text-sm font-medium leading-6 text-white/90">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* DIRECT CONTACT */}
              <div className="mt-10 border-t border-white/20 pt-7">

                <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-orange-300">
                  {t.directContact}
                </p>

                {/* EMAIL */}
                <a
                  href="mailto:sakshamfoundationsmartskills@gmail.com"
                  className="flex items-start gap-3 text-sm leading-6 text-white/85 transition-colors hover:text-white"
                >
                  <Mail className="mt-1 h-4 w-4 shrink-0 text-orange-400" />

                  <span className="break-all">
                    sakshamfoundationsmartskills@gmail.com
                  </span>
                </a>

                {/* PHONE */}
                <a
                  href="tel:+918830223458"
                  className="mt-4 flex items-center gap-3 text-sm text-white/85 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-orange-400" />
                  +91 88302 23458
                </a>
              </div>
            </div>
          </aside>

          {/* RIGHT FORM PANEL */}
          <div className="px-6 py-8 sm:px-9 sm:py-10 lg:col-span-8 lg:px-11 lg:py-12">

            {/* FORM INTRO */}
            <div className="mb-8 flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
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

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* TWO COLUMN FIELDS */}
              <div className="grid gap-5 sm:grid-cols-2">

                {/* ORGANIZATION NAME */}
                <div>
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
                <div>
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
                <div>
                  <label
                    htmlFor="csr-designation"
                    className={labelClass}
                  >
                    {t.designation}
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
                <div>
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
                <div>
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
                <div>
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
              <div>
                <label
                  htmlFor="csr-location"
                  className={labelClass}
                >
                  {t.location}
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
              <div>
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

              {/* SUBMIT SECTION */}
              <div className="flex flex-col gap-5 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">

                {/* PRIVACY NOTICE */}
                <div className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-700" />

                  <p className="max-w-xs text-xs leading-5 text-slate-500">
                    {t.privacyNotice}
                  </p>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-orange-600 px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-700 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                  {t.submit}

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </form>

            {/* BOTTOM NOTICE */}
            <p className="mt-5 text-xs leading-6 text-slate-500">
              {t.bottomNotice}
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
