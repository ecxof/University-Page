import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  BookOpen,
  GraduationCap,
  Laptop,
  FlaskConical,
  ChevronRight,
  Users,
  Trophy,
  Star,
  Calendar,
  Clock,
  ArrowRight,
  Microscope,
  Code,
  BarChart3,
  Palette,
  Scale,
  HeartPulse,
} from "lucide-react";

type ProgramLevel = "all" | "undergraduate" | "graduate" | "online";

const programFilters: { key: ProgramLevel; label: string }[] = [
  { key: "all", label: "All Programs" },
  { key: "undergraduate", label: "Undergraduate" },
  { key: "graduate", label: "Graduate" },
  { key: "online", label: "Online" },
];

const programs = [
  { id: 1, level: "undergraduate", icon: Code, color: "text-blue-600", bg: "bg-blue-50", title: "BSc Computer Science", dept: "Engineering & Tech", duration: "4 years", credits: "120", popular: true },
  { id: 2, level: "undergraduate", icon: FlaskConical, color: "text-emerald-600", bg: "bg-emerald-50", title: "BSc Biology", dept: "Natural Sciences", duration: "4 years", credits: "128" },
  { id: 3, level: "graduate", icon: BarChart3, color: "text-purple-600", bg: "bg-purple-50", title: "MBA Business Administration", dept: "Business School", duration: "2 years", credits: "60", popular: true },
  { id: 4, level: "undergraduate", icon: Palette, color: "text-pink-600", bg: "bg-pink-50", title: "BA Fine Arts", dept: "Arts & Humanities", duration: "4 years", credits: "120" },
  { id: 5, level: "graduate", icon: Microscope, color: "text-cyan-600", bg: "bg-cyan-50", title: "MSc Data Science", dept: "Engineering & Tech", duration: "18 months", credits: "45", popular: true },
  { id: 6, level: "undergraduate", icon: Scale, color: "text-orange-600", bg: "bg-orange-50", title: "BA Political Science", dept: "Social Sciences", duration: "4 years", credits: "120" },
  { id: 7, level: "online", icon: Laptop, color: "text-indigo-600", bg: "bg-indigo-50", title: "BSc Information Systems", dept: "Engineering & Tech", duration: "4 years", credits: "120" },
  { id: 8, level: "graduate", icon: HeartPulse, color: "text-red-600", bg: "bg-red-50", title: "MSc Public Health", dept: "Health Sciences", duration: "2 years", credits: "54" },
  { id: 9, level: "online", icon: BarChart3, color: "text-teal-600", bg: "bg-teal-50", title: "MBA (Online)", dept: "Business School", duration: "2 years", credits: "60", popular: true },
];

const departments = [
  { name: "Engineering & Technology", programs: 14, faculty: 82, icon: Code, color: "bg-blue-600" },
  { name: "Natural Sciences", programs: 11, faculty: 74, icon: FlaskConical, color: "bg-emerald-600" },
  { name: "Business School", programs: 9, faculty: 61, icon: BarChart3, color: "bg-purple-600" },
  { name: "Arts & Humanities", programs: 12, faculty: 58, icon: Palette, color: "bg-pink-600" },
  { name: "Social Sciences", programs: 10, faculty: 52, icon: Users, color: "bg-orange-600" },
  { name: "Health Sciences", programs: 8, faculty: 69, icon: HeartPulse, color: "bg-red-600" },
];

const calendarEvents = [
  { date: "Mar 3", label: "Spring Term Begins", type: "academic" },
  { date: "Mar 15", label: "Drop/Add Deadline", type: "deadline" },
  { date: "Apr 7–11", label: "Spring Recess", type: "break" },
  { date: "Apr 28", label: "Last Day to Withdraw", type: "deadline" },
  { date: "May 5–9", label: "Final Examinations", type: "exam" },
  { date: "May 17", label: "Commencement Ceremony", type: "academic" },
];

const typeColors: Record<string, string> = {
  academic: "bg-blue-50 text-blue-700 border-blue-100",
  deadline: "bg-red-50 text-red-700 border-red-100",
  break: "bg-emerald-50 text-emerald-700 border-emerald-100",
  exam: "bg-orange-50 text-orange-700 border-orange-100",
};

const faculty = [
  { name: "Dr. Sarah Evans", dept: "Computer Science", title: "Associate Professor", research: "AI & Machine Learning", rating: 4.9 },
  { name: "Prof. James Carter", dept: "Mathematics", title: "Full Professor", research: "Applied Statistics", rating: 4.8 },
  { name: "Dr. Priya Mehta", dept: "Biology", title: "Associate Professor", research: "Genomics & Evolution", rating: 4.7 },
  { name: "Prof. Leon Schmidt", dept: "Business", title: "Full Professor", research: "Behavioural Economics", rating: 4.9 },
];

export function AcademicsPage() {
  const [filter, setFilter] = useState<ProgramLevel>("all");

  const filtered = filter === "all" ? programs : programs.filter((p) => p.level === filter);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGVjdHVyZSUyMGhhbGwlMjBzdHVkZW50c3xlbnwxfHx8fDE3NzIyNDYwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Lecture hall"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <a href="/" className="text-blue-300 hover:text-white text-sm transition-colors">Home</a>
              <ChevronRight className="w-4 h-4 text-blue-400" />
              <span className="text-white text-sm">Academics</span>
            </div>
            <span className="inline-block bg-white/10 border border-white/20 text-blue-200 px-4 py-1.5 rounded-full text-sm mb-5">
              50+ Programs · 6 Colleges
            </span>
            <h1 className="text-white text-5xl mb-5">Academic Excellence</h1>
            <p className="text-blue-100 text-xl mb-8 leading-relaxed">
              Discover world-class programs designed to challenge your mind, broaden your perspective,
              and prepare you for a rapidly evolving global landscape.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                Browse All Programs <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white/10">
                Book an Advisor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "50+", label: "Degree Programs" },
            { value: "856", label: "Faculty Members" },
            { value: "12,400", label: "Enrolled Students" },
            { value: "95%", label: "Graduate Employment" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl">{s.value}</div>
              <div className="text-blue-200 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-16 space-y-20">

        {/* Program Types */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-slate-900 mb-2">Study Pathways</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Whether you're starting fresh, advancing your career, or learning from home — we have a pathway for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: GraduationCap,
                title: "Undergraduate",
                desc: "Earn your bachelor's degree across 30+ disciplines with world-class faculty and hands-on learning.",
                stat: "30+ programs",
                color: "text-blue-600",
                bg: "bg-blue-50",
                border: "border-blue-100",
              },
              {
                icon: BookOpen,
                title: "Graduate",
                desc: "Push the boundaries of your expertise with master's and doctoral programs at the cutting edge of research.",
                stat: "15+ programs",
                color: "text-purple-600",
                bg: "bg-purple-50",
                border: "border-purple-100",
              },
              {
                icon: Laptop,
                title: "Online Learning",
                desc: "Earn an accredited degree on your schedule with our fully online programs, supported by the same faculty.",
                stat: "8+ programs",
                color: "text-emerald-600",
                bg: "bg-emerald-50",
                border: "border-emerald-100",
              },
            ].map((p) => (
              <Card key={p.title} className={`border-2 ${p.border} hover:shadow-lg transition-shadow`}>
                <CardContent className="p-8">
                  <div className={`${p.bg} ${p.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-5`}>
                    <p.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-slate-500 text-sm mb-5 leading-relaxed">{p.desc}</p>
                  <div className="flex items-center justify-between">
                    <Badge className={`${p.bg} ${p.color} border-0 text-xs`}>{p.stat}</Badge>
                    <button className={`${p.color} text-sm flex items-center gap-1 hover:gap-2 transition-all`}>
                      Explore <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Programs Browser */}
        <section id="programs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-slate-900">Featured Programs</h2>
              <p className="text-slate-500 text-sm">Explore our most popular degree offerings</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {programFilters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    filter === f.key
                      ? "bg-blue-600 text-white"
                      : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((prog) => (
              <Card key={prog.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${prog.bg} ${prog.color} w-11 h-11 rounded-xl flex items-center justify-center`}>
                      <prog.icon className="w-5 h-5" />
                    </div>
                    {prog.popular && (
                      <Badge className="bg-amber-50 text-amber-600 border-amber-100 text-xs">Popular</Badge>
                    )}
                  </div>
                  <h4 className="text-slate-900 mb-1">{prog.title}</h4>
                  <p className="text-slate-400 text-xs mb-4">{prog.dept}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {prog.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" /> {prog.credits} credits
                    </span>
                  </div>
                  <button className="mt-4 text-xs text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Program Details <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Research */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-full text-sm mb-4">
              Research & Innovation
            </span>
            <h2 className="text-slate-900 mb-4">Pushing the Frontiers of Knowledge</h2>
            <p className="text-slate-500 leading-relaxed mb-6">
              Our research institutes tackle some of the world's most pressing challenges.
              With $120M in annual research funding, our faculty and students are at the forefront
              of discovery in AI, biomedical science, sustainability, and social policy.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { value: "$120M", label: "Annual Research Funding" },
                { value: "240+", label: "Active Research Projects" },
                { value: "18", label: "Research Institutes" },
                { value: "1,400+", label: "Published Papers (2024)" },
              ].map((s) => (
                <div key={s.label} className="bg-slate-50 rounded-xl p-4">
                  <div className="text-slate-900 text-xl">{s.value}</div>
                  <div className="text-slate-500 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Explore Research Centers <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1602052577122-f73b9710adba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwcmVzZWFyY2glMjBsYWIlMjBzY2llbmNlJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzcyMjQ2MDEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Research lab"
              className="w-full h-80 object-cover"
            />
          </div>
        </section>

        {/* Departments */}
        <section id="departments">
          <div className="text-center mb-8">
            <h2 className="text-slate-900 mb-2">Academic Departments</h2>
            <p className="text-slate-500">Six colleges spanning every major discipline</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {departments.map((dept) => (
              <Card key={dept.name} className="hover:shadow-md transition-shadow cursor-pointer group">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className={`${dept.color} text-white w-12 h-12 rounded-xl flex items-center justify-center shrink-0`}>
                    <dept.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-slate-900 text-sm mb-1 truncate">{dept.name}</h4>
                    <p className="text-slate-400 text-xs">
                      {dept.programs} programs · {dept.faculty} faculty
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Faculty Spotlight */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-slate-900 mb-1">Faculty Spotlight</h2>
              <p className="text-slate-500 text-sm">Meet a few of our distinguished educators</p>
            </div>
            <Button variant="outline" className="hidden sm:flex items-center gap-2">
              View All Faculty <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {faculty.map((f) => (
              <Card key={f.name} className="hover:shadow-md transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 mx-auto mb-4 flex items-center justify-center text-white text-xl">
                    {f.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <h4 className="text-slate-900 text-sm">{f.name}</h4>
                  <p className="text-blue-600 text-xs mb-1">{f.title}</p>
                  <p className="text-slate-400 text-xs mb-3">{f.dept}</p>
                  <p className="text-slate-500 text-xs italic mb-3">"{f.research}"</p>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span className="text-slate-600 text-xs">{f.rating}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Academic Calendar */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-slate-900 mb-2">Academic Calendar</h2>
              <p className="text-slate-500 text-sm mb-6">Key dates for Spring 2025</p>
              <div className="space-y-3">
                {calendarEvents.map((event) => (
                  <div key={event.date} className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-xl hover:shadow-sm transition-shadow">
                    <div className="bg-slate-900 text-white text-xs px-3 py-2 rounded-lg text-center min-w-[60px]">
                      {event.date}
                    </div>
                    <p className="text-slate-700 text-sm flex-1">{event.label}</p>
                    <Badge className={`text-xs border ${typeColors[event.type]}`}>
                      {event.type}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-5 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Download Full Calendar
              </Button>
            </div>

            {/* Library */}
            <div>
              <h2 className="text-slate-900 mb-2">University Library</h2>
              <p className="text-slate-500 text-sm mb-4">Your gateway to knowledge — open 7 days a week</p>
              <div className="rounded-2xl overflow-hidden mb-4 shadow">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1718327453695-4d32b94c90a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGlicmFyeSUyMGJvb2tzJTIwc3R1ZHl8ZW58MXx8fHwxNzcyMTg2ODA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="University library"
                  className="w-full h-44 object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { value: "2.4M", label: "Physical Volumes" },
                  { value: "180K", label: "Digital Resources" },
                  { value: "24/7", label: "Online Access" },
                ].map((s) => (
                  <div key={s.label} className="bg-slate-50 rounded-xl p-3 text-center">
                    <div className="text-slate-900">{s.value}</div>
                    <div className="text-slate-400 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Access Library Portal
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-10 text-white text-center">
          <Trophy className="w-12 h-12 mx-auto mb-4 text-blue-200" />
          <h2 className="text-white mb-3">Ready to Begin Your Academic Journey?</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Schedule a consultation with one of our academic advisors and find the program that's right for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              Apply Now <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
              Book an Advisor
            </Button>
          </div>
        </section>

      </main>
    </div>
  );
}