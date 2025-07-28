"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-br from-[#0a101f] via-[#0f1a30] to-[#0a101f] text-white overflow-hidden">
      {/* Animated Glow Background */}
      <motion.div
        className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500 opacity-20 blur-[150px] rounded-full z-0"
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container mx-auto relative z-10 max-w-3xl text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
        >
          Experience Elite Total Shield Now
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-300 max-w-xl mx-auto"
        >
          Get real-time threat protection, VPN, and system optimization — all in one powerful, secure app.
        </motion.p>

        {/* CTA Button with Glowing Ring */}
        <motion.div
          className="relative inline-block"
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="absolute inset-0 rounded-xl bg-indigo-500 blur-xl opacity-30 z-[-1]" />
          <Link href="/start-trial">
            <Button
              size="lg"
              className="bg-gray-300 text-indigo-700 font-semibold shadow-xl hover:scale-105 hover:shadow-indigo-400/30 transition-transform px-8 py-4 text-base rounded-xl"
            >
              Start Your Free Trial
            </Button>
          </Link>
        </motion.div>

        <p className="text-sm text-blue-200 pt-4">
          No credit card needed · Cancel anytime · 100% risk-free
        </p>
      </div>
    </section>
  );
}
