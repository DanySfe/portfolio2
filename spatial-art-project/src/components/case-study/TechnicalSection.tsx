export default function TechnicalSection() {
  return (
    <section className="mb-32">
      <h2 className="text-3xl text-white mb-4 text-center" style={{ fontFamily: 'Georgia, serif' }}>
        Technical <span className="text-[#C2A572]">Implementation</span>
      </h2>
      <p className="text-center text-white/60 text-sm mb-12">
        WebAR infrastructure and performance optimization strategy
      </p>

      <div className="space-y-6">
        {/* 3D Model Pipeline */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          <h3 className="text-[#C2A572] text-sm font-semibold mb-6 uppercase tracking-wider">
            3D Model Pipeline
          </h3>
          
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-xs text-white/80 font-medium mb-1">Source Scan</div>
              <div className="text-xs text-white/50">Photogrammetry</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div className="text-xs text-white/80 font-medium mb-1">Optimization</div>
              <div className="text-xs text-white/50">Mesh Reduction</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="text-xs text-white/80 font-medium mb-1">Export</div>
              <div className="text-xs text-white/50">.GLB / .USDZ</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="w-12 h-12 rounded-lg bg-[#C2A572]/20 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-[#C2A572]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <div className="text-xs text-white/80 font-medium mb-1">Deploy</div>
              <div className="text-xs text-white/50">CDN Hosting</div>
            </div>
          </div>

          <div className="bg-black/20 border border-white/10 rounded-xl p-4">
            <h4 className="text-white text-sm font-semibold mb-3">Format Strategy</h4>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <span className="text-[#C2A572] mt-1">•</span>
                <div>
                  <span className="text-white font-medium">.GLB (Binary glTF)</span> - Primary format for Android and desktop browsers
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#C2A572] mt-1">•</span>
                <div>
                  <span className="text-white font-medium">.USDZ</span> - Apple AR Quick Look format for iOS Safari
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#C2A572] mt-1">•</span>
                <div>
                  <span className="text-white font-medium">Automatic Detection</span> - Platform-aware model loading
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Constraints */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          <h3 className="text-[#C2A572] text-sm font-semibold mb-6 uppercase tracking-wider">
            Performance Constraints
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-4xl text-[#C2A572] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                &lt;2MB
              </div>
              <div className="text-xs text-white/60">Maximum File Size</div>
              <div className="text-xs text-white/50 mt-1">Per 3D model</div>
            </div>

            <div className="text-center">
              <div className="text-4xl text-[#C2A572] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                10K
              </div>
              <div className="text-xs text-white/60">Polygon Limit</div>
              <div className="text-xs text-white/50 mt-1">Optimized meshes</div>
            </div>

            <div className="text-center">
              <div className="text-4xl text-[#C2A572] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                1024px
              </div>
              <div className="text-xs text-white/60">Texture Resolution</div>
              <div className="text-xs text-white/50 mt-1">Compressed formats</div>
            </div>
          </div>

          <div className="bg-black/20 border border-white/10 rounded-xl p-4">
            <h4 className="text-white text-sm font-semibold mb-3">Optimization Techniques</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-[#C2A572] mt-1">→</span>
                <span><strong>Mesh Decimation:</strong> Reduce polygon count while preserving visual fidelity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C2A572] mt-1">→</span>
                <span><strong>Texture Compression:</strong> Use Basis Universal for cross-platform efficiency</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C2A572] mt-1">→</span>
                <span><strong>Level of Detail (LOD):</strong> Dynamically adjust quality based on device capability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C2A572] mt-1">→</span>
                <span><strong>Progressive Loading:</strong> Load low-res preview first, then full model</span>
              </li>
            </ul>
          </div>
        </div>

        {/* WebAR Stack */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          <h3 className="text-[#C2A572] text-sm font-semibold mb-6 uppercase tracking-wider">
            Technology Stack
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white text-sm font-semibold mb-3">Frontend</h4>
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span>React + TypeScript</span>
                  <span className="text-[#C2A572] text-xs">Framework</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span>Tailwind CSS v4</span>
                  <span className="text-[#C2A572] text-xs">Styling</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span>Model-Viewer</span>
                  <span className="text-[#C2A572] text-xs">3D/AR Engine</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold mb-3">AR Capabilities</h4>
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span>WebXR Device API</span>
                  <span className="text-[#C2A572] text-xs">Android</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span>AR Quick Look</span>
                  <span className="text-[#C2A572] text-xs">iOS Safari</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span>Scene Viewer</span>
                  <span className="text-[#C2A572] text-xs">Google AR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
