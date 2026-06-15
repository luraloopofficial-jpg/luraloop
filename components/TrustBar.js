'use client'

import { motion } from 'framer-motion'

const brands = [
  { name: 'Aster MIMS Hospital', abbr: 'AMH', icon: '🏥' },
  { name: 'MES Group', abbr: 'MES', icon: '🎓' },
  { name: 'SUGEE Group', abbr: 'SGG', icon: '🏢' },
  { name: 'City Properties', abbr: 'CP', icon: '🏘️' },
  { name: 'RecraCon', abbr: 'RC', icon: '💼' },
  { name: 'TechCorp Enterprises', abbr: 'TCE', icon: '⚙️' },
  { name: 'NovaMed Healthcare', abbr: 'NMH', icon: '⚕️' },
  { name: 'Apex Commerce', abbr: 'ACX', icon: '🛒' },
]

const duplicated = [...brands, ...brands]

export default function TrustBar() {
  return (
    <section id="trust" className="py-14 border-y border-white/5 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(255,107,0,0.02) 0%, transparent 100%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white/30 text-sm uppercase tracking-widest font-medium"
        >
          Trusted by forward-thinking organizations
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #0B0B0B, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(-90deg, #0B0B0B, transparent)' }}
        />

        <div className="marquee-track flex gap-6 w-max">
          {duplicated.map((brand, i) => (
            <div
              key={i}
              className="glass rounded-2xl px-6 py-4 flex items-center gap-3 shrink-0 hover:border-orange-500/30 transition-colors duration-300 cursor-pointer group"
              style={{ minWidth: 190 }}
            >
              <div className="w-9 h-9 rounded-lg bg-dark-300 flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300">
                {brand.icon}
              </div>
              <div>
                <div className="text-white font-semibold text-sm">{brand.abbr}</div>
                <div className="text-white/30 text-xs">{brand.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
