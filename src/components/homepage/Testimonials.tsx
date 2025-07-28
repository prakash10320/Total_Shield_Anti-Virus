"use client";

import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";

const testimonials = [
  {
    name: "Amit S.",
    avatar: "/avatar1.jpg",
    quote:
      "TotalShield caught malware that other antiviruses missed. The VPN is blazing fast too!",
    rating: 5,
  },
  {
    name: "Jessica M.",
    avatar: "/avatar2.jpg",
    quote:
      "One-click optimization boosted my laptop’s speed. Clean UI, super easy to use!",
    rating: 5,
  },
  {
    name: "David P.",
    avatar: "/avatar3.jpg",
    quote:
      "I feel safer browsing online. The real-time protection and alerts are reliable.",
    rating: 4,
  },
  {
    name: "Sophia L.",
    avatar: "/avatar4.jpg",
    quote:
      "Top-notch antivirus. I especially love the dark mode and minimal notifications.",
    rating: 5,
  },
  {
    name: "Rahul K.",
    avatar: "/avatar5.jpg",
    quote:
      "Customer support is responsive and helpful. Very happy with the performance.",
    rating: 4,
  },
];

export default function TestimonialsSlider() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1 },
      renderMode: "performance",
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        const clearNextTimeout = () => clearTimeout(timeout); // ✅ ESLint fix here

        function nextTimeout() {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }

        slider.on("created", nextTimeout);
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <section
      id="testimonials"
      className="relative py-28 px-6 bg-gradient-to-br from-[#0a101f] via-[#10192e] to-[#0a101f] text-white border-t border-white/10 overflow-hidden"
    >
      {/* Blur background */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px] z-0" />
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px] z-0" />

      <div className="container mx-auto relative z-10 max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          What Our Users Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg text-gray-300 mb-12 max-w-xl mx-auto"
        >
          Real cybersecurity results. See what people love about TotalShield.
        </motion.p>

        {/* Keen Slider */}
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((t, i) => (
            <div key={i} className="keen-slider__slide">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-8 text-left shadow-lg max-w-2xl mx-auto hover:shadow-blue-400/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="rounded-full border border-white/20 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <div className="flex text-yellow-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic border-l-4 border-blue-500 pl-4">
                  “{t.quote}”
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
