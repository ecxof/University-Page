import { StatsCards } from "./StatsCards";
import { EnrollmentChart } from "./EnrollmentChart";
import { DepartmentBreakdown } from "./DepartmentBreakdown";
import { RecentActivities } from "./RecentActivities";
import { GradeDistribution } from "./GradeDistribution";
import { CourseTable } from "./CourseTable";
import { Hero } from "./Hero";
import { QuickLinks } from "./QuickLinks";
import { ContactSection } from "./ContactSection";

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Quick Links */}
        <QuickLinks />

        {/* Dashboard Section */}
        <section id="dashboard" className="mt-12">
          <div className="mb-8">
            <h2 className="text-slate-900">Analytics Dashboard</h2>
            <p className="text-slate-600 mt-2">
              Real-time insights and statistics for Academic Year 2024-2025
            </p>
          </div>

          {/* Stats Overview */}
          <StatsCards />

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <EnrollmentChart />
            <DepartmentBreakdown />
          </div>

          {/* Grade Distribution */}
          <div className="mt-6">
            <GradeDistribution />
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2">
              <CourseTable />
            </div>
            <div className="lg:col-span-1">
              <RecentActivities />
            </div>
          </div>
        </section>
      </main>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
