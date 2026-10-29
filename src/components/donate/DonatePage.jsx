
import React, { useEffect, useRef, useState } from "react";

import {
  HeartHandshake,
  Heart,
  ArrowDown,
  ArrowUpRight,
  Landmark,
  CreditCard,
  Copy,
  Check,
  QrCode,
  ShieldCheck,
  Info,
  Building2,
  UserRound,
  Phone,
  Mail,
  Wallet,
  BadgeCheck,
  GraduationCap,
  Users,
  HeartPulse,
  ReceiptText,
  MessageCircle,
  IndianRupee,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ==========================================
// FOUNDATION PAYMENT DETAILS
// ==========================================

const FOUNDATION_UPI_ID = "117998188023659@cnrb";
const FOUNDATION_UPI_NAME = "Saksham Foundation";

const FOUNDATION_PHONE = "+918830223458";
const FOUNDATION_EMAIL =
  "sakshamfoundationsmartskills@gmail.com";

// ==========================================
// BANK DETAILS
// ==========================================

const bankDetails = {
  bankName: "CANARA BANK",

  accountBranch: "263-PUNE KOREGAON PARK 411001",

  ifsc: "CNRB0000263",

  micr: "411015015",

  branchAddress:
    "Madhuban, S No.31, North Main Road, Koregaon Park, Pune 411001",

  email: "cb0263@canarabank.com",

  contactNumber: "2026157692",

  tollFree: "18001030",

  whatsappBanking: "18001030",

  accountNumber: "0263101023659",

  productName: "CURRENT ACCOUNT- GENERAL",

  customerId: "117998188",

  customerName: "SAKSHAM FOUNDATION",

  customerAddress:
    "GAT 955 H 1885 GANRAJ PARK, KADAM VAK VASTI, LONI KALBHOR, PUNE, MAHARASHTRA, IN 412307",

  accountTitle: "SAKSHAM FOUNDATION",

  authorizedPerson: "MAHESH ROHIDAS SONKAMBLE",
};

// ==========================================
// TRANSLATIONS
// ==========================================

const translations = {
  en: {
    heroBadge: "SUPPORT SAKSHAM FOUNDATION",
    heroHeading1: "Make a",
    heroHeading2: "Meaningful Contribution.",

    heroDescription:
      "Support skill development, healthcare training and livelihood opportunities for underserved youth and women.",

    heroButton: "Donation Details",

    floatingText1: "Empowering Youth",
    floatingText2: "Healthcare Skills",
    floatingText3: "Brighter Futures",

    donationLabel: "BANK & DONATION DETAILS",
    donationHeading1: "Support Our",
    donationHeading2: "Mission.",

    donationDescription:
      "Make a contribution using UPI, QR code or direct bank transfer to Saksham Foundation.",

    bankHeading: "Official Bank Account Details",
    bankSubtitle: "Canara Bank • Saksham Foundation",

    primaryDetails: "Bank Account Information",
    branchDetails: "Bank Branch Information",
    contactDetails: "Bank Contact Information",
    organizationDetails: "Account Holder Information",

    bankName: "Bank Name",
    accountBranch: "Account Branch",
    ifsc: "IFSC Code",
    micr: "MICR Code",
    branchAddress: "Branch Address",
    email: "Bank Email ID",
    contactNumber: "Bank Contact Number",
    tollFree: "Bank Toll Free Number",
    whatsappBanking: "WhatsApp Banking Number",
    accountNumber: "Account Number",
    productName: "Product / Account Type",
    customerId: "Customer ID",
    customerName: "Customer Name",
    customerAddress: "Registered Address",
    accountTitle: "Account Title",
    authorizedPerson: "Joint Holder / Authorised Person",

    copy: "Copy",
    copied: "Copied",

    quickLabel: "QUICK DONATION",
    quickHeading: "Donate via UPI",
    quickDescription:
      "Select an amount and continue securely through your preferred UPI application.",

    selectAmount: "Select Donation Amount",
    customAmount: "Enter Custom Amount",
    amountPlaceholder: "Enter amount in ₹",
    totalAmount: "Donation Amount",
    payButton: "Pay via UPI / PhonePe",
    upiIdLabel: "Saksham Foundation UPI ID",

    paymentNotice:
      "Verify the recipient name and amount in your UPI app before authorizing payment.",

    qrLabel: "SCAN & DONATE",
    qrHeading: "Donate Using QR Code",

    qrDescription:
      "Scan the donation QR code using PhonePe, Google Pay or another supported UPI application.",

    qrMissing: "Donation QR Code Not Available",
    qrMissingInfo: "Please add qr.png to your public folder.",

    qrNotice:
      "Verify the receiver's name and payment details before completing your transaction.",

    helpHeading: "Need Help With Your Donation?",

    helpDescription:
      "Contact Saksham Foundation for assistance with donation details or payment-related questions.",

    contactButton: "Call Our Team",
    emailButton: "Send Email",

    importantTitle: "Important Payment Information",

    importantDescription:
      "Please verify the bank account or UPI payment information with Saksham Foundation before donating. Save your transaction receipt for your records.",

    thankYou:
      "Your support helps create opportunities for a brighter future.",

    thankYouSub:
      "Thank you for supporting Saksham Foundation.",
  },

  mr: {
    heroBadge: "सक्षम फाउंडेशनला सहकार्य करा",
    heroHeading1: "तुमच्या योगदानातून",
    heroHeading2: "घडेल उज्ज्वल भविष्य.",

    heroDescription:
      "वंचित युवक व महिलांच्या कौशल्य विकास, आरोग्यसेवा प्रशिक्षण आणि रोजगाराभिमुख संधींसाठी आमच्या प्रयत्नांना सहकार्य करा.",

    heroButton: "योगदानाची माहिती पाहा",

    floatingText1: "युवक सक्षमीकरण",
    floatingText2: "आरोग्यसेवा कौशल्ये",
    floatingText3: "उज्ज्वल भविष्य",

    donationLabel: "बँक व देणगी माहिती",
    donationHeading1: "आमच्या कार्याला",
    donationHeading2: "हातभार लावा.",

    donationDescription:
      "सक्षम फाउंडेशनला UPI, QR कोड किंवा थेट बँक ट्रान्सफरद्वारे योगदान द्या.",

    bankHeading: "अधिकृत बँक खात्याची माहिती",
    bankSubtitle: "कॅनरा बँक • सक्षम फाउंडेशन",

    primaryDetails: "बँक खात्याची माहिती",
    branchDetails: "बँक शाखेची माहिती",
    contactDetails: "बँक संपर्क माहिती",
    organizationDetails: "खातेदाराची माहिती",

    bankName: "बँकेचे नाव",
    accountBranch: "खात्याची शाखा",
    ifsc: "IFSC कोड",
    micr: "MICR कोड",
    branchAddress: "शाखेचा पत्ता",
    email: "बँक ईमेल",
    contactNumber: "बँक संपर्क क्रमांक",
    tollFree: "बँक टोल फ्री क्रमांक",
    whatsappBanking: "WhatsApp Banking क्रमांक",
    accountNumber: "खाते क्रमांक",
    productName: "खात्याचा प्रकार",
    customerId: "Customer ID",
    customerName: "खातेदाराचे नाव",
    customerAddress: "नोंदणीकृत पत्ता",
    accountTitle: "Account Title",
    authorizedPerson: "संयुक्त खातेदार / अधिकृत व्यक्ती",

    copy: "कॉपी करा",
    copied: "कॉपी झाले",

    quickLabel: "त्वरित योगदान",
    quickHeading: "UPI द्वारे देणगी द्या",

    quickDescription:
      "देणगीची रक्कम निवडा आणि तुमच्या UPI App द्वारे पेमेंट करा.",

    selectAmount: "देणगीची रक्कम निवडा",
    customAmount: "इतर रक्कम टाका",
    amountPlaceholder: "रक्कम रुपयांमध्ये टाका",
    totalAmount: "देणगीची रक्कम",
    payButton: "UPI / PhonePe द्वारे पेमेंट करा",
    upiIdLabel: "सक्षम फाउंडेशन UPI ID",

    paymentNotice:
      "पेमेंट करण्यापूर्वी UPI App मध्ये प्राप्तकर्त्याचे नाव आणि रक्कम तपासा.",

    qrLabel: "स्कॅन करा व योगदान द्या",
    qrHeading: "QR कोडद्वारे योगदान",

    qrDescription:
      "PhonePe, Google Pay किंवा इतर UPI App वापरून Donation QR Code स्कॅन करा.",

    qrMissing: "Donation QR Code उपलब्ध नाही",
    qrMissingInfo: "public फोल्डरमध्ये qr.png Image ठेवा.",

    qrNotice:
      "व्यवहार पूर्ण करण्यापूर्वी प्राप्तकर्त्याचे नाव आणि पेमेंट तपशील तपासा.",

    helpHeading: "योगदानासाठी मदत हवी आहे?",

    helpDescription:
      "देणगी किंवा पेमेंट संदर्भातील शंकांसाठी सक्षम फाउंडेशनशी संपर्क साधा.",

    contactButton: "आमच्याशी संपर्क करा",
    emailButton: "ईमेल पाठवा",

    importantTitle: "महत्त्वाची पेमेंट माहिती",

    importantDescription:
      "योगदान करण्यापूर्वी बँक खाते किंवा UPI Payment ची माहिती सक्षम फाउंडेशनकडून तपासून घ्या. व्यवहाराची पावती सुरक्षित ठेवा.",

    thankYou:
      "तुमच्या सहकार्यातून उज्ज्वल भविष्यासाठी नवीन संधी निर्माण होऊ शकतात.",

    thankYouSub:
      "सक्षम फाउंडेशनला सहकार्य केल्याबद्दल धन्यवाद.",
  },
};

// ==========================================
// SCROLL REVEAL
// ==========================================

function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
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
        threshold: 0.08,
        rootMargin: "0px 0px 40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const positions = {
    up: "translate3d(0,35px,0)",
    left: "translate3d(-35px,0,0)",
    right: "translate3d(35px,0,0)",
    zoom: "scale(0.95)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate3d(0,0,0) scale(1)"
          : positions[direction] || positions.up,
        transitionProperty: "opacity, transform",
        transitionDuration: "850ms",
        transitionTimingFunction:
          "cubic-bezier(0.22,1,0.36,1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ==========================================
// COPY BUTTON
// ==========================================

function CopyButton({ value, t }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";

      document.body.appendChild(textarea);
      textarea.select();

      const success = document.execCommand("copy");
      document.body.removeChild(textarea);

      if (success) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`${t.copy}: ${value}`}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-[#061B50] transition hover:border-green-400 hover:bg-green-50"
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-600" />
      ) : (
        <Copy className="h-4 w-4" />
      )}

      {copied ? t.copied : t.copy}
    </button>
  );
}

// ==========================================
// BANK DETAIL ROW
// ==========================================

function DetailRow({
  label,
  value,
  t,
  copy = false,
  highlight = false,
}) {
  return (
    <div className="grid gap-2 border-b border-slate-100 py-3.5 last:border-b-0 sm:grid-cols-[160px_minmax(0,1fr)] sm:items-center sm:gap-4">
      <span className="text-xs font-semibold text-slate-500 sm:text-sm">
        {label}
      </span>

      <div className="flex min-w-0 items-center justify-between gap-3">
        <span
          className={`min-w-0 break-words text-sm ${
            highlight
              ? "font-extrabold text-[#061B50]"
              : "font-semibold text-slate-700"
          }`}
        >
          {value}
        </span>

        {copy && <CopyButton value={value} t={t} />}
      </div>
    </div>
  );
}

// ==========================================
// BANK DETAIL GROUP
// ==========================================

function DetailGroup({ title, icon: Icon, rows, t }) {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <div className="flex items-center gap-3 bg-[#F6F8FC] px-5 py-4 sm:px-7">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
          <Icon className="h-4 w-4" />
        </div>

        <h4 className="text-sm font-bold text-[#061B50]">
          {title}
        </h4>
      </div>

      <div className="px-5 py-2 sm:px-7">
        {rows.map((row) => (
          <DetailRow
            key={row.label}
            {...row}
            t={t}
          />
        ))}
      </div>
    </div>
  );
}

// ==========================================
// HERO VISUAL
// ==========================================

function DonateHeroVisual({ t }) {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto h-[290px] w-full max-w-[460px]"
    >
      <div className="donate-hero-glow absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-[60px]" />

      <div className="donate-orbit-ring absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />

      <div className="donate-orbit-ring absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-400/15" />

      <div className="donate-rotating-orbit absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-[#143976] text-orange-300 shadow-xl">
          <GraduationCap className="h-5 w-5" />
        </div>

        <div className="absolute bottom-0 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-[#143976] text-green-300 shadow-xl">
          <HeartPulse className="h-5 w-5" />
        </div>
      </div>

      <div className="donate-main-heart absolute left-1/2 top-1/2 z-10 flex h-[135px] w-[135px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[35px] border border-white/20 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        <HeartHandshake
          className="h-[70px] w-[70px] text-orange-400"
          strokeWidth={1.3}
        />
      </div>

      <div className="donate-hero-float absolute left-0 top-6 z-20 flex items-center gap-2 rounded-xl border border-white/15 bg-[#10346E]/95 px-4 py-3 shadow-2xl">
        <Users className="h-5 w-5 text-blue-300" />
        <span className="text-xs font-bold text-white">
          {t.floatingText1}
        </span>
      </div>

      <div className="donate-hero-float absolute -right-2 top-14 z-20 flex items-center gap-2 rounded-xl border border-white/15 bg-[#10346E]/95 px-4 py-3 shadow-2xl">
        <HeartPulse className="h-5 w-5 text-green-300" />
        <span className="text-xs font-bold text-white">
          {t.floatingText2}
        </span>
      </div>

      <div className="donate-hero-float absolute bottom-1 left-[15%] z-20 flex items-center gap-2 rounded-xl border border-white/15 bg-[#10346E]/95 px-4 py-3 shadow-2xl">
        <Heart className="h-5 w-5 text-orange-300" />
        <span className="text-xs font-bold text-white">
          {t.floatingText3}
        </span>
      </div>
    </div>
  );
}

// ==========================================
// QUICK UPI DONATION
// ==========================================

function QuickUPIDonation({ t }) {
  const [amount, setAmount] = useState("1000");
  const [customAmount, setCustomAmount] = useState("");

  const amounts = ["500", "1000", "2000", "5000"];

  const selectedAmount =
    amount === "custom" ? customAmount : amount;

  const numericAmount = Number(selectedAmount);

  const validAmount =
    selectedAmount !== "" &&
    Number.isFinite(numericAmount) &&
    numericAmount >= 1 &&
    numericAmount <= 100000;

  const handlePayment = () => {
    if (!validAmount) return;

    const params = new URLSearchParams({
      pa: FOUNDATION_UPI_ID,
      pn: FOUNDATION_UPI_NAME,
      am: numericAmount.toFixed(2),
      cu: "INR",
      tn: "Donation to Saksham Foundation",
    });

    const paymentUrl = `upi://pay?${params.toString()}`;

    window.location.href = paymentUrl;
  };

  return (
    <div className="overflow-hidden rounded-[24px] border border-green-200 bg-white shadow-[0_12px_40px_rgba(6,27,80,0.06)]">

      {/* HEADER */}
      <div className="bg-[#EAFBF0] px-5 py-5 sm:px-7">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 text-white">
            <IndianRupee className="h-6 w-6" />
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-green-700">
              {t.quickLabel}
            </p>

            <h3 className="text-lg font-extrabold text-[#061B50]">
              {t.quickHeading}
            </h3>
          </div>
        </div>

        <p className="mt-3 text-xs leading-6 text-slate-600">
          {t.quickDescription}
        </p>
      </div>

      <div className="p-5 sm:p-7">

        {/* AMOUNT SELECTION */}
        <p className="mb-4 text-sm font-bold text-[#061B50]">
          {t.selectAmount}
        </p>

        <div className="grid grid-cols-2 gap-3">
          {amounts.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setAmount(value)}
              aria-pressed={amount === value}
              className={`rounded-xl border-2 px-3 py-3.5 text-base font-extrabold transition-all ${
                amount === value
                  ? "border-green-600 bg-green-50 text-green-700"
                  : "border-slate-200 bg-white text-[#061B50] hover:border-green-300"
              }`}
            >
              ₹{Number(value).toLocaleString("en-IN")}
            </button>
          ))}
        </div>

        {/* CUSTOM AMOUNT */}
        <button
          type="button"
          onClick={() => setAmount("custom")}
          aria-pressed={amount === "custom"}
          className={`mt-3 w-full rounded-xl border-2 px-4 py-3 text-sm font-bold transition-all ${
            amount === "custom"
              ? "border-green-600 bg-green-50 text-green-700"
              : "border-slate-200 text-slate-600 hover:border-green-300"
          }`}
        >
          {t.customAmount}
        </button>

        {amount === "custom" && (
          <div className="mt-3">
            <label
              htmlFor="custom-donation-amount"
              className="mb-2 block text-xs font-semibold text-slate-600"
            >
              {t.customAmount}
            </label>

            <input
              id="custom-donation-amount"
              type="number"
              min="1"
              max="100000"
              step="1"
              inputMode="decimal"
              value={customAmount}
              onChange={(event) =>
                setCustomAmount(event.target.value)
              }
              placeholder={t.amountPlaceholder}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base font-semibold text-[#061B50] outline-none transition focus:border-green-600"
            />
          </div>
        )}

        {/* TOTAL AMOUNT */}
        <div className="mt-5 flex items-center justify-between gap-3 rounded-xl bg-[#F5F8FC] px-4 py-4">
          <span className="text-sm font-semibold text-slate-600">
            {t.totalAmount}
          </span>

          <span className="text-xl font-extrabold text-[#061B50]">
            {validAmount
              ? `₹${numericAmount.toLocaleString("en-IN")}`
              : "—"}
          </span>
        </div>

        {/* UPI ID */}
        <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4">
          <p className="mb-3 text-xs font-bold text-slate-500">
            {t.upiIdLabel}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="break-all text-sm font-extrabold text-[#061B50]">
              {FOUNDATION_UPI_ID}
            </span>

            <CopyButton
              value={FOUNDATION_UPI_ID}
              t={t}
            />
          </div>
        </div>

        {/* PAY BUTTON */}
        <button
          type="button"
          onClick={handlePayment}
          disabled={!validAmount}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#20B968] px-4 py-4 text-center text-sm font-extrabold text-white shadow-[0_10px_25px_rgba(32,185,104,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#159B53] hover:shadow-[0_15px_30px_rgba(32,185,104,0.3)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 sm:text-base"
        >
          <IndianRupee className="h-5 w-5 shrink-0" />

          {t.payButton}

          <ArrowUpRight className="h-4 w-4 shrink-0" />
        </button>

        {/* SECURITY NOTICE */}
        <div className="mt-5 flex items-start gap-2 border-t border-slate-100 pt-4">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />

          <p className="text-xs leading-6 text-slate-500">
            {t.paymentNotice}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// DONATION QR CODE
// ==========================================

function DonationQR({ t }) {
  const [qrStatus, setQrStatus] = useState("loading");

  return (
    <div className="donate-qr-card relative overflow-hidden rounded-[24px] bg-[#061B50] p-5 text-white shadow-[0_15px_45px_rgba(6,27,80,0.12)] sm:p-7">

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full border-[35px] border-white/5"
      />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1.5 text-[11px] font-bold uppercase text-orange-300">
          <QrCode className="h-4 w-4" />
          {t.qrLabel}
        </div>

        <h3 className="mt-5 text-xl font-extrabold sm:text-2xl">
          {t.qrHeading}
        </h3>

        <p className="mt-2 text-sm leading-6 text-white/70">
          {t.qrDescription}
        </p>

        {/* QR IMAGE */}
        <div className="mx-auto mt-6 max-w-[360px]">
          <div className="donate-qr-image overflow-hidden rounded-2xl bg-white p-3 shadow-xl sm:p-4">

            {qrStatus !== "error" && (
              <img
                src="/qr.png"
                alt="Saksham Foundation donation QR code"
                loading="lazy"
                decoding="async"
                onLoad={() => setQrStatus("loaded")}
                onError={() => setQrStatus("error")}
                className="block h-auto w-full object-contain"
              />
            )}

            {qrStatus === "error" && (
              <div className="flex min-h-[255px] flex-col items-center justify-center gap-3 px-3 text-center text-[#061B50]">
                <QrCode className="h-16 w-16 text-orange-500" />

                <p className="text-base font-extrabold">
                  {t.qrMissing}
                </p>

                <p className="text-xs leading-6 text-slate-500">
                  {t.qrMissingInfo}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />

          <p className="text-xs leading-6 text-white/80">
            {t.qrNotice}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// DONATION HELP CARD
// ==========================================

function DonationHelp({ t }) {
  return (
    <div className="relative overflow-hidden rounded-[24px] bg-[#EAF1FB] p-5 sm:p-7">
      <div className="relative z-10">

        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#061B50] shadow-sm">
          <MessageCircle className="h-5 w-5" />
        </div>

        <h3 className="text-lg font-extrabold text-[#061B50]">
          {t.helpHeading}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          {t.helpDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={`tel:${FOUNDATION_PHONE}`}
            className="group inline-flex items-center gap-2 rounded-lg bg-[#061B50] px-4 py-3 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#123678]"
          >
            <Phone className="h-4 w-4" />
            {t.contactButton}
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <a
            href={`mailto:${FOUNDATION_EMAIL}`}
            className="group inline-flex items-center gap-2 rounded-lg border border-[#061B50]/15 bg-white px-4 py-3 text-xs font-bold text-[#061B50] transition-all duration-300 hover:-translate-y-1 hover:border-orange-300"
          >
            <Mail className="h-4 w-4" />
            {t.emailButton}
          </a>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// MAIN DONATE PAGE
// ==========================================

export default function DonatePage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  // ========================================
  // BANK INFORMATION GROUPS
  // ========================================

  const groups = [
    {
      title: t.primaryDetails,
      icon: CreditCard,
      rows: [
        {
          label: t.bankName,
          value: bankDetails.bankName,
        },
        {
          label: t.accountTitle,
          value: bankDetails.accountTitle,
          copy: true,
          highlight: true,
        },
        {
          label: t.accountNumber,
          value: bankDetails.accountNumber,
          copy: true,
          highlight: true,
        },
        {
          label: t.ifsc,
          value: bankDetails.ifsc,
          copy: true,
          highlight: true,
        },
        {
          label: t.micr,
          value: bankDetails.micr,
          copy: true,
        },
        {
          label: t.productName,
          value: bankDetails.productName,
        },
      ],
    },

    {
      title: t.branchDetails,
      icon: Building2,
      rows: [
        {
          label: t.accountBranch,
          value: bankDetails.accountBranch,
        },
        {
          label: t.branchAddress,
          value: bankDetails.branchAddress,
        },
      ],
    },

    {
      title: t.contactDetails,
      icon: Phone,
      rows: [
        {
          label: t.email,
          value: bankDetails.email,
          copy: true,
        },
        {
          label: t.contactNumber,
          value: bankDetails.contactNumber,
          copy: true,
        },
        {
          label: t.tollFree,
          value: bankDetails.tollFree,
        },
        {
          label: t.whatsappBanking,
          value: bankDetails.whatsappBanking,
        },
      ],
    },

    {
      title: t.organizationDetails,
      icon: UserRound,
      rows: [
        {
          label: t.customerName,
          value: bankDetails.customerName,
          highlight: true,
        },
        {
          label: t.customerId,
          value: bankDetails.customerId,
          copy: true,
        },
        {
          label: t.customerAddress,
          value: bankDetails.customerAddress,
        },
        {
          label: t.authorizedPerson,
          value: bankDetails.authorizedPerson,
        },
      ],
    },
  ];

  return (
    <main className="overflow-x-hidden">

      {/* ===================================== */}
      {/* HERO */}
      {/* ===================================== */}

      <section
        id="donate-hero"
        className="relative isolate flex min-h-[365px] items-center overflow-hidden bg-[#061B50] py-14 text-white sm:min-h-[380px] lg:min-h-[390px] lg:py-12"
      >
        {/* BACKGROUND */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="donate-bg-orb absolute -right-20 -top-36 h-[420px] w-[420px] rounded-full bg-blue-500/15 blur-[90px]" />

          <div className="donate-bg-orb absolute -bottom-44 -left-20 h-[360px] w-[360px] rounded-full bg-orange-500/10 blur-[90px]" />

          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-7">

              <Reveal direction="left">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-400/10 px-3 py-1.5">
                  <HeartHandshake className="h-4 w-4 text-orange-400" />

                  <span className="text-[11px] font-bold uppercase tracking-[0.13em] text-orange-300">
                    {t.heroBadge}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[45px]">
                  {t.heroHeading1}{" "}

                  <span className="text-orange-400">
                    {t.heroHeading2}
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={180}>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
                  {t.heroDescription}
                </p>
              </Reveal>

              <Reveal delay={240}>
                <a
                  href="#donation-details"
                  className="donate-hero-button group relative mt-6 inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-orange-500 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-lg"
                >
                  <span className="donate-button-shine pointer-events-none absolute inset-0" />

                  <span className="relative z-10">
                    {t.heroButton}
                  </span>

                  <ArrowDown className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                </a>
              </Reveal>
            </div>

            {/* RIGHT HERO ANIMATION */}
            <div className="hidden lg:col-span-5 lg:block">
              <Reveal direction="right" delay={150}>
                <DonateHeroVisual t={t} />
              </Reveal>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-orange-500 via-orange-300 to-blue-500" />
      </section>

      {/* ===================================== */}
      {/* DONATION DETAILS */}
      {/* ===================================== */}

      <section
        id="donation-details"
        className="relative scroll-mt-24 overflow-hidden bg-[#F5F8FC] py-14 lg:py-20"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* SECTION HEADING */}
          <Reveal>
            <div className="mb-10 text-center">

              <span className="text-xs font-bold uppercase tracking-[0.14em] text-orange-600">
                {t.donationLabel}
              </span>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#061B50] sm:text-4xl lg:text-5xl">
                {t.donationHeading1}{" "}

                <span className="text-orange-600">
                  {t.donationHeading2}
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                {t.donationDescription}
              </p>
            </div>
          </Reveal>

          {/* TWO COLUMN LAYOUT */}
          <div className="grid items-start gap-7 lg:grid-cols-12">

            {/* ================================= */}
            {/* LEFT — BANK DETAILS */}
            {/* ================================= */}

            <div className="min-w-0 lg:col-span-7">
              <Reveal direction="left">

                <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_12px_40px_rgba(6,27,80,0.06)]">

                  {/* BANK HEADER */}
                  <div className="border-b border-slate-200 bg-white px-5 py-6 sm:px-7">
                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                        <Landmark className="h-6 w-6" />
                      </div>

                      <div>
                        <h3 className="text-xl font-extrabold text-[#061B50]">
                          {t.bankHeading}
                        </h3>

                        <p className="mt-1 text-xs font-medium text-slate-500">
                          {t.bankSubtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* BANK DETAIL GROUPS */}
                  {groups.map((group) => (
                    <DetailGroup
                      key={group.title}
                      title={group.title}
                      icon={group.icon}
                      rows={group.rows}
                      t={t}
                    />
                  ))}
                </div>
              </Reveal>
            </div>

            {/* ================================= */}
            {/* RIGHT — UPI + QR + HELP */}
            {/* ================================= */}

            <div className="min-w-0 space-y-5 lg:col-span-5">

              {/* QUICK UPI DONATION */}
              <Reveal direction="right" delay={50}>
                <QuickUPIDonation t={t} />
              </Reveal>

              {/* EXISTING QR CODE */}
              <Reveal direction="right" delay={100}>
                <DonationQR t={t} />
              </Reveal>


            </div>
          </div>

          {/* ================================= */}
          {/* IMPORTANT PAYMENT INFORMATION */}
          {/* ================================= */}

          <Reveal delay={150}>
            <div className="mt-9 flex items-start gap-3 rounded-2xl border border-orange-200 bg-orange-50 px-5 py-5 sm:px-6">

              <Info className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />

              <div>
                <h3 className="text-sm font-bold text-[#061B50]">
                  {t.importantTitle}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {t.importantDescription}
                </p>
              </div>
            </div>
          </Reveal>

          {/* THANK YOU */}
          <Reveal delay={200}>
            <div className="mx-auto mt-12 max-w-3xl text-center">

              <BadgeCheck className="mx-auto h-9 w-9 text-green-600" />

              <p className="mt-4 text-lg font-bold leading-8 text-[#061B50] sm:text-xl">
                {t.thankYou}
              </p>

              <p className="mt-3 text-sm font-semibold text-orange-600">
                {t.thankYouSub}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================================== */}
      {/* ANIMATIONS */}
      {/* ===================================== */}

      <style>{`
        @keyframes donateBackgroundFloat {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-25px, 20px);
          }
        }

        #donate-hero .donate-bg-orb {
          animation: donateBackgroundFloat 11s
            ease-in-out infinite;
        }

        @keyframes donateMainHeartFloat {
          0%, 100% {
            transform:
              translate(-50%, -50%) rotate(-4deg);
          }

          50% {
            transform:
              translate(-50%, -56%) rotate(4deg);
          }
        }

        #donate-hero .donate-main-heart {
          animation: donateMainHeartFloat 5s
            ease-in-out infinite;
        }

        @keyframes donateHeroGlow {
          0%, 100% {
            opacity: 0.45;
          }

          50% {
            opacity: 1;
          }
        }

        #donate-hero .donate-hero-glow {
          animation: donateHeroGlow 5s
            ease-in-out infinite;
        }

        @keyframes donateRingPulse {
          0%, 100% {
            opacity: 0.3;
          }

          50% {
            opacity: 0.8;
          }
        }

        #donate-hero .donate-orbit-ring {
          animation: donateRingPulse 5s
            ease-in-out infinite;
        }

        @keyframes donateOrbitRotate {
          from {
            transform:
              translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform:
              translate(-50%, -50%) rotate(360deg);
          }
        }

        #donate-hero .donate-rotating-orbit {
          animation: donateOrbitRotate 24s
            linear infinite;
        }

        @keyframes donateFloatingBadge {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-9px);
          }
        }

        #donate-hero .donate-hero-float {
          animation: donateFloatingBadge 4.5s
            ease-in-out infinite;
        }

        #donate-hero .donate-hero-float:nth-child(2) {
          animation-delay: 1.1s;
        }

        @keyframes donateButtonShine {
          from {
            transform: translateX(-160%);
          }

          to {
            transform: translateX(160%);
          }
        }

        #donate-hero .donate-button-shine {
          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(255,255,255,0.08) 38%,
            rgba(255,255,255,0.42) 50%,
            rgba(255,255,255,0.08) 62%,
            transparent 80%
          );

          transform: translateX(-160%);
          transition: transform 850ms ease;
        }

        #donate-hero .donate-hero-button:hover
        .donate-button-shine {
          transform: translateX(160%);
        }

        #donation-details .donate-qr-image {
          transition:
            transform 450ms ease,
            box-shadow 450ms ease;
        }

        #donation-details .donate-qr-card:hover
        .donate-qr-image {
          transform: translateY(-5px);
          box-shadow:
            0 24px 45px rgba(0,0,0,0.22);
        }

        #donate-hero a:focus-visible,
        #donation-details a:focus-visible,
        #donation-details button:focus-visible,
        #donation-details input:focus-visible {
          outline: 3px solid #fb923c;
          outline-offset: 3px;
        }

        @media (prefers-reduced-motion: reduce) {
          #donate-hero .donate-bg-orb,
          #donate-hero .donate-main-heart,
          #donate-hero .donate-hero-glow,
          #donate-hero .donate-orbit-ring,
          #donate-hero .donate-rotating-orbit,
          #donate-hero .donate-hero-float {
            animation: none !important;
          }

          #donate-hero .donate-button-shine,
          #donation-details .donate-qr-image {
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}
