"use client";

import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  useUser,
} from "@clerk/nextjs";

const features = [
  {
    title: "Narrative-first prompts",
    description:
      "Describe your story and the AI handles camera, pacing and edits.",
  },
  {
    title: "Style switch",
    description:
      "Switch between cinematic, documentary or electric styles instantly.",
  },
  {
    title: "Multilingual voice",
    description: "Auto voiceovers in 25+ languages for global-ready shorts.",
  },
];

export default function Home() {
  const { isLoaded, isSignedIn } = useUser();
  const showSignedOut = isLoaded && !isSignedIn;
  const showSignedIn = isLoaded && isSignedIn;

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">

      {/* NAVBAR */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3 text-lg font-semibold">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 text-sm font-bold text-black shadow-lg">
            PF
          </span>
          <span className="tracking-wide">PulseFrame</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#features"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Features
          </a>

          {showSignedOut && (
            <SignInButton mode="modal" forceRedirectUrl="/dashboard">
              <button className="rounded-lg border border-white/20 px-4 py-2 text-sm hover:border-cyan-400 hover:text-cyan-300 transition">
                Login
              </button>
            </SignInButton>
          )}

          {showSignedIn && (
            <>
              <a
                className="rounded-lg border border-cyan-400/60 px-4 py-2 text-sm text-cyan-200 hover:border-cyan-300 hover:text-cyan-100 transition"
                href="/dashboard"
              >
                Dashboard
              </a>

              <SignOutButton redirectUrl="/">
                <button className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white/80 hover:border-white hover:text-white transition">
                  Logout
                </button>
              </SignOutButton>
            </>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold leading-tight sm:text-6xl bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text text-transparent">
          Create cinematic AI short videos in seconds
        </h1>

        <p className="mt-6 text-gray-400 text-lg">
          Turn your idea into a polished short video with AI generated camera
          moves, lighting and soundtrack.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          {showSignedOut && (
            <SignUpButton mode="modal" forceRedirectUrl="/dashboard">
              <button className="rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 px-7 py-3 font-semibold text-black shadow-lg hover:scale-105 transition">
                Get Started
              </button>
            </SignUpButton>
          )}

          {showSignedIn && (
            <a
              className="rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 px-7 py-3 font-semibold text-black shadow-lg hover:scale-105 transition"
              href="/dashboard"
            >
              Open Dashboard
            </a>
          )}

          <button className="rounded-lg border border-white/20 px-7 py-3 hover:border-cyan-400 hover:text-cyan-300 transition">
            View Demo
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="mb-12 text-center text-3xl font-semibold">
          Core Features
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 hover:-translate-y-2 hover:border-cyan-400/40 transition shadow-lg"
            >
              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-24 text-center">
        <h2 className="text-3xl font-semibold">
          Start creating with PulseFrame
        </h2>

        <p className="mt-4 text-gray-400">
          Join creators using AI to produce viral shorts faster.
        </p>

        <div className="mt-8">
          {showSignedOut && (
            <SignUpButton mode="modal" forceRedirectUrl="/dashboard">
              <button className="rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 px-10 py-4 font-semibold text-black shadow-xl hover:scale-105 transition">
                Start Now
              </button>
            </SignUpButton>
          )}

          {showSignedIn && (
            <a
              className="rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 px-10 py-4 font-semibold text-black shadow-xl hover:scale-105 transition"
              href="/dashboard"
            >
              Launch Studio
            </a>
          )}
        </div>
      </section>
    </main>
  );
}