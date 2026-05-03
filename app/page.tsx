export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Accessibility Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Code Accessibility Scanner for{" "}
          <span className="text-[#58a6ff]">Blind Developers</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Scan your codebase and dev environment for screen reader compatibility, keyboard navigation gaps, and accessibility barriers — so visually impaired developers can work without friction.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Scanning — $29/mo
        </a>
        <ul className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[#8b949e]">
          <li className="flex items-center gap-1"><span className="text-[#58a6ff]">✓</span> Screen reader audit</li>
          <li className="flex items-center gap-1"><span className="text-[#58a6ff]">✓</span> Keyboard nav checks</li>
          <li className="flex items-center gap-1"><span className="text-[#58a6ff]">✓</span> IDE config analysis</li>
          <li className="flex items-center gap-1"><span className="text-[#58a6ff]">✓</span> WCAG-aligned reports</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$29</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited codebase scans",
              "Screen reader compatibility report",
              "Keyboard navigation gap detection",
              "IDE & toolchain accessibility audit",
              "Actionable fix recommendations",
              "PDF & JSON export",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What does the scanner actually check?</h3>
            <p className="text-[#8b949e] text-sm">It performs static analysis on your uploaded code and IDE configuration files, checking for missing ARIA labels, inaccessible keyboard shortcuts, poor contrast in terminal themes, and patterns known to break popular screen readers like NVDA, JAWS, and VoiceOver.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Who is this built for?</h3>
            <p className="text-[#8b949e] text-sm">Engineering teams that include blind or visually impaired developers, accessibility leads, and HR or DEI teams ensuring their development toolchain is fully inclusive. It's also useful for developers who want to audit their own workflow.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my code kept private?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Uploaded files are analyzed in memory and never stored on our servers. No source code is retained after the scan completes. You can also run the scanner locally via our CLI for maximum privacy.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} Blind Dev Accessibility Checker. Built for inclusive engineering.
      </footer>
    </main>
  )
}
