import { motion } from 'motion/react';
import { Type, Palette, Layout } from 'lucide-react';

export function StyleGuide() {
  const colors = [
    { name: 'Primary', hex: '#4E6AE7', usage: 'Primary actions & key elements' },
    { name: 'Secondary', hex: '#354050', usage: 'Secondary elements & backgrounds' },
    { name: 'Accent / Alert', hex: '#BE1A1E', usage: 'Alerts, warnings & important actions' },
    { name: 'White / Base', hex: '#FFFFFF', usage: 'Text, icons & backgrounds' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block mb-6 px-4 py-2 bg-[#4E6BE7]/10 rounded-full border border-[#4E6BE7]/20">
          <p className="text-[#4E6BE7] text-sm font-medium tracking-wider">DESIGN SYSTEM</p>
        </div>
        <h2 className="text-5xl font-bold text-white mb-6">Style Guide</h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
          A cohesive design system that ensures consistency and clarity across the entire application
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <Type className="w-5 h-5 text-[#4F6BE7]" />
            <span>Typography</span>
          </div>
          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-[#00C48C]" />
            <span>Color</span>
          </div>
          <div className="flex items-center gap-2">
            <Layout className="w-5 h-5 text-[#FECF29]" />
            <span>Iconography</span>
          </div>
        </div>
      </div>

      {/* Color Palette */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-gradient-to-b from-[#4F6BE7] to-[#00C48C] rounded-full"></div>
          <h3 className="text-3xl font-bold text-white">Color Style Guide</h3>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {colors.map((color, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 rounded-3xl border border-white/5 hover:border-white/10 transition-all">
                {/* Color Circle */}
                <div className="relative mb-6">
                  <div className="w-full aspect-square rounded-full border-8 border-[#0f0f0f] shadow-2xl overflow-hidden">
                    <div 
                      className="w-full h-full transition-transform group-hover:scale-110 duration-300"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                  </div>
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{ 
                      background: `radial-gradient(circle at center, ${color.hex}40, transparent 70%)`
                    }}
                  ></div>
                </div>

                {/* Color Info */}
                <div className="text-center space-y-2">
                  <p className="text-white font-bold text-lg">{color.name}</p>
                  <p className="text-white/60 font-mono text-sm">{color.hex}</p>
                  <p className="text-white/40 text-xs">{color.usage}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Typography */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-gradient-to-b from-[#4F6BE7] to-[#00C48C] rounded-full"></div>
          <h3 className="text-3xl font-bold text-white">Typography</h3>
        </div>

        {/* Kodchasan Font */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-3xl border border-white/5 mb-8">
          <h4 className="text-4xl font-bold text-white mb-8">Kodchasan</h4>
          
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { weight: 'Light', value: 300 },
              { weight: 'Regular', value: 400 },
              { weight: 'Medium', value: 500 },
              { weight: 'Semi Bold', value: 600 },
              { weight: 'Bold', value: 700 },
            ].map((font, index) => (
              <div key={index} className="text-center">
                <p 
                  className="text-white text-2xl mb-2"
                  style={{ fontFamily: 'Kodchasan', fontWeight: font.value }}
                >
                  {font.weight.toUpperCase()}
                </p>
                <div 
                  className="text-white/70 text-sm space-y-1"
                  style={{ fontFamily: 'Kodchasan', fontWeight: font.value }}
                >
                  <p>ABCDEFGHIJ</p>
                  <p>KLMNOPQRS</p>
                  <p>TUVWXYX</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inter Font */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-3xl border border-white/5">
          <h4 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: 'Inter' }}>INTER</h4>
          
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { weight: 'Light', value: 300 },
              { weight: 'Regular', value: 400 },
              { weight: 'Medium', value: 500 },
              { weight: 'Semi Bold', value: 600 },
              { weight: 'Bold', value: 700 },
            ].map((font, index) => (
              <div key={index} className="text-center">
                <p 
                  className="text-white text-xl mb-2"
                  style={{ fontFamily: 'Inter', fontWeight: font.value }}
                >
                  {font.weight.toUpperCase()}
                </p>
                <div 
                  className="text-white/70 text-sm space-y-1"
                  style={{ fontFamily: 'Inter', fontWeight: font.value }}
                >
                  <p>ABCDEFGHIJK</p>
                  <p>LMNOPQRSTU</p>
                  <p>VWXYX</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Design System Overview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6"
      >
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-3xl border border-[#4F6BE7]/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#4F6BE7] rounded-full"></div>
            <Type className="w-7 h-7 text-[#4F6BE7]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Typography</h3>
          <p className="text-white/70 leading-relaxed">
            Using Kodchasan for headings and Inter for body text creates a modern, readable hierarchy that guides users through the interface.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-3xl border border-[#00C48C]/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#00C48C] rounded-full"></div>
            <Palette className="w-7 h-7 text-[#00C48C]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Color System</h3>
          <p className="text-white/70 leading-relaxed">
            A carefully selected palette that balances technology with warmth, using blue for trust and green for success indicators.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-3xl border border-[#FECF29]/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#FECF29] rounded-full"></div>
            <Layout className="w-7 h-7 text-[#FECF29]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Components</h3>
          <p className="text-white/70 leading-relaxed">
            Reusable components built with consistency in mind, ensuring a cohesive experience across all screens and interactions.
          </p>
        </div>
      </motion.div>
    </div>
  );
}