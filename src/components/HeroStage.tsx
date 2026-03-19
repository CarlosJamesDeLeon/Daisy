'use client'

import { motion } from 'framer-motion'

// Custom SVG Daisy button component
function DaisySVGButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className="group relative flex flex-col items-center gap-4 bg-transparent border-none cursor-pointer"
      style={{ outline: 'none' }}
      whileHover="hovered"
      initial="rest"
    >
      {/* Daisy SVG */}
      <motion.svg
        width="120"
        height="120"
        viewBox="-60 -60 120 120"
        variants={{
          rest: { rotate: 0 },
          hovered: { rotate: 15 },
        }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      >
        {/* 8 petals, evenly spaced */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.ellipse
            key={i}
            cx={0}
            cy={-34}
            rx={7.5}
            ry={18}
            fill="white"
            stroke="#4A5D4E"
            strokeWidth="0.8"
            opacity="0.95"
            style={{ originX: '0px', originY: '0px' }}
            transform={`rotate(${i * 45})`}
            variants={{
              rest: {
                ry: 18,
                opacity: 0.95,
              },
              hovered: {
                ry: 22,
                opacity: 1,
              },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        ))}
        {/* Center disc */}
        <motion.circle
          cx={0}
          cy={0}
          r={12}
          fill="#E8C547"
          opacity="1"
          variants={{
            rest: { r: 12 },
            hovered: { r: 14 },
          }}
          transition={{ duration: 0.5 }}
        />
        {/* Center texture dots */}
        {[
          [0, 0], [4, 3], [-4, 3], [0, -5], [5, -3], [-5, -3],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={1.2} fill="#4A5D4E" opacity="0.5" />
        ))}
      </motion.svg>

      {/* BEGIN label */}
      <motion.span
        className="font-sans text-xs font-medium"
        style={{
          letterSpacing: '0.3em',
          color: '#4A5D4E',
          textTransform: 'uppercase',
        }}
        variants={{
          rest: { opacity: 0.7, y: 0 },
          hovered: { opacity: 1, y: 2 },
        }}
        transition={{ duration: 0.3 }}
      >
        Begin
      </motion.span>
    </motion.button>
  )
}

export default function HeroStage({ onBegin }: { onBegin: () => void }) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-6">
      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.3 }}
        className="mb-12"
        style={{
          width: '1px',
          height: '80px',
          backgroundColor: '#4A5D4E',
          opacity: 0.25,
        }}
      />

      {/* Main title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        className="mb-4 text-center font-serif"
        style={{
          fontSize: 'clamp(5rem, 15vw, 9rem)',
          fontWeight: 300,
          letterSpacing: '-0.02em',
          lineHeight: 1,
          color: '#4A5D4E',
          fontStyle: 'italic',
        }}
      >
        Daisy
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.9 }}
        className="mb-20 font-sans text-center"
        style={{
          fontSize: '0.7rem',
          letterSpacing: '0.35em',
          color: '#4A5D4E',
          opacity: 0.55,
          textTransform: 'uppercase',
        }}
      >
        A Digital Sanctuary
      </motion.p>

      {/* Daisy Start Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }}
      >
        <DaisySVGButton onClick={onBegin} />
      </motion.div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.3 }}
        className="mt-16"
        style={{
          width: '1px',
          height: '80px',
          backgroundColor: '#4A5D4E',
          opacity: 0.25,
        }}
      />

      {/* Tagline at bottom */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 font-sans text-center"
        style={{
          fontSize: '0.6rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: '#4A5D4E',
        }}
      >
        Artisan Bouquets · Crafted with Intention
      </motion.p>
    </div>
  )
}
