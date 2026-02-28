import { Card, CardContent } from "./ui/card";
import { Calendar, FileText, BookOpen, Mail, CreditCard, Trophy } from "lucide-react";

const quickLinks = [
  {
    icon: Calendar,
    title: "Academic Calendar",
    description: "View important dates",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: FileText,
    title: "Course Catalog",
    description: "Browse courses",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    icon: BookOpen,
    title: "Library",
    description: "Access resources",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Student webmail",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: CreditCard,
    title: "Tuition Pay",
    description: "Make payment",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
  },
  {
    icon: Trophy,
    title: "Athletics",
    description: "Sports & events",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
];

export function QuickLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {quickLinks.map((link) => (
        <Card
          key={link.title}
          className="hover:shadow-lg transition-shadow cursor-pointer"
        >
          <CardContent className="p-6 text-center">
            <div className={`${link.bgColor} ${link.color} w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3`}>
              <link.icon className="w-6 h-6" />
            </div>
            <h4 className="text-slate-900 text-sm mb-1">{link.title}</h4>
            <p className="text-slate-500 text-xs">{link.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
