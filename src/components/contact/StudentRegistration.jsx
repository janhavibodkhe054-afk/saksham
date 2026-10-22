
import React, { useState } from "react";
import {
  UserRound,
  Phone,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  ClipboardList,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
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
    mobileValidation: "Enter a valid 10-digit Indian mobile number",

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
      "Information will be used for your enquiry.",

    submit: "Submit Registration",

    bottomNotice:
      "Registration is an expression of interest and does not automatically confirm admission to a training program.",
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
    mobileValidation: "कृपया वैध १० अंकी भारतीय मोबाईल क्रमांक लिहा",

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
      "तुम्ही दिलेली माहिती तुमच्या चौकशीसाठी वापरली जाईल.",

    submit: "नोंदणी फॉर्म पाठवा",

    bottomNotice:
      "हा फॉर्म भरल्याने प्रशिक्षणासाठी इच्छुक असल्याची नोंद होते. यामुळे प्रशिक्षण कार्यक्रमातील प्रवेश आपोआप निश्चित होत नाही.",
  },
};

// STABLE DROPDOWN VALUES
// These English values remain unchanged when switching languages.
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

// INITIAL FORM DATA
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

const inputClass =
  "mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-[#061B50] outline-none transition-colors placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10";

const labelClass =
  "block text-sm font-semibold text-[#061B50]";

export default function StudentRegistration() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const [form, setForm] = useState(initialForm);

  // HANDLE FIELD CHANGES
  const updateField = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // HANDLE EMAIL DRAFT SUBMISSION
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.consent) return;

    const email =
      "sakshamfoundationsmartskills@gmail.com";

    const subject =
      `Student Registration - ${form.fullName}`;

    // Email fields remain in English for administrative consistency.
    const body = [
      "NEW STUDENT REGISTRATION",
      "",
      `Full Name: ${form.fullName}`,
      `Mobile Number: ${form.mobile}`,
      `Age: ${form.age}`,
      `Gender: ${form.gender || "Not specified"}`,
      `City / Area: ${form.city}`,
      `Qualification: ${form.qualification}`,
      `Interested Program: ${form.program}`,
      "",
      `Message: ${form.message || "No message"}`,
      "",
      "Consent to be contacted: Yes",
    ].join("\n");

    const mailto =
      `mailto:${email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <section
      id="register"
      aria-labelledby="registration-heading"
      className="scroll-mt-28 bg-[#F3F7FC] py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">

          {/* LEFT INFORMATION */}
          <div className="lg:sticky lg:top-24 lg:col-span-4">

            {/* SECTION LABEL */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-orange-500" />

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-orange-600">
                {t.sectionLabel}
              </span>
            </div>

            {/* HEADING */}
            <h2
              id="registration-heading"
              className="text-3xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-4xl"
            >
              {t.heading1}

              <span className="mt-1 block text-orange-600">
                {t.heading2}
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              {t.description}
            </p>

            {/* BENEFITS */}
            <div className="mt-8 space-y-6">

              {/* BENEFIT 1 */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-orange-600 shadow-sm">
                  <GraduationCap className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#061B50]">
                    {t.benefits[0].title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {t.benefits[0].description}
                  </p>
                </div>
              </div>

              {/* BENEFIT 2 */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-green-700 shadow-sm">
                  <ClipboardList className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#061B50]">
                    {t.benefits[1].title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {t.benefits[1].description}
                  </p>
                </div>
              </div>

              {/* BENEFIT 3 */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#061B50]">
                    {t.benefits[2].title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {t.benefits[2].description}
                  </p>
                </div>
              </div>
            </div>

            {/* CONTACT NOTE */}
            <div className="mt-9 border-t border-slate-200 pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {t.needHelp}
              </p>

              <a
                href="tel:+918830223458"
                className="mt-2 inline-flex items-center gap-2 text-base font-bold text-[#061B50] transition-colors hover:text-orange-600"
              >
                <Phone className="h-4 w-4 text-orange-600" />
                +91 88302 23458
              </a>
            </div>
          </div>

          {/* RIGHT REGISTRATION FORM */}
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_12px_45px_rgba(6,27,80,0.06)]">

              {/* FORM HEADER */}
              <div className="border-b border-slate-100 px-6 py-6 sm:px-9">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
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

              {/* FORM BODY */}
              <form
                onSubmit={handleSubmit}
                className="space-y-6 px-6 py-7 sm:px-9 sm:py-9"
              >
                <div className="grid gap-5 sm:grid-cols-2">

                  {/* FULL NAME */}
                  <div>
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
                  <div>
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
                  <div>
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
                  <div>
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

                      {genderValues.map((value, index) => (
                        <option key={value} value={value}>
                          {t.genderOptions[index]}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* CITY */}
                  <div>
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
                  <div>
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
                          <option key={value} value={value}>
                            {t.qualificationOptions[index]}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>

                {/* TRAINING PROGRAM */}
                <div>
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

                    {programValues.map((value, index) => (
                      <option key={value} value={value}>
                        {t.programOptions[index]}
                      </option>
                    ))}
                  </select>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {t.programNotice}
                  </p>
                </div>

                {/* MESSAGE */}
                <div>
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

                {/* CONSENT */}
                <div className="rounded-xl bg-[#F3F7FC] px-4 py-4">
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

                {/* SUBMIT AREA */}
                <div className="flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">

                  {/* PRIVACY NOTICE */}
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-green-700" />

                    {t.privacyNotice}
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
            </div>

            {/* BOTTOM NOTICE */}
            <p className="mt-4 text-center text-xs leading-6 text-slate-500">
              {t.bottomNotice}
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
