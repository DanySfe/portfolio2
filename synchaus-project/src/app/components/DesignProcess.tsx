import { motion } from 'motion/react';
import { Layers, Clipboard, CheckCircle } from 'lucide-react';

export function DesignProcess() {
  const phases = [
    {
      title: 'Ideate',
      color: '#FF3D3D',
      description: 'Turn idea from concept and brainstorm to MVP',
      period: 'SEP - W01',
    },
    {
      title: 'Design',
      color: '#4F6BE7',
      description: 'Sketch out the product to align the user needs',
      period: 'SEP - W02',
    },
    {
      title: 'Develop',
      color: '#FF3D3D',
      description: 'Convert the designs into a live application',
      period: 'SEP - W03',
    },
    {
      title: 'Deploy',
      color: '#4F6BE7',
      description: 'Launching the application to the market',
      period: 'SEP - W04',
    },
  ];

  const timeline = [
    {
      phase: 'O1 - Ideation',
      week: 'SEP - W01',
      color: '#4F6BE7',
      items: [
        'Concept brainstorming',
        'Defined problem and user pain points',
        'Created app flow and feature list',
        'Sketched early layouts',
        'Defined goals and use cases',
      ],
    },
    {
      phase: 'O2  Research and wireframe',
      week: 'SEP - W02',
      color: '#00C48C',
      items: [
        'Competitor and market analysis',
        'Empathy mapping based on user needs',
        'Created user journey and flow map',
        'Low-fidelity wireframes in Figma',
        'Reviewed visual trends in smart home design',
      ],
    },
    {
      phase: 'O3 Hifi Design',
      week: 'SEP - W03',
      color: '#4F6BE7',
      items: [
        'Brand identity',
        'Design Main Cases',
        'Design Edge Cases',
        'Design UI documentation',
        'Design System',
        'Design Flow Rail Cases',
      ],
    },
    {
      phase: '04 Prototype  and Testing (UT)',
      week: 'SEP - W04',
      color: '#FF8C42',
      items: [
        'General Prototype',
        'Edge cases Prototype',
        'Usability Testing',
        'Gather Feedback',
        'Design Revision',
      ],
    },
    {
      phase: '05 development',
      week: 'OCT - 1M',
      color: '#00C48C',
      items: [
        'Handoff to developer',
        'Assets Documentation',
        'Translate from UI to code',
        'Unit Testing',
        'UI audit',
        'Gather Feedback',
        'Layout Revision after feedback',
        'Ready to test',
      ],
    },
    {
      phase: 'Testing -> Release',
      week: '',
      color: '#00C48C',
      items: [
        'Testcase Creation',
        'Flow Creation from QA',
        'QA documentation',
        'UI Audit',
        'Revision to developer',
        'General Testing',
        'Release MVP',
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block mb-6 px-4 py-2 bg-[#4E6BE7]/10 rounded-full border border-[#4E6BE7]/20">
          <p className="text-[#4E6BE7] text-sm font-medium tracking-wider">PROCESS</p>
        </div>
        <h2 className="text-5xl font-bold text-white mb-6">Design Process</h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          A structured approach from concept to launch
        </p>
      </div>

      {/* Process Flow */}
      <div className="mb-20">
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF3D3D] via-[#4F6BE7] to-[#4F6BE7]"></div>

          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 relative z-10 border-4 border-[#0A0A0A]"
                  style={{ backgroundColor: phase.color }}
                >
                  <span className="text-white font-bold text-2xl">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-base text-white/60 mb-2 leading-relaxed">{phase.description}</p>
                <p className="text-sm text-white/40 font-mono">{phase.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Design Timeline */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-[#4E6BE7] rounded-full"></div>
          <h3 className="text-3xl font-bold text-white">Design Timeline</h3>
        </div>
        <div className="space-y-6">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-3xl border border-white/5"
            >
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <h4 className="text-xl font-bold text-white">{item.phase}</h4>
                {item.week && (
                  <span className="text-sm text-white/40 font-mono ml-auto">{item.week}</span>
                )}
              </div>
              <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {item.items.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <span style={{ color: item.color }} className="mt-1 text-lg">•</span>
                    <span className="text-base">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}