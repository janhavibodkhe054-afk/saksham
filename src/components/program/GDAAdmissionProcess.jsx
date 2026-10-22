
import React from "react";
import {
  ArrowRight,
  UserRoundCheck,
  HeartPulse,
  BookOpenCheck,
  ClipboardPenLine,
  MessagesSquare,
  FileCheck2,
  GraduationCap,
  Hospital,
  BriefcaseBusiness,
  Check,
} from "lucide-react";

const eligibility = [
  {
    icon: UserRoundCheck,
    title: "Age 18–35 Years",
    description: "Applicants within the eligible age group.",
  },
  {
    icon: HeartPulse,
    title: "Interest in Healthcare",
    description: "Interested in healthcare support roles.",
  },
  {
    icon: BookOpenCheck,
    title: "Ready to Learn",
    description: "Willing to complete classroom and hospital training.",
  },
];

const admissionSteps = [
  {
    title: "Submit Your Registration",
    description: "Complete the student registration form.",
    icon: ClipboardPenLine,
  },
  {
    title: "Counselling & Eligibility Guidance",
    description: "Understand the program and eligibility requirements.",
    icon: MessagesSquare,
  },
  {
    title: "Complete Documentation",
    description: "Provide the required admission documents.",
    icon: FileCheck2,
  },
  {
    title: "Begin Classroom Training",
    description: "Start 45 days of healthcare skill development.",
    icon: GraduationCap,
  },
  {
    title: "Complete Hospital OJT",
    description: "Gain 45 days of supervised hospital experience.",
    icon: Hospital,
  },
  {
    title: "Receive Placement Assistance",
    description: "Get support for healthcare employment opportunities.",
    icon: BriefcaseBusiness,
  },
];

export default function GDAAdmissionProcess() {
  return (
    <section
      id="gda-admission"
      aria-labelledby="gda-admission-heading"
      className="bg-[#F5F8FC] py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* SECTION HEADER */}
        <div className="mb-10 text-center lg:mb-12">
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-orange-500" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-orange-600">
              ELIGIBILITY & ADMISSION
            </span>
            <span className="h-px w-8 bg-orange-500" />
          </div>

          <h2
            id="gda-admission-heading"
            className="text-3xl font-extrabold leading-tight tracking-tight text-[#061B50] sm:text-4xl lg:text-5xl"
          >
            Take the First Step{" "}
            <span className="text-orange-600">
              Towards Your Career
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            A simple admission process to help you begin your
            journey towards practical healthcare training.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid items-start gap-7 lg:grid-cols-12 lg:gap-10">

          {/* LEFT - ELIGIBILITY */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_35px_rgba(6,27,80,0.04)]">

              {/* Top Header */}
              <div className="border-b border-slate-100 px-6 py-6 sm:px-8">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  WHO CAN APPLY?
                </span>

                <h3 className="mt-2 text-2xl font-extrabold text-[#061B50]">
                  Eligibility Criteria
                </h3>
              </div>

              {/* Eligibility Points */}
              <div className="space-y-6 px-6 py-7 sm:px-8">
                {eligibility.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                        <Icon className="h-6 w-6" strokeWidth={1.8} />
                      </div>

                      <div>
                        <h4 className="text-base font-bold text-[#061B50]">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Note */}
              <div className="border-t border-slate-100 bg-slate-50 px-6 py-5 sm:px-8">
                <p className="text-xs leading-6 text-slate-600">
                  Final admission is subject to applicable
                  project and documentation requirements.
                </p>
              </div>

            </div>

            {/* REGISTRATION CTA */}
            <div className="mt-6 rounded-2xl bg-[#061B50] p-6 text-white sm:p-8">
              <h3 className="text-xl font-bold">
                Ready to Get Started?
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/75">
                Complete your registration and our team can
                guide you through the next steps.
              </p>

              <a
                href="/contact.html#register"
                className="group mt-6 inline-flex items-center gap-3 rounded-lg bg-orange-600 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-700"
              >
                Register Now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* RIGHT - ADMISSION PROCESS */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(6,27,80,0.04)] sm:p-8 lg:p-9">

              {/* Process Heading */}
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                    STEP BY STEP
                  </span>

                  <h3 className="mt-2 text-2xl font-extrabold text-[#061B50]">
                    Admission Process
                  </h3>
                </div>

                <span className="rounded-full bg-orange-50 px-4 py-2 text-xs font-bold text-orange-600">
                  06 Steps
                </span>
              </div>

              {/* Vertical Timeline */}
              <div className="relative">

                {/* Connecting Line */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-8 left-[23px] top-6 w-px bg-slate-200"
                />

                <div className="space-y-7">
                  {admissionSteps.map((step, index) => {
                    const Icon = step.icon;

                    return (
                      <div
                        key={step.title}
                        className="group relative flex items-start gap-5"
                      >
                        {/* Step Number */}
                        <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#061B50] text-sm font-bold text-white shadow-sm transition-colors duration-300 group-hover:bg-orange-600">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        {/* Step Content */}
                        <div className="flex-1 border-b border-slate-100 pb-6 last:border-b-0">
                          <div className="flex items-start gap-3">
                            <div>
                              <h4 className="text-base font-bold leading-snug text-[#061B50]">
                                {step.title}
                              </h4>

                              <p className="mt-2 text-sm leading-6 text-slate-600">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Step Icon */}
                        <Icon className="mt-1 hidden h-5 w-5 shrink-0 text-orange-500 sm:block" />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Note */}
              <div className="mt-3 flex items-start gap-2 rounded-xl bg-[#F3F7FC] px-4 py-4">
                <Check className="mt-1 h-4 w-4 shrink-0 text-green-700" />

                <p className="text-xs leading-6 text-slate-600">
                  Placement assistance is provided after training.
                  Employment is subject to available opportunities
                  and selection requirements.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
