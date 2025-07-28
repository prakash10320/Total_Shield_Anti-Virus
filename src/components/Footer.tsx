"use client";

import Link from "next/link";
import { Mail, ShieldCheck, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a101f] text-gray-300 border-t border-white/10">
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand & Mission */}
        <div>
          <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-indigo-500" />
            TotalShield
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            TotalShield is your complete cybersecurity solution — combining real-time protection, VPN, optimization, and identity security in one powerful suite.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#features" className="hover:text-white transition">Features</Link></li>
            <li><Link href="#pricing" className="hover:text-white transition">Pricing</Link></li>
            <li><Link href="/download" className="hover:text-white transition">Download</Link></li>
            <li><Link href="/support" className="hover:text-white transition">Support</Link></li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
            <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h4 className="text-white font-semibold mb-4">Stay Connected</h4>
          <form className="space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button type="submit" className="absolute right-2 top-1.5 text-indigo-400 hover:text-white transition">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </form>

          <div className="flex items-center gap-4 mt-6">
            <Link href="https://twitter.com" target="_blank" className="hover:text-white transition">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-white transition">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="https://github.com" target="_blank" className="hover:text-white transition">
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 px-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} TotalShield Inc. All rights reserved.
      </div>
    </footer>
  );
}
