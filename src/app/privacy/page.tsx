"use client";

import { ShieldCheck, Lock, Eye } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0f1a] to-[#111827] text-white px-6 py-24">
      <div className="max-w-4xl mx-auto backdrop-blur-xl border border-white/10 bg-white/5 p-10 rounded-2xl shadow-2xl space-y-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 text-white">Privacy Policy</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Your privacy matters. Learn how we collect, use, and protect your data.
          </p>
        </div>

        {/* Sections */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-3">
            <ShieldCheck className="text-green-400" />
            Your Data Is Protected
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We are committed to safeguarding your information using industry-leading
            security protocols and privacy practices. Your trust is our top priority.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-3">
            <Lock className="text-blue-500" />
            What We Collect
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We may collect data like your name, email, device ID, IP address, and app usage
            to deliver security services. All data is encrypted in transit and at rest.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-3">
            <Eye className="text-purple-500" />
            How We Use It
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Your data helps us personalize your experience, detect threats, and improve
            protection. We never sell or rent your data to third parties.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Third-Party Services</h2>
          <p className="text-gray-300 leading-relaxed">
            We partner with GDPR- and CCPA-compliant vendors for analytics, billing, and
            security operations. These partners adhere to strict confidentiality standards.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Your Rights</h2>
          <p className="text-gray-300 leading-relaxed">
            You may request access, correction, or deletion of your personal data at any time.
            Contact our support team to exercise your rights under global privacy laws.
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
