
import React from "react";

import { useLanguage } from "../../context/LanguageContext";

// ENGLISH + MARATHI TRANSLATIONS
const translations = {
  en: {
    sectionLabel: "Saksham Foundation office location",
    mapTitle: "Saksham Foundation Office Location",
  },

  mr: {
    sectionLabel: "सक्षम फाउंडेशनच्या कार्यालयाचे ठिकाण",
    mapTitle: "सक्षम फाउंडेशन कार्यालयाचा नकाशा",
  },
};

// ORIGINAL OFFICE ADDRESS
const address =
  "3rd Floor, Mayur Trade Centre, Phase 1, Chinchwad Station, Pune 411019, Maharashtra";

const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  address
)}&output=embed`;

export default function GoogleMapSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="location-map"
      aria-label={t.sectionLabel}
      className="w-full overflow-hidden bg-slate-100"
    >
      <iframe
        title={t.mapTitle}
        src={mapUrl}
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="block h-[320px] w-full sm:h-[400px] lg:h-[450px]"
      />
    </section>
  );
}
