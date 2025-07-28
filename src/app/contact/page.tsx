// src/app/contact/page.tsx
"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a101f] via-[#10192e] to-[#0a101f] text-white px-6 py-24">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Questions? Feedback? We're here to help — connect with our team and get expert support.
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-10 bg-white/5 border border-white/10 rounded-xl p-10 shadow-lg">
          {/* Contact Info */}
          <div className="space-y-6 text-gray-300">
            <div className="flex items-center gap-4">
              <Mail className="text-blue-500" />
              <span>support@totalshield.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-green-500" />
              <span>+1 800 123 4567</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-purple-500" />
              <span>San Francisco, CA</span>
            </div>
            <p className="pt-4 text-sm text-gray-500">
              We typically respond within 24 hours. Business hours: Mon–Fri, 9am–6pm PST.
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <Input
              type="text"
              placeholder="Your Name"
              className="bg-white/10 border-white/20 text-white placeholder-gray-400"
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              className="bg-white/10 border-white/20 text-white placeholder-gray-400"
              required
            />
            <Textarea
              placeholder="Your Message"
              rows={5}
              className="bg-white/10 border-white/20 text-white placeholder-gray-400"
              required
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:scale-[1.03] transition shadow-lg"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
