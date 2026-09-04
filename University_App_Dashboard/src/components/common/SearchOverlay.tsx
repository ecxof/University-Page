import { useState, useEffect, useRef } from "react";
import { Search, X, Clock, TrendingUp, BookOpen, Users, GraduationCap, ChevronRight } from "lucide-react";

interface SearchResult {
  type: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  iconColor: string;
  href: string;
}

const allResults: SearchResult[] = [
  { type: "Course", title: "Introduction to Computer Science", subtitle: "CS 101 · Dr. Evans · Fall 2024", icon: BookOpen, iconColor: "text-blue-600", href: "#" },
  { type: "Course", title: "Calculus III", subtitle: "MATH 301 · Dr. Patel · Fall 2024", icon: BookOpen, iconColor: "text-blue-600", href: "#" },
  { type: "Course", title: "Organic Chemistry", subtitle: "CHEM 210 · Dr. Rivera · Fall 2024", icon: BookOpen, iconColor: "text-blue-600", href: "#" },
  { type: "Faculty", title: "Dr. Sarah Evans", subtitle: "Computer Science Department", icon: Users, iconColor: "text-purple-600", href: "#" },
  { type: "Faculty", title: "Prof. James Carter", subtitle: "Mathematics Department", icon: Users, iconColor: "text-purple-600", href: "#" },
  { type: "Program", title: "BSc Computer Science", subtitle: "4-year undergraduate program", icon: GraduationCap, iconColor: "text-emerald-600", href: "#" },
  { type: "Program", title: "MBA Business Administration", subtitle: "2-year graduate program", icon: GraduationCap, iconColor: "text-emerald-600", href: "#" },
  { type: "Page", title: "Admissions", subtitle: "Apply to State University", icon: ChevronRight, iconColor: "text-orange-600", href: "#admissions" },
  { type: "Page", title: "Financial Aid", subtitle: "Scholarships and tuition support", icon: ChevronRight, iconColor: "text-orange-600", href: "#" },
  { type: "Page", title: "Campus Map", subtitle: "Navigate our campus", icon: ChevronRight, iconColor: "text-orange-600", href: "#" },
];

const recentSearches = ["MATH 301", "Financial Aid", "Career Fair", "Dr. Evans"];
const trending = ["Spring Registration", "Graduation Ceremony", "Scholarship Applications", "Campus Events"];

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = query.trim().length > 0
    ? allResults.filter(
        (r) =>
          r.title.toLowerCase().includes(query.toLowerCase()) ||
          r.subtitle.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={onClose} />

      {/* Search Panel */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses, faculty, programs…"
            className="flex-1 outline-none text-slate-800 placeholder:text-slate-400 bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="ml-1 text-slate-400 hover:text-slate-600 text-xs border border-slate-200 rounded px-2 py-0.5 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results or Default State */}
        <div className="max-h-[60vh] overflow-y-auto">
          {query.trim().length === 0 ? (
            <div className="p-5 space-y-6">
              {/* Recent Searches */}
              <div>
                <p className="text-slate-400 text-xs flex items-center gap-1.5 mb-3">
                  <Clock className="w-3.5 h-3.5" /> Recent Searches
                </p>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((s) => (
                    <button
                      key={s}
                      onClick={() => setQuery(s)}
                      className="text-sm text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending */}
              <div>
                <p className="text-slate-400 text-xs flex items-center gap-1.5 mb-3">
                  <TrendingUp className="w-3.5 h-3.5" /> Trending Now
                </p>
                <div className="space-y-2">
                  {trending.map((t) => (
                    <button
                      key={t}
                      onClick={() => setQuery(t)}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors text-left"
                    >
                      <TrendingUp className="w-4 h-4 text-slate-300" />
                      <span className="text-slate-700 text-sm">{t}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-16 text-center">
              <Search className="w-10 h-10 text-slate-200 mx-auto mb-3" />
              <p className="text-slate-500 text-sm">
                No results for <span className="font-medium">"{query}"</span>
              </p>
              <p className="text-slate-400 text-xs mt-1">
                Try a different keyword or browse departments
              </p>
            </div>
          ) : (
            <div className="py-2">
              {/* Group by type */}
              {["Course", "Faculty", "Program", "Page"].map((type) => {
                const group = filtered.filter((r) => r.type === type);
                if (group.length === 0) return null;
                return (
                  <div key={type}>
                    <p className="text-xs text-slate-400 px-5 py-2 bg-slate-50 border-y border-slate-100">
                      {type}s
                    </p>
                    {group.map((result) => (
                      <a
                        key={result.title}
                        href={result.href}
                        onClick={onClose}
                        className="flex items-center gap-4 px-5 py-3.5 hover:bg-slate-50 transition-colors"
                      >
                        <div className={`w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center shrink-0`}>
                          <result.icon className={`w-4 h-4 ${result.iconColor}`} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-slate-800 text-sm truncate">{result.title}</p>
                          <p className="text-slate-400 text-xs truncate">{result.subtitle}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300 ml-auto shrink-0" />
                      </a>
                    ))}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer hint */}
        <div className="border-t border-slate-100 px-5 py-3 flex items-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <kbd className="bg-slate-100 rounded px-1.5 py-0.5">↑↓</kbd> navigate
          </span>
          <span className="flex items-center gap-1">
            <kbd className="bg-slate-100 rounded px-1.5 py-0.5">↵</kbd> select
          </span>
          <span className="flex items-center gap-1">
            <kbd className="bg-slate-100 rounded px-1.5 py-0.5">ESC</kbd> close
          </span>
        </div>
      </div>
    </div>
  );
}
