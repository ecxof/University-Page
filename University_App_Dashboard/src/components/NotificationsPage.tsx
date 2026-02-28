import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Bell,
  CheckCheck,
  Trash2,
  GraduationCap,
  Calendar,
  CreditCard,
  Megaphone,
  BookOpen,
  AlertCircle,
  ChevronRight,
  BellOff,
} from "lucide-react";

type Category = "all" | "academic" | "financial" | "events" | "system";

interface Notification {
  id: number;
  type: Category;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
  priority?: "high" | "normal";
}

const initialNotifications: Notification[] = [
  {
    id: 1,
    type: "academic",
    icon: GraduationCap,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    title: "Grades Posted – MATH 301",
    description: "Your final grade for Calculus III has been posted. Check your academic record.",
    time: "2 minutes ago",
    read: false,
    priority: "high",
  },
  {
    id: 2,
    type: "financial",
    icon: CreditCard,
    iconColor: "text-orange-600",
    iconBg: "bg-orange-50",
    title: "Tuition Payment Due",
    description: "Your Spring 2025 tuition payment of $4,250 is due on February 15, 2025.",
    time: "1 hour ago",
    read: false,
    priority: "high",
  },
  {
    id: 3,
    type: "events",
    icon: Calendar,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50",
    title: "Career Fair – February 20",
    description: "The Annual Spring Career Fair is scheduled for February 20. Over 80 companies attending.",
    time: "3 hours ago",
    read: false,
  },
  {
    id: 4,
    type: "academic",
    icon: BookOpen,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    title: "Course Registration Opens",
    description: "Spring 2025 course registration opens on November 1st. Plan your schedule now.",
    time: "Yesterday",
    read: true,
  },
  {
    id: 5,
    type: "system",
    icon: AlertCircle,
    iconColor: "text-red-600",
    iconBg: "bg-red-50",
    title: "System Maintenance Scheduled",
    description: "The student portal will be unavailable on Sunday, Nov 3 from 2–4 AM for scheduled maintenance.",
    time: "2 days ago",
    read: true,
  },
  {
    id: 6,
    type: "events",
    icon: Megaphone,
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-50",
    title: "Campus Town Hall – Save the Date",
    description: "President Williams invites all students to the Fall Town Hall on November 10 at 4 PM.",
    time: "3 days ago",
    read: true,
  },
  {
    id: 7,
    type: "academic",
    icon: GraduationCap,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    title: "Midterm Results – CS 201",
    description: "Your midterm exam results for Introduction to Computer Science are now available.",
    time: "4 days ago",
    read: true,
  },
  {
    id: 8,
    type: "financial",
    icon: CreditCard,
    iconColor: "text-orange-600",
    iconBg: "bg-orange-50",
    title: "Scholarship Award Confirmed",
    description: "Congratulations! Your Merit Excellence Scholarship of $2,000 has been applied to your account.",
    time: "1 week ago",
    read: true,
  },
];

const tabs: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "academic", label: "Academic" },
  { key: "financial", label: "Financial" },
  { key: "events", label: "Events" },
  { key: "system", label: "System" },
];

export function NotificationsPage() {
  const [active, setActive] = useState<Category>("all");
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);

  const filtered =
    active === "all" ? notifications : notifications.filter((n) => n.type === active);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));

  const markRead = (id: number) =>
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );

  const deleteNotif = (id: number) =>
    setNotifications((prev) => prev.filter((n) => n.id !== id));

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-white w-11 h-11 rounded-xl flex items-center justify-center">
            <Bell className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-slate-900">Notifications</h1>
            {unreadCount > 0 ? (
              <p className="text-slate-500 text-sm">
                You have{" "}
                <span className="text-blue-600 font-medium">{unreadCount} unread</span>{" "}
                notification{unreadCount !== 1 ? "s" : ""}
              </p>
            ) : (
              <p className="text-slate-500 text-sm">All caught up!</p>
            )}
          </div>
        </div>
        {unreadCount > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={markAllRead}
            className="flex items-center gap-2"
          >
            <CheckCheck className="w-4 h-4" />
            Mark all as read
          </Button>
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
        {tabs.map((tab) => {
          const count =
            tab.key === "all"
              ? notifications.filter((n) => !n.read).length
              : notifications.filter((n) => n.type === tab.key && !n.read).length;
          return (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${
                active === tab.key
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {tab.label}
              {count > 0 && (
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                    active === tab.key
                      ? "bg-white/20 text-white"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Notification List */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <BellOff className="w-12 h-12 text-slate-300 mb-3" />
          <p className="text-slate-500">No notifications in this category.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((notif) => (
            <Card
              key={notif.id}
              className={`transition-all hover:shadow-md ${
                !notif.read ? "border-l-4 border-l-blue-500" : ""
              }`}
            >
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div
                    className={`${notif.iconBg} ${notif.iconColor} w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5`}
                  >
                    <notif.icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p
                          className={`text-sm ${
                            !notif.read ? "text-slate-900 font-medium" : "text-slate-700"
                          }`}
                        >
                          {notif.title}
                        </p>
                        {notif.priority === "high" && (
                          <Badge className="bg-red-50 text-red-600 border-red-100 text-xs">
                            Urgent
                          </Badge>
                        )}
                        {!notif.read && (
                          <span className="w-2 h-2 bg-blue-500 rounded-full" />
                        )}
                      </div>
                      <span className="text-xs text-slate-400 whitespace-nowrap shrink-0">
                        {notif.time}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                      {notif.description}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      {!notif.read && (
                        <button
                          onClick={() => markRead(notif.id)}
                          className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
                        >
                          <CheckCheck className="w-3.5 h-3.5" />
                          Mark as read
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotif(notif.id)}
                        className="text-xs text-slate-400 hover:text-red-500 flex items-center gap-1 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Dismiss
                      </button>
                      <button className="ml-auto text-xs text-slate-400 hover:text-slate-700 flex items-center gap-0.5 transition-colors">
                        View details
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Notification Settings hint */}
      {filtered.length > 0 && (
        <div className="mt-8 p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-slate-400" />
            <div>
              <p className="text-slate-700 text-sm">Notification Preferences</p>
              <p className="text-slate-400 text-xs">
                Control which notifications you receive
              </p>
            </div>
          </div>
          <Button variant="outline" size="sm" asChild>
            <a href="/account">Manage in Account</a>
          </Button>
        </div>
      )}
    </main>
  );
}
