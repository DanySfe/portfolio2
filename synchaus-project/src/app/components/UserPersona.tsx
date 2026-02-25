import { motion } from 'motion/react';
import { User, MapPin, Briefcase, Calendar, Quote, Target, Frown, Smile, Heart } from 'lucide-react';

interface UserPersonaProps {
  imgUnsplashPerson: string;
}

export function UserPersona({ imgUnsplashPerson }: UserPersonaProps) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block mb-6 px-4 py-2 bg-[#FECF29]/10 rounded-full border border-[#FECF29]/20">
          <p className="text-[#FECF29] text-sm font-medium tracking-wider">DEFINE</p>
        </div>
        <h2 className="text-5xl font-bold text-white mb-6">User Persona</h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
          Meet Alex Turner — our primary user persona representing the target audience
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-[#4F6BE7]" />
            <span>User background</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#FECF29]" />
            <span>Personality</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-[#00C48C]" />
            <span>Goals</span>
          </div>
          <div className="flex items-center gap-2">
            <Frown className="w-5 h-5 text-[#FF3D3D]" />
            <span>Frustration</span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Profile */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-1"
        >
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-3xl border border-white/5 overflow-hidden sticky top-24">
            {/* Profile Image */}
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f0f0f]"></div>
              <img 
                src={imgUnsplashPerson} 
                alt="Alex Turner" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Profile Details */}
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-[#4F6BE7]" />
                <div>
                  <p className="text-xs text-white/40">Full Name</p>
                  <p className="text-white font-medium">Alex Turner</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#4F6BE7]" />
                <div>
                  <p className="text-xs text-white/40">Age</p>
                  <p className="text-white font-medium">33 years old</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-[#4F6BE7]" />
                <div>
                  <p className="text-xs text-white/40">Job</p>
                  <p className="text-white font-medium">Product Manager</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#4F6BE7]" />
                <div>
                  <p className="text-xs text-white/40">Location</p>
                  <p className="text-white font-medium">Toronto, Canada</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <Quote className="w-5 h-5 text-[#4F6BE7] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-white/40 mb-2">Statement</p>
                    <p className="text-white/80 text-sm leading-relaxed italic">
                      "I just want one app to control all my smart devices — not five different ones that each do one thing."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Details Grid */}
        <div className="lg:col-span-2 space-y-6">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-3xl border border-white/5"
          >
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="w-1 h-8 bg-[#4F6BE7] rounded-full"></div>
              About
            </h3>
            <p className="text-white/70 leading-relaxed">
              Alex is a busy professional living in an urban apartment equipped with multiple smart devices — from Philips Hue lights to a Nest thermostat and Ring camera. While he enjoys using smart tech, managing them through separate apps has become frustrating and time-consuming. He values simplicity, clean design, and fast access to control all his devices without navigating multiple interfaces.
            </p>
          </motion.div>

          {/* Goals & Personality */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-3xl border border-[#00C48C]/20"
            >
              <h3 className="text-2xl font-bold text-[#00C48C] mb-4 flex items-center gap-3">
                <div className="w-1 h-8 bg-[#00C48C] rounded-full"></div>
                Goals
              </h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-[#00C48C] mt-1">•</span>
                  <span>Manage all smart home devices through one unified app</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00C48C] mt-1">•</span>
                  <span>Save time by reducing app-switching</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00C48C] mt-1">•</span>
                  <span>Easily monitor and control lighting, temperature, and security</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00C48C] mt-1">•</span>
                  <span>Have a consistent and simple interface</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00C48C] mt-1">•</span>
                  <span>Ensure reliable performance across all devices</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-3xl border border-[#FECF29]/20"
            >
              <h3 className="text-2xl font-bold text-[#FECF29] mb-4 flex items-center gap-3">
                <div className="w-1 h-8 bg-[#FECF29] rounded-full"></div>
                Personality
              </h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-[#FECF29] mt-1">•</span>
                  <span>Tech-savvy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FECF29] mt-1">•</span>
                  <span>Organised</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FECF29] mt-1">•</span>
                  <span>Practical</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FECF29] mt-1">•</span>
                  <span>Curious</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FECF29] mt-1">•</span>
                  <span>Appreciates clean design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FECF29] mt-1">•</span>
                  <span>Prefers functionality over flash</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Frustrations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-3xl border border-[#FF3D3D]/20"
          >
            <h3 className="text-2xl font-bold text-[#FF3D3D] mb-4 flex items-center gap-3">
              <div className="w-1 h-8 bg-[#FF3D3D] rounded-full"></div>
              Frustrations
            </h3>
            <ul className="grid md:grid-cols-2 gap-4 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#FF3D3D] mt-1">•</span>
                <span>Needs multiple apps for different brands</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF3D3D] mt-1">•</span>
                <span>Each app has different layouts and features</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF3D3D] mt-1">•</span>
                <span>Devices sometimes disconnect or desync</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF3D3D] mt-1">•</span>
                <span>Time wasted switching between interfaces</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF3D3D] mt-1">•</span>
                <span>Overly complex automation setups he doesn't need</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
