
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    sectionLabel: "GET IN TOUCH",
    heading1: "Contact",
    heading2: "Information",

    description:
      "Have a question or need assistance? Reach out to our team through any of the contact options below.",

    phoneTitle: "Phone Numbers",
    phoneDescription:
      "Call us for training and partnership enquiries.",

    primaryContact: "Primary Contact",
    alternateContact: "Alternate Contact",

    emailTitle: "Email Address",
    emailDescription:
      "Send us your questions or collaboration proposals.",
    officialEmail: "Official Email",

    addressTitle: "Office Address",
    addressDescription:
      "Find our office in Chinchwad, Pune.",

    address:
      "5rd Floor, Mayur Trade Centre, Phase 1, Chinchwad Station, Pune – 411019, Maharashtra.",

    mapsButton: "View on Google Maps",

    whatsappTitle: "Prefer to Chat on WhatsApp?",

    whatsappDescription:
      "Connect with Saksham Foundation for student registrations, training information and CSR partnership enquiries.",

    whatsappButton: "Chat with Saksham Foundation",
  },

  mr: {
    sectionLabel: "आमच्याशी संपर्क साधा",
    heading1: "संपर्क",
    heading2: "माहिती",

    description:
      "तुम्हाला काही प्रश्न आहेत किंवा मार्गदर्शन हवे आहे? खाली दिलेल्या संपर्क माध्यमांद्वारे आमच्या टीमशी संपर्क साधा.",

    phoneTitle: "संपर्क क्रमांक",
    phoneDescription:
      "प्रशिक्षण आणि भागीदारीसंबंधी चौकशीसाठी आम्हाला कॉल करा.",

    primaryContact: "प्राथमिक संपर्क",
    alternateContact: "पर्यायी संपर्क",

    emailTitle: "ईमेल पत्ता",
    emailDescription:
      "तुमचे प्रश्न किंवा सहकार्याचे प्रस्ताव आम्हाला ईमेलद्वारे पाठवा.",
    officialEmail: "अधिकृत ईमेल",

    addressTitle: "कार्यालयाचा पत्ता",
    addressDescription:
      "आमचे कार्यालय चिंचवड, पुणे येथे आहे.",

    address:
      "5 मजला, मयूर ट्रेड सेंटर, फेज १, चिंचवड स्टेशन, पुणे – ४११०१९, महाराष्ट्र.",

    mapsButton: "गुगल मॅप्सवर पाहा",

    whatsappTitle: "WhatsApp वर संपर्क साधायचा आहे?",

    whatsappDescription:
      "विद्यार्थी नोंदणी, प्रशिक्षणाची माहिती आणि CSR भागीदारीसंबंधी चौकशीसाठी सक्षम फाउंडेशनशी WhatsApp वर संपर्क साधा.",

    whatsappButton: "WhatsApp वर संपर्क साधा",
  },
};

// CONTACT DETAILS
// These remain unchanged for both languages.
const phoneNumbers = [
  {
    number: "8830223458",
    href: "tel:+918830223458",
  },
  {
    number: "8830186623",
    href: "tel:+918830186623",
  },
];

const email = "sakshamfoundationsmartskills@gmail.com";

const officeAddress =
  "3rd Floor, Mayur Trade Centre, Phase 1, Chinchwad Station, Pune – 411019, Maharashtra.";

const whatsappLink = "https://wa.me/918830186623";

export default function ContactInformation() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const googleMapsLink =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      officeAddress
    )}`;

  return (
    <section
      id="contact-details"
      aria-labelledby="contact-details-heading"
      className="relative overflow-hidden bg-[#F3F7FC] py-14 lg:py-20"
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
            id="contact-details-heading"
            className="text-3xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-4xl lg:text-5xl"
          >
            {t.heading1}{" "}
            <span className="text-orange-600">
              {t.heading2}
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            {t.description}
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="grid gap-5 md:grid-cols-3 lg:gap-6">

          {/* PHONE CARD */}
          <div className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(6,27,80,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(6,27,80,0.09)] sm:p-7">

            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
              <Phone className="h-6 w-6" />
            </div>

            <h3 className="text-xl font-bold text-[#061B50]">
              {t.phoneTitle}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              {t.phoneDescription}
            </p>

            <div className="mt-6 space-y-4">
              {phoneNumbers.map((phone, index) => (
                <div key={phone.number}>
                  <p className="text-xs font-medium text-slate-500">
                    {index === 0
                      ? t.primaryContact
                      : t.alternateContact}
                  </p>

                  <a
                    href={phone.href}
                    className="mt-1 inline-flex items-center gap-2 text-base font-bold text-[#061B50] transition-colors hover:text-orange-600"
                  >
                    +91 {phone.number}

                    <ArrowUpRight className="h-4 w-4 text-orange-500" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* EMAIL CARD */}
          <div className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(6,27,80,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(6,27,80,0.09)] sm:p-7">

            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
              <Mail className="h-6 w-6" />
            </div>

            <h3 className="text-xl font-bold text-[#061B50]">
              {t.emailTitle}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              {t.emailDescription}
            </p>

            <div className="mt-6">
              <p className="text-xs font-medium text-slate-500">
                {t.officialEmail}
              </p>

              <a
                href={`mailto:${email}`}
                className="mt-2 block break-all text-sm font-bold leading-6 text-[#061B50] transition-colors hover:text-orange-600"
              >
                {email}
              </a>
            </div>
          </div>

          {/* ADDRESS CARD */}
          <div className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(6,27,80,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(6,27,80,0.09)] sm:p-7">

            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700">
              <MapPin className="h-6 w-6" />
            </div>

            <h3 className="text-xl font-bold text-[#061B50]">
              {t.addressTitle}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              {t.addressDescription}
            </p>

            <address className="mt-6 text-sm font-semibold not-italic leading-7 text-slate-700">
              {t.address}
            </address>

            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-orange-600 transition-colors hover:text-orange-700"
            >
              {t.mapsButton}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* WHATSAPP ENQUIRY BAR */}
        <div className="mt-6 flex flex-col gap-6 rounded-2xl bg-[#061B50] px-6 py-7 text-white sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">

          {/* LEFT CONTENT */}
          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-green-400">
              <MessageCircle className="h-6 w-6" />
            </div>

            <div>
              <h3 className="text-lg font-bold sm:text-xl">
                {t.whatsappTitle}
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">
                {t.whatsappDescription}
              </p>
            </div>
          </div>

          {/* WHATSAPP BUTTON */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-[#22C55E] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#16A34A] hover:shadow-lg"
          >
            <MessageCircle className="h-5 w-5 shrink-0" />

            {t.whatsappButton}

            <ArrowUpRight className="h-4 w-4 shrink-0" />
          </a>
        </div>

      </div>
    </section>
  );
}
