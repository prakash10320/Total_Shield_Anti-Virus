"use client";

import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, Globe, Cpu } from "lucide-react";

export default function StartTrialPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0f1a] to-[#111827] text-white py-24 px-6">
      <div className="max-w-4xl mx-auto backdrop-blur-xl border border-white/10 bg-white/5 p-10 rounded-2xl shadow-2xl space-y-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Start Your Free 30-Day Trial</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the full power of <span className="text-indigo-400 font-semibold">TotalShield PRO</span>.
            No credit card required — just seamless protection and performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <ShieldCheck className="text-blue-400 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Real-Time Protection</h3>
              <p className="text-gray-300 text-sm">
                Defend against malware, ransomware, and phishing 24/7.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Globe className="text-indigo-400 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Unlimited VPN Access</h3>
              <p className="text-gray-300 text-sm">
                Encrypt your browsing data anywhere in the world.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Lock className="text-purple-400 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Identity Theft Monitoring</h3>
              <p className="text-gray-300 text-sm">
                Get real-time alerts if your data leaks online.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Cpu className="text-green-400 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Performance Booster</h3>
              <p className="text-gray-300 text-sm">
                Instantly clean junk files and optimize system speed.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center pt-6">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 text-lg shadow-lg hover:brightness-110 transition"
          >
            Activate Trial Now
          </Button>
          <p className="text-xs text-gray-400 mt-2">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </main>
  );
}
