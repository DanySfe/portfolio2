import { ChevronDown } from 'lucide-react';
import image_bea772bba34a2ddcf5c86a0bb0f01962747af37d from 'figma:asset/bea772bba34a2ddcf5c86a0bb0f01962747af37d.png'
import imgHandMockup from "figma:asset/4ce344b68b9c2be506c4f1ee1a6be8c02c00117f.png";
import imgUnsplashPerson from "figma:asset/979824744bc981500901d17583fc75b95e4a8640.png";
import imgHomeDashboard from "figma:asset/99bbe2660b0cdead8c7af109a7efcf7672b77432.png";
import imgBedroomLights from "figma:asset/8975b4a44bf0e58f3d0312b609609cd22e36a7ad.png";
import imgLoginScreen from "figma:asset/3dccab95ae9c316075cfa9466791b69b9f6ae039.png";
import imgLightsManagement from "figma:asset/12005ef6c59dc1eba0a8c5eda417e20d041eba82.png";
import imgThermostat from "figma:asset/ea5bde1b2efe1d1c45f84f0879cbb4c15d3f3aa0.png";
import imgSecurity from "figma:asset/654bba2545ef5f91d2cc4f3b25c2763769ba1b6d.png";
import Hero from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { DesignProcess } from './components/DesignProcess';
import { DesignStrategy } from './components/DesignStrategy';
import { UserResearch } from './components/UserResearch';
import { UserPersona } from './components/UserPersona';
import { StyleGuide } from './components/StyleGuide';
import { Navigation } from './components/Navigation';
import HomeScreen from '../imports/2';
import ThermostatScreen from '../imports/3';
import LightsBedroomScreen from '../imports/4';
import SecurityScreen from '../imports/5';
import LightsScreen from '../imports/9';

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Clean Modern Background */}
      <div className="fixed inset-0 z-0">
        {/* Base solid dark background */}
        <div className="absolute inset-0 bg-[#0B0B0F]"></div>
        
        {/* Subtle top-down gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/30 via-transparent to-[#0B0B0F]"></div>
        
        {/* Modern geometric accent - top right */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4E6BE7] via-[#4E6BE7]/40 to-transparent blur-[120px]"></div>
        </div>
        
        {/* Modern geometric accent - bottom left */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-15">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00C48C] via-[#00C48C]/30 to-transparent blur-[100px]"></div>
        </div>
        
        {/* Ultra subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Scanline effect for tech feel */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, transparent 2px, transparent 4px)',
        }}></div>
        
        {/* Sharp light beam accent */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1px] h-[500px] bg-gradient-to-b from-transparent via-[#4E6BE7]/20 to-transparent"></div>
      </div>

      {/* Content with relative positioning */}
      <div className="relative z-10">
        <Navigation />
        
        {/* Hero Section */}
        <Hero />

        {/* Overview Section */}
        <section id="overview" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block mb-6 px-4 py-2 bg-[#4E6BE7]/10 rounded-full border border-[#4E6BE7]/20">
                  <p className="text-[#4E6BE7] text-sm font-['Rubik:Medium',sans-serif] tracking-wider uppercase">Introduction</p>
                </div>
                <h2 className="text-5xl font-['Kodchasan:Bold',sans-serif] text-white mb-6">About This Project</h2>
                <p className="text-xl font-['Rubik:Regular',sans-serif] text-white/70 leading-relaxed mb-8">
                  This project challenged me as a UX and UI Designer to craft an intuitive and universal smart home platform that eliminates the complexity of managing multiple apps. SyncHaus was built with the vision of merging simplicity, usability, and a sleek, futuristic aesthetic for everyday smart living.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-1 bg-[#4E6BE7] rounded-full"></div>
                    <p className="font-['Rubik:Regular',sans-serif] text-white/60">Platform: <span className="text-white font-['Rubik:Medium',sans-serif]">Android/iOS</span></p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-1 bg-[#4E6BE7] rounded-full"></div>
                    <p className="font-['Rubik:Regular',sans-serif] text-white/60">Role: <span className="text-white font-['Rubik:Medium',sans-serif]">UX/UI Designer</span></p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10">
                  <img src={image_bea772bba34a2ddcf5c86a0bb0f01962747af37d} alt="SyncHaus App" className="w-full rounded-[45px]" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#4E6BE7]/20 to-[#00C48C]/20 blur-3xl -z-0 scale-75"></div>
              </div>
            </div>
          </div>
        </section>

        {/* App Screens Showcase */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-['Kodchasan:Bold',sans-serif] text-white mb-6">App Screens</h2>
              <p className="text-xl font-['Rubik:Regular',sans-serif] text-white/70 max-w-3xl mx-auto">
                Seamless control across all your smart home devices
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
              {/* Home Dashboard */}
              <div className="group relative">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6">
                  <div className="w-full aspect-[9/19.5] overflow-hidden rounded-2xl bg-black flex items-center justify-center">
                    <img src={imgHomeDashboard} alt="Home Dashboard" className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-6 px-2">
                    <h3 className="text-xl font-['Kodchasan:SemiBold',sans-serif] text-white mb-2">Home Dashboard</h3>
                    <p className="font-['Rubik:Regular',sans-serif] text-white/60 text-sm">Quick access to all connected devices</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#4E6BE7]/0 to-[#4E6BE7]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>

              {/* Thermostat Control */}
              <div className="group relative">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6">
                  <div className="w-full aspect-[9/19.5] overflow-hidden rounded-2xl bg-black flex items-center justify-center">
                    <img src={imgThermostat} alt="Thermostat Control" className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-6 px-2">
                    <h3 className="text-xl font-['Kodchasan:SemiBold',sans-serif] text-white mb-2">Climate Control</h3>
                    <p className="font-['Rubik:Regular',sans-serif] text-white/60 text-sm">Intuitive temperature management</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00C48C]/0 to-[#00C48C]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>

              {/* Lights - Bedroom */}
              <div className="group relative">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6">
                  <div className="w-full aspect-[9/19.5] overflow-hidden rounded-2xl bg-black flex items-center justify-center">
                    <img src={imgBedroomLights} alt="Bedroom Lights" className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-6 px-2">
                    <h3 className="text-xl font-['Kodchasan:SemiBold',sans-serif] text-white mb-2">Bedroom Lights</h3>
                    <p className="font-['Rubik:Regular',sans-serif] text-white/60 text-sm">Smart lighting controls</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF9500]/0 to-[#FF9500]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>

              {/* Lights - Room Management */}
              <div className="group relative">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6">
                  <div className="w-full aspect-[9/19.5] overflow-hidden rounded-2xl bg-black flex items-center justify-center">
                    <img src={imgLightsManagement} alt="Lights Management" className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-6 px-2">
                    <h3 className="text-xl font-['Kodchasan:SemiBold',sans-serif] text-white mb-2">Lights Management</h3>
                    <p className="font-['Rubik:Regular',sans-serif] text-white/60 text-sm">Control all room lighting</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#34C8E8]/0 to-[#34C8E8]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>

              {/* Security */}
              <div className="group relative">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6">
                  <div className="w-full aspect-[9/19.5] overflow-hidden rounded-2xl bg-black flex items-center justify-center">
                    <img src={imgSecurity} alt="Security Center" className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-6 px-2">
                    <h3 className="text-xl font-['Kodchasan:SemiBold',sans-serif] text-white mb-2">Security Center</h3>
                    <p className="font-['Rubik:Regular',sans-serif] text-white/60 text-sm">Home security and monitoring</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#BE1A1E]/0 to-[#BE1A1E]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>

              {/* Login Screen */}
              <div className="group relative">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6">
                  <div className="w-full aspect-[9/19.5] overflow-hidden rounded-2xl bg-black flex items-center justify-center">
                    <img src={imgLoginScreen} alt="Login Screen" className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-6 px-2">
                    <h3 className="text-xl font-['Kodchasan:SemiBold',sans-serif] text-white mb-2">User Authentication</h3>
                    <p className="font-['Rubik:Regular',sans-serif] text-white/60 text-sm">Secure login experience</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#4E6BE7]/0 to-[#4E6BE7]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section id="problem-solution" className="py-32 px-6">
          <ProblemSolution />
        </section>

        {/* Design Strategy */}
        <section id="design-strategy" className="py-32 px-6">
          <DesignStrategy />
        </section>

        {/* Design Process */}
        <section id="design-process" className="py-32 px-6">
          <DesignProcess />
        </section>

        {/* User Research */}
        <section id="user-research" className="py-32 px-6">
          <UserResearch />
        </section>

        {/* User Persona */}
        <section id="user-persona" className="py-32 px-6">
          <UserPersona imgUnsplashPerson={imgUnsplashPerson} />
        </section>

        {/* Style Guide */}
        <section id="style-guide" className="py-32 px-6">
          <StyleGuide />
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-white/40 text-sm">SyncHaus Case Study — Designed with passion for simplicity</p>
          </div>
        </footer>
      </div>
    </div>
  );
}