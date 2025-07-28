"use client";

export default function ThreatStats() {
  return (
    <section className="py-24 px-4 bg-[#0a101f] text-white text-center">
      <div className="container mx-auto max-w-4xl space-y-8">
        <h2 className="text-4xl font-bold">Real-Time Threat Prevention</h2>
        <p className="text-lg text-gray-300">
          TotalShield has blocked <span className="text-green-400 font-semibold">4.5 million+</span> viruses, malware, and phishing attacks this year alone.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-lg text-gray-300">
          <div>
            <p className="text-3xl font-bold text-green-400">2M+</p>
            <p>Viruses Blocked</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-400">1.2M+</p>
            <p>Phishing Attempts Stopped</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-yellow-400">800K+</p>
            <p>Tracker Requests Blocked</p>
          </div>
        </div>
      </div>
    </section>
  );
}
