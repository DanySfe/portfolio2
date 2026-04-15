export default function GalleryShowcase() {
  return (
    <section className="mb-32">
      <h2 className="text-3xl text-white mb-4 text-center" style={{ fontFamily: 'Georgia, serif' }}>
        The <span className="text-[#C2A572]">Solution</span>
      </h2>
      <p className="text-center text-white/60 text-sm mb-16">
        High-fidelity interface design across mobile and desktop platforms
      </p>

      <div className="space-y-16">
        {/* Part 1: Gallery Feed */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="px-4 py-2 bg-[#C2A572] text-black text-sm font-semibold rounded-full">
              Part 1
            </div>
            <div>
              <h3 className="text-xl text-white" style={{ fontFamily: 'Georgia, serif' }}>Gallery Feed</h3>
              <p className="text-sm text-white/60">Curated home screen with featured artwork and browsable collection</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-[1fr_2fr] gap-8">
            {/* Mobile */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <div className="text-center mb-4">
                <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Mobile</span>
              </div>
              <div className="aspect-[9/16] max-w-[280px] mx-auto bg-gradient-to-br from-[#1A1613] to-[#2A2420] rounded-3xl border-4 border-white/20 shadow-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/imports/IMG_3059.jpeg" 
                  alt="Gallery Feed Mobile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mt-4 space-y-2 text-xs text-white/70">
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Featured hero section with large artwork display</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Compact grid layout for browsing</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Filter by category and load more</span>
                </div>
              </div>
            </div>

            {/* Desktop */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <div className="text-center mb-4">
                <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Desktop</span>
              </div>
              <div className="aspect-[16/9] w-full bg-gradient-to-br from-[#1A1613] to-[#2A2420] rounded-2xl border-4 border-white/20 shadow-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/imports/image-1.png" 
                  alt="Gallery Feed" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mt-4 space-y-2 text-xs text-white/70">
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Wide hero with enhanced details sidebar</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Multi-column responsive grid</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Persistent filter panel and sorting</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Search */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="px-4 py-2 bg-[#C2A572] text-black text-sm font-semibold rounded-full">
              Part 2
            </div>
            <div>
              <h3 className="text-xl text-white" style={{ fontFamily: 'Georgia, serif' }}>Search & Discovery</h3>
              <p className="text-sm text-white/60">Smart search with category filters and recent/popular searches</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-[1fr_2fr] gap-8">
            {/* Mobile */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <div className="text-center mb-4">
                <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Mobile</span>
              </div>
              <div className="aspect-[9/16] max-w-[280px] mx-auto bg-gradient-to-br from-[#1A1613] to-[#2A2420] rounded-3xl border-4 border-white/20 shadow-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/imports/IMG_3060.jpeg" 
                  alt="Search Page Mobile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mt-4 space-y-2 text-xs text-white/70">
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Real-time search across artworks</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Category filters for focused browsing</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Recent and popular suggestions</span>
                </div>
              </div>
            </div>

            {/* Desktop */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <div className="text-center mb-4">
                <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Desktop</span>
              </div>
              <div className="aspect-[16/9] w-full bg-gradient-to-br from-[#1A1613] to-[#2A2420] rounded-2xl border-4 border-white/20 shadow-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/imports/image-2.png" 
                  alt="Search Page" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mt-4 space-y-2 text-xs text-white/70">
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Persistent sidebar with advanced filters</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Expanded grid format for results</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Quick preview on hover</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 3: Saved */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="px-4 py-2 bg-[#C2A572] text-black text-sm font-semibold rounded-full">
              Part 3
            </div>
            <div>
              <h3 className="text-xl text-white" style={{ fontFamily: 'Georgia, serif' }}>Saved & Collections</h3>
              <p className="text-sm text-white/60">Personal curation with custom collection management</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-[1fr_2fr] gap-8">
            {/* Mobile */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <div className="text-center mb-4">
                <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Mobile</span>
              </div>
              <div className="aspect-[9/16] max-w-[280px] mx-auto bg-gradient-to-br from-[#1A1613] to-[#2A2420] rounded-3xl border-4 border-white/20 shadow-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/imports/IMG_3061.jpeg" 
                  alt="Saved Page Mobile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mt-4 space-y-2 text-xs text-white/70">
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>View all saved artworks in grid</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Create custom collections</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Quick remove and management</span>
                </div>
              </div>
            </div>

            {/* Desktop */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <div className="text-center mb-4">
                <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Desktop</span>
              </div>
              <div className="aspect-[16/9] w-full bg-gradient-to-br from-[#1A1613] to-[#2A2420] rounded-2xl border-4 border-white/20 shadow-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/imports/image-3.png" 
                  alt="Saved Page" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mt-4 space-y-2 text-xs text-white/70">
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Side-by-side collection and artwork view</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Drag and drop between collections</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Bulk selection and management tools</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 4: Artwork Detail */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="px-4 py-2 bg-[#C2A572] text-black text-sm font-semibold rounded-full">
              Part 4
            </div>
            <div>
              <h3 className="text-xl text-white" style={{ fontFamily: 'Georgia, serif' }}>Artwork Detail & AR Viewport</h3>
              <p className="text-sm text-white/60">Immersive 3D view with AR placement capability</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-[1fr_2fr] gap-8">
            {/* Mobile */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <div className="text-center mb-4">
                <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Mobile</span>
              </div>
              <div className="aspect-[9/16] max-w-[280px] mx-auto bg-gradient-to-br from-[#1A1613] to-[#2A2420] rounded-3xl border-4 border-white/20 shadow-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/imports/IMG_3063.jpeg" 
                  alt="Artwork Detail Mobile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mt-4 space-y-2 text-xs text-white/70">
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Full-screen 3D viewer with touch controls</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>"View in Your Space" triggers AR</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Floating info panel with details</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Learn More modal</span>
                </div>
              </div>
            </div>

            {/* Desktop */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <div className="text-center mb-4">
                <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Desktop</span>
              </div>
              <div className="aspect-[16/9] w-full bg-gradient-to-br from-[#1A1613] to-[#2A2420] rounded-2xl border-4 border-white/20 shadow-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/imports/20260413-2204-03.9358950.gif" 
                  alt="Artwork Detail" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mt-4 space-y-2 text-xs text-white/70">
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Split-screen 3D viewer and details</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Full provenance and artist biography</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Related artworks recommendation</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Desktop AR mode for compatible devices</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 5: Profile */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="px-4 py-2 bg-[#C2A572] text-black text-sm font-semibold rounded-full">
              Part 5
            </div>
            <div>
              <h3 className="text-xl text-white" style={{ fontFamily: 'Georgia, serif' }}>Profile & Activity</h3>
              <p className="text-sm text-white/60">Account management and usage statistics</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-[1fr_2fr] gap-8">
            {/* Mobile */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <div className="text-center mb-4">
                <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Mobile</span>
              </div>
              <div className="aspect-[9/16] max-w-[280px] mx-auto bg-gradient-to-br from-[#1A1613] to-[#2A2420] rounded-3xl border-4 border-white/20 shadow-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/imports/IMG_3062.jpeg" 
                  alt="Profile Page Mobile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mt-4 space-y-2 text-xs text-white/70">
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Live statistics and AR views count</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Quick action cards for frequent tasks</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Recent activity feed and settings</span>
                </div>
              </div>
            </div>

            {/* Desktop */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <div className="text-center mb-4">
                <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">Desktop</span>
              </div>
              <div className="aspect-[16/9] w-full bg-gradient-to-br from-[#1A1613] to-[#2A2420] rounded-2xl border-4 border-white/20 shadow-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/imports/image-5.png" 
                  alt="Profile Page" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mt-4 space-y-2 text-xs text-white/70">
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Dashboard with expanded statistics and charts</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Extended activity timeline with filters</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#C2A572] mt-0.5">•</span>
                  <span>Advanced account settings panel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}