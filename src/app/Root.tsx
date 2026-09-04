import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navigation } from "../components/layout/Navigation";
import { Footer } from "../components/layout/Footer";

export function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
