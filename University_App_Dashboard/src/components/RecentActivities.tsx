import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Bell, UserPlus, BookOpen, Calendar } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "enrollment",
    icon: UserPlus,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    title: "New student enrolled",
    description: "245 students registered today",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "course",
    icon: BookOpen,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    title: "Course created",
    description: "Advanced Data Science added",
    time: "4 hours ago",
  },
  {
    id: 3,
    type: "event",
    icon: Calendar,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    title: "Event scheduled",
    description: "Career Fair on Dec 15",
    time: "5 hours ago",
  },
  {
    id: 4,
    type: "alert",
    icon: Bell,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    title: "System update",
    description: "Grade submission deadline",
    time: "1 day ago",
  },
  {
    id: 5,
    type: "enrollment",
    icon: UserPlus,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    title: "Graduation applications",
    description: "156 students applied",
    time: "2 days ago",
  },
  {
    id: 6,
    type: "course",
    icon: BookOpen,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    title: "Course completed",
    description: "Summer session ended",
    time: "3 days ago",
  },
];

export function RecentActivities() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex gap-3">
                <div
                  className={`${activity.bgColor} ${activity.color} p-2 rounded-lg h-fit`}
                >
                  <activity.icon className="w-4 h-4" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-slate-900">{activity.title}</p>
                  <p className="text-slate-600 text-sm">{activity.description}</p>
                  <p className="text-slate-400 text-xs">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
