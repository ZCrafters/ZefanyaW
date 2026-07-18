"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      {/* Custom cursor on all pages */}
      <CustomCursor />

      {/* Sidebar only on non-home pages */}
      {!isHomePage && <Sidebar />}

      <main className="relative z-10">
        {children}
      </main>

      {/* Footer only on non-home pages */}
      {!isHomePage && <Footer />}
    </>
  );
}
