"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const mainLinks = [
    { label: "Features", href: "#features", internal: true },
    { label: "Pricing", href: "#pricing", internal: true },
    { label: "Testimonials", href: "#testimonials", internal: true },
  ];

  const legalLinks = [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/60 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-indigo-700 hover:opacity-90 transition"
          aria-label="Home"
        >
          TotalShield
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          {[...mainLinks, ...legalLinks].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-indigo-600 transition ${
                pathname === link.href ? "text-indigo-700 font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          {/* <Link
            href="/login"
            className={`hover:text-indigo-600 transition ${
              pathname === "/login" ? "text-indigo-700 font-semibold" : ""
            }`}
          >
            Login
          </Link> */}
        </nav>

        {/* CTA Button + Login (Desktop) */}
        <div className="hidden md:flex gap-3 items-center">
          <Link href="/login">
            <Button variant="outline" className="text-sm">Login</Button>
          </Link>
          <Link href="/start-trial">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow hover:scale-105 transition">
              Start Trial
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          aria-label="Toggle Menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-6 pt-2 space-y-4 bg-white/80 backdrop-blur-sm border-t border-gray-200">
          {[...mainLinks, ...legalLinks, { label: "Login", href: "/login" }].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-indigo-600 transition"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/start-trial" onClick={() => setMobileOpen(false)}>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              Start Trial
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
