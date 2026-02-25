import { motion } from 'motion/react';
import { Lightbulb, Users, Cog, Target, TrendingUp } from 'lucide-react';

export function DesignStrategy() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block mb-6 px-4 py-2 bg-[#4E6BE7]/10 rounded-full border border-[#4E6BE7]/20">
          <p className="text-[#4E6BE7] text-sm font-medium tracking-wider">STRATEGY</p>
        </div>
        <h2 className="text-5xl font-bold text-white mb-6">Design Strategy</h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto mb-4">
          A design strategy defines how SyncHaus brings value to users by simplifying smart home management.
        </p>
        <p className="text-lg text-white/50 max-w-3xl mx-auto">
          It aligns the app's purpose, audience, and technical goals to create a clear, seamless, and consistent user experience.
        </p>
      </div>

      {/* Strategy Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Intention */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-3xl border border-[#4F6BE7]/20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-[#4F6BE7] rounded-full"></div>
            <Lightbulb className="w-7 h-7 text-[#4F6BE7]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Intention</h3>
          <p className="text-white/70 leading-relaxed text-base">
            To design a universal smart home platform that lets users control all their connected devices — no matter the brand — in one unified app. The goal is to simplify smart living with a clean, easy-to-use interface that provides control, comfort, and confidence.
          </p>
        </motion.div>

        {/* Target User */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-3xl border border-[#00C48C]/20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-[#00C48C] rounded-full"></div>
            <Users className="w-7 h-7 text-[#00C48C]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Target User</h3>
          <div className="space-y-4 text-white/70">
            <p className="leading-relaxed text-base">
              Homeowners or renters with multiple smart devices from different brands who seek a single app to manage them all.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-[#00C48C] mt-1 text-lg">•</span>
                <span className="text-base">Tech-savvy adults aged 20–50</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00C48C] mt-1 text-lg">•</span>
                <span className="text-base">Users familiar with smart home technologies</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Tech Constraint */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-3xl border border-[#FECF29]/20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-[#FECF29] rounded-full"></div>
            <Cog className="w-7 h-7 text-[#FECF29]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Tech Constraint</h3>
          <ul className="space-y-3 text-white/70">
            <li className="flex items-start gap-3">
              <span className="text-[#FECF29] mt-1 text-lg">•</span>
              <span className="text-base">Ensuring stable connectivity and compatibility across various brands and devices</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FECF29] mt-1 text-lg">•</span>
              <span className="text-base">Multi-brand API integration</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FECF29] mt-1 text-lg">•</span>
              <span className="text-base">OS version differences (Android & iOS)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FECF29] mt-1 text-lg">•</span>
              <span className="text-base">Internet connectivity dependency</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FECF29] mt-1 text-lg">•</span>
              <span className="text-base">Device pairing limitations</span>
            </li>
          </ul>
        </motion.div>

        {/* General Task */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-3xl border border-[#FE4584]/20 md:col-span-2 lg:col-span-1"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-[#FE4584] rounded-full"></div>
            <Target className="w-7 h-7 text-[#FE4584]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">General Task</h3>
          <ul className="space-y-3 text-white/70">
            <li className="flex items-start gap-3">
              <span className="text-[#FE4584] mt-1 text-lg">•</span>
              <span className="text-base">Turn lights and thermostats on/off</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FE4584] mt-1 text-lg">•</span>
              <span className="text-base">Adjust brightness or temperature</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FE4584] mt-1 text-lg">•</span>
              <span className="text-base">Activate security and sleep modes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FE4584] mt-1 text-lg">•</span>
              <span className="text-base">Monitor device status in real-time</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FE4584] mt-1 text-lg">•</span>
              <span className="text-base">Manage rooms or zones</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FE4584] mt-1 text-lg">•</span>
              <span className="text-base">Access all controls through one dashboard</span>
            </li>
          </ul>
        </motion.div>

        {/* Success Factor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-3xl border border-[#00C48C]/20 md:col-span-2"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-[#00C48C] rounded-full"></div>
            <TrendingUp className="w-7 h-7 text-[#00C48C]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Success Factor</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#00C48C] mt-1 text-lg">•</span>
                <span className="text-base">Mobile Platform (Android/iOS)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00C48C] mt-1 text-lg">•</span>
                <span className="text-base">Single app controls multiple brands</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00C48C] mt-1 text-lg">•</span>
                <span className="text-base">Users complete tasks faster</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00C48C] mt-1 text-lg">•</span>
                <span className="text-base">Clear and consistent UI flow</span>
              </li>
            </ul>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#00C48C] mt-1 text-lg">•</span>
                <span className="text-base">Positive usability feedback</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00C48C] mt-1 text-lg">•</span>
                <span className="text-base">Stable device connectivity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00C48C] mt-1 text-lg">•</span>
                <span className="text-base">Intuitive navigation patterns</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}