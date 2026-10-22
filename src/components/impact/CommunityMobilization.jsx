
import React from "react";
import { UsersRound, CheckCircle2 } from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    sectionLabel: "COMMUNITY MOBILIZATION",

    heading1: "Reaching Communities.",
    heading2: "Creating Awareness.",

    paragraphs: [
      "Saksham Foundation's community mobilization approach focuses on connecting eligible youth and women with skill development opportunities through meaningful grassroots engagement.",

      "We engage local stakeholders, NGOs, Self-Help Groups, Anganwadi workers, ASHA workers, educational institutions and community representatives to improve awareness, provide guidance and encourage participation in available training programs.",
    ],

    imageAlt:
      "Community members participating in a group interaction",

    imageCaption: "Connecting People with Opportunities",

    focusTitle: "Our Community Outreach Focus",

    focusDescription:
      "Building awareness, reaching eligible candidates and connecting communities with education and employment-focused training opportunities.",
  },

  mr: {
    sectionLabel: "समुदाय संपर्क व जनजागृती",

    heading1: "समुदायांपर्यंत पोहोचणे.",
    heading2: "जागरूकता निर्माण करणे.",

    paragraphs: [
      "सक्षम फाउंडेशनच्या समुदाय संपर्क उपक्रमांचा मुख्य उद्देश स्थानिक पातळीवर प्रभावी संवाद साधून पात्र युवक आणि महिलांना कौशल्य विकासाच्या संधींशी जोडणे हा आहे.",

      "उपलब्ध प्रशिक्षण कार्यक्रमांविषयी जागरूकता वाढवण्यासाठी, योग्य मार्गदर्शन करण्यासाठी आणि सहभागाला प्रोत्साहन देण्यासाठी आम्ही स्थानिक भागधारक, स्वयंसेवी संस्था, बचत गट, अंगणवाडी सेविका, आशा कार्यकर्त्या, शैक्षणिक संस्था आणि समुदाय प्रतिनिधींशी समन्वय साधतो.",
    ],

    imageAlt:
      "समूह चर्चेमध्ये सहभागी झालेले समुदायातील सदस्य",

    imageCaption: "लोकांना नव्या संधींशी जोडणे",

    focusTitle: "आमच्या समुदाय संपर्काचे उद्दिष्ट",

    focusDescription:
      "जनजागृती करणे, पात्र उमेदवारांपर्यंत पोहोचणे आणि समुदायांना शिक्षण व रोजगाराभिमुख प्रशिक्षणाच्या संधींशी जोडणे.",
  },
};

export default function CommunityMobilization() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="community-mobilization"
      aria-labelledby="community-heading"
      className="relative overflow-hidden bg-[#F0F6FC] py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">

          {/* LEFT IMAGE */}
          <div className="lg:col-span-5">
            <div className="mx-auto max-w-[480px] lg:max-w-none">

              {/* MAIN IMAGE */}
              <div className="group overflow-hidden rounded-2xl bg-slate-200 shadow-[0_15px_40px_rgba(6,27,80,0.08)]">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1100&q=85"
                  alt={t.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[420px] lg:h-[450px]"
                />
              </div>

              {/* IMAGE CAPTION */}
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-green-700" />

                <p className="text-sm font-semibold text-[#061B50]">
                  {t.imageCaption}
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-7">

            {/* SECTION LABEL */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-orange-500" />

              <span className="text-xs font-bold uppercase tracking-[0.16em] text-orange-600">
                {t.sectionLabel}
              </span>
            </div>

            {/* HEADING */}
            <h2
              id="community-heading"
              className="max-w-2xl text-3xl font-extrabold leading-[1.2] tracking-tight text-[#061B50] sm:text-4xl lg:text-[46px]"
            >
              {t.heading1}

              <span className="mt-1 block text-orange-600">
                {t.heading2}
              </span>
            </h2>

            {/* FIRST PARAGRAPH */}
            <p className="mt-7 max-w-2xl text-sm leading-8 text-slate-700 sm:text-base">
              {t.paragraphs[0]}
            </p>

            {/* SECOND PARAGRAPH */}
            <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-700 sm:text-base">
              {t.paragraphs[1]}
            </p>

            {/* COMMUNITY OUTREACH FOCUS */}
            <div className="mt-8 flex items-start gap-4 border-t border-slate-200 pt-6">

              {/* ICON */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-orange-600 shadow-sm">
                <UsersRound className="h-5 w-5" />
              </div>

              {/* FOCUS CONTENT */}
              <div>
                <h3 className="text-sm font-bold text-[#061B50]">
                  {t.focusTitle}
                </h3>

                <p className="mt-2 max-w-lg text-sm leading-7 text-slate-600">
                  {t.focusDescription}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
