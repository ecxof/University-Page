import { Button } from "./ui/button";
import { Menu, Bell, Search, User, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { SearchOverlay } from "./SearchOverlay";

const MOCK_UNREAD = 3;

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/", isRoute: true },
    { name: "Dashboard", href: "/#dashboard", isRoute: false },
    { name: "Academics", href: "/academics", isRoute: true },
    { name: "Admissions", href: "/admissions", isRoute: true },
    { name: "Campus Life", href: "/campus", isRoute: true },
    { name: "Contact", href: "/#contact", isRoute: false },
  ];

  const isHome = location.pathname === "/";

  return (
    <>
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-lg">U</span>
              </div>
              <div>
                <h1 className="text-slate-900 text-lg">State University</h1>
                <p className="text-slate-500 text-xs">Excellence in Education</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`transition-colors ${
                      location.pathname === link.href
                        ? "text-blue-600"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {link.name}
                  </a>
                )
              )}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-1">
              {/* Search */}
              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex text-slate-500 hover:text-slate-900"
                onClick={() => setSearchOpen(true)}
                title="Search"
              >
                <Search className="w-5 h-5" />
              </Button>

              {/* Notifications */}
              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex text-slate-500 hover:text-slate-900 relative"
                onClick={() => navigate("/notifications")}
                title="Notifications"
              >
                <Bell className="w-5 h-5" />
                {MOCK_UNREAD > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-red-500 text-white text-[9px] rounded-full flex items-center justify-center leading-none">
                    {MOCK_UNREAD}
                  </span>
                )}
              </Button>

              {/* Account */}
              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex text-slate-500 hover:text-slate-900"
                onClick={() => navigate("/account")}
                title="Account"
              >
                <User className="w-5 h-5" />
              </Button>

              <Button className="hidden md:flex ml-2">Student Portal</Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <div className="flex flex-col gap-1">
                {/* Mobile menu links */}
                {navLinks.map((link) =>
                  link.isRoute ? (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`transition-colors px-3 py-2 rounded-lg ${
                        location.pathname === link.href
                          ? "text-blue-600 bg-blue-50"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors px-3 py-2 rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  )
                )}
                <div className="h-px bg-slate-100 my-2" />

                {/* Mobile Search */}
                <button
                  className="flex items-center gap-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors px-3 py-2 rounded-lg"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setSearchOpen(true);
                  }}
                >
                  <Search className="w-4 h-4" />
                  Search
                </button>

                {/* Mobile Notifications */}
                <button
                  className="flex items-center gap-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors px-3 py-2 rounded-lg"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate("/notifications");
                  }}
                >
                  <Bell className="w-4 h-4" />
                  Notifications
                  {MOCK_UNREAD > 0 && (
                    <span className="ml-auto bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                      {MOCK_UNREAD}
                    </span>
                  )}
                </button>

                {/* Mobile Account */}
                <button
                  className="flex items-center gap-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors px-3 py-2 rounded-lg"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate("/account");
                  }}
                >
                  <User className="w-4 h-4" />
                  My Account
                </button>

                <Button
                  className="w-full mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Student Portal
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}