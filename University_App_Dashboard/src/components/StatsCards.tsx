import { Card, CardContent } from "./ui/card";
import { Users, BookOpen, GraduationCap, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Total Students",
    value: "12,458",
    change: "+12% from last year",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Active Courses",
    value: "342",
    change: "18 new this semester",
    icon: BookOpen,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Faculty Members",
    value: "856",
    change: "+5% from last year",
    icon: GraduationCap,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Average Attendance",
    value: "87.3%",
    change: "+2.1% this month",
    icon: TrendingUp,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-600">{stat.title}</p>
                <h3 className="text-slate-900 mt-2">{stat.value}</h3>
                <p className="text-slate-500 text-sm mt-1">{stat.change}</p>
              </div>
              <div className={`${stat.bgColor} ${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
