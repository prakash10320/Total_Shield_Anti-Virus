"use client";

import { motion } from "framer-motion";
import { GaugeCircle } from "lucide-react";

const performanceData = [
  { label: "Startup Time", value: 85 },
  { label: "RAM Usage Reduction", value: 75 },
  { label: "App Launch Speed", value: 90 },
  { label: "System Cleanup", value: 70 },
];

export default function Performance() {
  return (
    <section
      id="performance"
      className="relative overflow-hidden py-28 px-4 bg-gradient-to-br from-[#0a101f] via-[#10192e] to-[#0a101f] text-white border-t border-white/10"
    >
      {/* Background glow */}
      <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-indigo-500 opacity-20 blur-3xl rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-blue-500 opacity-20 blur-3xl rounded-full z-0 animate-pulse" />

      <motion.div
        className="container mx-auto max-w-7xl relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Left Side Content */}
        <div className="space-y-6 text-center md:text-left">
          <motion.h2
            className="text-5xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Boost Device Speed Instantly
          </motion.h2>
          <p className="text-lg text-gray-300 max-w-md">
            TotalShield optimizes performance with industry-leading tools. Watch your system transform.
          </p>
        </div>

        {/* Metrics Panel with Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {performanceData.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-xl hover:shadow-indigo-300/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center gap-2 text-sm font-semibold text-white">
                  <GaugeCircle className="w-4 h-4 text-blue-400" />
                  {item.label}
                </span>
                <span className="text-sm text-gray-400">{item.value}%</span>
              </div>

              {/* Animated Bar */}
              <div className="relative w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.value}%` }}
                  transition={{ duration: 1 }}
                  className={`h-full rounded-full ${
                    item.value >= 85
                      ? "bg-green-400"
                      : item.value >= 70
                      ? "bg-blue-500"
                      : "bg-yellow-400"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
