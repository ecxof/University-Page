import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import {
  User,
  Lock,
  Bell,
  Shield,
  Camera,
  CheckCircle,
  Eye,
  EyeOff,
  Mail,
  Phone,
  MapPin,
  Calendar,
  BookOpen,
  Edit3,
  Save,
} from "lucide-react";

type Tab = "profile" | "security" | "notifications" | "privacy";

const tabs: { key: Tab; label: string; icon: React.ElementType }[] = [
  { key: "profile", label: "Profile", icon: User },
  { key: "security", label: "Security", icon: Lock },
  { key: "notifications", label: "Notifications", icon: Bell },
  { key: "privacy", label: "Privacy", icon: Shield },
];

const notifOptions = [
  { id: "grade", label: "Grade Updates", desc: "When grades are posted or updated", defaultOn: true },
  { id: "enrollment", label: "Enrollment Alerts", desc: "Registration opens, deadlines, and changes", defaultOn: true },
  { id: "payment", label: "Payment Reminders", desc: "Tuition due dates and payment confirmations", defaultOn: true },
  { id: "events", label: "Campus Events", desc: "Upcoming events and activities", defaultOn: false },
  { id: "news", label: "University News", desc: "Newsletters and announcements", defaultOn: false },
  { id: "career", label: "Career Services", desc: "Job fairs, internship opportunities", defaultOn: true },
  { id: "system", label: "System Alerts", desc: "Portal maintenance and system updates", defaultOn: true },
];

function Toggle({
  on,
  onChange,
}: {
  on: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!on)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
        on ? "bg-blue-600" : "bg-slate-200"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
          on ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

export function AccountPage() {
  const [activeTab, setActiveTab] = useState<Tab>("profile");
  const [editingProfile, setEditingProfile] = useState(false);
  const [savedProfile, setSavedProfile] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const [profile, setProfile] = useState({
    firstName: "Alex",
    lastName: "Johnson",
    email: "alex.johnson@stateuniversity.edu",
    phone: "(555) 321-7890",
    address: "204 Campus Drive, State City, ST 45678",
    dob: "2003-08-15",
    studentId: "SU-2024-00412",
    program: "BSc Computer Science",
    year: "2nd Year",
    gpa: "3.85",
  });

  const [notifSettings, setNotifSettings] = useState<Record<string, boolean>>(
    Object.fromEntries(notifOptions.map((n) => [n.id, n.defaultOn]))
  );

  const handleProfileSave = () => {
    setSavedProfile(true);
    setEditingProfile(false);
    setTimeout(() => setSavedProfile(false), 3000);
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      {/* Page Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-3xl shadow-lg">
            AJ
          </div>
          <button className="absolute -bottom-1 -right-1 bg-white border border-slate-200 rounded-full w-7 h-7 flex items-center justify-center shadow-sm hover:bg-slate-50 transition-colors">
            <Camera className="w-3.5 h-3.5 text-slate-600" />
          </button>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-slate-900">
              {profile.firstName} {profile.lastName}
            </h1>
            <Badge className="bg-emerald-50 text-emerald-600 border-emerald-100 text-xs">
              Active
            </Badge>
          </div>
          <p className="text-slate-500 text-sm">
            {profile.studentId} · {profile.program}
          </p>
          <p className="text-slate-400 text-xs mt-0.5">{profile.email}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Tabs */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-2">
              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${
                      activeTab === tab.key
                        ? "bg-blue-600 text-white"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </CardContent>
          </Card>

          {/* Academic Summary */}
          <Card className="mt-4">
            <CardContent className="p-5 space-y-3">
              <p className="text-slate-700 text-sm font-medium">Academic Summary</p>
              <div className="space-y-2">
                {[
                  { icon: BookOpen, label: "Program", value: "BSc CS" },
                  { icon: Calendar, label: "Year", value: profile.year },
                  { icon: CheckCircle, label: "GPA", value: profile.gpa },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <item.icon className="w-4 h-4 text-slate-400" />
                    <div>
                      <p className="text-slate-400 text-xs">{item.label}</p>
                      <p className="text-slate-700 text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* ── PROFILE TAB ── */}
          {activeTab === "profile" && (
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-slate-900">Personal Information</h3>
                    <p className="text-slate-500 text-sm">
                      Manage your profile details
                    </p>
                  </div>
                  {!editingProfile ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setEditingProfile(true)}
                      className="flex items-center gap-2"
                    >
                      <Edit3 className="w-4 h-4" />
                      Edit Profile
                    </Button>
                  ) : (
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditingProfile(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                        onClick={handleProfileSave}
                      >
                        <Save className="w-4 h-4" />
                        Save Changes
                      </Button>
                    </div>
                  )}
                </div>

                {savedProfile && (
                  <div className="flex items-center gap-2 p-3 bg-emerald-50 text-emerald-700 rounded-lg mb-4 text-sm">
                    <CheckCircle className="w-4 h-4" />
                    Profile updated successfully!
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { id: "firstName", label: "First Name", icon: User, type: "text" },
                    { id: "lastName", label: "Last Name", icon: User, type: "text" },
                    { id: "email", label: "Email Address", icon: Mail, type: "email" },
                    { id: "phone", label: "Phone Number", icon: Phone, type: "tel" },
                    { id: "dob", label: "Date of Birth", icon: Calendar, type: "date" },
                    { id: "address", label: "Address", icon: MapPin, type: "text" },
                  ].map((field) => (
                    <div key={field.id} className="space-y-1.5">
                      <Label htmlFor={field.id} className="flex items-center gap-2">
                        <field.icon className="w-3.5 h-3.5 text-slate-400" />
                        {field.label}
                      </Label>
                      <Input
                        id={field.id}
                        type={field.type}
                        value={profile[field.id as keyof typeof profile]}
                        onChange={(e) =>
                          setProfile((prev) => ({
                            ...prev,
                            [field.id]: e.target.value,
                          }))
                        }
                        disabled={!editingProfile}
                        className={`${
                          !editingProfile ? "bg-slate-50 cursor-default" : "bg-white"
                        } border-slate-200`}
                      />
                    </div>
                  ))}
                </div>

                {/* Read-only academic info */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <p className="text-slate-700 text-sm font-medium mb-4">
                    Academic Information
                    <span className="ml-2 text-xs text-slate-400 font-normal">
                      (Read-only — contact Registrar to update)
                    </span>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { label: "Student ID", value: profile.studentId },
                      { label: "Program", value: profile.program },
                      { label: "Year of Study", value: profile.year },
                    ].map((item) => (
                      <div key={item.label} className="bg-slate-50 rounded-lg p-4">
                        <p className="text-slate-400 text-xs mb-1">{item.label}</p>
                        <p className="text-slate-800 text-sm">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* ── SECURITY TAB ── */}
          {activeTab === "security" && (
            <div className="space-y-5">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-slate-900 mb-1">Change Password</h3>
                  <p className="text-slate-500 text-sm mb-6">
                    Use a strong, unique password to keep your account safe.
                  </p>
                  <div className="space-y-4 max-w-md">
                    <div className="space-y-1.5">
                      <Label>Current Password</Label>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="pr-10 bg-slate-50 border-slate-200"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        >
                          {showPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label>New Password</Label>
                      <div className="relative">
                        <Input
                          type={showNewPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="pr-10 bg-slate-50 border-slate-200"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        >
                          {showNewPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label>Confirm New Password</Label>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        className="bg-slate-50 border-slate-200"
                      />
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white mt-2">
                      Update Password
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* 2FA */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-slate-900">Two-Factor Authentication</h3>
                      <p className="text-slate-500 text-sm mt-1">
                        Add an extra layer of security using an authenticator app or SMS.
                      </p>
                    </div>
                    <Badge className="bg-slate-100 text-slate-500 border-slate-200">
                      Disabled
                    </Badge>
                  </div>
                  <Button variant="outline" className="mt-4">
                    Enable 2FA
                  </Button>
                </CardContent>
              </Card>

              {/* Sessions */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-slate-900 mb-4">Active Sessions</h3>
                  <div className="space-y-3">
                    {[
                      { device: "Chrome on Windows 11", location: "State City, ST", time: "Now (current session)", active: true },
                      { device: "Safari on iPhone 15", location: "State City, ST", time: "2 hours ago", active: false },
                      { device: "Firefox on macOS", location: "Campus Library", time: "Yesterday", active: false },
                    ].map((session) => (
                      <div
                        key={session.device}
                        className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                      >
                        <div>
                          <p className="text-slate-700 text-sm">{session.device}</p>
                          <p className="text-slate-400 text-xs">
                            {session.location} · {session.time}
                          </p>
                        </div>
                        {session.active ? (
                          <Badge className="bg-emerald-50 text-emerald-600 border-emerald-100 text-xs">
                            Current
                          </Badge>
                        ) : (
                          <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 text-xs">
                            Revoke
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* ── NOTIFICATIONS TAB ── */}
          {activeTab === "notifications" && (
            <Card>
              <CardContent className="p-6">
                <h3 className="text-slate-900 mb-1">Notification Preferences</h3>
                <p className="text-slate-500 text-sm mb-6">
                  Choose what you want to be notified about.
                </p>
                <div className="space-y-1">
                  {notifOptions.map((opt, idx) => (
                    <div
                      key={opt.id}
                      className={`flex items-center justify-between py-4 ${
                        idx !== notifOptions.length - 1
                          ? "border-b border-slate-100"
                          : ""
                      }`}
                    >
                      <div>
                        <p className="text-slate-800 text-sm">{opt.label}</p>
                        <p className="text-slate-400 text-xs">{opt.desc}</p>
                      </div>
                      <Toggle
                        on={notifSettings[opt.id]}
                        onChange={(v) =>
                          setNotifSettings((prev) => ({ ...prev, [opt.id]: v }))
                        }
                      />
                    </div>
                  ))}
                </div>

                {/* Delivery methods */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <p className="text-slate-700 text-sm font-medium mb-4">
                    Delivery Method
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { label: "In-App", icon: Bell, enabled: true },
                      { label: "Email", icon: Mail, enabled: true },
                      { label: "SMS", icon: Phone, enabled: false },
                    ].map((method) => (
                      <div
                        key={method.label}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                          method.enabled
                            ? "border-blue-200 bg-blue-50"
                            : "border-slate-100 bg-slate-50"
                        }`}
                      >
                        <method.icon
                          className={`w-5 h-5 ${
                            method.enabled ? "text-blue-600" : "text-slate-400"
                          }`}
                        />
                        <div>
                          <p
                            className={`text-sm ${
                              method.enabled ? "text-blue-700" : "text-slate-500"
                            }`}
                          >
                            {method.label}
                          </p>
                          <p className="text-xs text-slate-400">
                            {method.enabled ? "Enabled" : "Disabled"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          )}

          {/* ── PRIVACY TAB ── */}
          {activeTab === "privacy" && (
            <div className="space-y-5">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-slate-900 mb-1">Privacy Settings</h3>
                  <p className="text-slate-500 text-sm mb-6">
                    Control how your information is used and shared.
                  </p>
                  <div className="space-y-1">
                    {[
                      {
                        id: "profile_visible",
                        label: "Public Profile",
                        desc: "Allow other students to see your profile",
                        on: false,
                      },
                      {
                        id: "show_gpa",
                        label: "Display GPA",
                        desc: "Show your GPA on your public profile",
                        on: false,
                      },
                      {
                        id: "analytics",
                        label: "Usage Analytics",
                        desc: "Help improve the portal by sharing usage data",
                        on: true,
                      },
                      {
                        id: "marketing",
                        label: "Marketing Communications",
                        desc: "Receive promotional emails from university partners",
                        on: false,
                      },
                    ].map((item, idx, arr) => (
                      <div
                        key={item.id}
                        className={`flex items-center justify-between py-4 ${
                          idx !== arr.length - 1 ? "border-b border-slate-100" : ""
                        }`}
                      >
                        <div>
                          <p className="text-slate-800 text-sm">{item.label}</p>
                          <p className="text-slate-400 text-xs">{item.desc}</p>
                        </div>
                        <Toggle on={item.on} onChange={() => {}} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-slate-900 mb-1">Data & Account</h3>
                  <p className="text-slate-500 text-sm mb-5">
                    Manage your data or close your account.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      Download My Data
                    </Button>
                    <Button
                      variant="outline"
                      className="text-red-600 border-red-200 hover:bg-red-50 flex items-center gap-2"
                    >
                      Close Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
