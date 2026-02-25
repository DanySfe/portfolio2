import imgMockup from "figma:asset/4ce344b68b9c2be506c4f1ee1a6be8c02c00117f.png";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-20">
      {/* Remove duplicate background - using global background now */}
      
      <div className="max-w-[1600px] mx-auto px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left content */}
          <div className="space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-[#4E6BE7]/10 to-transparent border border-[#4E6BE7]/30 backdrop-blur-sm">
              <div className="relative">
                <div className="w-2 h-2 bg-[#4E6BE7] rounded-full animate-ping absolute" />
                <div className="w-2 h-2 bg-[#4E6BE7] rounded-full" />
              </div>
              <span className="text-sm font-['Rubik:Medium',sans-serif] text-[#4E6BE7] uppercase tracking-widest">UX/UI Case Study</span>
            </div>
            
            {/* Title */}
            <div className="space-y-6">
              <h1 className="font-['Kodchasan:Bold',sans-serif] text-7xl lg:text-8xl leading-[0.95] tracking-tight">
                <span className="bg-gradient-to-r from-[#4E6BE7] to-[#3A52C5] bg-clip-text text-transparent">Sync</span>
                <span className="text-white">Haus</span>
              </h1>
              <p className="font-['Kodchasan:SemiBold',sans-serif] text-4xl text-white/70 leading-tight">
                Universal Smart Home Platform
              </p>
            </div>
            
            {/* Description */}
            <p className="font-['Rubik:Regular',sans-serif] text-xl text-white/50 leading-relaxed max-w-xl">
              A unified smart home control app that brings all your devices together—eliminating the complexity of managing multiple apps.
            </p>
            
            {/* Info cards */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="group px-8 py-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#4E6BE7]/50 transition-all backdrop-blur-sm">
                <div className="text-xs text-white/40 font-['Rubik:Regular',sans-serif] mb-2 uppercase tracking-wider">Role</div>
                <div className="font-['Kodchasan:SemiBold',sans-serif] text-lg text-white">UX/UI Designer</div>
              </div>
              <div className="group px-8 py-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#4E6BE7]/50 transition-all backdrop-blur-sm">
                <div className="text-xs text-white/40 font-['Rubik:Regular',sans-serif] mb-2 uppercase tracking-wider">Timeline</div>
                <div className="font-['Kodchasan:SemiBold',sans-serif] text-lg text-white">Sep - Oct 2024</div>
              </div>
              <div className="group px-8 py-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#4E6BE7]/50 transition-all backdrop-blur-sm">
                <div className="text-xs text-white/40 font-['Rubik:Regular',sans-serif] mb-2 uppercase tracking-wider">Platform</div>
                <div className="font-['Kodchasan:SemiBold',sans-serif] text-lg text-white">Android/iOS</div>
              </div>
            </div>
          </div>
          
          {/* Right content - phone mockup */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4E6BE7] to-[#BE1A1E] blur-[100px] opacity-30 scale-110 animate-pulse" style={{ animationDuration: '4s' }} />
              <div className="absolute -inset-20 bg-gradient-to-tr from-[#4E6BE7]/20 to-[#BE1A1E]/20 blur-3xl rounded-full" />
              
              {/* Phone image */}
              <img 
                src={imgMockup} 
                alt="SyncHaus App Mockup" 
                className="relative z-20 w-full max-w-2xl drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 rounded-[30px]"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-[#4E6BE7] to-[#3A52C5] rounded-2xl opacity-20 blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-[#BE1A1E] to-[#9A1518] rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
        <span className="text-xs text-white/40 font-['Rubik:Regular',sans-serif] uppercase tracking-widest">Scroll</span>
        <svg className="w-6 h-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}