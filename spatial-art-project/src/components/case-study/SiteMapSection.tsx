export default function SiteMapSection() {
  return (
    <section className="mb-32">
      <h2 className="text-3xl text-white mb-4 text-center" style={{ fontFamily: 'Georgia, serif' }}>
        Information <span className="text-[#C2A572]">Architecture</span>
      </h2>
      <p className="text-center text-white/60 text-sm mb-12">
        Hierarchical structure ensuring logical content organization and optimal navigation
      </p>

      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-12">
        {/* Level 0 - Root */}
        <div className="flex flex-col items-center mb-12">
          <div className="px-12 py-6 bg-gradient-to-r from-[#C2A572] to-[#9B8B6F] text-white rounded-xl shadow-2xl relative">
            <div className="text-center">
              <div className="text-lg font-semibold mb-1">Spatial Art Gallery</div>
              <div className="text-xs text-white/80 uppercase tracking-wider">Root / Entry Point</div>
            </div>
          </div>
          {/* Connector */}
          <div className="w-1 h-16 bg-gradient-to-b from-[#C2A572] to-white/20"></div>
          <div className="w-32 h-1 bg-white/20"></div>
        </div>

        {/* Level 1 - Primary Navigation */}
        <div className="relative mb-12">
          {/* Horizontal connector line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/10" style={{ top: '-1px' }}></div>
          
          <div className="grid grid-cols-5 gap-6">
            {[
              { 
                name: 'Gallery Feed', 
                desc: 'Home / Browse',
                children: ['Featured Hero', 'Collection Grid', 'Filter Modal', 'Load More']
              },
              { 
                name: 'Search', 
                desc: 'Discovery',
                children: ['Search Input', 'Category Filter', 'Recent Searches', 'Results Grid']
              },
              { 
                name: 'Saved', 
                desc: 'Collections',
                children: ['Saved Grid', 'Collections List', 'Create Collection', 'Remove Items']
              },
              { 
                name: 'Artwork Detail', 
                desc: 'View / AR',
                children: ['3D Viewport', 'AR Placement', 'Learn More', 'Add to Collection'],
                highlight: true
              },
              { 
                name: 'Profile', 
                desc: 'Account',
                children: ['User Stats', 'Quick Actions', 'Activity Feed', 'Settings']
              },
            ].map((page, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Vertical connector to horizontal line */}
                <div className="w-1 h-8 bg-white/20"></div>
                
                {/* Page Card */}
                <div className={`w-full px-4 py-5 ${page.highlight ? 'bg-[#C2A572]/20 border-[#C2A572]/40 shadow-lg' : 'bg-white/10 border-white/20'} border-2 rounded-xl text-center transition-all hover:scale-105`}>
                  <div className="text-sm font-semibold text-white mb-1">{page.name}</div>
                  <div className="text-xs text-white/60 mb-3">{page.desc}</div>
                  {page.highlight && (
                    <div className="inline-block px-2 py-1 bg-[#C2A572] text-black text-[10px] font-bold rounded uppercase tracking-wider">
                      Key Screen
                    </div>
                  )}
                </div>

                {/* Children connector */}
                {page.children && (
                  <>
                    <div className="w-1 h-8 bg-white/20"></div>
                    <div className="w-full space-y-2">
                      {page.children.map((child, childIndex) => (
                        <div key={childIndex} className="px-3 py-2 bg-black/30 border border-white/10 rounded-lg text-center">
                          <div className="text-[10px] text-white/70 uppercase tracking-wide">{child}</div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* User Journey Path */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center mb-6">
            <h4 className="text-white text-sm font-semibold mb-2 uppercase tracking-wider">Primary User Journey</h4>
            <p className="text-xs text-white/50">Most common path to AR viewing experience</p>
          </div>
          
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-xs font-medium">
              Gallery Feed
            </div>
            <svg className="w-4 h-4 text-[#C2A572]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" />
            </svg>
            <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-xs font-medium">
              Tap Artwork
            </div>
            <svg className="w-4 h-4 text-[#C2A572]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" />
            </svg>
            <div className="px-4 py-2 bg-[#C2A572]/20 border border-[#C2A572]/40 rounded-lg text-white text-xs font-bold">
              Artwork Detail
            </div>
            <svg className="w-4 h-4 text-[#C2A572]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" />
            </svg>
            <div className="px-4 py-2 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 border border-yellow-500/50 rounded-lg text-white text-xs font-bold">
              AR Viewport
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-center gap-8 text-xs text-white/60">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gradient-to-r from-[#C2A572] to-[#9B8B6F] rounded"></div>
            <span>Entry Point</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white/10 border-2 border-white/20 rounded"></div>
            <span>Primary Pages</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#C2A572]/20 border-2 border-[#C2A572]/40 rounded"></div>
            <span>Key Screen</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-black/30 border border-white/10 rounded"></div>
            <span>Sub-Components</span>
          </div>
        </div>
      </div>
    </section>
  );
}