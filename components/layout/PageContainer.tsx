"use client";

import { ReactNode } from "react";

import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import Footer from "./Footer";

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainer({
  children,
}: PageContainerProps) {
  return (
    <div className="flex h-screen bg-[#0B1120]">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="flex flex-col flex-1 overflow-hidden">

        {/* Top Navigation */}

        <TopNavbar />

        {/* Page */}

        <main className="flex-1 overflow-y-auto bg-[#020617] px-8 py-6">

          {children}

        </main>

        {/* Footer */}

        <Footer />

      </div>

    </div>
  );
}