"use client";

import { ShieldCheck, MonitorSmartphone, Server } from "lucide-react";

export default function DeviceSupport() {
  return (
    <section className="py-24 px-4 bg-[#0b1120] text-white border-t border-white/10">
      <div className="container mx-auto max-w-6xl space-y-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Protection for Every Device
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          TotalShield defends your data and devices across all platforms—whether at home, work, or on the move.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-left">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:shadow-lg hover:shadow-blue-500/10 transition">
            <ShieldCheck className="w-10 h-10 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Windows & macOS</h3>
            <p className="text-gray-400">
              Real-time antivirus, firewall, and malware protection optimized for desktops and laptops.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:shadow-lg hover:shadow-green-500/10 transition">
            <MonitorSmartphone className="w-10 h-10 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">iOS & Android</h3>
            <p className="text-gray-400">
              Keep your mobile devices safe from phishing, trackers, and malicious apps on the go.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:shadow-lg hover:shadow-yellow-500/10 transition">
            <Server className="w-10 h-10 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Devices & More</h3>
            <p className="text-gray-400">
              Extend protection to smart TVs, routers, and IoT devices for full-network defense.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
