
import React from "react";
import { Languages } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function StickyLanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="fixed right-0 top-1/2 z-[100] -translate-y-1/2">
      <div className="flex flex-col items-center gap-1 rounded-l-xl border border-r-0 border-slate-200 bg-white p-1.5 shadow-[0_8px_30px_rgba(6,27,80,0.18)]">

        {/* LANGUAGE ICON */}
        <div className="flex h-9 w-10 items-center justify-center text-[#061B50]">
          <Languages className="h-5 w-5" />
        </div>

        {/* ENGLISH */}
        <button
          type="button"
          onClick={() => changeLanguage("en")}
          aria-label="Switch to English"
          aria-pressed={language === "en"}
          className={`flex h-11 w-12 items-center justify-center rounded-lg text-xs font-extrabold transition-all duration-300 ${
            language === "en"
              ? "bg-orange-600 text-white shadow-md"
              : "bg-transparent text-slate-600 hover:bg-orange-50 hover:text-orange-600"
          }`}
        >
          EN
        </button>

        {/* MARATHI */}
        <button
          type="button"
          onClick={() => changeLanguage("mr")}
          aria-label="मराठी भाषा निवडा"
          aria-pressed={language === "mr"}
          className={`flex h-11 w-12 items-center justify-center rounded-lg text-xs font-extrabold transition-all duration-300 ${
            language === "mr"
              ? "bg-orange-600 text-white shadow-md"
              : "bg-transparent text-slate-600 hover:bg-orange-50 hover:text-orange-600"
          }`}
        >
          मराठी
        </button>
      </div>
    </div>
  );
}
