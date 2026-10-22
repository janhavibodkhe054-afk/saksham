
import React from "react";
import {
  ArrowRight,
  GraduationCap,
  Hospital,
  CalendarDays,
  BriefcaseBusiness,
  Check,
} from "lucide-react";

const highlights = [
  {
    number: "90",
    unit: "Days",
    title: "Total Training",
    icon: CalendarDays,
    style: "bg-[#061B50] text-white",
    iconStyle: "bg-white/15 text-white",
    position: "lg:-translate-y-7",
  },
  {
    number: "45",
    unit: "Days",
    title: "Classroom Training",
    icon: GraduationCap,
    style: "bg-orange-50 text-[#061B50]",
    iconStyle: "bg-orange-100 text-orange-600",
    position: "lg:translate-y-1",
  },
  {
    number: "45",
    unit: "Days",
    title: "Hospital OJT",
    icon: Hospital,
    style: "bg-[#F3F7FC] text-[#061B50]",
    iconStyle: "bg-white text-[#061B50]",
    position: "lg:-translate-y-7",
  },
  {
    number: "100%",
    unit: "",
    title: "Placement Assistance",
    icon: BriefcaseBusiness,
    style: "bg-[#061B50] text-white",
    iconStyle: "bg-white/15 text-white",
    position: "lg:translate-y-1",
  },
];

export default function FeaturedGDASection() {
  const programPoints = [
    "Completely Free Training",
    "Age Eligibility: 18–35 Years",
    "45 Days Classroom + 45 Days Hospital OJT",
    "Training Location: Chinchwad Station, Pune",
  ];

  return (
    <section
      id="featured-gda"
      aria-labelledby="gda-heading"
      className="overflow-hidden bg-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-orange-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
                FEATURED HEALTHCARE PROGRAM
              </span>
            </div>

            <h2
              id="gda-heading"
              className="text-3xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-4xl lg:text-[43px]"
            >
              Free General Duty Assistant
              <span className="block text-orange-600">
                (GDA) Training
              </span>
            </h2>

            <p className="mt-5 text-base font-semibold text-[#061B50]">
              Practical Learning. Real Hospital Experience.
            </p>

            <div className="mt-5 h-1 w-16 rounded-full bg-orange-500" />

            <p className="mt-7 max-w-xl text-sm leading-8 text-slate-600 sm:text-base">
              A 90-day training program combining classroom
              learning and practical hospital experience to
              prepare eligible candidates for healthcare
              support roles.
            </p>

            {/* PROGRAM POINTS */}
            <div className="mt-8 space-y-4">
              {programPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </div>

                  <p className="text-sm font-medium leading-7 text-slate-700 sm:text-base">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/contact.html#register"
              className="group mt-9 inline-flex items-center gap-3 rounded-lg bg-orange-600 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-700 hover:shadow-lg"
            >
              Register for Free Training
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <p className="mt-4 text-xs text-slate-500">
              Registration subject to eligibility and seat availability.
            </p>
          </div>

          {/* RIGHT STAGGERED CARDS */}
          <div className="lg:col-span-6">
            <div className="mx-auto grid max-w-[570px] grid-cols-2 gap-4 sm:gap-6 lg:py-7">

              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`group flex min-h-[195px] flex-col items-center justify-center rounded-lg px-4 py-7 text-center transition-all duration-300 hover:-translate-y-2 sm:min-h-[235px] ${item.style} ${item.position}`}
                  >
                    {/* ICON */}
                    <div
                      className={`mb-5 flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${item.iconStyle}`}
                    >
                      <Icon className="h-8 w-8" strokeWidth={1.7} />
                    </div>

                    {/* NUMBER */}
                    <p className="text-4xl font-extrabold leading-none sm:text-5xl">
                      {item.number}
                    </p>

                    {/* LABEL */}
                    <p className="mt-3 text-sm font-semibold leading-snug sm:text-base">
                      {item.unit
                        ? `${item.unit} ${item.title}`
                        : item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
