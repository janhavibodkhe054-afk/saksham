
import React from "react";

const learningAreas = [
  {
    title: "Patient Care",
    description:
      "Supporting patients with daily care and routine assistance.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Basic Healthcare Knowledge",
    description:
      "Understanding fundamental healthcare practices.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Infection Control",
    description:
      "Learning hygiene, sanitation and infection prevention.",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Communication Skills",
    description:
      "Communicating effectively with patients and staff.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "First Aid Basics",
    description:
      "Understanding basic first-aid concepts and procedures.",
    image:
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Hospital OJT",
    description:
      "Experiencing real hospital workflows under supervision.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=85",
  },
];

export default function GDALearningSection() {
  return (
    <section
      id="gda-learning"
      aria-labelledby="gda-learning-heading"
      className="overflow-hidden bg-[#061B50] py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* HEADING */}
        <div className="mb-10 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-orange-300">
            GDA TRAINING CURRICULUM
          </span>

          <h2
            id="gda-learning-heading"
            className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            What You Will{" "}
            <span className="text-orange-400">
              Learn in GDA
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Develop essential healthcare knowledge and practical
            skills through structured classroom learning
            and supervised hospital training.
          </p>
        </div>

        {/* CONTINUOUS SLIDER */}
        <div
          className="gda-slider overflow-hidden py-4"
          aria-label="GDA learning areas"
        >
          <div className="gda-slider-track flex w-max gap-5">
            {[...learningAreas, ...learningAreas].map(
              (item, index) => (
                <article
                  key={`${item.title}-${index}`}
                  aria-hidden={
                    index >= learningAreas.length
                      ? "true"
                      : undefined
                  }
                  className="gda-slide group shrink-0 rounded-xl bg-white p-3 shadow-[0_10px_35px_rgba(0,0,0,0.15)]"
                >
                  {/* IMAGE */}
                  <div className="overflow-hidden rounded-lg bg-slate-100">
                    <img
                      src={item.image}
                      alt={
                        index < learningAreas.length
                          ? item.title
                          : ""
                      }
                      loading="lazy"
                      decoding="async"
                      className="h-[180px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="px-3 pb-5 pt-5">
                    <h3 className="text-base font-bold leading-snug text-[#061B50]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </div>

      {/* SLIDER STYLES */}
      <style>{`
        .gda-slide {
          width: calc((min(100vw - 80px, 1200px) - 60px) / 4);
          min-width: 0;
        }

        .gda-slider-track {
          animation: gdaContinuousScroll 32s linear infinite;
        }

        .gda-slider:hover .gda-slider-track,
        .gda-slider:focus-within .gda-slider-track {
          animation-play-state: paused;
        }

        @keyframes gdaContinuousScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 10px));
          }
        }

        @media (max-width: 1023px) {
          .gda-slide {
            width: calc((100vw - 80px) / 2);
          }
        }

        @media (max-width: 639px) {
          .gda-slide {
            width: calc(100vw - 60px);
          }

          .gda-slider-track {
            animation-duration: 40s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gda-slider-track {
            animation: none;
          }

          .gda-slider {
            overflow-x: auto;
          }
        }
      `}</style>
    </section>
  );
}
