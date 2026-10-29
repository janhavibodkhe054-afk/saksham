
import React, { useEffect, useState } from "react";

import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  MessageCircle,
  X,
  ZoomIn,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ==========================================
// CONTACT DETAILS
// ==========================================

const phoneNumbers = [
  {
    number: "8830223458",
    href: "tel:+918830223458",
  },
];

const email = "sakshamfoundationsmartskills@gmail.com";

const officeAddress =
  "3rd Floor, Mayur Trade Centre, Phase 1, Chinchwad Station, Pune – 411019, Maharashtra.";

const whatsappLink = "https://wa.me/918830223458";

// ==========================================
// WHATSAPP CHANNEL SETTINGS
// Replace these with Saksham Foundation's
// actual WhatsApp Channel link and QR image.
// QR image goes inside public/images/
// ==========================================

const whatsappChannelLink = "";

const whatsappChannelQR = "/images/saksham-whatsapp-channel-qr.png";

// ==========================================
// TRANSLATIONS
// ==========================================

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
      "3rd Floor, Mayur Trade Centre, Phase 1, Chinchwad Station, Pune – 411019, Maharashtra.",

    mapsButton: "View on Google Maps",

    whatsappTitle: "Prefer to Chat on WhatsApp?",

    whatsappDescription:
      "Connect with Saksham Foundation for student registrations, training information and CSR partnership enquiries.",

    whatsappButton: "Chat with Saksham Foundation",

    channelLabel: "DIRECT UPDATES",
    channelHeading: "Follow Our WhatsApp Channel",
    channelDescription:
      "Get the latest updates on training programs, admissions, placement opportunities and Saksham Foundation activities.",

    channelButton: "Join Channel Now",
    channelUnavailable: "Channel Link Coming Soon",

    qrTitle: "Saksham Foundation",
    qrSubtitle: "WhatsApp Channel",
    qrEnlarge: "CLICK TO ENLARGE",
    qrUnavailable: "Channel QR Code Coming Soon",
    qrClose: "Close QR Code",
    qrModalTitle: "Scan to Follow Our Channel",
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
      "३ रा मजला, मयूर ट्रेड सेंटर, फेज १, चिंचवड स्टेशन, पुणे – ४११०१९, महाराष्ट्र.",

    mapsButton: "गुगल मॅप्सवर पाहा",

    whatsappTitle: "WhatsApp वर संपर्क साधायचा आहे?",

    whatsappDescription:
      "विद्यार्थी नोंदणी, प्रशिक्षणाची माहिती आणि CSR भागीदारीसंबंधी चौकशीसाठी सक्षम फाउंडेशनशी WhatsApp वर संपर्क साधा.",

    whatsappButton: "WhatsApp वर संपर्क साधा",

    channelLabel: "थेट अपडेट्स",
    channelHeading: "आमच्या WhatsApp Channel ला Follow करा",
    channelDescription:
      "प्रशिक्षण कार्यक्रम, प्रवेश, प्लेसमेंट संधी आणि सक्षम फाउंडेशनच्या उपक्रमांची माहिती थेट मिळवा.",

    channelButton: "आत्ताच Channel Join करा",
    channelUnavailable: "Channel Link लवकरच उपलब्ध होईल",

    qrTitle: "सक्षम फाउंडेशन",
    qrSubtitle: "WhatsApp Channel",
    qrEnlarge: "मोठा करून पाहा",
    qrUnavailable: "Channel QR Code लवकरच उपलब्ध होईल",
    qrClose: "QR Code बंद करा",
    qrModalTitle: "Channel Follow करण्यासाठी Scan करा",
  },
};

// ==========================================
// WHATSAPP CHANNEL SECTION
// ==========================================

function WhatsAppChannelSection({ t }) {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [qrError, setQrError] = useState(false);

  const hasChannelLink = Boolean(whatsappChannelLink.trim());
  const hasQRImage = Boolean(whatsappChannelQR.trim()) && !qrError;

  useEffect(() => {
    if (!isQRModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsQRModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isQRModalOpen]);

  return (
    <>
      <div className="relative mt-14 overflow-hidden rounded-[38px] border border-green-100 bg-[#F0FFF5] px-5 py-12 shadow-[0_15px_50px_rgba(0,0,0,0.035)] sm:px-10 sm:py-16 lg:mt-20 lg:rounded-[55px] lg:px-16 lg:py-20">

        {/* TOP DECORATIVE COLOR STRIPS */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 flex -translate-x-1/2 gap-0 overflow-hidden rounded-b-xl"
        >
          <span className="h-2.5 w-12 bg-blue-700 sm:w-16" />
          <span className="h-2.5 w-12 bg-yellow-400 sm:w-16" />
          <span className="h-2.5 w-12 bg-red-500 sm:w-16" />
          <span className="ml-8 h-2.5 w-12 rounded-b-xl bg-orange-400 sm:w-16" />
        </div>

        {/* SUBTLE BACKGROUND */}
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-green-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/70 blur-3xl" />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">

          {/* LABEL */}
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#18C76F] sm:text-sm">
            {t.channelLabel}
          </p>

          {/* HEADING */}
          <h2 className="mt-5 max-w-[650px] font-serif text-[34px] font-extrabold leading-[1.15] tracking-tight text-[#102F78] sm:text-[44px] lg:text-[54px]">
            {t.channelHeading}
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            {t.channelDescription}
          </p>

          {/* JOIN BUTTON */}
          {hasChannelLink ? (
            <a
              href={whatsappChannelLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-[66px] w-full max-w-[420px] items-center justify-center gap-3 rounded-full bg-[#45C77A] px-6 py-4 text-base font-extrabold text-white shadow-[0_12px_30px_rgba(69,199,122,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#25B867] hover:shadow-[0_18px_35px_rgba(69,199,122,0.3)] sm:text-xl"
            >
              <MessageCircle className="h-7 w-7 shrink-0" />
              {t.channelButton}
            </a>
          ) : (
            <div className="mt-8 inline-flex min-h-[66px] w-full max-w-[420px] items-center justify-center gap-3 rounded-full bg-[#45C77A]/70 px-6 py-4 text-center text-base font-extrabold text-white sm:text-xl">
              <MessageCircle className="h-7 w-7 shrink-0" />
              {t.channelUnavailable}
            </div>
          )}

          {/* QR CARD */}
          <div className="mt-14 w-full max-w-[380px] rounded-[35px] border-[4px] border-[#20C96B] bg-white p-5 shadow-[0_18px_40px_rgba(14,125,66,0.06)] sm:mt-16 sm:p-7">

            <button
              type="button"
              onClick={() => {
                if (hasQRImage) {
                  setIsQRModalOpen(true);
                }
              }}
              disabled={!hasQRImage}
              className="block w-full disabled:cursor-default"
              aria-label={t.qrEnlarge}
            >
              <div className="flex aspect-square w-full flex-col items-center justify-center overflow-hidden rounded-[20px] bg-[#F5F5F5] p-4">

                {hasQRImage ? (
                  <img
                    src={whatsappChannelQR}
                    alt={`${t.qrTitle} ${t.qrSubtitle} QR Code`}
                    loading="lazy"
                    onError={() => setQrError(true)}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-3 text-center">
                    <MessageCircle className="h-12 w-12 text-[#45C77A]" />
                    <p className="text-sm font-semibold text-slate-500">
                      {t.qrUnavailable}
                    </p>
                  </div>
                )}
              </div>

              <p className="mt-5 text-center text-sm font-extrabold uppercase tracking-[0.12em] text-[#102F78] sm:text-base">
                {hasQRImage ? t.qrEnlarge : t.qrSubtitle}
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* ==================================== */}
      {/* QR CODE ENLARGE MODAL */}
      {/* ==================================== */}

      {isQRModalOpen && hasQRImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#061B50]/90 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsQRModalOpen(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={t.qrModalTitle}
            className="relative w-full max-w-[520px] rounded-[25px] bg-white p-5 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={() => setIsQRModalOpen(false)}
              aria-label={t.qrClose}
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-[#061B50] transition hover:bg-orange-100"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="mb-6 pr-10 text-center text-lg font-extrabold text-[#061B50] sm:text-xl">
              {t.qrModalTitle}
            </h3>

            <img
              src={whatsappChannelQR}
              alt={`${t.qrTitle} WhatsApp Channel QR Code`}
              className="mx-auto max-h-[70vh] w-full object-contain"
            />

            {hasChannelLink && (
              <a
                href={whatsappChannelLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#45C77A] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#25B867]"
              >
                <MessageCircle className="h-5 w-5" />
                {t.channelButton}
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// ==========================================
// MAIN CONTACT INFORMATION COMPONENT
// ==========================================

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

        {/* ==================================== */}
        {/* NEW WHATSAPP CHANNEL SECTION */}
        {/* ==================================== */}

        <WhatsAppChannelSection t={t} />

      </div>
    </section>
  );
}
