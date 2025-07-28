"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "Real-Time Threat Detection",
  "Unlimited VPN Access",
  "Ransomware & Identity Shield",
  "Advanced Firewall",
  "24/7 Priority Support",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-gradient-to-br from-[#050d1e] via-[#0b132b] to-[#050d1e] py-32 text-white border-t border-white/10"
    >
      {/* Background glow blobs */}
      <motion.div
        className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-indigo-600/30 blur-[200px] rounded-full z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />
      <motion.div
        className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-blue-500/20 blur-[180px] rounded-full z-0"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          All-in-One Protection, One Simple Plan
        </motion.h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Upgrade to TotalShield PRO and get industry-grade security tools with zero hassle. One plan. Total peace of mind.
        </p>

        {/* Pricing card */}
        <motion.div
          className="mx-auto bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl max-w-md p-10 text-left hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold text-white mb-2">TotalShield PRO</h3>
          <p className="text-gray-400 mb-4">Perfect for individuals & families</p>

          <div className="text-5xl font-bold text-white mb-4">
            $19.99 <span className="text-xl text-gray-400">/ year</span>
          </div>

          <ul className="space-y-3 text-sm text-gray-300 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle2 className="text-green-400 w-5 h-5" />
                {feature}
              </li>
            ))}
          </ul>

          <motion.div
            className="relative inline-block w-full"
            animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="absolute inset-0 bg-indigo-600 blur-xl opacity-20 rounded-xl z-[-1]" />
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-blue-700 to-indigo-700 text-white shadow-xl hover:shadow-indigo-400/40 hover:scale-105 transition-all duration-300"
            >
              Start 30-Day Trial
            </Button>
          </motion.div>

          <p className="text-xs text-gray-500 mt-4 text-center">
            30-day money-back guarantee. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
