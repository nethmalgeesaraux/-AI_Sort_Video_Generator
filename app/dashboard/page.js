"use client";

import { SignOutButton } from "@clerk/nextjs";

const activity = [
  { label: "Shots queued", value: "8" },
  { label: "Renders in progress", value: "2" },
  { label: "Drafts shared", value: "14" },
];

const modules = [
  {
    title: "Storyboard",
    detail: "Direct beats, pacing, and scene order.",
  },
  {
    title: "Audio lab",
    detail: "Lock voiceovers and music levels.",
  },
  {
    title: "Publishing",
    detail: "Ship to Shorts, Reels, and TikTok.",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl animate-drift-slow" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl animate-glow-pulse" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-12">
        <header className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
              PulseFrame Studio
            </p>
            <h1 className="text-3xl font-semibold">Dashboard</h1>
            <p className="text-sm text-slate-300">
              Manage active renders and creator reviews.
            </p>
          </div>
          <SignOutButton redirectUrl="/">
            <button className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-white">
              Logout
            </button>
          </SignOutButton>
        </header>

        <section className="mt-8 grid gap-6 md:grid-cols-3">
          {activity.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 animate-card-hover"
            >
              <p className="text-2xl font-semibold">{item.value}</p>
              <p className="text-sm text-slate-400">{item.label}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">Latest render</h2>
            <p className="mt-2 text-sm text-slate-300">
              Scene 04 is rendering now. The AI is matching your synthwave
              lighting while locking the soundtrack drop.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950">
                View shotboard
              </button>
              <button className="rounded-full border border-white/20 px-4 py-2 text-sm hover:border-white">
                Share draft
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
              Studio modules
            </p>
            <div className="mt-4 space-y-4">
              {modules.map((module) => (
                <div
                  key={module.title}
                  className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3"
                >
                  <p className="text-sm font-semibold">{module.title}</p>
                  <p className="text-xs text-slate-400">{module.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
