export default function CompetitiveAnalysis() {
  return (
    <section className="mb-32">
      <h2 className="text-3xl text-white mb-4 text-center" style={{ fontFamily: 'Georgia, serif' }}>
        Competitive <span className="text-[#C2A572]">Analysis</span>
      </h2>
      <p className="text-center text-white/60 text-sm mb-12">
        Positioning Spatial Art Gallery against traditional and digital alternatives
      </p>

      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-4 bg-black/40">
          <div className="p-4 border-r border-b border-white/10">
            <div className="text-xs text-white/60 uppercase tracking-wider">Platform</div>
          </div>
          <div className="p-4 border-r border-b border-white/10 text-center">
            <div className="text-sm text-white font-semibold">Spatial Art Gallery</div>
            <div className="text-xs text-[#C2A572]">Our Solution</div>
          </div>
          <div className="p-4 border-r border-b border-white/10 text-center">
            <div className="text-sm text-white/80">Physical Museums</div>
          </div>
          <div className="p-4 border-b border-white/10 text-center">
            <div className="text-sm text-white/80">Digital Galleries</div>
            <div className="text-xs text-white/50">Google Arts & Culture</div>
          </div>
        </div>

        {/* Rows */}
        {[
          { 
            feature: 'AR Visualization',
            spatial: 'full',
            museums: 'none',
            digital: 'limited'
          },
          { 
            feature: 'True-to-Scale Preview',
            spatial: 'full',
            museums: 'full',
            digital: 'none'
          },
          { 
            feature: 'Accessibility',
            spatial: 'full',
            museums: 'limited',
            digital: 'full'
          },
          { 
            feature: 'Curated Collections',
            spatial: 'full',
            museums: 'full',
            digital: 'full'
          },
          { 
            feature: 'Purchasing Flow',
            spatial: 'full',
            museums: 'limited',
            digital: 'none'
          },
          { 
            feature: 'Mobile-First',
            spatial: 'full',
            museums: 'none',
            digital: 'limited'
          },
          { 
            feature: 'No Download Required',
            spatial: 'full',
            museums: 'full',
            digital: 'limited'
          },
          { 
            feature: 'Detailed Provenance',
            spatial: 'full',
            museums: 'full',
            digital: 'limited'
          },
        ].map((row, index) => (
          <div key={index} className="grid grid-cols-4 border-b border-white/5 hover:bg-white/5 transition-colors">
            <div className="p-4 border-r border-white/10">
              <div className="text-sm text-white/80">{row.feature}</div>
            </div>
            
            {/* Spatial Art Gallery */}
            <div className="p-4 border-r border-white/10 flex items-center justify-center">
              {row.spatial === 'full' && (
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs text-white/60">Full</span>
                </div>
              )}
              {row.spatial === 'limited' && (
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 12H4" />
                  </svg>
                  <span className="text-xs text-white/60">Limited</span>
                </div>
              )}
              {row.spatial === 'none' && (
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-xs text-white/60">None</span>
                </div>
              )}
            </div>

            {/* Physical Museums */}
            <div className="p-4 border-r border-white/10 flex items-center justify-center">
              {row.museums === 'full' && (
                <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              )}
              {row.museums === 'limited' && (
                <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 12H4" />
                </svg>
              )}
              {row.museums === 'none' && (
                <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>

            {/* Digital Galleries */}
            <div className="p-4 flex items-center justify-center">
              {row.digital === 'full' && (
                <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              )}
              {row.digital === 'limited' && (
                <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 12H4" />
                </svg>
              )}
              {row.digital === 'none' && (
                <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>
          </div>
        ))}

        {/* Legend */}
        <div className="p-4 bg-black/20 flex items-center justify-center gap-6 text-xs text-white/60">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 13l4 4L19 7" />
            </svg>
            <span>Full Support</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 12H4" />
            </svg>
            <span>Limited</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>Not Available</span>
          </div>
        </div>
      </div>

      {/* Key Differentiator */}
      <div className="mt-8 bg-gradient-to-r from-[#C2A572]/20 to-transparent border border-[#C2A572]/30 rounded-xl p-6">
        <h3 className="text-white text-lg mb-3" style={{ fontFamily: 'Georgia, serif' }}>
          Key Differentiator
        </h3>
        <p className="text-white/80 text-sm leading-relaxed">
          Spatial Art Gallery uniquely combines the <span className="text-[#C2A572] font-semibold">immersive scale accuracy of physical museums</span> with 
          the <span className="text-[#C2A572] font-semibold">accessibility and convenience of digital platforms</span>, while adding 
          AR visualization that neither competitor offers comprehensively—all without requiring app downloads.
        </p>
      </div>
    </section>
  );
}
