
import React, { useEffect, useRef, useState } from "react";
import {
  HeartPulse,
  Factory,
  Landmark,
  BookOpen,
  ArrowUpRight,
  X,
  Clock3,
  CheckCircle2,
  MessageCircle,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ======================================
// COURSE INFORMATION
// ======================================

const translations = {
  en: {
    eyebrow: "CHOOSE YOUR CAREER PATH",
    title1: "Four Sectors.",
    title2: "Multiple Career Opportunities.",
    description:
      "Explore industry-focused training in healthcare, industrial technology, finance, banking, IT and education. Find the learning path that matches your career goals.",
    viewCourses: "View Courses",
    courseCount: "Courses",
    modalEyebrow: "EXPLORE TRAINING PROGRAMS",
    duration: "Duration",
    enquiry: "Enquire Now",
    close: "Close",
    courseNote:
      "Course availability, fees, eligibility and certification vary by program and batch.",

    categories: [
      {
        id: "healthcare",
        number: "01",
        title: "Healthcare & Paramedical",
        description:
          "Develop essential patient-care and healthcare support skills.",
        tags: ["GDA", "Paramedical", "Patient Care"],
        courses: [
          {
            name: "General Duty Assistant (GDA)",
            duration: "3 Months",
            details:
              "Patient care, hygiene, infection prevention, communication, first aid awareness and hospital exposure. 45 days classroom + 45 days OJT.",
          },
          {
            name: "Paramedical & Healthcare Support",
            duration: "Contact for Details",
            details:
              "Foundational healthcare knowledge, patient assistance and workplace readiness.",
          },
        ],
      },
      {
        id: "industrial",
        number: "02",
        title: "Industrial & Technical",
        description:
          "Gain practical machine-operation and industrial safety skills.",
        tags: ["CNC", "VMC", "Forklift", "Fire & Safety"],
        courses: [
          {
            name: "CNC Machine Operator",
            duration: "Contact for Details",
            details:
              "CNC operations, tooling, measurement, basic programming concepts and safety.",
          },
          {
            name: "VMC Machine Operator",
            duration: "Contact for Details",
            details:
              "VMC machine operations, setup, workpiece handling and quality checks.",
          },
          {
            name: "Industrial Machine Operator",
            duration: "Contact for Details",
            details:
              "Machine handling, production operations, quality awareness and safety.",
          },
          {
            name: "Forklift Operator",
            duration: "Contact for Details",
            details:
              "Material handling, warehouse operations, inspections and forklift safety.",
          },
          {
            name: "Fire & Safety",
            duration: "Contact for Details",
            details:
              "Workplace hazard awareness, fire prevention and emergency response.",
          },
        ],
      },
      {
        id: "finance",
        number: "03",
        title: "Finance, Banking & IT",
        description:
          "Explore financial services, accounting and modern digital skills.",
        tags: ["BFSI", "Accounting", "AI", "Marketing"],
        courses: [
          {
            name: "BFSI – Financial Risk Management & Banking Operations",
            duration: "3 Months",
            details:
              "Financial risk management, banking processes, practical simulations and banking operations.",
          },
          {
            name: "Financial Accounting & Taxation",
            duration: "6 or 12 Months",
            details:
              "Accountancy, bookkeeping, Tally ERP9, GST, TDS, payroll, Advanced Excel and office tools.",
          },
          {
            name: "Artificial Intelligence (AI)",
            duration: "Contact for Details",
            details:
              "AI fundamentals, generative AI applications, prompt writing and digital productivity.",
          },
          {
            name: "Digital Marketing",
            duration: "Contact for Details",
            details:
              "Social media marketing, SEO, digital advertisements and campaign analytics.",
          },
          {
            name: "Computer Applications & Office Tools",
            duration: "Contact for Details",
            details:
              "Spreadsheets, presentations, computer fundamentals and workplace digital communication.",
          },
        ],
      },
      {
        id: "education",
        number: "04",
        title: "Education & Academic Support",
        description:
          "Strengthen foundational learning and academic confidence.",
        tags: ["Saksham Study Centre", "Academic Support"],
        courses: [
          {
            name: "Saksham Study Centre",
            duration: "As per Batch",
            details:
              "Academic support, concept clarity, guided reading and writing, study habits and student development.",
          },
        ],
      },
    ],
  },

  mr: {
    eyebrow: "तुमच्या करिअरची दिशा निवडा",
    title1: "चार प्रमुख क्षेत्रे.",
    title2: "करिअरच्या अनेक संधी.",
    description:
      "आरोग्यसेवा, औद्योगिक तंत्रज्ञान, फायनान्स, बँकिंग, IT आणि शिक्षण क्षेत्रातील प्रशिक्षण पर्याय जाणून घ्या.",
    viewCourses: "कोर्सेस पाहा",
    courseCount: "कोर्सेस",
    modalEyebrow: "प्रशिक्षण कार्यक्रम",
    duration: "कालावधी",
    enquiry: "आता चौकशी करा",
    close: "बंद करा",
    courseNote:
      "कोर्सची उपलब्धता, फी, पात्रता आणि प्रमाणपत्राची माहिती बॅच व प्रशिक्षणानुसार बदलू शकते.",

    categories: [
      {
        id: "healthcare",
        number: "01",
        title: "हेल्थकेअर व पॅरामेडिकल",
        description:
          "रुग्णसेवा आणि आरोग्यसेवा सहाय्यासाठी आवश्यक कौशल्ये शिका.",
        tags: ["GDA", "पॅरामेडिकल", "रुग्णसेवा"],
        courses: [
          {
            name: "जनरल ड्युटी असिस्टंट (GDA)",
            duration: "३ महिने",
            details:
              "रुग्णसेवा, स्वच्छता, इन्फेक्शन प्रिव्हेन्शन, संवाद, प्रथमोपचार आणि हॉस्पिटल अनुभव. ४५ दिवस क्लासरूम + ४५ दिवस OJT.",
          },
          {
            name: "पॅरामेडिकल व हेल्थकेअर सपोर्ट",
            duration: "माहितीसाठी संपर्क करा",
            details:
              "आरोग्यसेवेचे मूलभूत ज्ञान आणि रुग्णांना मदत करण्याचे प्रशिक्षण.",
          },
        ],
      },
      {
        id: "industrial",
        number: "02",
        title: "औद्योगिक व तांत्रिक",
        description:
          "मशीन ऑपरेशन आणि औद्योगिक सुरक्षेची कौशल्ये विकसित करा.",
        tags: ["CNC", "VMC", "फोर्कलिफ्ट", "फायर अँड सेफ्टी"],
        courses: [
          {
            name: "CNC मशीन ऑपरेटर",
            duration: "माहितीसाठी संपर्क करा",
            details:
              "CNC ऑपरेशन, टूलिंग, मोजमाप आणि सुरक्षित कामकाज.",
          },
          {
            name: "VMC मशीन ऑपरेटर",
            duration: "माहितीसाठी संपर्क करा",
            details:
              "VMC मशीन सेटअप, ऑपरेशन आणि गुणवत्ता तपासणी.",
          },
          {
            name: "इंडस्ट्रियल मशीन ऑपरेटर",
            duration: "माहितीसाठी संपर्क करा",
            details:
              "मशीन हाताळणी, उत्पादन प्रक्रिया आणि औद्योगिक सुरक्षा.",
          },
          {
            name: "फोर्कलिफ्ट ऑपरेटर",
            duration: "माहितीसाठी संपर्क करा",
            details:
              "मटेरियल हँडलिंग आणि फोर्कलिफ्ट ऑपरेशनमधील सुरक्षा.",
          },
          {
            name: "फायर अँड सेफ्टी",
            duration: "माहितीसाठी संपर्क करा",
            details:
              "आग प्रतिबंध, कामाच्या ठिकाणची सुरक्षा आणि आपत्कालीन प्रतिसाद.",
          },
        ],
      },
      {
        id: "finance",
        number: "03",
        title: "फायनान्स, बँकिंग व IT",
        description:
          "बँकिंग, अकाउंटिंग आणि डिजिटल क्षेत्रातील कौशल्ये शिका.",
        tags: ["BFSI", "अकाउंटिंग", "AI", "मार्केटिंग"],
        courses: [
          {
            name: "BFSI – फायनान्शियल रिस्क व बँकिंग ऑपरेशन्स",
            duration: "३ महिने",
            details:
              "फायनान्शियल रिस्क मॅनेजमेंट, बँकिंग प्रक्रिया आणि प्रात्यक्षिक प्रशिक्षण.",
          },
          {
            name: "फायनान्शियल अकाउंटिंग व टॅक्सेशन",
            duration: "६ किंवा १२ महिने",
            details:
              "बुककीपिंग, Tally ERP9, GST, TDS, Payroll आणि Advanced Excel.",
          },
          {
            name: "आर्टिफिशियल इंटेलिजन्स (AI)",
            duration: "माहितीसाठी संपर्क करा",
            details:
              "AI ची मूलभूत माहिती, Generative AI Tools आणि Prompt Writing.",
          },
          {
            name: "डिजिटल मार्केटिंग",
            duration: "माहितीसाठी संपर्क करा",
            details:
              "सोशल मीडिया, SEO, डिजिटल जाहिराती आणि Analytics.",
          },
          {
            name: "कॉम्प्युटर ॲप्लिकेशन्स व ऑफिस टूल्स",
            duration: "माहितीसाठी संपर्क करा",
            details:
              "कॉम्प्युटर, स्प्रेडशीट्स आणि ऑफिस सॉफ्टवेअर.",
          },
        ],
      },
      {
        id: "education",
        number: "04",
        title: "शिक्षण व शैक्षणिक मार्गदर्शन",
        description:
          "विद्यार्थ्यांचा शैक्षणिक पाया आणि आत्मविश्वास मजबूत करा.",
        tags: ["सक्षम स्टडी सेंटर", "शैक्षणिक मार्गदर्शन"],
        courses: [
          {
            name: "सक्षम स्टडी सेंटर",
            duration: "बॅचनुसार",
            details:
              "अभ्यासाचे मार्गदर्शन, वाचन, लेखन, संकल्पना स्पष्टता आणि अभ्यासाच्या सवयी.",
          },
        ],
      },
    ],
  },
};

// ======================================
// IMAGES & ICONS
// ======================================

const visuals = {
  healthcare: {
    src: "/g10.jpeg",
    icon: HeartPulse,
    color: "green",
  },
  industrial: {
    src: "/g42.jpeg",
    icon: Factory,
    color: "orange",
  },
  finance: {
    src: "/a1.jpeg",
    icon: Landmark,
    color: "green",
  },
  education: {
    src: "/g18.jpeg",
    icon: BookOpen,
    color: "orange",
  },
};

// ======================================
// SCROLL REVEAL
// ======================================

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
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
      { threshold: 0.08, rootMargin: "0px 0px 35px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="h-full"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0)"
          : "translateY(35px)",
        transition:
          `opacity 750ms ease ${delay}ms, transform 750ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ======================================
// COURSE CATEGORY CARD
// ======================================

function CategoryCard({ category, visual, t, onOpen }) {
  const [imageError, setImageError] = useState(false);
  const Icon = visual.icon;
  const green = visual.color === "green";

  return (
    <article className="cc-card group flex h-full min-w-0 flex-col overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_8px_28px_rgba(6,27,80,0.055)] transition-all duration-500 hover:-translate-y-2 hover:border-green-200 hover:shadow-[0_24px_48px_rgba(6,27,80,0.12)]">
      {/* IMAGE */}
      <div className="relative h-[185px] overflow-hidden bg-[#102A5D] sm:h-[200px] xl:h-[215px]">
        {!imageError ? (
          <img
            src={visual.src}
            alt={`${category.title} training`}
            loading="lazy"
            decoding="async"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Icon className="h-16 w-16 text-white/30" />
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061B50]/80 via-transparent to-transparent" />

        <span className="absolute left-4 top-4 rounded-lg border border-white/20 bg-[#061B50]/70 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
          {category.number}
        </span>

        <div
          className={`absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/30 shadow-lg ${
            green ? "bg-green-600" : "bg-orange-500"
          } text-white`}
        >
          <Icon className="h-5 w-5" />
        </div>

        <span className="cc-image-shine pointer-events-none absolute inset-0" />
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-5 xl:p-6">
        <h3 className="text-[17px] font-extrabold leading-[1.35] text-[#061B50] xl:text-[19px]">
          {category.title}
        </h3>

        <p className="mt-3 text-[13px] leading-6 text-slate-600">
          {category.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {category.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-md px-2.5 py-1.5 text-[10px] font-semibold ${
                green
                  ? "bg-green-50 text-green-700"
                  : "bg-orange-50 text-orange-700"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-5">
          <div className="mb-3 flex items-center justify-between border-t border-slate-100 pt-3">
            <span className="text-xs font-semibold text-slate-500">
              {t.courseCount}
            </span>
            <span className="flex items-center gap-1.5 text-sm font-bold text-green-700">
              <GraduationCap className="h-4 w-4" />
              {String(category.courses.length).padStart(2, "0")}
            </span>
          </div>

          <button
            type="button"
            onClick={onOpen}
            className={`cc-view-button group/btn relative flex w-full items-center justify-between overflow-hidden rounded-xl px-4 py-3.5 text-sm font-bold text-white transition-all duration-300 ${
              green
                ? "bg-green-700 hover:bg-green-800"
                : "bg-[#061B50] hover:bg-orange-600"
            }`}
          >
            <span className="relative z-10">
              {t.viewCourses}
            </span>
            <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            <span className="cc-button-shine pointer-events-none absolute inset-0" />
          </button>
        </div>
      </div>
    </article>
  );
}

// ======================================
// COURSE MODAL
// ======================================

function CourseModal({ category, t, onClose, onEnquire }) {
  const closeRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const oldOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "Tab") {
        const focusable = modalRef.current?.querySelectorAll(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
        );

        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className="cc-modal-backdrop fixed inset-0 z-[9999] flex items-center justify-center bg-[#03132E]/80 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cc-modal-title"
        className="cc-modal-panel flex max-h-[90dvh] w-full max-w-[850px] flex-col overflow-hidden rounded-[22px] bg-white shadow-2xl"
      >
        <div className="flex shrink-0 items-start justify-between gap-4 bg-[#061B50] p-5 text-white sm:p-7">
          <div>
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-green-300">
              <Sparkles className="h-4 w-4" />
              {t.modalEyebrow}
            </span>

            <h3
              id="cc-modal-title"
              className="mt-2 text-xl font-extrabold sm:text-2xl"
            >
              {category.title}
            </h3>

            <p className="mt-2 text-xs text-white/70">
              {category.description}
            </p>
          </div>

          <button
            ref={closeRef}
            type="button"
            aria-label={t.close}
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-3 overflow-y-auto overscroll-contain p-4 sm:p-6">
          {category.courses.map((course) => (
            <div
              key={course.name}
              className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 transition-all duration-300 hover:border-green-200 hover:bg-white sm:p-5"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1">
                  <h4 className="flex items-start gap-2 text-sm font-bold leading-6 text-[#061B50] sm:text-base">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-green-600" />
                    {course.name}
                  </h4>

                  <p className="mt-2 pl-6 text-xs leading-6 text-slate-600 sm:text-sm">
                    {course.details}
                  </p>

                  <p className="mt-3 flex items-center gap-2 pl-6 text-xs text-slate-500">
                    <Clock3 className="h-4 w-4 text-orange-600" />
                    {t.duration}:{" "}
                    <strong className="text-[#061B50]">
                      {course.duration}
                    </strong>
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onEnquire(course.name)}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-green-700 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-green-800"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t.enquiry}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}

          <p className="px-1 pt-2 text-xs leading-6 text-slate-500">
            {t.courseNote}
          </p>
        </div>

        <div className="h-1 shrink-0 bg-gradient-to-r from-green-600 via-orange-500 to-green-600" />
      </div>
    </div>
  );
}

// ======================================
// MAIN SECTION
// ======================================

export default function CourseCategories() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const [activeCategory, setActiveCategory] = useState(null);

  const selected =
    activeCategory === null
      ? null
      : t.categories.find((item) => item.id === activeCategory);

  const handleEnquire = (courseName) => {
    const message =
      language === "mr"
        ? `नमस्कार सक्षम फाउंडेशन, मला "${courseName}" या कोर्सची माहिती हवी आहे. कृपया पात्रता, फी, प्रवेश प्रक्रिया आणि आगामी बॅचची माहिती द्या.`
        : `Hello Saksham Foundation, I would like to enquire about "${courseName}". Please share eligibility, fees, admission details and upcoming batches.`;

    const url =
      "https://wa.me/918830223458?text=" +
      encodeURIComponent(message);

    const popup = window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );

    if (!popup) {
      window.location.href = url;
    }
  };

  return (
    <>
      <section
        id="course-categories"
        aria-labelledby="cc-heading"
        className="relative scroll-mt-28 overflow-hidden bg-[#F5F8FC] py-16 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="cc-bg-orb absolute -right-28 -top-24 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />
          <div className="cc-bg-orb absolute -bottom-32 -left-28 h-80 w-80 rounded-full bg-green-100/60 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* HEADER */}
          <Reveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-3">
                <span className="h-px w-7 bg-green-600" />
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-green-700">
                  {t.eyebrow}
                </span>
                <span className="h-px w-7 bg-green-600" />
              </div>

              <h2
                id="cc-heading"
                className="text-3xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-4xl lg:text-[44px]"
              >
                {t.title1}{" "}
                <span className="text-orange-600">
                  {t.title2}
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                {t.description}
              </p>
            </div>
          </Reveal>

          {/* FOUR CARDS IN ONE ROW */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {t.categories.map((category, index) => (
              <Reveal key={category.id} delay={index * 90}>
                <CategoryCard
                  category={category}
                  visual={visuals[category.id]}
                  t={t}
                  onOpen={() => setActiveCategory(category.id)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <CourseModal
          category={selected}
          t={t}
          onClose={() => setActiveCategory(null)}
          onEnquire={handleEnquire}
        />
      )}

      <style>{`
        @keyframes ccOrbFloat {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-18px, 20px); }
        }

        #course-categories .cc-bg-orb {
          animation: ccOrbFloat 12s ease-in-out infinite;
        }

        #course-categories .cc-image-shine {
          background: linear-gradient(
            115deg,
            transparent 20%,
            rgba(255,255,255,0.06) 38%,
            rgba(255,255,255,0.42) 50%,
            rgba(255,255,255,0.06) 62%,
            transparent 80%
          );
          transform: translateX(-160%);
          transition: transform 900ms ease;
        }

        #course-categories .cc-card:hover .cc-image-shine {
          transform: translateX(160%);
        }

        #course-categories .cc-button-shine {
          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(255,255,255,0.06) 40%,
            rgba(255,255,255,0.32) 50%,
            rgba(255,255,255,0.06) 60%,
            transparent 80%
          );
          transform: translateX(-150%);
          transition: transform 750ms ease;
        }

        #course-categories .cc-view-button:hover .cc-button-shine {
          transform: translateX(150%);
        }

        @keyframes ccModalFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes ccModalScale {
          from {
            opacity: 0;
            transform: translateY(25px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .cc-modal-backdrop {
          animation: ccModalFade 220ms ease-out both;
        }

        .cc-modal-panel {
          animation: ccModalScale 360ms cubic-bezier(0.22,1,0.36,1) both;
        }

        #course-categories button:focus-visible,
        .cc-modal-panel button:focus-visible {
          outline: 3px solid #f97316;
          outline-offset: 3px;
        }

        @media (prefers-reduced-motion: reduce) {
          #course-categories .cc-bg-orb,
          .cc-modal-backdrop,
          .cc-modal-panel {
            animation: none !important;
          }

          #course-categories .cc-image-shine,
          #course-categories .cc-button-shine {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}
