export default function StyleGuideSection() {
  return (
    <section className="mb-32">
      <h2 className="text-3xl text-white mb-4 text-center" style={{ fontFamily: 'Georgia, serif' }}>
        Style <span className="text-[#C2A572]">Guide</span>
      </h2>
      <p className="text-center text-white/60 text-sm mb-12">
        Museum-inspired design system for premium art gallery experience
      </p>

      <div className="space-y-8">
        {/* Typography */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          <h3 className="text-[#C2A572] text-sm font-semibold mb-6 uppercase tracking-wider">
            Typography
          </h3>
          
          <div className="space-y-6">
            {/* Georgia - Headings */}
            <div>
              <div className="text-xs text-white/50 mb-2 uppercase tracking-wider">Headings - Georgia Serif</div>
              <div className="space-y-2">
                <div className="text-4xl text-white" style={{ fontFamily: 'Georgia, serif' }}>
                  Spatial Art Gallery
                </div>
                <div className="text-2xl text-white" style={{ fontFamily: 'Georgia, serif' }}>
                  Contemporary Collection
                </div>
                <div className="text-lg text-white/80" style={{ fontFamily: 'Georgia, serif' }}>
                  Renaissance Masters
                </div>
              </div>
            </div>

            {/* Inter - Body */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-xs text-white/50 mb-2 uppercase tracking-wider">Body Text - Inter Sans</div>
              <div className="space-y-2">
                <div className="text-base text-white/80">
                  The platform combines museum-quality curation with AR visualization
                </div>
                <div className="text-sm text-white/70">
                  Browse curated collections and place artworks in your space
                </div>
                <div className="text-xs text-white/60">
                  Details, provenance, and artist information
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          <h3 className="text-[#C2A572] text-sm font-semibold mb-6 uppercase tracking-wider">
            Color Palette
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Primary Colors */}
            <div>
              <div className="text-xs text-white/50 mb-3 uppercase tracking-wider">Primary</div>
              <div className="space-y-3">
                <div>
                  <div className="w-full h-20 bg-gradient-to-br from-[#1A1613] to-[#2A2420] rounded-lg mb-2 border border-white/10"></div>
                  <div className="text-xs text-white/80">Obsidian Gradient</div>
                  <div className="text-xs text-white/50 font-mono">#1A1613 → #2A2420</div>
                </div>
              </div>
            </div>

            {/* Accent Colors */}
            <div>
              <div className="text-xs text-white/50 mb-3 uppercase tracking-wider">Accent</div>
              <div className="space-y-3">
                <div>
                  <div className="w-full h-20 bg-[#C2A572] rounded-lg mb-2"></div>
                  <div className="text-xs text-white/80">Museum Gold</div>
                  <div className="text-xs text-white/50 font-mono">#C2A572</div>
                </div>
              </div>
            </div>

            {/* Neutral Colors */}
            <div>
              <div className="text-xs text-white/50 mb-3 uppercase tracking-wider">Neutral</div>
              <div className="space-y-3">
                <div>
                  <div className="w-full h-20 bg-white rounded-lg mb-2 border border-white/20"></div>
                  <div className="text-xs text-white/80">Gallery White</div>
                  <div className="text-xs text-white/50 font-mono">#FFFFFF</div>
                </div>
              </div>
            </div>
          </div>

          {/* Opacity System */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="text-xs text-white/50 mb-3 uppercase tracking-wider">Glassmorphism System</div>
            <div className="grid grid-cols-4 gap-3">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-lg text-center">
                <div className="text-xs text-white/80">white/5</div>
                <div className="text-xs text-white/50 mt-1">Cards</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg text-center">
                <div className="text-xs text-white/80">white/10</div>
                <div className="text-xs text-white/50 mt-1">Hover</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 p-4 rounded-lg text-center">
                <div className="text-xs text-white/80">black/40</div>
                <div className="text-xs text-white/50 mt-1">Overlay</div>
              </div>
              <div className="bg-[#C2A572]/20 border border-[#C2A572]/30 p-4 rounded-lg text-center">
                <div className="text-xs text-white/80">gold/20</div>
                <div className="text-xs text-white/50 mt-1">Highlight</div>
              </div>
            </div>
          </div>
        </div>

        {/* UI Components */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          <h3 className="text-[#C2A572] text-sm font-semibold mb-6 uppercase tracking-wider">
            UI Components
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Buttons */}
            <div>
              <div className="text-xs text-white/50 mb-3 uppercase tracking-wider">Buttons</div>
              <div className="space-y-3">
                <button className="w-full bg-[#C2A572] text-black py-3 px-6 rounded-full text-sm font-medium hover:bg-[#C2A572]/90 transition-colors">
                  Primary Action
                </button>
                <button className="w-full bg-white/10 backdrop-blur-md text-white py-3 px-6 rounded-xl border border-white/20 text-sm hover:bg-white/20 transition-colors">
                  Secondary Action
                </button>
                <button className="w-full border-2 border-white/30 text-white py-3 px-6 rounded-xl text-sm hover:bg-white/5 transition-colors">
                  Outline Button
                </button>
              </div>
            </div>

            {/* Cards */}
            <div>
              <div className="text-xs text-white/50 mb-3 uppercase tracking-wider">Cards</div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4">
                <div className="text-sm text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  Artwork Card
                </div>
                <p className="text-xs text-white/60 mb-3">
                  Clean, minimal design with glassmorphism effects
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-[#C2A572]/20 border border-[#C2A572]/30 text-[#C2A572] text-xs rounded-full">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-white/10 border border-white/20 text-white/60 text-xs rounded-full">
                    New
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Design Principles */}
        <div className="bg-gradient-to-br from-[#C2A572]/10 to-transparent border border-[#C2A572]/30 rounded-2xl p-8">
          <h3 className="text-[#C2A572] text-sm font-semibold mb-6 uppercase tracking-wider">
            Design Principles
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-white font-semibold mb-2">Museum Quality</div>
              <p className="text-sm text-white/70">
                Dark, sophisticated aesthetic inspired by high-end gallery environments
              </p>
            </div>
            <div>
              <div className="text-white font-semibold mb-2">Glassmorphism</div>
              <p className="text-sm text-white/70">
                Layered transparency effects create depth and premium feel
              </p>
            </div>
            <div>
              <div className="text-white font-semibold mb-2">Golden Accents</div>
              <p className="text-sm text-white/70">
                Strategic use of gold highlights important actions and states
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
