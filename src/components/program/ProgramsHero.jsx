
import React from "react";
import { Home, ChevronRight, ArrowRight } from "lucide-react";

export default function ProgramsHero() {
  return (
    <section
      id="programs-hero"
      aria-labelledby="programs-hero-title"
      className="relative isolate flex min-h-[350px] items-center overflow-hidden bg-[#061B50] sm:min-h-[420px] lg:min-h-[470px] xl:min-h-[500px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=85"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Navy Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061B50]/95 via-[#061B50]/85 to-[#061B50]/55"
      />

      {/* Content */}
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="max-w-5xl">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm">
              <li>
                <a
                  href="/"
                  className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
                >
                  <Home className="h-4 w-4" />
                  Home
                </a>
              </li>

              <li>
                <ChevronRight className="h-4 w-4 text-orange-400" />
              </li>

              <li
                aria-current="page"
                className="font-semibold text-orange-300"
              >
                Our Programs
              </li>
            </ol>
          </nav>

          {/* Heading */}
          <h1
            id="programs-hero-title"
            className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:whitespace-nowrap lg:text-[56px]"
          >
            Skill Development{" "}
            <span className="text-orange-400">
              Programs
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base font-semibold leading-relaxed text-white sm:text-lg lg:text-xl">
            Practical Learning. Professional Skills.
            <span className="text-orange-300">
              {" "}Better Opportunities.
            </span>
          </p>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
            Explore Saksham Foundation's healthcare, digital and
            vocational skill development initiatives designed to
            improve employability and create sustainable livelihood
            opportunities.
          </p>

          {/* CTA */}
          <a
            href="#programs"
            className="group mt-7 inline-flex items-center gap-2 border-b-2 border-orange-400 pb-1.5 text-sm font-bold text-white transition-colors hover:text-orange-300"
          >
            Explore Our Programs
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Bottom Accent */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 flex h-1 w-full"
      >
        <span className="w-1/3 bg-orange-500" />
        <span className="w-1/3 bg-white/80" />
        <span className="w-1/3 bg-green-600" />
      </div>
    </section>
  );
}
