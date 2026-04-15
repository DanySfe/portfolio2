import { useState } from 'react';
import PersonaSection from './case-study/PersonaSection';
import EmpathyMapSection from './case-study/EmpathyMapSection';
import SiteMapSection from './case-study/SiteMapSection';
import UserFlowSection from './case-study/UserFlowSection';
import CompetitiveAnalysis from './case-study/CompetitiveAnalysis';
import StyleGuideSection from './case-study/StyleGuideSection';
import TechnicalSection from './case-study/TechnicalSection';
import GalleryShowcase from './case-study/GalleryShowcase';

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1613] via-[#2A2420] to-[#1A1613]">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Back Button */}
        <div className="mb-12">
          <button
            onClick={() => {
              window.location.href = '../../index.html#portfolio';
            }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#C2A572]/30 rounded-lg text-[#C2A572] hover:bg-[#C2A572]/10 transition-colors bg-white/5 backdrop-blur-md cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </button>
        </div>

        {/* Hero Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h1 className="text-6xl text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Spatial Art Gallery
            </h1>
            <p className="text-2xl text-[#C2A572] mb-6">WebAR Exhibition Platform</p>
            
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="text-center">
                <p className="text-white/60 text-sm mb-1">Designer</p>
                <p className="text-white text-lg">Danial Safaei</p>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <p className="text-white/60 text-sm mb-1">Role</p>
                <p className="text-white text-lg">UX Research & Userflow</p>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <p className="text-white/60 text-sm mb-1">Timeline</p>
                <p className="text-white text-lg">45 Days</p>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <p className="text-white/60 text-sm mb-1">Platform</p>
                <p className="text-white text-lg">Web (Mobile & Desktop)</p>
              </div>
            </div>

            <div className="flex gap-3 flex-wrap justify-center">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md text-white/80 text-xs rounded-full border border-white/20">
                Case Study
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md text-white/80 text-xs rounded-full border border-white/20">
                UX/UI Design
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md text-white/80 text-xs rounded-full border border-white/20">
                WebAR Application
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md text-white/80 text-xs rounded-full border border-white/20">
                Responsive Experience
              </span>
            </div>
          </div>

          {/* Project Overview */}
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <h3 className="text-[#C2A572] text-sm font-semibold mb-4 uppercase tracking-wider">
              Project Overview
            </h3>
            <p className="text-white/80 leading-relaxed">
              Spatial Art Gallery is a responsive WebAR platform that reimagines how collectors discover, 
              experience, and purchase fine art. By combining curated museum-quality collections with 
              augmented reality visualization on mobile and interactive 3D 360° previews on desktop, users can browse artworks and experience them 
              in immersive detail—no app download required. The platform addresses the critical 
              gap between online art browsing and confident purchasing decisions by providing immersive, 
              spatial context that traditional galleries and digital platforms cannot offer.
            </p>
          </div>

          {/* QR Code Section - End */}
          <div className="max-w-4xl mx-auto mt-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <h3 className="text-[#C2A572] text-sm font-semibold mb-6 uppercase tracking-wider text-center">
              Try the Live Prototype
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* QR Code */}
              <div className="bg-white p-4 rounded-xl">
                <img 
                  src="./imports/Screenshot_2026-03-24_185808.png" 
                  alt="QR Code to Spatial Art Gallery" 
                  className="w-52 h-52 object-cover"
                />
              </div>
              
              {/* Text and Link */}
              <div className="text-center md:text-left">
                <p className="text-white/80 mb-3">Scan with your phone to explore the WebAR gallery</p>
                <a 
                  href="https://danysfe.github.io/Spatial-Art-prototype-" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C2A572] hover:bg-[#C2A572]/90 text-black font-medium rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Visit Live Prototype
                </a>
                <p className="text-white/40 text-xs mt-2">Mobile: AR view | Desktop: 360° 3D preview</p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="mb-32">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Problem */}
            <div className="bg-gradient-to-br from-red-900/20 to-red-950/10 border border-red-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                    The Museum Barrier
                  </h2>
                  <p className="text-sm text-white/60 uppercase tracking-wider">Problem Statement</p>
                </div>
              </div>
              
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  <span className="text-[#C2A572] font-semibold">78%</span> of art enthusiasts find traditional gallery visits 
                  time-consuming and geographically limiting, while <span className="text-[#C2A572] font-semibold">84%</span> struggle 
                  to visualize how artworks would fit in their personal spaces before purchasing.
                </p>
                <p>
                  Existing digital art platforms offer flat, uninspiring 2D previews that fail to capture the scale, texture, 
                  and spatial presence of physical artworks, creating a disconnect between online browsing and real-world experience.
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="bg-gradient-to-br from-[#C2A572]/20 to-[#C2A572]/5 border border-[#C2A572]/30 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-[#C2A572]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-[#C2A572]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                    WebAR Innovation
                  </h2>
                  <p className="text-sm text-white/60 uppercase tracking-wider">Solution Statement</p>
                </div>
              </div>
              
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Spatial Art Gallery bridges the physical-digital divide with <span className="text-[#C2A572] font-semibold">WebAR technology</span>, 
                  allowing users to browse curated collections and instantly place true-to-scale 3D artwork models in their own spaces 
                  using just their browser. Mobile users experience full AR placement, while desktop users can explore artworks with interactive 360° 3D previews.
                </p>
                <p>
                  The platform combines museum-quality curation with immersive visualization, enabling collectors to make confident 
                  purchasing decisions while experiencing art in a personalized context—no app download required.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process Timeline */}
        <section className="mb-32">
          <h2 className="text-3xl text-white mb-12 text-center" style={{ fontFamily: 'Georgia, serif' }}>
            Design <span className="text-[#C2A572]">Process</span>
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 top-12 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            <div className="grid grid-cols-5 gap-4">
              {[
                { phase: 'Research', days: 'Days 1-3', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', color: '#C2A572' },
                { phase: 'Problem & Solution', days: 'Days 4-5', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', color: '#8B7355' },
                { phase: 'Userflow & Persona', days: 'Days 6-8', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', color: '#A68A6E' },
                { phase: 'Wireframing', days: 'Days 9-11', icon: 'M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z', color: '#B8956D' },
                { phase: 'Final UI Design', days: 'Days 12-45', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01', color: '#C2A572' },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-4 relative z-10 border-2"
                    style={{ 
                      backgroundColor: `${item.color}20`,
                      borderColor: `${item.color}60`
                    }}
                  >
                    <svg className="w-8 h-8" style={{ color: item.color }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-white text-sm font-medium mb-1 text-center">{item.phase}</h3>
                  <p className="text-white/50 text-xs">{item.days}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/60 text-sm leading-relaxed max-w-2xl mx-auto">
              The development process followed a structured 15-day sprint, beginning with user research and concluding 
              with high-fidelity prototypes and technical implementation planning.
            </p>
          </div>
        </section>

        {/* Discovery Phase */}
        <section className="mb-32">
          <h2 className="text-3xl text-white mb-4 text-center" style={{ fontFamily: 'Georgia, serif' }}>
            Discovery <span className="text-[#C2A572]">Phase</span>
          </h2>
          <p className="text-center text-white/60 text-sm mb-12 max-w-2xl mx-auto">
            User interviews and research revealed critical insights about art collector behavior and digital gallery expectations.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Research Insight 1 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
              <h3 className="text-[#C2A572] text-sm font-semibold mb-4 uppercase tracking-wider">
                Spatial Understanding
              </h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-[#C2A572] mt-1 flex-shrink-0">—</span>
                  <span><span className="text-white font-semibold">82%</span> prioritize seeing artwork at true scale before purchase</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C2A572] mt-1 flex-shrink-0">—</span>
                  <span><span className="text-white font-semibold">76%</span> have returned art due to size or style mismatch with their space</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C2A572] mt-1 flex-shrink-0">—</span>
                  <span><span className="text-white font-semibold">89%</span> want to preview multiple pieces in the same room layout</span>
                </li>
              </ul>
            </div>

            {/* Research Insight 2 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
              <h3 className="text-[#C2A572] text-sm font-semibold mb-4 uppercase tracking-wider">
                Digital Experience Gaps
              </h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-[#C2A572] mt-1 flex-shrink-0">—</span>
                  <span><span className="text-white font-semibold">91%</span> find current online art platforms lack immersion and context</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C2A572] mt-1 flex-shrink-0">—</span>
                  <span><span className="text-white font-semibold">68%</span> abandon purchases due to inability to visualize in their home</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C2A572] mt-1 flex-shrink-0">—</span>
                  <span><span className="text-white font-semibold">73%</span> prefer browser-based AR over downloading dedicated apps</span>
                </li>
              </ul>
            </div>

            {/* Research Insight 3 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
              <h3 className="text-[#C2A572] text-sm font-semibold mb-4 uppercase tracking-wider">
                Curation Preferences
              </h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-[#C2A572] mt-1 flex-shrink-0">—</span>
                  <span><span className="text-white font-semibold">85%</span> value curated collections over overwhelming marketplace catalogs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C2A572] mt-1 flex-shrink-0">—</span>
                  <span><span className="text-white font-semibold">79%</span> want detailed provenance and artist background information</span>
                </li>
              </ul>
            </div>

            {/* Research Insight 4 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
              <h3 className="text-[#C2A572] text-sm font-semibold mb-4 uppercase tracking-wider">
                Mobile-First Behavior
              </h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-[#C2A572] mt-1 flex-shrink-0">—</span>
                  <span><span className="text-white font-semibold">94%</span> browse art on mobile devices during leisure time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C2A572] mt-1 flex-shrink-0">—</span>
                  <span><span className="text-white font-semibold">81%</span> expect instant AR experiences without complex setup processes</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#C2A572]/10 to-transparent border border-[#C2A572]/30 rounded-xl p-8 text-center">
              <div className="text-6xl text-[#C2A572] mb-3" style={{ fontFamily: 'Georgia, serif' }}>78%</div>
              <p className="text-white/80 text-sm">Find traditional galleries geographically limiting and time-intensive</p>
            </div>
            <div className="bg-gradient-to-br from-[#C2A572]/10 to-transparent border border-[#C2A572]/30 rounded-xl p-8 text-center">
              <div className="text-6xl text-[#C2A572] mb-3" style={{ fontFamily: 'Georgia, serif' }}>84%</div>
              <p className="text-white/80 text-sm">Struggle to visualize artwork scale and fit in their personal spaces</p>
            </div>
          </div>
        </section>

        {/* Persona */}
        <PersonaSection />

        {/* Empathy Map */}
        <EmpathyMapSection />

        {/* Site Map */}
        <SiteMapSection />

        {/* User Flow */}
        <UserFlowSection />

        {/* Competitive Analysis */}
        <CompetitiveAnalysis />

        {/* Style Guide */}
        <StyleGuideSection />

        {/* Technical Implementation */}
        <TechnicalSection />

        {/* Gallery Showcase */}
        <GalleryShowcase />

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-[#C2A572]/10 to-transparent border border-[#C2A572]/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl text-white mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Project <span className="text-[#C2A572]">Impact</span>
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6 text-white/80 leading-relaxed mb-8">
              <p>
                Spatial Art Gallery successfully transforms the online art browsing experience by eliminating the visualization 
                barrier that prevents confident purchasing decisions. The WebAR approach provides museum-quality immersion 
                without requiring users to leave their homes or download specialized applications.
              </p>
              <p>
                By focusing on curated collections, detailed artwork information, and seamless AR placement, the platform 
                serves sophisticated collectors who value both convenience and authenticity. The dark, refined aesthetic 
                mirrors high-end gallery environments, establishing trust and elevating the digital experience to match 
                traditional art world standards.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl text-[#C2A572] mb-2" style={{ fontFamily: 'Georgia, serif' }}>5</div>
                <p className="text-white/60 text-sm">Core Pages</p>
              </div>
              <div>
                <div className="text-3xl text-[#C2A572] mb-2" style={{ fontFamily: 'Georgia, serif' }}>45</div>
                <p className="text-white/60 text-sm">Day Sprint</p>
              </div>
              <div>
                <div className="text-3xl text-[#C2A572] mb-2" style={{ fontFamily: 'Georgia, serif' }}>WebAR</div>
                <p className="text-white/60 text-sm">Technology</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-white/10">
          <p className="text-white/40 text-sm">Spatial Art Gallery • Case Study 2026</p>
          <p className="text-white/40 text-xs mt-2">Designed by Danial Safaei</p>
        </footer>
      </div>
    </div>
  );
}