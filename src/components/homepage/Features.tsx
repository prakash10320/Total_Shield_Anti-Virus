"use client";

import { ShieldCheck, LockKeyhole, GaugeCircle, GlobeLock } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-400" />,
    title: "Real-Time Threat Defense",
    description:
      "Continuously monitors for viruses, malware, and zero-day attacks with instant quarantine.",
  },
  {
    icon: <LockKeyhole className="w-10 h-10 text-indigo-400" />,
    title: "Identity & VPN Guard",
    description:
      "Military-grade VPN encryption and breach alerts keep your personal data fully protected.",
  },
  {
    icon: <GaugeCircle className="w-10 h-10 text-purple-400" />,
    title: "Performance Boost",
    description:
      "Clean junk, free up RAM, and accelerate startup — all without lifting a finger.",
  },
  {
    icon: <GlobeLock className="w-10 h-10 text-emerald-400" />,
    title: "Global Coverage",
    description:
      "Enjoy full protection across devices and countries. No borders, just security.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative bg-[#0e101a] py-28 px-6 overflow-hidden border-t border-gray-800"
    >
      {/* Background Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-indigo-500 blur-[180px] opacity-20 rounded-full top-[-120px] left-[-100px] z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] bg-blue-500 blur-[160px] opacity-20 rounded-full bottom-[-150px] right-[-100px] z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <div className="container mx-auto relative z-10 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Built for Security. Powered by Innovation.
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Everything your system needs for advanced protection, ultra performance, and total privacy.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#1c1f2a] to-[#11131d] border border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-blue-600/20 transition-all hover:scale-[1.02]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
