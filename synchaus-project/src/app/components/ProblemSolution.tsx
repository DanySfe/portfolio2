import { X, Check, AlertCircle, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function ProblemSolution() {
  const problems = [
    'Too many apps for different devices',
    'Inconsistent design and controls',
    'Time-consuming to switch between apps',
    'No unified dashboard for quick access',
    'Limited cross-brand compatibility',
    'Confusing experience for everyday users',
  ];

  const solutions = [
    'One central app for all smart devices',
    'Compatible with multiple brands and systems',
    'Unified dashboard for monitoring and control',
    'Real-time device feedback and status',
    'Simple setup with clear navigation',
    'Consistent design across all features',
    'Enhanced convenience and accessibility',
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block mb-6 px-4 py-2 bg-[#4E6BE7]/10 rounded-full border border-[#4E6BE7]/20">
          <p className="text-[#4E6BE7] text-sm font-medium tracking-wider">DISCOVER</p>
        </div>
        <h2 className="text-5xl font-bold text-white mb-6">Problem & Solution</h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Understanding the challenges and creating solutions that truly matter
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Problem Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-3xl border border-[#FF3D3D]/20"
        >
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-[#FF3D3D] rounded-full"></div>
              <h3 className="text-3xl font-bold text-[#FF3D3D]">The Problem</h3>
            </div>
            <p className="text-white/70 leading-relaxed text-lg">
              In today's smart home market, users often own multiple devices from different brands, each requiring its own app to control. This creates confusion, inconsistency, and frustration when managing a connected home environment.
            </p>
          </div>

          <div className="space-y-4">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <span className="text-[#FF3D3D] mt-1 text-xl">•</span>
                <p className="text-white/70 flex-1 text-base leading-relaxed">{problem}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Solution Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-3xl border border-[#00C48C]/20"
        >
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-[#00C48C] rounded-full"></div>
              <h3 className="text-3xl font-bold text-[#00C48C]">The Solution</h3>
            </div>
            <p className="text-white/70 leading-relaxed text-lg">
              SyncHaus brings all smart devices together in one universal app, offering a seamless and consistent experience. It provides users with total control over their home systems — no matter the brand.
            </p>
          </div>

          <div className="space-y-4">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <span className="text-[#00C48C] mt-1 text-xl">•</span>
                <p className="text-white/70 flex-1 text-base leading-relaxed">{solution}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}