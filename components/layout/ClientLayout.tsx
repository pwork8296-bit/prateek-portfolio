"use client";

import React, { createContext, useContext } from "react";
import { Header, NavItem } from "../sections/Header";
import { Footer } from "../sections/Footer";

export interface ClientLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  navItems?: NavItem[];
}

const LayoutContext = createContext<boolean>(false);

export function ClientLayout({
  children,
  showHeader = true,
  showFooter = true,
  navItems,
}: ClientLayoutProps) {
  const isInsideLayout = useContext(LayoutContext);

  if (isInsideLayout) {
    return <>{children}</>;
  }

  return (
    <LayoutContext.Provider value={true}>
      {showHeader && <Header navItems={navItems} />}
      <main className="w-full pt-20 bg-background flex-1" id="main-content">
        {children}
      </main>
      {showFooter && <Footer />}
    </LayoutContext.Provider>
  );
}

export { ClientLayout as Layout };
export default ClientLayout;
