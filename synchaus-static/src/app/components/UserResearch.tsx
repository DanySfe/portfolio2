import { motion } from 'motion/react';
import { Search, Users, BarChart3 } from 'lucide-react';

export function UserResearch() {
  const surveyData = {
    managementMethods: [
      { method: 'Multiple brand apps', percentage: 45, color: '#FF8C42' },
      { method: 'Single ecosystem app (Apple/Google/Alexa)', percentage: 30, color: '#4F6BE7' },
      { method: "Don't use smart home apps", percentage: 25, color: '#00C48C' },
    ],
    platforms: [
      { platform: 'Mobile (iOS / Android)', percentage: 55, color: '#FF8C42' },
      { platform: 'Desktop/web', percentage: 30, color: '#00C48C' },
      { platform: 'Voice assistant', percentage: 15, color: '#4F6BE7' },
    ],
    frustrations: [
      { issue: 'Switching between apps', percentage: 40, color: '#FF8C42' },
      { issue: 'Complex setup process', percentage: 35, color: '#4F6BE7' },
      { issue: 'Inconsistent interface design', percentage: 25, color: '#00C48C' },
    ],
    expectations: [
      { feature: 'One app for all devices', percentage: 45, color: '#FF8C42' },
      { feature: 'Simplicity & fast control', percentage: 30, color: '#4F6BE7' },
      { feature: 'Compatibility & reliability', percentage: 25, color: '#00C48C' },
    ],
  };

  const ChartCircle = ({ data, title }: { data: Array<{ percentage: number; color: string }>; title: string }) => {
    let currentAngle = -90;
    
    return (
      <div className="flex flex-col items-center">
        <p className="text-sm text-white/60 mb-4 text-center">{title}</p>
        <div className="relative w-48 h-48">
          <svg className="w-full h-full transform -rotate-90">
            {data.map((item, index) => {
              const angle = (item.percentage / 100) * 360;
              const startAngle = currentAngle;
              currentAngle += angle;
              
              const startX = 96 + 70 * Math.cos((startAngle * Math.PI) / 180);
              const startY = 96 + 70 * Math.sin((startAngle * Math.PI) / 180);
              const endX = 96 + 70 * Math.cos(((startAngle + angle) * Math.PI) / 180);
              const endY = 96 + 70 * Math.sin(((startAngle + angle) * Math.PI) / 180);
              
              const largeArcFlag = angle > 180 ? 1 : 0;
              
              return (
                <motion.path
                  key={index}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  d={`M 96 96 L ${startX} ${startY} A 70 70 0 ${largeArcFlag} 1 ${endX} ${endY} Z`}
                  fill={item.color}
                  opacity={0.8}
                />
              );
            })}
            <circle cx="96" cy="96" r="45" fill="#1a1a1a" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-[#2a2a2a] flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block mb-6 px-4 py-2 bg-[#4E6BE7]/10 rounded-full border border-[#4E6BE7]/20">
          <p className="text-[#4E6BE7] text-sm font-medium tracking-wider">RESEARCH</p>
        </div>
        <h2 className="text-5xl font-bold text-white mb-6">User Research</h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
          Understanding how people currently control smart devices and why using multiple brand apps creates friction.
        </p>
        
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-3xl border border-white/5 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#4F6BE7] rounded-full"></div>
            <h3 className="text-2xl font-bold text-white">Survey</h3>
          </div>
          <p className="text-white/70 leading-relaxed text-lg">
            I did survey with <span className="text-[#4F6BE7] font-semibold">55 potential users</span> in combination with interviews from individual conversation to know their <span className="font-semibold text-white">views, experience</span> and to collect <span className="font-semibold text-white">quantitative and qualitative data</span>, the target audience were between the age 20-50 Yold
          </p>
        </div>
      </div>

      {/* Survey Results */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {/* How users manage smart devices */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 rounded-2xl border border-white/5"
        >
          <ChartCircle data={surveyData.managementMethods} title="How users currently manage smart devices" />
          <div className="mt-6 space-y-3">
            {surveyData.managementMethods.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                <p className="text-base text-white/70 flex-1">{item.method}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Preferred platform */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 rounded-2xl border border-white/5"
        >
          <ChartCircle data={surveyData.platforms} title="Preferred platform for control" />
          <div className="mt-6 space-y-3">
            {surveyData.platforms.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                <p className="text-base text-white/70 flex-1">{item.platform}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top frustrations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 rounded-2xl border border-white/5"
        >
          <ChartCircle data={surveyData.frustrations} title="Top user frustrations" />
          <div className="mt-6 space-y-3">
            {surveyData.frustrations.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                <p className="text-base text-white/70 flex-1">{item.issue}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* User expectations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 rounded-2xl border border-white/5"
        >
          <ChartCircle data={surveyData.expectations} title="What users expect from an ideal app" />
          <div className="mt-6 space-y-3">
            {surveyData.expectations.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                <p className="text-base text-white/70 flex-1">{item.feature}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Research Methods */}
      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 rounded-2xl border border-[#4F6BE7]/20"
        >
          <div className="w-12 h-12 rounded-xl bg-[#4F6BE7]/10 flex items-center justify-center mb-4">
            <Search className="w-6 h-6 text-[#4F6BE7]" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Competitor Analysis</h3>
          <p className="text-white/60 text-base leading-relaxed">Analyzed existing smart home apps to identify gaps and opportunities</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 rounded-2xl border border-[#00C48C]/20"
        >
          <div className="w-12 h-12 rounded-xl bg-[#00C48C]/10 flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-[#00C48C]" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">User Interviews</h3>
          <p className="text-white/60 text-base leading-relaxed">Conducted in-depth interviews to understand user pain points and needs</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 rounded-2xl border border-[#FECF29]/20"
        >
          <div className="w-12 h-12 rounded-xl bg-[#FECF29]/10 flex items-center justify-center mb-4">
            <BarChart3 className="w-6 h-6 text-[#FECF29]" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Quantitative Survey</h3>
          <p className="text-white/60 text-base leading-relaxed">Collected data from 55 users to validate assumptions and measure preferences</p>
        </motion.div>
      </div>
    </div>
  );
}