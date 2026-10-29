
import React, { useEffect, useRef, useState } from "react";
import { UsersRound } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  en: {
    eyebrow: "PEOPLE BEHIND THE PURPOSE",
    heading1: "Meet the People",
    heading2: "Behind Saksham Foundation.",
    description:
      "Meet the individuals contributing to Saksham Foundation's vision of skill development, education and meaningful opportunities for communities.",
    members: [
      {
        name: "Uttam Gopane",
        designation: "Director",
      },
      {
        name: "Sunil Ghorpade",
        designation: "Director",
      },
      {
        name: "Rahul Kamble",
        designation: "Director",
      },
      {
        name: "Hanumant Dikale",
        designation: "Director",
      },
    ],
  },

  mr: {
    eyebrow: "सक्षम फाउंडेशनमागील व्यक्तिमत्त्वे",
    heading1: "ओळख करून घ्या",
    heading2: "सक्षम फाउंडेशनच्या नेतृत्वाशी.",
    description:
      "कौशल्य विकास, शिक्षण आणि समाजासाठी अर्थपूर्ण संधी निर्माण करण्याच्या सक्षम फाउंडेशनच्या ध्येयाशी जोडलेल्या व्यक्तिमत्त्वांची ओळख.",
    members: [
      {
        name: "उत्तम गोपणे",
        designation: "संचालक",
      },
      {
        name: "सुनील घोरपडे",
        designation: "संचालक",
      },
      {
        name: "राहुल कांबळे",
        designation: "संचालक",
      },
      {
        name: "हनुमंत डिकले",
        designation: "संचालक",
      },
    ],
  },
};

const memberImages = [
  "/uttam.jpeg",
  "/sunil.jpeg",
  "/rahul.jpeg",
  "/hanumant.jpeg",
];

// ==========================================
// SCROLL REVEAL
// ==========================================

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
      { threshold: 0.1 }
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
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 800ms ease ${delay}ms, transform 800ms ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ==========================================
// MEMBER CARD
// ==========================================

function MemberCard({ member, image, index }) {
  const [imageFailed, setImageFailed] = useState(false);
  const green = index % 2 === 0;

  return (
    <article className="al-card group relative h-full overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_15px_45px_rgba(6,27,80,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(6,27,80,0.15)]">

      {/* MEMBER IMAGE */}
      <div className="relative h-[320px] overflow-hidden bg-[#102B60] sm:h-[350px] lg:h-[380px]">
        {!imageFailed ? (
          <img
            src={image}
            alt={member.name}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#123B70] to-[#061B50]">
            <UsersRound className="h-20 w-20 text-white/30" />
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061B50]/35 via-transparent to-transparent" />

        <span className="al-shine pointer-events-none absolute inset-0" />

        <div
          className={`absolute bottom-0 left-0 h-1 w-full ${
            green ? "bg-green-600" : "bg-orange-500"
          }`}
        />
      </div>

      {/* MEMBER INFORMATION */}
      <div className="relative p-6 text-center sm:p-7">

        <div
          className={`mx-auto mb-4 h-1 w-12 rounded-full ${
            green ? "bg-green-600" : "bg-orange-500"
          }`}
        />

        <h3 className="text-xl font-extrabold text-[#061B50] sm:text-2xl">
          {member.name}
        </h3>

        {/* DESIGNATION */}
        <p
          className={`mt-2 text-sm font-bold uppercase tracking-[0.12em] ${
            green ? "text-green-700" : "text-orange-600"
          }`}
        >
          {member.designation}
        </p>
      </div>
    </article>
  );
}

// ==========================================
// MAIN SECTION
// ==========================================

export default function AboutLeadership() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="about-leadership"
      className="relative overflow-hidden bg-[#F6F9FC] py-16 lg:py-24"
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-green-100/60 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* HEADER */}
        <Reveal>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-green-600" />

              <span className="text-xs font-bold uppercase tracking-[0.14em] text-green-700">
                {t.eyebrow}
              </span>

              <span className="h-px w-8 bg-green-600" />
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-[#061B50] sm:text-4xl lg:text-5xl">
              {t.heading1}{" "}
              <span className="text-orange-600">
                {t.heading2}
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              {t.description}
            </p>
          </div>
        </Reveal>

        {/* FOUR LEADERSHIP CARDS */}
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {t.members.map((member, index) => (
            <Reveal key={member.name} delay={index * 130}>
              <MemberCard
                member={member}
                image={memberImages[index]}
                index={index}
              />
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        #about-leadership .al-shine {
          background: linear-gradient(
            115deg,
            transparent 20%,
            rgba(255,255,255,0.04) 38%,
            rgba(255,255,255,0.35) 50%,
            rgba(255,255,255,0.04) 62%,
            transparent 80%
          );

          transform: translateX(-160%);
          transition: transform 900ms ease;
        }

        #about-leadership .al-card:hover .al-shine {
          transform: translateX(160%);
        }

        @media (prefers-reduced-motion: reduce) {
          #about-leadership .al-shine {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
