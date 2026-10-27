"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavItem {
  id: string;
  label: string;
  mobileLabel?: string;
  href: string;
}

export const DEFAULT_NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", mobileLabel: "Home", href: "/" },
  { id: "projects", label: "Projects", mobileLabel: "Featured Projects", href: "/projects" },
  { id: "services", label: "Services", mobileLabel: "Services & Solutions", href: "/services" },
  { id: "testimonials", label: "Reviews", mobileLabel: "Client Reviews", href: "/#testimonials" },
  { id: "pricing", label: "Pricing", mobileLabel: "Retainer & Pricing", href: "/pricing" },
  { id: "contact", label: "Contact", mobileLabel: "Contact Prateek", href: "/contact" },
];

export interface HeaderProps {
  navItems?: NavItem[];
}

export function Header({ navItems = DEFAULT_NAV_ITEMS }: HeaderProps) {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const items = navItems;

  useEffect(() => {
    let savedTheme = "dark";
    try {
      savedTheme = localStorage.getItem("prateek_theme") || "dark";
    } catch {
      // ignore
    }
    const isDarkTheme = savedTheme === "dark";
    setIsDark(isDarkTheme);
    applyThemeClass(isDarkTheme);
  }, []);

  // ScrollSpy to dynamically highlight active nav item on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -65% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    items.forEach((item) => {
      if (item.href.startsWith("#")) {
        const id = item.href.slice(1);
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  const applyThemeClass = (dark: boolean) => {
    const htmlEl = document.documentElement;
    const iconHref = dark ? "/images/dark.jpeg" : "/images/light.jpeg";
    const favicon = document.getElementById("dynamic-favicon") as HTMLLinkElement | null;
    if (favicon) favicon.href = iconHref;
    const allFavicons = document.querySelectorAll<HTMLLinkElement>("link[rel*='icon']");
    allFavicons.forEach((el) => {
      el.href = iconHref;
    });

    if (dark) {
      htmlEl.classList.add("dark");
      try {
        localStorage.setItem("prateek_theme", "dark");
      } catch { }
    } else {
      htmlEl.classList.remove("dark");
      try {
        localStorage.setItem("prateek_theme", "light");
      } catch { }
    }
  };

  const handleToggleTheme = (dark: boolean) => {
    setIsDark(dark);
    applyThemeClass(dark);
  };

  return (
    <>
      {/* HEADER & DESKTOP/MOBILE NAVIGATION */}
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/30 transition-all duration-300">
        <div className="h-20 max-w-[1280px] mx-auto px-margin flex items-center justify-between gap-space-md">
          {/* Brand Logo / Identity */}
          <Link
            className="flex items-center gap-space-sm group shrink-0"
            href="/"
            aria-label="Prateek Kumar - Homepage"
          >
            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-primary-container/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-[0_0_15px_-3px_rgba(239,68,68,0.4)] bg-surface-container">
              <img
                alt="Prateek Kumar Brand Logo"
                className="brand-logo-dark w-full h-full object-cover object-center"
                src="/images/dark.jpeg"
              />
              <img
                alt="Prateek Kumar Brand Logo"
                className="brand-logo-light w-full h-full object-cover object-center"
                src="/images/light.jpeg"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight uppercase leading-none">
                PRATEEK KUMAR
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest mt-1">
                FREELANCE DEV &amp;
                <br />
                TECH TRAINER // 5+ yRS
              </span>
            </div>
          </Link>

          {/* Dynamic Desktop Navigation Menu */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-space-xs"
            id="desktop-nav"
            aria-label="Main Navigation"
          >
            {items.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  className={`px-2.5 py-1.5 xl:px-space-sm xl:py-space-xs font-label-md text-label-md rounded transition-colors whitespace-nowrap ${isActive
                    ? "text-primary font-semibold bg-surface-container-high active-nav"
                    : "text-on-surface-variant hover:text-primary hover:bg-surface-container-high"
                    }`}
                  href={item.href}
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Top Header Actions: Theme Switcher & Contact Button */}
          <div className="flex items-center gap-2 sm:gap-space-sm shrink-0">
            {/* Theme Switcher */}
            <div
              className="relative flex items-center bg-surface-container-lowest p-1 rounded-full border border-outline-variant/40 shadow-inner"
              id="theme-toggle-container"
              role="radiogroup"
              aria-label="Color scheme toggle"
            >
              <button
                aria-label="Switch to Light Mode"
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full font-label-caps text-[11px] tracking-wider transition-all duration-200 cursor-pointer ${!isDark
                  ? "bg-primary-container text-on-primary-container font-bold shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
                  }`}
                id="theme-light-btn"
                type="button"
                onClick={() => handleToggleTheme(false)}
              >
                <span className="material-symbols-outlined text-[15px]">
                  light_mode
                </span>
                <span className="hidden sm:inline"></span>
              </button>
              <button
                aria-label="Switch to Dark Mode"
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full font-label-caps text-[11px] tracking-wider transition-all duration-200 cursor-pointer ${isDark
                  ? "bg-primary-container text-on-primary-container font-bold shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
                  }`}
                id="theme-dark-btn"
                type="button"
                onClick={() => handleToggleTheme(true)}
              >
                <span className="material-symbols-outlined text-[15px]">
                  dark_mode
                </span>
                <span className="hidden sm:inline"></span>
              </button>
            </div>

            {/* Desktop Direct CTA Button */}
            <Link
              className="hidden lg:inline-flex items-center justify-center px-space-md py-space-sm bg-primary-container text-on-primary-container font-label-md text-label-md rounded uppercase tracking-wider hover:bg-secondary-container transition-all shadow-[0_0_20px_-5px_rgba(220,38,38,0.45)] whitespace-nowrap"
              href="/contact"
            >
              Hire &amp; Train
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant/40 text-on-surface hover:text-primary hover:border-primary/50 transition-colors focus:outline-none cursor-pointer"
              id="mobile-menu-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span
                className="material-symbols-outlined text-[26px]"
                id="mobile-menu-icon"
              >
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Dynamic Mobile Drawer Menu Overlay */}
        <div
          aria-hidden={!mobileMenuOpen}
          className={`${mobileMenuOpen ? "block" : "hidden"
            } lg:hidden border-b border-outline-variant/40 bg-surface/98 backdrop-blur-2xl transition-all duration-300 overflow-hidden shadow-2xl`}
          id="mobile-menu"
        >
          <div className="max-w-[1280px] mx-auto px-margin py-space-md flex flex-col gap-space-md">
            <nav
              className="flex flex-col gap-1"
              id="mobile-nav-links"
              aria-label="Mobile Navigation"
            >
              {items.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <Link
                    key={item.id}
                    className={`flex items-center justify-between px-space-sm py-2.5 rounded-lg font-label-md text-label-md transition-colors ${isActive
                      ? "text-primary font-semibold bg-surface-container-high active-nav"
                      : "text-on-surface hover:text-primary hover:bg-surface-container-high"
                      }`}
                    href={item.href}
                    onClick={() => {
                      setActiveSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                  >
                    <span className="flex items-center gap-2">
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                      )}
                      {item.mobileLabel || item.label}
                    </span>
                    <span
                      className={`material-symbols-outlined text-[18px] ${isActive ? "opacity-60" : "opacity-40"
                        }`}
                    >
                      arrow_forward_ios
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Action & Profile Strip */}
            <div className="pt-space-sm border-t border-outline-variant/30 flex flex-col gap-space-sm">
              <Link
                className="w-full py-3 bg-primary-container text-on-primary-container font-label-md text-label-md font-bold rounded-lg uppercase tracking-wider hover:bg-secondary-container transition-all shadow-[0_0_20px_-3px_rgba(220,38,38,0.5)] flex items-center justify-center gap-2"
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Hire Freelancer / Book Training</span>
                <span className="material-symbols-outlined text-[18px]">
                  send
                </span>
              </Link>
              <div className="flex items-center justify-between pt-1 font-label-caps text-[11px] text-on-surface-variant">
                <span className="font-code-inline text-primary">
                  +91 9721396405
                </span>
                <div className="flex items-center gap-3 font-code-inline">
                  <Link
                    className="hover:text-primary transition-colors"
                    href="https://linkedin.com/in/prateek-kumar-229599184"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    [LINKEDIN]
                  </Link>
                  <Link
                    className="hover:text-primary transition-colors"
                    href="mailto:prateekpppp4@gmail.com"
                  >
                    [EMAIL]
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
