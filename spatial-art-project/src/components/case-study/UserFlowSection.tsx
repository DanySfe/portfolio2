export default function UserFlowSection() {
  return (
    <section className="mb-32">
      <h2 className="text-3xl text-white mb-4 text-center" style={{ fontFamily: 'Georgia, serif' }}>
        User <span className="text-[#C2A572]">Flow</span>
      </h2>
      <p className="text-center text-white/60 text-sm mb-12">
        Comprehensive user journey mapping all screens and interactions to AR placement
      </p>

      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-12">
        {/* Entry Point */}
        <div className="flex flex-col items-center mb-12">
          <div className="px-12 py-6 bg-gradient-to-r from-[#C2A572] to-[#9B8B6F] rounded-3xl shadow-xl">
            <span className="text-white text-lg font-bold">Spatial Art Gallery</span>
          </div>
          
          {/* Connector */}
          <svg className="w-1 h-16 my-4" viewBox="0 0 2 64" fill="none">
            <path d="M1 0 L1 64" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
          </svg>
        </div>

        {/* Authentication Options */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex gap-6 mb-4">
            <div className="w-40 py-4 bg-white/10 border border-white/20 rounded-2xl text-center">
              <span className="text-white text-sm font-medium">Log in</span>
            </div>
            <div className="w-40 py-4 bg-white/10 border border-white/20 rounded-2xl text-center">
              <span className="text-white text-sm font-medium">Sign up</span>
            </div>
            <div className="w-40 py-4 bg-white/10 border border-white/20 rounded-2xl text-center">
              <span className="text-white text-sm font-medium">Skip / Guest</span>
            </div>
          </div>

          {/* Merge connector */}
          <div className="flex items-center justify-center w-full relative">
            <svg className="w-96 h-16" viewBox="0 0 384 64" fill="none">
              <path d="M80 0 L80 32 L192 32" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
              <path d="M192 0 L192 32" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
              <path d="M304 0 L304 32 L192 32" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
              <path d="M192 32 L192 64" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
            </svg>
          </div>
        </div>

        {/* Main App Entry */}
        <div className="flex flex-col items-center mb-16">
          <div className="px-16 py-5 bg-[#C2A572]/30 border-2 border-[#C2A572] rounded-2xl">
            <span className="text-white text-base font-bold">Gallery Feed (Home)</span>
          </div>

          {/* Main split */}
          <svg className="w-full h-24 my-4" viewBox="0 0 1200 96" fill="none" preserveAspectRatio="xMidYMid meet">
            <path d="M600 0 L600 48" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
            <path d="M150 48 L1050 48" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
            <path d="M150 48 L150 96" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
            <path d="M450 48 L450 96" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
            <path d="M750 48 L750 96" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
            <path d="M1050 48 L1050 96" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
          </svg>
        </div>

        {/* Four Main Sections */}
        <div className="grid grid-cols-4 gap-8 mb-16">
          {/* Gallery Feed Section */}
          <div className="flex flex-col items-center">
            <div className="w-full py-4 bg-[#1A1A19] border-2 border-white/40 rounded-2xl text-center mb-6">
              <span className="text-white text-sm font-bold">Gallery Feed</span>
            </div>
            
            <div className="flex flex-col gap-3 w-full">
              <div className="w-full py-3 bg-white/10 border border-white/20 rounded-xl text-center">
                <span className="text-white/90 text-xs">Featured Hero</span>
              </div>
              <div className="w-full py-3 bg-white/10 border border-white/20 rounded-xl text-center">
                <span className="text-white/90 text-xs">Browse Grid</span>
              </div>
              <div className="w-full py-3 bg-white/10 border border-white/20 rounded-xl text-center">
                <span className="text-white/90 text-xs">Filter Modal</span>
              </div>
              <div className="w-full py-3 bg-white/10 border border-white/20 rounded-xl text-center">
                <span className="text-white/90 text-xs">Category Filter</span>
              </div>
              <div className="w-full py-3 bg-white/10 border border-white/20 rounded-xl text-center">
                <span className="text-white/90 text-xs">Load More</span>
              </div>
              <div className="w-full py-3 bg-white/10 border border-white/20 rounded-xl text-center">
                <span className="text-white/90 text-xs">Tap Artwork</span>
              </div>
            </div>

            {/* Connector down */}
            <svg className="w-1 h-12 my-4" viewBox="0 0 2 48" fill="none">
              <path d="M1 0 L1 48" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
            </svg>
          </div>

          {/* Search Section */}
          <div className="flex flex-col items-center">
            <div className="w-full py-4 bg-[#1A1A19] border-2 border-white/40 rounded-2xl text-center mb-6">
              <span className="text-white text-sm font-bold">Search</span>
            </div>
            
            <div className="flex flex-col gap-3 w-full">
              <div className="w-full py-3 bg-white/10 border border-white/20 rounded-xl text-center">
                <span className="text-white/90 text-xs">Search Input</span>
              </div>
              <div className="w-full py-3 bg-white/10 border border-white/20 rounded-xl text-center">
                <span className="text-white/90 text-xs">Category Filter</span>
              </div>
              <div className="w-full py-3 bg-white/10 border border-white/20 rounded-xl text-center">
                <span className="text-white/90 text-xs">Recent Searches</span>
              </div>
              <div className="w-full py-3 bg-white/10 border border-white/20 rounded-xl text-center">
                <span className="text-white/90 text-xs">Popular Tags</span>
              </div>
              <div className="w-full py-3 bg-white/10 border border-white/20 rounded-xl text-center">
                <span className="text-white/90 text-xs">Results Grid</span>
              </div>
              <div className="w-full py-3 bg-white/10 border border-white/20 rounded-xl text-center">
                <span className="text-white/90 text-xs">Tap Artwork</span>
              </div>
            </div>

            {/* Connector down */}
            <svg className="w-1 h-12 my-4" viewBox="0 0 2 48" fill="none">
              <path d="M1 0 L1 48" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
            </svg>
          </div>

          {/* Saved Section */}
          <div className="flex flex-col items-center">
            <div className="w-full py-4 bg-[#1A1A19] border-2 border-white/40 rounded-2xl text-center mb-6">
              <span className="text-white text-sm font-bold">Saved</span>
            </div>
            
            <div className="flex flex-col gap-3 w-full">
              <div className="w-full py-3 bg-white/10 border border-white/20 rounded-xl text-center">
                <span className="text-white/90 text-xs">Collections Grid</span>
              </div>
              <div className="w-full py-3 bg-white/10 border border-white/20 rounded-xl text-center">
                <span className="text-white/90 text-xs">Saved Artworks</span>
              </div>
              <div className="w-full py-3 bg-white/10 border border-white/20 rounded-xl text-center">
                <span className="text-white/90 text-xs">Create Collection</span>
              </div>
              <div className="w-full py-3 bg-white/10 border border-white/20 rounded-xl text-center">
                <span className="text-white/90 text-xs">Delete Collection</span>
              </div>
              <div className="w-full py-3 bg-white/10 border border-white/20 rounded-xl text-center">
                <span className="text-white/90 text-xs">Remove Items</span>
              </div>
              <div className="w-full py-3 bg-white/10 border border-white/20 rounded-xl text-center">
                <span className="text-white/90 text-xs">Tap Artwork</span>
              </div>
            </div>

            {/* Connector down */}
            <svg className="w-1 h-12 my-4" viewBox="0 0 2 48" fill="none">
              <path d="M1 0 L1 48" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
            </svg>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col items-center">
            <div className="w-full py-4 bg-[#1A1A19] border-2 border-white/40 rounded-2xl text-center mb-6">
              <span className="text-white text-sm font-bold">Profile</span>
            </div>
            
            <div className="flex flex-col gap-3 w-full">
              <div className="w-full py-3 bg-white/10 border border-white/20 rounded-xl text-center">
                <span className="text-white/90 text-xs">User Stats</span>
              </div>
              <div className="w-full py-3 bg-white/10 border border-white/20 rounded-xl text-center">
                <span className="text-white/90 text-xs">Quick Actions</span>
              </div>
              <div className="w-full py-3 bg-white/10 border border-white/20 rounded-xl text-center">
                <span className="text-white/90 text-xs">Activity Feed</span>
              </div>
              <div className="w-full py-3 bg-white/10 border border-white/20 rounded-xl text-center">
                <span className="text-white/90 text-xs">Settings</span>
              </div>
              <div className="w-full py-3 bg-white/10 border border-white/20 rounded-xl text-center">
                <span className="text-white/90 text-xs">Edit Profile</span>
              </div>
              <div className="w-full py-3 bg-white/10 border border-white/20 rounded-xl text-center">
                <span className="text-white/90 text-xs">Sign Out</span>
              </div>
            </div>

            {/* Connector down */}
            <svg className="w-1 h-12 my-4" viewBox="0 0 2 48" fill="none">
              <path d="M1 0 L1 48" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
            </svg>
          </div>
        </div>

        {/* Merge to Artwork Detail */}
        <div className="flex flex-col items-center mb-16">
          <svg className="w-full h-16 mb-4" viewBox="0 0 1200 64" fill="none" preserveAspectRatio="xMidYMid meet">
            <path d="M150 0 L150 32 L600 32" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
            <path d="M450 0 L450 32 L600 32" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
            <path d="M750 0 L750 32 L600 32" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
            <path d="M1050 0 L1050 32 L600 32" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
            <path d="M600 32 L600 64" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
          </svg>

          <div className="px-20 py-6 bg-[#C2A572]/30 border-2 border-[#C2A572] rounded-2xl relative">
            <span className="text-white text-base font-bold">Artwork Detail Page</span>
            <div className="absolute -top-3 -right-3 px-3 py-1 bg-[#C2A572] text-black text-[10px] font-bold rounded-full uppercase">
              Key Screen
            </div>
          </div>

          {/* Split to detail actions */}
          <svg className="w-full h-24 my-6" viewBox="0 0 1200 96" fill="none" preserveAspectRatio="xMidYMid meet">
            <path d="M600 0 L600 48" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
            <path d="M200 48 L1000 48" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
            <path d="M200 48 L200 96" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
            <path d="M400 48 L400 96" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
            <path d="M600 48 L600 96" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
            <path d="M800 48 L800 96" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
            <path d="M1000 48 L1000 96" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
          </svg>
        </div>

        {/* Detail Page Actions */}
        <div className="grid grid-cols-5 gap-6 mb-16">
          <div className="flex flex-col items-center">
            <div className="w-full py-4 bg-white/10 border border-white/20 rounded-2xl text-center mb-4">
              <span className="text-white text-sm font-medium">3D Viewer</span>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="w-full py-2.5 bg-white/5 border border-white/10 rounded-lg text-center">
                <span className="text-white/80 text-xs">Rotate Model</span>
              </div>
              <div className="w-full py-2.5 bg-white/5 border border-white/10 rounded-lg text-center">
                <span className="text-white/80 text-xs">Zoom In/Out</span>
              </div>
              <div className="w-full py-2.5 bg-white/5 border border-white/10 rounded-lg text-center">
                <span className="text-white/80 text-xs">Pan View</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full py-4 bg-white/10 border border-white/20 rounded-2xl text-center mb-4">
              <span className="text-white text-sm font-medium">Save</span>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="w-full py-2.5 bg-white/5 border border-white/10 rounded-lg text-center">
                <span className="text-white/80 text-xs">Add to Saved</span>
              </div>
              <div className="w-full py-2.5 bg-white/5 border border-white/10 rounded-lg text-center">
                <span className="text-white/80 text-xs">Remove Save</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full py-4 bg-gradient-to-r from-yellow-500/40 to-orange-500/40 border-2 border-yellow-400/60 rounded-2xl text-center mb-4 relative">
              <span className="text-white text-sm font-bold">View in AR</span>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="w-full py-2.5 bg-white/5 border border-white/10 rounded-lg text-center">
                <span className="text-white/80 text-xs">Grant Camera</span>
              </div>
              <div className="w-full py-2.5 bg-white/5 border border-white/10 rounded-lg text-center">
                <span className="text-white/80 text-xs">Detect Surface</span>
              </div>
              <div className="w-full py-2.5 bg-white/5 border border-white/10 rounded-lg text-center">
                <span className="text-white/80 text-xs">Load 3D Model</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full py-4 bg-white/10 border border-white/20 rounded-2xl text-center mb-4">
              <span className="text-white text-sm font-medium">Collection</span>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="w-full py-2.5 bg-white/5 border border-white/10 rounded-lg text-center">
                <span className="text-white/80 text-xs">Choose Collection</span>
              </div>
              <div className="w-full py-2.5 bg-white/5 border border-white/10 rounded-lg text-center">
                <span className="text-white/80 text-xs">Create New</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full py-4 bg-white/10 border border-white/20 rounded-2xl text-center mb-4">
              <span className="text-white text-sm font-medium">Learn More</span>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="w-full py-2.5 bg-white/5 border border-white/10 rounded-lg text-center">
                <span className="text-white/80 text-xs">Full Details</span>
              </div>
              <div className="w-full py-2.5 bg-white/5 border border-white/10 rounded-lg text-center">
                <span className="text-white/80 text-xs">Provenance</span>
              </div>
              <div className="w-full py-2.5 bg-white/5 border border-white/10 rounded-lg text-center">
                <span className="text-white/80 text-xs">Artist Info</span>
              </div>
            </div>
          </div>
        </div>

        {/* Focus on AR Path */}
        <div className="flex flex-col items-center mb-12">
          <svg className="w-64 h-16 mb-4" viewBox="0 0 256 64" fill="none">
            <path d="M128 0 L128 64" stroke="#C2A572" strokeWidth="3"/>
            <circle cx="128" cy="64" r="3" fill="#C2A572"/>
          </svg>

          <div className="px-24 py-8 bg-gradient-to-r from-[#C2A572] to-[#9B8B6F] border-2 border-yellow-500/60 rounded-3xl shadow-2xl relative">
            <span className="text-black text-xl font-bold">AR Viewport</span>
            <div className="absolute -top-4 -right-4 px-4 py-2 bg-yellow-400 text-black text-xs font-bold rounded-full uppercase shadow-lg">
              Magic Moment
            </div>
          </div>

          {/* AR Actions */}
          <svg className="w-full h-24 my-6" viewBox="0 0 800 96" fill="none" preserveAspectRatio="xMidYMid meet">
            <path d="M400 0 L400 48" stroke="#C2A572" strokeWidth="2"/>
            <path d="M150 48 L650 48" stroke="#C2A572" strokeWidth="2"/>
            <path d="M150 48 L150 96" stroke="#C2A572" strokeWidth="2"/>
            <path d="M300 48 L300 96" stroke="#C2A572" strokeWidth="2"/>
            <path d="M400 48 L400 96" stroke="#C2A572" strokeWidth="2"/>
            <path d="M500 48 L500 96" stroke="#C2A572" strokeWidth="2"/>
            <path d="M650 48 L650 96" stroke="#C2A572" strokeWidth="2"/>
          </svg>
        </div>

        {/* AR Interaction Options */}
        <div className="grid grid-cols-5 gap-6 mb-16">
          <div className="flex flex-col items-center">
            <div className="w-full py-4 bg-[#C2A572]/20 border-2 border-[#C2A572]/50 rounded-2xl text-center">
              <span className="text-white text-sm font-medium">Place Artwork</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full py-4 bg-[#C2A572]/20 border-2 border-[#C2A572]/50 rounded-2xl text-center">
              <span className="text-white text-sm font-medium">Move Position</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full py-4 bg-[#C2A572]/20 border-2 border-[#C2A572]/50 rounded-2xl text-center">
              <span className="text-white text-sm font-medium">Rotate Angle</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full py-4 bg-[#C2A572]/20 border-2 border-[#C2A572]/50 rounded-2xl text-center">
              <span className="text-white text-sm font-medium">Scale Size</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full py-4 bg-[#C2A572]/20 border-2 border-[#C2A572]/50 rounded-2xl text-center">
              <span className="text-white text-sm font-medium">Take Screenshot</span>
            </div>
          </div>
        </div>

        {/* Final Actions */}
        <div className="flex flex-col items-center">
          <svg className="w-full h-16 mb-6" viewBox="0 0 800 64" fill="none" preserveAspectRatio="xMidYMid meet">
            <path d="M400 0 L400 32" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
            <path d="M200 32 L600 32" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
            <path d="M200 32 L200 64" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
            <path d="M400 32 L400 64" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
            <path d="M600 32 L600 64" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
          </svg>

          <div className="grid grid-cols-3 gap-8">
            <div className="w-56 py-5 bg-green-600/40 border-2 border-green-400/60 rounded-2xl text-center">
              <span className="text-white text-base font-bold">Save Artwork</span>
            </div>

            <div className="w-56 py-5 bg-blue-600/40 border-2 border-blue-400/60 rounded-2xl text-center">
              <span className="text-white text-base font-bold">Share Preview</span>
            </div>

            <div className="w-56 py-5 bg-purple-600/40 border-2 border-purple-400/60 rounded-2xl text-center">
              <span className="text-white text-base font-bold">Browse More</span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="grid grid-cols-3 gap-6 text-xs text-white/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-8 bg-gradient-to-r from-[#C2A572] to-[#9B8B6F] rounded-lg flex-shrink-0"></div>
              <span>Primary Entry / Key Screen</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-8 bg-[#1A1A19] border-2 border-white/40 rounded-lg flex-shrink-0"></div>
              <span>Main Navigation Pages</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-8 bg-white/10 border border-white/20 rounded-lg flex-shrink-0"></div>
              <span>Page Actions / Features</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-8 bg-gradient-to-r from-yellow-500/40 to-orange-500/40 border-2 border-yellow-400/60 rounded-lg flex-shrink-0"></div>
              <span>Magic Moment (AR)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-8 bg-[#C2A572]/20 border-2 border-[#C2A572]/50 rounded-lg flex-shrink-0"></div>
              <span>AR Interactions</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-8 bg-green-600/40 border-2 border-green-400/60 rounded-lg flex-shrink-0"></div>
              <span>Success Actions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
