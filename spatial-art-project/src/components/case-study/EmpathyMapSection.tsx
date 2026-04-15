export default function EmpathyMapSection() {
  return (
    <section className="mb-32">
      <h2 className="text-3xl text-white mb-4 text-center" style={{ fontFamily: 'Georgia, serif' }}>
        Empathy <span className="text-[#C2A572]">Map</span>
      </h2>
      <p className="text-center text-white/60 text-sm mb-12">
        Understanding the emotional and behavioral patterns of art collectors
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Says */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-[#C2A572] text-sm font-semibold uppercase tracking-wider">Says</h3>
          </div>
          <ul className="space-y-3 text-white/80 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-0.5 flex-shrink-0">"</span>
              <span>"I wish I could see this sculpture at actual size in my living room before buying"</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-0.5 flex-shrink-0">"</span>
              <span>"I don't have time to visit five different galleries this weekend"</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-0.5 flex-shrink-0">"</span>
              <span>"Most online art sites feel cheap and unprofessional"</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-0.5 flex-shrink-0">"</span>
              <span>"I need to know the provenance and artist background before purchasing"</span>
            </li>
          </ul>
        </div>

        {/* Thinks */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-[#C2A572] text-sm font-semibold uppercase tracking-wider">Thinks</h3>
          </div>
          <ul className="space-y-3 text-white/80 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1 flex-shrink-0">—</span>
              <span>Will this piece overwhelm my minimalist aesthetic or complement it?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1 flex-shrink-0">—</span>
              <span>Is this gallery representing authentic, investment-worthy artists?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1 flex-shrink-0">—</span>
              <span>I should be able to preview art from my phone, on my schedule</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1 flex-shrink-0">—</span>
              <span>If I could see it in AR, I'd feel confident making this purchase</span>
            </li>
          </ul>
        </div>

        {/* Does */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-[#C2A572] text-sm font-semibold uppercase tracking-wider">Does</h3>
          </div>
          <ul className="space-y-3 text-white/80 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1 flex-shrink-0">—</span>
              <span>Browses Instagram and Pinterest for art inspiration during commutes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1 flex-shrink-0">—</span>
              <span>Saves favorite artworks across multiple platforms but never finalizes purchases</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1 flex-shrink-0">—</span>
              <span>Measures wall spaces repeatedly before considering new pieces</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1 flex-shrink-0">—</span>
              <span>Researches artists and galleries extensively before trusting them</span>
            </li>
          </ul>
        </div>

        {/* Feels */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-[#C2A572] text-sm font-semibold uppercase tracking-wider">Feels</h3>
          </div>
          <ul className="space-y-3 text-white/80 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-orange-400 mt-1 flex-shrink-0">—</span>
              <span>Frustrated by the disconnect between online images and real-world scale</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-400 mt-1 flex-shrink-0">—</span>
              <span>Excited by the idea of AR technology applied to art curation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-400 mt-1 flex-shrink-0">—</span>
              <span>Overwhelmed by the number of platforms and lack of trusted curation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-400 mt-1 flex-shrink-0">—</span>
              <span>Confident when platforms provide detailed information and authentic visuals</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}