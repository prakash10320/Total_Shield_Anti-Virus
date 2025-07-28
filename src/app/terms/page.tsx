"use client";

import { FileText, ShieldAlert, ScrollText } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0f1a] to-[#111827] text-white px-6 py-24">
      <div className="max-w-4xl mx-auto backdrop-blur-xl border border-white/10 bg-white/5 p-10 rounded-2xl shadow-2xl space-y-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 text-white">Terms & Conditions</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Please read our terms carefully before using TotalShield services.
          </p>
        </div>

        {/* Sections */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-3">
            <FileText className="text-indigo-400" />
            Acceptance of Terms
          </h2>
          <p className="text-gray-300 leading-relaxed">
            By accessing or using TotalShield, you confirm that you accept and agree to these terms.
            If you disagree with any part, please discontinue use.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-3">
            <ShieldAlert className="text-red-400" />
            User Responsibilities
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Users must not engage in unauthorized access, reverse engineering, or distribution of
            harmful content. Violations may result in suspension or legal action.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-3">
            <ScrollText className="text-purple-400" />
            License & Usage
          </h2>
          <p className="text-gray-300 leading-relaxed">
            TotalShield grants a limited, non-exclusive license for use as per your
            subscription. You may not sublicense, resell, or alter core software.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Modifications</h2>
          <p className="text-gray-300 leading-relaxed">
            We may modify these terms at any time. Continued usage signifies your agreement
            to the most recent version.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Governing Law</h2>
          <p className="text-gray-300 leading-relaxed">
            These terms are governed by and interpreted in accordance with the laws of your
            jurisdiction, without regard to conflict of law principles.
          </p>
        </section>

        {/* Footer note */}
        <p className="text-xs text-center text-gray-500 pt-8">
          Last updated: July 2025
        </p>
      </div>
    </main>
  );
}
