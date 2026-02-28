import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  ChevronRight,
  ChevronDown,
  ArrowRight,
  CheckCircle,
  FileText,
  ClipboardList,
  Send,
  ThumbsUp,
  GraduationCap,
  DollarSign,
  Calendar,
  MapPin,
  Phone,
  AlertCircle,
  Award,
  BookOpen,
  Users,
} from "lucide-react";

const steps = [
  {
    step: "01",
    icon: FileText,
    title: "Create Your Account",
    desc: "Register on our admissions portal and start your free application. Takes less than 5 minutes.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "Submit Your Application",
    desc: "Complete all sections including personal statement, extracurriculars, and transcripts.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    step: "03",
    icon: Send,
    title: "Send Supporting Documents",
    desc: "Upload transcripts, recommendation letters, test scores, and any required portfolios.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    step: "04",
    icon: ThumbsUp,
    title: "Receive Your Decision",
    desc: "We review all applications holistically. Decisions are sent via email and your portal.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
];

const requirements = [
  { label: "High school diploma or equivalent", note: "Official transcripts required" },
  { label: "Minimum GPA of 2.8 (3.0 recommended)", note: "Weighted or unweighted" },
  { label: "SAT (1050+) or ACT (21+)", note: "Test-optional for 2025–2026" },
  { label: "Two letters of recommendation", note: "Academic or professional" },
  { label: "Personal statement (500–650 words)", note: "Prompt provided in portal" },
  { label: "Application fee: $50", note: "Waivers available on request" },
];

const aidTypes = [
  {
    icon: Award,
    title: "Merit Scholarships",
    amount: "Up to $20,000/year",
    desc: "Awarded based on academic achievement, test scores, and extracurricular excellence.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Users,
    title: "Need-Based Grants",
    amount: "Up to $15,000/year",
    desc: "Determined by the FAFSA. Does not need to be repaid.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: BookOpen,
    title: "Work-Study Program",
    amount: "$3,000–$6,000/year",
    desc: "Part-time on-campus employment to help cover living expenses.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: DollarSign,
    title: "Student Loans",
    amount: "Up to $12,500/year",
    desc: "Low-interest federal and institutional loans with flexible repayment options.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

const deadlines = [
  { label: "Early Decision I", date: "November 1, 2025", status: "closed", badge: "Closed" },
  { label: "Early Decision II", date: "January 15, 2026", status: "open", badge: "Open" },
  { label: "Regular Decision", date: "March 1, 2026", status: "open", badge: "Open" },
  { label: "Transfer Students", date: "April 1, 2026", status: "open", badge: "Open" },
  { label: "International Students", date: "February 15, 2026", status: "open", badge: "Open" },
  { label: "Graduate Programs", date: "Rolling Admissions", status: "rolling", badge: "Rolling" },
];

const badgeColors: Record<string, string> = {
  closed: "bg-slate-100 text-slate-500 border-slate-200",
  open: "bg-emerald-50 text-emerald-600 border-emerald-100",
  rolling: "bg-blue-50 text-blue-600 border-blue-100",
};

const faqs = [
  {
    q: "Is the SAT/ACT required for admission?",
    a: "For the 2025–2026 cycle, we are test-optional. You may submit scores to strengthen your application, but they are not required. We evaluate applicants holistically.",
  },
  {
    q: "Can I apply to multiple programs?",
    a: "Yes. You may indicate up to three program preferences on your application. If your first-choice program is competitive, we'll automatically consider you for your second choice.",
  },
  {
    q: "How long does the admissions review take?",
    a: "Early Decision applicants typically receive decisions within 6 weeks. Regular Decision applicants hear back by April 1. Transfer and graduate timelines vary by program.",
  },
  {
    q: "Are campus visits required?",
    a: "Visits are not required but strongly encouraged. We offer in-person tours weekdays at 10 AM and 2 PM, plus virtual open days every first Saturday of the month.",
  },
  {
    q: "What is the acceptance rate?",
    a: "Our overall acceptance rate for the 2024–2025 cycle was 62%. Rates vary by program; some competitive programs like Computer Science and Business have higher selectivity.",
  },
];

export function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759093886711-a6cfc14e1b7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwYWRtaXNzaW9ucyUyMGFwcGxpY2F0aW9uJTIwY2FtcHVzJTIwdG91cnxlbnwxfHx8fDE3NzIyNDYwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Admissions"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <a href="/" className="text-purple-300 hover:text-white text-sm transition-colors">Home</a>
              <ChevronRight className="w-4 h-4 text-purple-400" />
              <span className="text-white text-sm">Admissions</span>
            </div>
            <span className="inline-block bg-white/10 border border-white/20 text-purple-200 px-4 py-1.5 rounded-full text-sm mb-5">
              Applications Open · Spring 2026
            </span>
            <h1 className="text-white text-5xl mb-5">Your Journey Starts Here</h1>
            <p className="text-purple-100 text-xl mb-8 leading-relaxed">
              Join a vibrant community of scholars, innovators, and changemakers.
              We're looking for students who are passionate, curious, and ready to make a difference.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
                Apply Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white/10">
                Schedule a Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <div className="bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "62%", label: "Acceptance Rate" },
            { value: "$50", label: "Application Fee" },
            { value: "4,200+", label: "New Students (2024)" },
            { value: "70%", label: "Receive Financial Aid" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl">{s.value}</div>
              <div className="text-purple-200 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-16 space-y-20">

        {/* Application Steps */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-slate-900 mb-2">How to Apply</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Our streamlined four-step process makes applying simple and stress-free.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={step.step} className="relative">
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-slate-200 z-0" />
                )}
                <Card className="relative z-10 hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <div className={`${step.bg} ${step.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div className="text-slate-300 text-xs mb-1">STEP {step.step}</div>
                    <h4 className="text-slate-900 mb-2">{step.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white" size="lg">
              Start Your Application <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </section>

        {/* Requirements + Deadlines */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Requirements */}
          <div>
            <h2 className="text-slate-900 mb-2">Admission Requirements</h2>
            <p className="text-slate-500 text-sm mb-6">
              Requirements for first-year undergraduate applicants.
            </p>
            <div className="space-y-3">
              {requirements.map((req) => (
                <div key={req.label} className="flex items-start gap-3 p-4 bg-white border border-slate-100 rounded-xl hover:shadow-sm transition-shadow">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-800 text-sm">{req.label}</p>
                    <p className="text-slate-400 text-xs">{req.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 p-4 bg-amber-50 border border-amber-100 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-amber-800 text-sm">International students may have additional requirements.</p>
                <a href="#contact" className="text-amber-600 text-xs hover:underline">Contact our international office →</a>
              </div>
            </div>
          </div>

          {/* Deadlines */}
          <div>
            <h2 className="text-slate-900 mb-2">Application Deadlines</h2>
            <p className="text-slate-500 text-sm mb-6">All deadlines are at 11:59 PM EST.</p>
            <div className="space-y-3">
              {deadlines.map((dl) => (
                <div key={dl.label} className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-xl">
                  <Calendar className="w-5 h-5 text-slate-400 shrink-0" />
                  <div className="flex-1">
                    <p className="text-slate-800 text-sm">{dl.label}</p>
                    <p className="text-slate-400 text-xs">{dl.date}</p>
                  </div>
                  <Badge className={`text-xs border ${badgeColors[dl.status]}`}>{dl.badge}</Badge>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Aid */}
        <section>
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm mb-3">
              Financial Aid & Scholarships
            </span>
            <h2 className="text-slate-900 mb-2">We Make College Affordable</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Over 70% of our students receive some form of financial assistance.
              Explore your options below.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {aidTypes.map((aid) => (
              <Card key={aid.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`${aid.bg} ${aid.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                    <aid.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-slate-900 mb-1">{aid.title}</h4>
                  <p className="text-blue-600 text-sm mb-3">{aid.amount}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{aid.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-slate-900 mb-1">Estimate Your Aid Package</h3>
              <p className="text-slate-500 text-sm">
                Use our net price calculator to get a personalised cost estimate in minutes.
              </p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white shrink-0">
              Net Price Calculator
            </Button>
          </div>
        </section>

        {/* Campus Visit */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1558168674-2505c71112eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZ3JhZHVhdGlvbiUyMGNlcmVtb255JTIwY2FwJTIwZ293bnxlbnwxfHx8fDE3NzIyNDYwMTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Graduation ceremony"
              className="w-full h-80 object-cover"
            />
          </div>
          <div>
            <span className="inline-block bg-purple-50 text-purple-600 px-4 py-1.5 rounded-full text-sm mb-4">
              Visit Campus
            </span>
            <h2 className="text-slate-900 mb-4">See It For Yourself</h2>
            <p className="text-slate-500 leading-relaxed mb-6">
              Nothing beats experiencing campus life in person. Join a guided tour, sit in on a class,
              and meet current students. We host in-person and virtual visits throughout the year.
            </p>
            <div className="space-y-3 mb-6">
              {[
                { icon: Calendar, label: "In-Person Tours", detail: "Mon–Fri at 10 AM & 2 PM" },
                { icon: MapPin, label: "Starting Location", detail: "Admissions Welcome Centre, Main Gate" },
                { icon: Phone, label: "Book a Visit", detail: "(555) 200-0100" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="bg-slate-100 w-9 h-9 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-slate-700 text-sm">{item.label}</p>
                    <p className="text-slate-400 text-xs">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">Book a Visit</Button>
              <Button variant="outline">Virtual Tour</Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-slate-900 mb-2">Frequently Asked Questions</h2>
            <p className="text-slate-500">Can't find your answer? Contact our admissions office directly.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 rounded-xl overflow-hidden hover:shadow-sm transition-shadow"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="text-slate-800 text-sm">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 ml-4 transition-transform ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-10 text-white text-center">
          <GraduationCap className="w-12 h-12 mx-auto mb-4 text-purple-200" />
          <h2 className="text-white mb-3">Ready to Apply?</h2>
          <p className="text-purple-100 mb-6 max-w-xl mx-auto">
            Join thousands of students who have transformed their futures at State University.
            Start your application today — it only takes a few minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
              Begin Application <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white/10">
              Contact Admissions
            </Button>
          </div>
        </section>

      </main>
    </div>
  );
}