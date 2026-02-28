import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Users,
  HeadphonesIcon,
  FileQuestion,
} from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Campus Address",
    lines: ["1 University Avenue", "State City, ST 45678"],
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["Main: (555) 200-0000", "Admissions: (555) 200-0100"],
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@stateuniversity.edu", "admissions@stateuniversity.edu"],
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Mon–Fri: 8:00 AM – 5:00 PM", "Sat: 9:00 AM – 1:00 PM"],
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
];

const departments = [
  { icon: Users, label: "Admissions Office", email: "admissions@stateuniversity.edu" },
  { icon: HeadphonesIcon, label: "Student Support", email: "support@stateuniversity.edu" },
  { icon: FileQuestion, label: "Financial Aid", email: "finaid@stateuniversity.edu" },
  { icon: MessageSquare, label: "General Enquiries", email: "info@stateuniversity.edu" },
];

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    department: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({ name: "", email: "", subject: "", department: "", message: "" });
  };

  return (
    <section id="contact" className="bg-white border-t border-slate-100 mt-0">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm mb-4">
            Get In Touch
          </span>
          <h2 className="text-slate-900 text-3xl mb-3">Contact Us</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Have questions about admissions, programs, or campus life? Our team is
            here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left Column — Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Detail Cards */}
            {contactDetails.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className={`${item.bg} ${item.color} w-11 h-11 rounded-xl flex items-center justify-center shrink-0`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-800 text-sm font-medium">{item.title}</p>
                  {item.lines.map((l) => (
                    <p key={l} className="text-slate-500 text-sm">{l}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Department Quick Contacts */}
            <div className="pt-4">
              <p className="text-slate-700 text-sm font-medium mb-3">
                Direct Department Contacts
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {departments.map((dept) => (
                  <Card
                    key={dept.label}
                    className="hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <CardContent className="p-4 flex items-center gap-3">
                      <dept.icon className="w-4 h-4 text-blue-600 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-slate-800 text-xs font-medium truncate">
                          {dept.label}
                        </p>
                        <p className="text-slate-400 text-xs truncate">{dept.email}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <div className="bg-slate-100 h-44 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100" />
                <div className="relative text-center">
                  <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-slate-600 text-sm">1 University Avenue</p>
                  <p className="text-slate-400 text-xs">State City, ST 45678</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs text-blue-600 hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Form */}
          <div className="lg:col-span-3">
            <Card className="shadow-sm border-slate-200">
              <CardContent className="p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <CheckCircle className="w-16 h-16 text-emerald-500 mb-4" />
                    <h3 className="text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-500 text-sm max-w-xs mb-6">
                      Thank you for reaching out. A member of our team will get back
                      to you within 1–2 business days.
                    </p>
                    <Button variant="outline" onClick={handleReset}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-slate-900 mb-1">Send Us a Message</h3>
                      <p className="text-slate-500 text-sm">
                        Fill in the form below and we'll be in touch shortly.
                      </p>
                    </div>

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Jane Smith"
                          value={form.name}
                          onChange={handleChange}
                          required
                          className="bg-slate-50 border-slate-200"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="jane@example.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="bg-slate-50 border-slate-200"
                        />
                      </div>
                    </div>

                    {/* Subject + Department */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="How can we help?"
                          value={form.subject}
                          onChange={handleChange}
                          required
                          className="bg-slate-50 border-slate-200"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="department">Department</Label>
                        <select
                          id="department"
                          name="department"
                          value={form.department}
                          onChange={handleChange}
                          className="w-full h-10 px-3 rounded-md border border-slate-200 bg-slate-50 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select a department</option>
                          <option value="admissions">Admissions</option>
                          <option value="academics">Academics</option>
                          <option value="financial-aid">Financial Aid</option>
                          <option value="student-support">Student Support</option>
                          <option value="it">IT Support</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your enquiry..."
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="bg-slate-50 border-slate-200 resize-none"
                      />
                      <p className="text-slate-400 text-xs">
                        {form.message.length} / 1000 characters
                      </p>
                    </div>

                    {/* Privacy note */}
                    <p className="text-slate-400 text-xs">
                      By submitting this form you agree to our{" "}
                      <a href="#" className="text-blue-500 hover:underline">
                        Privacy Policy
                      </a>
                      . We will never share your information with third parties.
                    </p>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8H4z"
                            />
                          </svg>
                          Sending…
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
