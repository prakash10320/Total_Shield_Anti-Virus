"use client";

import { Users, ShieldCheck, Globe } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a101f] via-[#10192e] to-[#0a101f] text-white px-6 py-24">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header Section */}
        <section className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight">
            About <span className="text-blue-500">TotalShield</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Advanced cybersecurity made easy — protecting millions of users worldwide with real-time security, VPN, and identity protection.
          </p>
        </section>

        {/* Image + Description Section */}
        <section className="flex flex-col lg:flex-row gap-10 items-center bg-white/5 backdrop-blur-md rounded-xl p-10 border border-white/10 shadow-lg">
          {/* Text */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-semibold">Who We Are</h2>
            <p className="text-gray-300 text-base">
              TotalShield is your all-in-one digital armor. From intelligent virus detection and encrypted VPN, to secure browsing and identity theft monitoring — our platform ensures your privacy and safety with military-grade security.
            </p>
            <p className="text-gray-400">
              We aim to make cybersecurity <span className="font-semibold text-white">accessible, intuitive, and reliable</span> for everyone, regardless of tech background.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1">
            <Image
              src="/about.png"
              alt="Cybersecurity Illustration"
              width={500}
              height={400}
              className="rounded-xl object-contain border border-white/10 shadow-md"
            />
          </div>
        </section>

        {/* Stats Cards Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Trusted Security",
              desc: "AI-powered antivirus, VPN & real-time threat detection.",
              icon: <ShieldCheck className="text-blue-500 w-8 h-8" />,
            },
            {
              title: "25M+ Users",
              desc: "Trusted across 80+ countries by individuals and businesses.",
              icon: <Users className="text-green-500 w-8 h-8" />,
            },
            {
              title: "Global Coverage",
              desc: "Our protection works seamlessly worldwide.",
              icon: <Globe className="text-purple-500 w-8 h-8" />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center shadow hover:shadow-blue-500/10 transition"
            >
              <div className="mb-3 flex justify-center">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Footer Tagline */}
        <p className="text-center text-sm text-gray-500 pt-6">
          Built with passion. Backed by experts. Trusted by millions.
        </p>
      </div>
    </main>
  );
}
