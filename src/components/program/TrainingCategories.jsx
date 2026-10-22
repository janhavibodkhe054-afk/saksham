
import React from "react";
import {
  HeartPulse,
  Monitor,
  Factory,
  BookOpenCheck,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const categories = [
  {
    number: "01",
    title: "Healthcare & Paramedical Training",
    icon: HeartPulse,
    color: "text-orange-600",
    iconBg: "bg-orange-50",
    border: "group-hover:border-orange-300",
    label: "Training Experience",
    description:
      "Training experience covering General Duty Assistant, Operation Theatre Technician, Dialysis Technician, Nursing Care Assistant and ICU Technician.",
    areas: [
      "Patient Care",
      "Clinical Support",
      "Infection Prevention",
      "Hospital Practices",
      "Workplace Readiness",
    ],
  },
  {
    number: "02",
    title: "Computer & Digital Education",
    icon: Monitor,
    color: "text-blue-700",
    iconBg: "bg-blue-50",
    border: "group-hover:border-blue-300",
    label: "Training Experience",
    description:
      "Skill development experience in computer literacy, Tally, financial accounting, GST and workplace digital skills.",
    areas: [
      "Digital Literacy",
      "Office Productivity",
      "Accounting Fundamentals",
      "Employment Readiness",
    ],
  },
  {
    number: "03",
    title: "Technical & Industrial Training",
    icon: Factory,
    color: "text-green-700",
    iconBg: "bg-green-50",
    border: "group-hover:border-green-300",
    label: "Previous Project Experience",
    description:
      "Previous project experience in CNC/VMC Machine Operator and Fire & Safety training areas.",
    areas: [
      "Industrial Awareness",
      "Technical Skills",
      "Workplace Safety",
    ],
  },
  {
    number: "04",
    title: "Saksham Smart Class",
    icon: BookOpenCheck,
    color: "text-orange-600",
    iconBg: "bg-orange-50",
    border: "group-hover:border-orange-300",
    label: "Proposed Initiative",
    description:
      "A proposed blended EdTech initiative to improve access to technology-enabled education and computer skills among disadvantaged youth and adolescent girls.",
    areas: [
      "Digital Inclusion",
      "Skill Enhancement",
      "Better Learning Outcomes",
    ],
  },
];

export default function TrainingCategories() {
  return (
    <section
      id="programs"
      aria-labelledby="training-categories-heading"
      className="bg-[#F3F7FC] py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* HEADING */}
        <div className="mb-10 text-center lg:mb-12">
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-orange-500" />

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-orange-600">
              SKILL DEVELOPMENT
            </span>

            <span className="h-px w-8 bg-orange-500" />
          </div>

          <h2
            id="training-categories-heading"
            className="text-3xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-4xl lg:text-5xl"
          >
            Our Training{" "}
            <span className="text-orange-600">Categories</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Explore our training experience and initiatives across
            healthcare, digital education, technical skills and
            technology-enabled learning.
          </p>
        </div>

        {/* CATEGORY CARDS */}
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.number}
                className={`group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(6,27,80,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(6,27,80,0.09)] sm:p-8 ${category.border}`}
              >
                {/* Top Row */}
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${category.iconBg} ${category.color}`}
                  >
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>

                  <span className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
                    {category.number}
                  </span>
                </div>

                {/* Category Label */}
                <div className="mt-6">
                  <span className="inline-flex rounded-full bg-[#F3F7FC] px-3 py-1.5 text-xs font-semibold text-slate-600">
                    {category.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-xl font-bold leading-snug text-[#061B50] sm:text-2xl">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {category.description}
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-slate-100" />

                {/* Focus Areas */}
                <div className="mt-auto">
                  <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[#061B50]">
                    KEY FOCUS AREAS
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {category.areas.map((area) => (
                      <span
                        key={area}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Accent */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-8 h-[3px] w-0 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-20"
                />
              </article>
            );
          })}
        </div>

        {/* BOTTOM INFORMATION */}
        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-slate-500 sm:text-sm">
          Training availability may vary by project and location.
          Some categories reflect previous project experience,
          while Saksham Smart Class is a proposed initiative.
          Please contact our team for current program details.
        </p>
      </div>
    </section>
  );
}
