"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShieldCheck, CheckCircle, Lock } from "lucide-react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden py-32 px-4 lg:px-20 bg-gradient-to-br from-[#0b0f1a] via-[#101a2f] to-[#0b0f1a] text-white font-sans"
    >
      {/* Glowing Background Shield */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-700 rounded-full opacity-10 blur-[160px] z-0 animate-pulse-slow" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-600 rounded-full opacity-10 blur-[160px] z-0 animate-pulse-slow" />

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Left Section - Text */}
        <div className="max-w-xl space-y-8 text-center lg:text-left animate-fade-in slide-in-from-left-10 duration-700 ease-out">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter"
          >
            <span className="block min-h-[70px] text-blue-400">
              <Typewriter
                options={{
                  strings: [
                    "Advanced Cybersecurity",
                    "Real-Time Virus Protection",
                    "Shield Your Digital Life",
                    "Next-Gen Antivirus Intelligence",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: 25,
                }}
              />
            </span>
          </motion.h1>

          <p className="text-lg text-gray-300 leading-relaxed">
            TotalShield secures your devices, data, and identity with cutting-edge protection. One app. Zero compromises.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl hover:scale-105 transition-all px-8 py-4 rounded-full text-base font-semibold"
            >
              Get TotalShield Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-500 text-gray-300 hover:border-white hover:text-white hover:bg-blue-800/20 transition-all px-8 py-4 rounded-full font-semibold"
            >
              Compare Plans
            </Button>
          </div>

          {/* Security Badge Row */}
          <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start pt-6 text-sm text-gray-400">
            <div className="flex items-center gap-2 bg-gray-800/40 px-4 py-2 rounded-full">
              <ShieldCheck className="w-4 h-4 text-green-400 animate-pulse" />
              25M+ Protected Devices
            </div>
            <div className="flex items-center gap-2 bg-gray-800/40 px-4 py-2 rounded-full">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              ISO 27001 Certified
            </div>
            <div className="flex items-center gap-2 bg-gray-800/40 px-4 py-2 rounded-full">
              <Lock className="w-4 h-4 text-yellow-400" />
              Bank-Grade Encryption
            </div>
          </div>
        </div>

        {/* Right Section - Hero Visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-lg mt-12 lg:mt-0"
        >
          <Image
            src="/anti-virus.png"
            alt="Cybersecurity Protection Visual"
            width={600}
            height={600}
            className="w-full h-auto drop-shadow-xl rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
