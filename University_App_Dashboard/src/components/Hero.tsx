import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm">🎓 Ranked #1 Public University in the Region</span>
            </div>
            <h1 className="text-white text-5xl lg:text-6xl mb-6">
              Empowering Future Leaders
            </h1>
            <p className="text-blue-100 text-xl mb-8">
              Join 12,000+ students pursuing excellence across 50+ programs.
              Transform your future with world-class education and cutting-edge research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white/10"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Campus Tour
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl mb-1">50+</div>
                <div className="text-blue-200 text-sm">Programs</div>
              </div>
              <div>
                <div className="text-3xl mb-1">856</div>
                <div className="text-blue-200 text-sm">Faculty</div>
              </div>
              <div>
                <div className="text-3xl mb-1">95%</div>
                <div className="text-blue-200 text-sm">Job Placement</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80"
                alt="University campus"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-6 rounded-xl shadow-xl max-w-xs">
              <div className="text-emerald-600 text-sm mb-2">Spring 2025 Applications</div>
              <div className="text-3xl mb-1">Open Now</div>
              <div className="text-slate-600 text-sm">Deadline: January 15, 2025</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}