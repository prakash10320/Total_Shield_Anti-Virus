"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { ShieldCheck, UserPlus } from "lucide-react";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.ok) {
      router.push("/admin");
    } else {
      alert(mode === "login" ? "Invalid credentials" : "Signup failed");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-10 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            {mode === "login" ? "Welcome Back" : "Join TotalShield"}
          </h1>
          <p className="text-sm text-slate-400">
            {mode === "login"
              ? "Secure access to your dashboard"
              : "Sign up to protect your digital life"}
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4">
          <button
            type="button"
            onClick={() => setMode("login")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${
              mode === "login"
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-slate-400"
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            Login
          </button>
          <button
            type="button"
            onClick={() => setMode("signup")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${
              mode === "signup"
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-slate-400"
            }`}
          >
            <UserPlus className="w-4 h-4" />
            Sign Up
          </button>
        </div>

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-slate-800 text-white border border-slate-700 rounded-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-slate-800 text-white border border-slate-700 rounded-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:brightness-110 transition"
          >
            {mode === "login" ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-xs text-center text-slate-400 pt-2">
          {mode === "login"
            ? "New to TotalShield? Switch to Sign Up."
            : "Already have an account? Switch to Login."}
        </p>
      </div>
    </main>
  );
}
