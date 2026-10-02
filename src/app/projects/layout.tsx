"use client";

import DesktopScaler from "@/components/DesktopScaler";

export default function ProjectsLayout({ children }) {
  return (
    <DesktopScaler desktopWidth={1440}>
      {children}
    </DesktopScaler>
  );
}
