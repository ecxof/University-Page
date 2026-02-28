import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  ChevronRight,
  ArrowRight,
  Home,
  Utensils,
  Dumbbell,
  Heart,
  Music,
  Globe,
  Cpu,
  Brush,
  BookOpen,
  Trophy,
  Users,
  Calendar,
  MapPin,
  Clock,
  Star,
  Leaf,
  Shield,
  Wifi,
  Wind,
} from "lucide-react";

type LifeTab = "housing" | "dining" | "athletics" | "wellness";

const lifeTabs: { key: LifeTab; label: string; icon: React.ElementType }[] = [
  { key: "housing", label: "Housing", icon: Home },
  { key: "dining", label: "Dining", icon: Utensils },
  { key: "athletics", label: "Athletics", icon: Dumbbell },
  { key: "wellness", label: "Health & Wellness", icon: Heart },
];

const housingOptions = [
  {
    name: "Founders Hall",
    type: "Traditional Double",
    price: "$6,200/year",
    features: ["Shared bathroom", "Laundry room", "24/7 security", "Study lounge"],
    badge: "Most Affordable",
    badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    name: "Lakeside Suites",
    type: "Suite-Style (4 bed)",
    price: "$8,400/year",
    features: ["Private bathroom", "Full kitchen", "Lake views", "Quiet hours 10 PM"],
    badge: "Most Popular",
    badgeColor: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    name: "The Residence",
    type: "Single Studio",
    price: "$10,800/year",
    features: ["Private room & bath", "In-unit washer/dryer", "A/C included", "Graduate students"],
    badge: "Premium",
    badgeColor: "bg-purple-50 text-purple-600 border-purple-100",
  },
];

const housingAmenities = [
  { icon: Wifi, label: "High-Speed Wi-Fi" },
  { icon: Shield, label: "24/7 Security" },
  { icon: Wind, label: "Climate Control" },
  { icon: Leaf, label: "Eco-Friendly Buildings" },
];

const diningPlans = [
  { name: "Basic Plan", meals: "10 meals/week", dining_dollars: "$100", price: "$2,100/semester", popular: false },
  { name: "Standard Plan", meals: "15 meals/week", dining_dollars: "$200", price: "$2,600/semester", popular: true },
  { name: "Premium Plan", meals: "Unlimited", dining_dollars: "$300", price: "$3,000/semester", popular: false },
];

const diningLocations = [
  { name: "Main Dining Hall", hours: "7 AM – 10 PM", type: "All-you-can-eat", icon: Utensils },
  { name: "The Grind (Coffee)", hours: "7 AM – 8 PM", type: "Café & Snacks", icon: Star },
  { name: "Globe Kitchen", hours: "11 AM – 9 PM", type: "International Cuisine", icon: Globe },
  { name: "Fitness Fuel Bar", hours: "6 AM – 9 PM", type: "Healthy & Organic", icon: Leaf },
];

const sports = [
  { name: "Basketball", division: "NCAA Division I", facility: "Anderson Arena (8,000 capacity)", icon: Trophy },
  { name: "Soccer", division: "NCAA Division I", facility: "State Field (4,500 capacity)", icon: Trophy },
  { name: "Swimming", division: "NCAA Division II", facility: "Aquatics Centre (Olympic pool)", icon: Trophy },
  { name: "Track & Field", division: "NCAA Division I", facility: "Stadium Track (400m)", icon: Trophy },
  { name: "Tennis", division: "NCAA Division II", facility: "12 outdoor courts", icon: Trophy },
  { name: "Volleyball", division: "NCAA Division I", facility: "Sports Complex Court", icon: Trophy },
];

const wellnessServices = [
  { icon: Heart, title: "Health Centre", desc: "On-campus medical clinic staffed by nurses and a resident physician. Free consultations for enrolled students.", color: "text-red-600", bg: "bg-red-50" },
  { icon: Users, title: "Counselling Services", desc: "Confidential mental health support including individual therapy, group sessions, and crisis intervention.", color: "text-blue-600", bg: "bg-blue-50" },
  { icon: Dumbbell, title: "Recreation & Fitness", desc: "State-of-the-art gym, yoga studio, rock climbing wall, and intramural sports leagues open to all students.", color: "text-emerald-600", bg: "bg-emerald-50" },
  { icon: Leaf, title: "Mindfulness Centre", desc: "Quiet meditation rooms, wellness workshops, stress management programs, and sleep health resources.", color: "text-teal-600", bg: "bg-teal-50" },
];

const clubs = [
  { icon: Cpu, name: "Robotics Club", members: 120, category: "STEM" },
  { icon: Brush, name: "Fine Arts Society", members: 85, category: "Arts" },
  { icon: Globe, name: "International Students Assoc.", members: 200, category: "Culture" },
  { icon: Music, name: "Jazz Ensemble", members: 40, category: "Music" },
  { icon: BookOpen, name: "Debate & Public Speaking", members: 60, category: "Academic" },
  { icon: Leaf, name: "Sustainability Club", members: 95, category: "Environment" },
  { icon: Heart, name: "Community Service Network", members: 180, category: "Service" },
  { icon: Trophy, name: "Esports Team", members: 55, category: "Gaming" },
];

const upcomingEvents = [
  { title: "Spring Music Festival", date: "March 8, 2026", location: "Main Quad", category: "Culture" },
  { title: "Intramural Basketball Finals", date: "March 14, 2026", location: "Anderson Arena", category: "Sports" },
  { title: "International Food Fair", date: "March 21, 2026", location: "Campus Centre", category: "Food" },
  { title: "Mental Health Awareness Week", date: "April 1–5, 2026", location: "Wellness Hub", category: "Wellness" },
  { title: "Spring Formal Dance", date: "April 12, 2026", location: "Grand Ballroom", category: "Social" },
  { title: "Earth Day Campus Clean-up", date: "April 22, 2026", location: "Campus-wide", category: "Environment" },
];

const categoryColors: Record<string, string> = {
  Culture: "bg-purple-50 text-purple-600 border-purple-100",
  Sports: "bg-blue-50 text-blue-600 border-blue-100",
  Food: "bg-orange-50 text-orange-600 border-orange-100",
  Wellness: "bg-emerald-50 text-emerald-600 border-emerald-100",
  Social: "bg-pink-50 text-pink-600 border-pink-100",
  Environment: "bg-teal-50 text-teal-600 border-teal-100",
};

export function CampusLifePage() {
  const [activeTab, setActiveTab] = useState<LifeTab>("housing");

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1764920265158-500a6e60c487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudCUyMGxpZmUlMjBvdXRkb29yfGVufDF8fHx8MTc3MjI0NjAxMXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Campus life"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <a href="/" className="text-emerald-300 hover:text-white text-sm transition-colors">Home</a>
              <ChevronRight className="w-4 h-4 text-emerald-400" />
              <span className="text-white text-sm">Campus Life</span>
            </div>
            <span className="inline-block bg-white/10 border border-white/20 text-emerald-200 px-4 py-1.5 rounded-full text-sm mb-5">
              60+ Clubs · 18 Sports · 3 Residences
            </span>
            <h1 className="text-white text-5xl mb-5">Life Beyond the Classroom</h1>
            <p className="text-emerald-100 text-xl mb-8 leading-relaxed">
              University is more than academics. Discover a thriving community of clubs,
              events, sports, and experiences that will shape who you become.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
                Explore Campus <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                Find Your Club
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "60+", label: "Student Clubs" },
            { value: "18", label: "Varsity Sports" },
            { value: "3", label: "Residence Halls" },
            { value: "15", label: "Dining Locations" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl">{s.value}</div>
              <div className="text-emerald-200 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-16 space-y-20">

        {/* Housing / Dining / Athletics / Wellness Tabs */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-slate-900 mb-2">On-Campus Living</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Everything you need, all in one place.
            </p>
          </div>

          {/* Tab Bar */}
          <div className="flex gap-2 flex-wrap mb-8 justify-center">
            {lifeTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm transition-colors ${
                  activeTab === tab.key
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Housing */}
          {activeTab === "housing" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {housingOptions.map((h) => (
                  <Card key={h.name} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="bg-slate-100 w-10 h-10 rounded-xl flex items-center justify-center">
                          <Home className="w-5 h-5 text-slate-600" />
                        </div>
                        <Badge className={`text-xs border ${h.badgeColor}`}>{h.badge}</Badge>
                      </div>
                      <h3 className="text-slate-900 mb-0.5">{h.name}</h3>
                      <p className="text-slate-400 text-xs mb-1">{h.type}</p>
                      <p className="text-emerald-600 mb-4">{h.price}</p>
                      <ul className="space-y-2 mb-5">
                        {h.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-slate-500 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="w-full text-sm">Learn More</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="bg-slate-50 rounded-2xl p-6">
                <p className="text-slate-700 text-sm font-medium mb-4">Included in All Residences</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {housingAmenities.map((a) => (
                    <div key={a.label} className="flex items-center gap-2">
                      <a.icon className="w-4 h-4 text-emerald-600" />
                      <span className="text-slate-600 text-sm">{a.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1761245591926-6117489d5ce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudCUyMGhvdXNpbmclMjBkb3JtaXRvcnl8ZW58MXx8fHwxNzcyMjQ2MDE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Student housing"
                  className="w-full h-52 object-cover"
                />
              </div>
            </div>
          )}

          {/* Dining */}
          {activeTab === "dining" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {diningPlans.map((plan) => (
                  <Card key={plan.name} className={`hover:shadow-lg transition-shadow ${plan.popular ? "border-2 border-emerald-400" : ""}`}>
                    <CardContent className="p-6">
                      {plan.popular && (
                        <Badge className="bg-emerald-50 text-emerald-600 border-emerald-100 text-xs mb-3">Most Popular</Badge>
                      )}
                      <h3 className="text-slate-900 mb-4">{plan.name}</h3>
                      <div className="space-y-3 mb-5">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-500">Meals per week</span>
                          <span className="text-slate-800">{plan.meals}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-500">Dining dollars</span>
                          <span className="text-slate-800">{plan.dining_dollars}</span>
                        </div>
                        <div className="border-t border-slate-100 pt-3 flex items-center justify-between">
                          <span className="text-slate-500 text-sm">Price</span>
                          <span className="text-emerald-600">{plan.price}</span>
                        </div>
                      </div>
                      <Button
                        className={`w-full text-sm ${plan.popular ? "bg-emerald-600 hover:bg-emerald-700 text-white" : ""}`}
                        variant={plan.popular ? "default" : "outline"}
                      >
                        Select Plan
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div>
                <h3 className="text-slate-900 mb-4">Dining Locations</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {diningLocations.map((loc) => (
                    <div key={loc.name} className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-xl hover:shadow-sm transition-shadow">
                      <div className="bg-orange-50 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                        <loc.icon className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-slate-800 text-sm">{loc.name}</p>
                        <p className="text-slate-400 text-xs">{loc.type} · {loc.hours}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Athletics */}
          {activeTab === "athletics" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-slate-900 mb-4">Varsity Sports Programs</h3>
                  <div className="space-y-3">
                    {sports.map((sport) => (
                      <div key={sport.name} className="flex items-start gap-4 p-4 bg-white border border-slate-100 rounded-xl hover:shadow-sm transition-shadow">
                        <div className="bg-blue-50 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                          <sport.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-slate-800 text-sm">{sport.name}</p>
                          <p className="text-slate-400 text-xs">{sport.division}</p>
                          <p className="text-slate-500 text-xs flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3" /> {sport.facility}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="rounded-2xl overflow-hidden shadow">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1766459710529-c9fdb8023ecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3BvcnRzJTIwYXRobGV0aWNzJTIwc3RhZGl1bXxlbnwxfHx8fDE3NzIyNDYwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Athletics stadium"
                      className="w-full h-52 object-cover"
                    />
                  </div>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-slate-900 mb-3">Intramural Sports</h4>
                      <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                        Not going varsity? No problem. Our intramural leagues welcome all skill levels
                        across basketball, flag football, volleyball, badminton, and more.
                      </p>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                        Join Intramurals
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {/* Wellness */}
          {activeTab === "wellness" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {wellnessServices.map((ws) => (
                  <Card key={ws.title} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className={`${ws.bg} ${ws.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                        <ws.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-slate-900 mb-2">{ws.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{ws.desc}</p>
                      <button className={`mt-4 text-sm ${ws.color} flex items-center gap-1 hover:gap-2 transition-all`}>
                        Learn More <ChevronRight className="w-4 h-4" />
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-slate-900 mb-2">Need to Talk to Someone?</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Our counselling services team is available 24/7 for crisis support.
                    All sessions are completely confidential.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white">Book Appointment</Button>
                  <Button variant="outline">Crisis Hotline</Button>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Student Clubs */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-slate-900 mb-1">Student Clubs & Organizations</h2>
              <p className="text-slate-500 text-sm">Over 60 groups — find your community</p>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              View All Clubs <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {clubs.map((club) => (
              <Card key={club.name} className="hover:shadow-md transition-shadow cursor-pointer group">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-slate-100 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                      <club.icon className="w-5 h-5 text-slate-600" />
                    </div>
                    <Badge className="bg-slate-50 text-slate-500 border-slate-200 text-xs">{club.category}</Badge>
                  </div>
                  <h4 className="text-slate-900 text-sm mb-1">{club.name}</h4>
                  <p className="text-slate-400 text-xs flex items-center gap-1">
                    <Users className="w-3 h-3" /> {club.members} members
                  </p>
                  <button className="mt-3 text-xs text-emerald-600 flex items-center gap-0.5 group-hover:gap-1.5 transition-all">
                    Join Club <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Campus Events */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-slate-900 mb-1">Upcoming Events</h2>
              <p className="text-slate-500 text-sm">What's happening on campus this season</p>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Full Events Calendar
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {upcomingEvents.map((event) => (
              <Card key={event.title} className="hover:shadow-md transition-shadow cursor-pointer group">
                <CardContent className="p-5">
                  <Badge className={`text-xs border mb-3 ${categoryColors[event.category] ?? "bg-slate-50 text-slate-500"}`}>
                    {event.category}
                  </Badge>
                  <h4 className="text-slate-900 text-sm mb-3">{event.title}</h4>
                  <div className="space-y-1.5">
                    <p className="text-slate-500 text-xs flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" /> {event.date}
                    </p>
                    <p className="text-slate-500 text-xs flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" /> {event.location}
                    </p>
                  </div>
                  <button className="mt-3 text-xs text-emerald-600 flex items-center gap-0.5 group-hover:gap-1.5 transition-all">
                    Learn More <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Photo Feature */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-slate-900 mb-2">Life on Campus</h2>
            <p className="text-slate-500">A glimpse of what makes State University special</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:row-span-2 rounded-2xl overflow-hidden shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764920265158-500a6e60c487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudCUyMGxpZmUlMjBvdXRkb29yfGVufDF8fHx8MTc3MjI0NjAxMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Campus outdoors"
                className="w-full h-full min-h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764071546600-fd5f7a611ae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGdyb3VwJTIwYWN0aXZpdHklMjBvdXRkb29yJTIwZXZlbnR8ZW58MXx8fHwxNzcyMjQ2MDE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Student activity"
                className="w-full h-52 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1766459710529-c9fdb8023ecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3BvcnRzJTIwYXRobGV0aWNzJTIwc3RhZGl1bXxlbnwxfHx8fDE3NzIyNDYwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Athletics"
                className="w-full h-52 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761245591926-6117489d5ce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudCUyMGhvdXNpbmclMjBkb3JtaXRvcnl8ZW58MXx8fHwxNzcyMjQ2MDE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Student housing"
                className="w-full h-52 object-cover"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl p-10 text-white text-center">
          <Users className="w-12 h-12 mx-auto mb-4 text-emerald-200" />
          <h2 className="text-white mb-3">Become Part of Our Community</h2>
          <p className="text-emerald-100 mb-6 max-w-xl mx-auto">
            From the moment you arrive, you'll be part of a supportive, diverse, and vibrant campus community.
            Your best years start here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
              Apply for Housing <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white/10">
              <Clock className="mr-2 w-4 h-4" />
              Schedule a Campus Tour
            </Button>
          </div>
        </section>

      </main>
    </div>
  );
}