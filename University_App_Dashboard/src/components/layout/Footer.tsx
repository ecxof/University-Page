import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const footerSections = [
    {
      title: "Academics",
      links: [
        { label: "Undergraduate", href: "#" },
        { label: "Graduate Programs", href: "#" },
        { label: "Online Learning", href: "#" },
        { label: "Course Catalog", href: "#" },
        { label: "Academic Calendar", href: "#" },
      ],
    },
    {
      title: "Admissions",
      links: [
        { label: "Apply Now", href: "#admissions" },
        { label: "Tuition & Aid", href: "#" },
        { label: "Visit Campus", href: "#" },
        { label: "International Students", href: "#" },
        { label: "Transfer Students", href: "#" },
      ],
    },
    {
      title: "Campus Life",
      links: [
        { label: "Student Housing", href: "#campus" },
        { label: "Dining Services", href: "#" },
        { label: "Athletics", href: "#" },
        { label: "Clubs & Organizations", href: "#" },
        { label: "Health Services", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Library", href: "#" },
        { label: "Career Services", href: "#" },
        { label: "IT Support", href: "#" },
        { label: "Campus Map", href: "#" },
        { label: "Parking", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 mt-0">
      {/* Contact Strip */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600/20 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-white text-sm">Campus Address</p>
                <p className="text-slate-400 text-xs">1 University Ave, State City, ST 45678</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-600/20 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-white text-sm">Call Us</p>
                <p className="text-slate-400 text-xs">(555) 200-0000</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-600/20 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-white text-sm">Email</p>
                <p className="text-slate-400 text-xs">info@stateuniversity.edu</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8 border-b border-slate-800">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="text-lg">U</span>
              </div>
              <div>
                <h3 className="text-white">State University</h3>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Committed to excellence in teaching, research, and public service since 1890.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-400">
            © 2025 State University. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Terms of Use
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Accessibility
            </a>
            <a href="/#contact" className="text-slate-400 hover:text-white transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
