export default function PersonaSection() {
  return (
    <section className="mb-32">
      <h2 className="text-3xl text-white mb-4 text-center" style={{ fontFamily: 'Georgia, serif' }}>
        User <span className="text-[#C2A572]">Persona</span>
      </h2>
      <p className="text-center text-white/60 text-sm mb-12">
        Primary target user for the Spatial Art Gallery platform
      </p>

      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Profile Image & Name */}
          <div className="md:col-span-1">
            <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-[#C2A572]/20 to-[#C2A572]/5 border border-[#C2A572]/30 mx-auto mb-4 flex items-center justify-center overflow-hidden">
              <img 
                src="./imports/image.png" 
                alt="Sophie Chen - User Persona" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl text-white text-center mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              The Collector
            </h3>
            <p className="text-center text-[#C2A572] text-sm">Elena Martinez</p>
          </div>

          {/* Demographics */}
          <div className="md:col-span-2 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wider mb-1">Age</div>
                <div className="text-white">38 Years Old</div>
              </div>
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wider mb-1">Location</div>
                <div className="text-white">New York, USA</div>
              </div>
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wider mb-1">Profession</div>
                <div className="text-white">Creative Director</div>
              </div>
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wider mb-1">Income Level</div>
                <div className="text-white">$120K - $180K/year</div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <div className="text-xs text-white/50 uppercase tracking-wider mb-2">About</div>
              <p className="text-white/80 text-sm leading-relaxed">
                Elena is an established creative professional with a passion for contemporary and classical art. 
                She actively collects pieces for her urban loft but struggles to find time for gallery visits. 
                She values authenticity, detailed provenance, and needs to visualize artworks in her space before 
                committing to purchases. Elena expects premium digital experiences that match the sophistication 
                of physical galleries.
              </p>
            </div>
          </div>
        </div>

        {/* Frustrations & Goals */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-900/10 border border-red-500/20 rounded-xl p-6">
            <h4 className="text-[#C2A572] text-sm font-semibold mb-4 uppercase tracking-wider">
              Frustrations
            </h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1 flex-shrink-0">—</span>
                <span>Limited time to visit multiple galleries across the city</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1 flex-shrink-0">—</span>
                <span>Uncertainty about how artwork scale and color will work in her space</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1 flex-shrink-0">—</span>
                <span>Existing online platforms lack the premium feel and detailed curation she expects</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1 flex-shrink-0">—</span>
                <span>Difficult to browse multiple pieces and compare them side-by-side in context</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#C2A572]/10 border border-[#C2A572]/30 rounded-xl p-6">
            <h4 className="text-[#C2A572] text-sm font-semibold mb-4 uppercase tracking-wider">
              Goals
            </h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-[#C2A572] mt-1 flex-shrink-0">+</span>
                <span>Browse curated art collections from trusted sources during free time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C2A572] mt-1 flex-shrink-0">+</span>
                <span>Visualize true-to-scale artworks in her actual living space before buying</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C2A572] mt-1 flex-shrink-0">+</span>
                <span>Access detailed artwork information, provenance, and artist backgrounds easily</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C2A572] mt-1 flex-shrink-0">+</span>
                <span>Experience a sophisticated, museum-quality digital browsing environment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
