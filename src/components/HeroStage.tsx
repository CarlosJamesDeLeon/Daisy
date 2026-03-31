'use client'

import { motion, useAnimationFrame, useMotionValue } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

// Load Cormorant Garamond for the elegant Daisy title
const fontLink = typeof document !== 'undefined' && (() => {
  if (!document.querySelector('#cormorant-font')) {
    const link = document.createElement('link')
    link.id = 'cormorant-font'
    link.rel = 'stylesheet'
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300;1,400&display=swap'
    document.head.appendChild(link)
  }
})()

// ─────────────────────────────────────────────
// Tiny floating petal (random slow drift)
// ─────────────────────────────────────────────
function FloatingPetal({
  color,
  size,
  startX,
  startY,
  duration,
  delay,
  shape,
}: {
  color: string
  size: number
  startX: number
  startY: number
  duration: number
  delay: number
  shape: 'round' | 'ellipse' | 'fan'
}) {
  return (
    <motion.div
      className="pointer-events-none absolute"
      style={{ left: `${startX}%`, top: `${startY}%` }}
      initial={{ opacity: 0, y: 0, rotate: 0, scale: 0.6 }}
      animate={{
        opacity: [0, 0.62, 0.62, 0],
        y: [0, -120, -220, -340],
        x: [0, 18, -12, 25],
        rotate: [0, 20, -15, 30],
        scale: [0.6, 1, 0.9, 0.5],
      }}
      transition={{
        duration,
        delay,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatDelay: Math.random() * 4 + 1,
      }}
    >
      {shape === 'round' && (
        <div
          style={{
            width: size,
            height: size * 0.65,
            borderRadius: '60% 40% 60% 40%',
            background: color,
            filter: 'blur(0.5px)',
            opacity: 0.85,
          }}
        />
      )}
      {shape === 'ellipse' && (
        <div
          style={{
            width: size * 0.5,
            height: size,
            borderRadius: '50%',
            background: color,
            filter: 'blur(0.3px)',
            opacity: 0.8,
            transform: 'rotate(-25deg)',
          }}
        />
      )}
      {shape === 'fan' && (
        <svg width={size} height={size * 0.7} viewBox="0 0 20 14">
          <ellipse cx={10} cy={10} rx={9} ry={7} fill={color} opacity={0.82} />
        </svg>
      )}
    </motion.div>
  )
}

// ─────────────────────────────────────────────
// SVG Rose
// ─────────────────────────────────────────────
function Rose({ cx, cy, r = 22, color = '#E8647A', delay = 0 }: {
  cx: number; cy: number; r?: number; color?: string; delay?: number
}) {
  const petals = [
    { rx: r * 0.55, ry: r * 0.3, dx: 0, dy: -r * 0.9, angle: 0 },
    { rx: r * 0.48, ry: r * 0.28, dx: r * 0.75, dy: -r * 0.55, angle: 55 },
    { rx: r * 0.5, ry: r * 0.27, dx: r * 0.8, dy: r * 0.3, angle: 110 },
    { rx: r * 0.5, ry: r * 0.27, dx: 0, dy: r * 0.9, angle: 180 },
    { rx: r * 0.48, ry: r * 0.28, dx: -r * 0.75, dy: r * 0.3, angle: 250 },
    { rx: r * 0.5, ry: r * 0.27, dx: -r * 0.8, dy: -r * 0.55, angle: 305 },
    { rx: r * 0.33, ry: r * 0.2, dx: 0, dy: -r * 0.55, angle: 0 },
    { rx: r * 0.3, ry: r * 0.19, dx: r * 0.48, dy: r * 0.18, angle: 120 },
    { rx: r * 0.3, ry: r * 0.19, dx: -r * 0.48, dy: r * 0.18, angle: 240 },
  ]
  return (
    <motion.g
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.9, ease: 'easeOut' }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    >
      {petals.map((p, i) => (
        <ellipse
          key={i}
          cx={cx + p.dx}
          cy={cy + p.dy}
          rx={p.rx}
          ry={p.ry}
          fill={i < 6 ? color : (i < 8 ? `${color}cc` : '#fff5f5')}
          opacity={i < 6 ? 0.88 : 0.7}
          transform={`rotate(${p.angle}, ${cx + p.dx}, ${cy + p.dy})`}
        />
      ))}
      <circle cx={cx} cy={cy} r={r * 0.18} fill="#c0304a" opacity={0.9} />
    </motion.g>
  )
}

// ─────────────────────────────────────────────
// SVG Peony
// ─────────────────────────────────────────────
function Peony({ cx, cy, r = 28, color = '#F4A0C0', delay = 0 }: {
  cx: number; cy: number; r?: number; color?: string; delay?: number
}) {
  const layers = [10, 7, 5]
  const radii = [r, r * 0.7, r * 0.45]
  const colors = [color, `${color}dd`, '#fff0f6']
  return (
    <motion.g
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.9, ease: 'easeOut' }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    >
      {layers.map((count, li) =>
        Array.from({ length: count }).map((_, i) => {
          const angle = (i / count) * 360 + li * (360 / count / 2)
          const rad = (angle * Math.PI) / 180
          const dist = radii[li] * 0.68
          return (
            <ellipse
              key={`${li}-${i}`}
              cx={cx + Math.cos(rad) * dist}
              cy={cy + Math.sin(rad) * dist}
              rx={radii[li] * 0.38}
              ry={radii[li] * 0.55}
              fill={colors[li]}
              opacity={0.82 - li * 0.06}
              transform={`rotate(${angle + 90}, ${cx + Math.cos(rad) * dist}, ${cy + Math.sin(rad) * dist})`}
            />
          )
        })
      )}
      <circle cx={cx} cy={cy} r={r * 0.2} fill="#f76dab" opacity={0.75} />
    </motion.g>
  )
}

// ─────────────────────────────────────────────
// SVG Dahlia
// ─────────────────────────────────────────────
function Dahlia({ cx, cy, r = 26, color = '#FF8C5A', delay = 0 }: {
  cx: number; cy: number; r?: number; color?: string; delay?: number
}) {
  const layers = [14, 10, 7]
  const radii = [r, r * 0.65, r * 0.38]
  return (
    <motion.g
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.85, ease: 'easeOut' }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    >
      {layers.map((count, li) =>
        Array.from({ length: count }).map((_, i) => {
          const angle = (i / count) * 360 + li * 13
          const rad = (angle * Math.PI) / 180
          const dist = radii[li] * 0.55
          const fill = li === 0 ? color : li === 1 ? '#FFB347' : '#FFD580'
          return (
            <ellipse
              key={`${li}-${i}`}
              cx={cx + Math.cos(rad) * dist}
              cy={cy + Math.sin(rad) * dist}
              rx={radii[li] * 0.28}
              ry={radii[li] * 0.52}
              fill={fill}
              opacity={0.88 - li * 0.05}
              transform={`rotate(${angle + 90}, ${cx + Math.cos(rad) * dist}, ${cy + Math.sin(rad) * dist})`}
            />
          )
        })
      )}
      <circle cx={cx} cy={cy} r={r * 0.13} fill="#b55a00" opacity={0.7} />
    </motion.g>
  )
}

// ─────────────────────────────────────────────
// SVG Orchid
// ─────────────────────────────────────────────
function Orchid({ cx, cy, r = 22, color = '#C47FE8', delay = 0 }: {
  cx: number; cy: number; r?: number; color?: string; delay?: number
}) {
  return (
    <motion.g
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.9, ease: 'easeOut' }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    >
      {[[-90], [30], [150]].map(([angle], i) => {
        const rad = (angle * Math.PI) / 180
        return (
          <ellipse
            key={i}
            cx={cx + Math.cos(rad) * r * 0.65}
            cy={cy + Math.sin(rad) * r * 0.65}
            rx={r * 0.28}
            ry={r * 0.52}
            fill={color}
            opacity={0.78}
            transform={`rotate(${angle + 90}, ${cx + Math.cos(rad) * r * 0.65}, ${cy + Math.sin(rad) * r * 0.65})`}
          />
        )
      })}
      {[[-30], [210]].map(([angle], i) => {
        const rad = (angle * Math.PI) / 180
        return (
          <ellipse
            key={`lp-${i}`}
            cx={cx + Math.cos(rad) * r * 0.52}
            cy={cy + Math.sin(rad) * r * 0.52}
            rx={r * 0.38}
            ry={r * 0.24}
            fill={color}
            opacity={0.88}
            transform={`rotate(${angle + 5}, ${cx + Math.cos(rad) * r * 0.52}, ${cy + Math.sin(rad) * r * 0.52})`}
          />
        )
      })}
      <ellipse cx={cx} cy={cy + r * 0.22} rx={r * 0.32} ry={r * 0.38} fill="#f0c6ff" opacity={0.95} />
      <circle cx={cx} cy={cy + r * 0.06} r={r * 0.11} fill="#8e3db5" opacity={0.7} />
    </motion.g>
  )
}

// ─────────────────────────────────────────────
// SVG Tulip
// ─────────────────────────────────────────────
function Tulip({ cx, cy, r = 20, color = '#F4507A', delay = 0 }: {
  cx: number; cy: number; r?: number; color?: string; delay?: number
}) {
  return (
    <motion.g
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.85, ease: 'easeOut' }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    >
      {[[-35, 0], [0, -r * 0.95], [35, 0]].map(([rx2, dy], i) => (
        <ellipse
          key={i}
          cx={cx + (i === 0 ? -r * 0.55 : i === 2 ? r * 0.55 : 0)}
          cy={cy + dy + (i === 1 ? 0 : r * 0.15)}
          rx={r * 0.46}
          ry={r * 0.7}
          fill={color}
          opacity={0.88}
          transform={`rotate(${rx2}, ${cx + (i === 0 ? -r * 0.55 : i === 2 ? r * 0.55 : 0)}, ${cy + dy + (i === 1 ? 0 : r * 0.15)})`}
        />
      ))}
      <ellipse cx={cx} cy={cy - r * 0.38} rx={r * 0.25} ry={r * 0.45} fill="#ffd0de" opacity={0.65} />
      <line x1={cx} y1={cy + r * 0.55} x2={cx} y2={cy + r * 1.5} stroke="#6aad6e" strokeWidth={2} opacity={0.55} />
    </motion.g>
  )
}

// ─────────────────────────────────────────────
// Radiant glow orb
// ─────────────────────────────────────────────
function GlowOrb({
  x, y, color, size, delay,
}: { x: string; y: string; color: string; size: number; delay: number }) {
  return (
    <motion.div
      className="pointer-events-none absolute rounded-full"
      style={{ left: x, top: y, width: size, height: size, background: color, filter: 'blur(55px)', transform: 'translate(-50%, -50%)' }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: [0, 0.55, 0.45, 0.55], scale: [0.6, 1, 1.08, 1] }}
      transition={{ delay, duration: 5, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
    />
  )
}

// ─────────────────────────────────────────────
// Flower arrange scene (full-width SVG layer)
// ─────────────────────────────────────────────
function FlowerScene() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none">
        {/* ── Left bouquet cluster ── */}
        <path d="M100,900 C110,750 85,650 120,520" stroke="#6aad6e" strokeWidth="2" opacity="0.45" />
        <path d="M140,900 C148,760 130,670 155,545" stroke="#6aad6e" strokeWidth="2" opacity="0.4" />
        <path d="M75,900 C80,780 65,690 90,580" stroke="#6aad6e" strokeWidth="1.5" opacity="0.35" />
        <Peony cx={120} cy={510} r={36} color="#F9B8D0" delay={0.4} />
        <Rose cx={65} cy={570} r={26} color="#E8647A" delay={0.6} />
        <Tulip cx={160} cy={535} r={22} color="#FF6699" delay={0.8} />
        <Dahlia cx={95} cy={490} r={20} color="#FFB347" delay={1.0} />
        <ellipse cx={108} cy={600} rx={18} ry={9} fill="#7DC87D" opacity={0.5} transform="rotate(-30, 108, 600)" />
        <ellipse cx={148} cy={620} rx={15} ry={7} fill="#7DC87D" opacity={0.45} transform="rotate(25, 148, 620)" />

        {/* ── Right bouquet cluster ── */}
        <path d="M1340,900 C1330,750 1355,650 1320,520" stroke="#6aad6e" strokeWidth="2" opacity="0.45" />
        <path d="M1300,900 C1292,760 1310,670 1285,545" stroke="#6aad6e" strokeWidth="2" opacity="0.4" />
        <path d="M1365,900 C1360,780 1375,690 1350,580" stroke="#6aad6e" strokeWidth="1.5" opacity="0.35" />
        <Orchid cx={1320} cy={510} r={34} color="#C47FE8" delay={0.5} />
        <Peony cx={1375} cy={565} r={28} color="#FFB3D1" delay={0.7} />
        <Rose cx={1285} cy={545} r={24} color="#E83464" delay={0.9} />
        <Tulip cx={1345} cy={490} r={20} color="#9B59B6" delay={1.1} />
        <ellipse cx={1333} cy={610} rx={18} ry={8} fill="#7DC87D" opacity={0.5} transform="rotate(20, 1333, 610)" />
        <ellipse cx={1295} cy={635} rx={14} ry={7} fill="#7DC87D" opacity={0.45} transform="rotate(-25, 1295, 635)" />

        {/* ── Top-left accent ── */}
        <Orchid cx={60} cy={80} r={20} color="#D4A0FF" delay={1.2} />
        <Rose cx={110} cy={55} r={16} color="#FF8FAB" delay={1.4} />
        <ellipse cx={80} cy={120} rx={12} ry={6} fill="#7DC87D" opacity={0.45} transform="rotate(-15, 80, 120)" />

        {/* ── Top-right accent ── */}
        <Dahlia cx={1380} cy={75} r={22} color="#FF8C5A" delay={1.2} />
        <Tulip cx={1330} cy={60} r={17} color="#FF6B9D" delay={1.5} />
        <ellipse cx={1355} cy={115} rx={12} ry={6} fill="#7DC87D" opacity={0.45} transform="rotate(20, 1355, 115)" />

        {/* ── Bottom center scattered ── */}
        <Rose cx={680} cy={855} r={18} color="#E8647A" delay={1.3} />
        <Peony cx={750} cy={845} r={20} color="#FFB8D4" delay={1.5} />
        <Tulip cx={710} cy={870} r={14} color="#C56BFF" delay={1.7} />

        {/* ── Mid-left floater ── */}
        <Dahlia cx={30} cy={400} r={18} color="#FFAA60" delay={1.6} />

        {/* ── Mid-right floater ── */}
        <Orchid cx={1410} cy={390} r={19} color="#BB7EF8" delay={1.7} />
      </svg>
    </div>
  )
}

// ─────────────────────────────────────────────
// Daisy SVG Button — no disc, pure white petals
// ─────────────────────────────────────────────
function DaisySVGButton({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false)

  const PETAL_COUNT = 22
  const PETAL_RX = 7.5   // broad, real-daisy width
  const PETAL_RY = 20    // length
  // Petals originate from the very centre — they all meet at (0,0)
  const PETAL_CY = -(PETAL_RY + 1)  // ellipse center along the up-axis

  return (
    <motion.button
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex flex-col items-center gap-5 bg-transparent border-none cursor-pointer"
      style={{ outline: 'none' }}
    >

      {/* ── Layer 1: soft blush shadow pool beneath the flower ── */}
      {/* This is what makes a white flower visible — a warm coloured shadow below it */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 100, height: 28,
          bottom: 42, left: 10,
          background: 'radial-gradient(ellipse, rgba(200,150,180,0.32) 0%, transparent 70%)',
          filter: 'blur(8px)',
        }}
        animate={{ opacity: hovered ? 0.55 : 0.38, scaleX: hovered ? 1.1 : 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* ── Layer 2: dreamy blush-pink glow halo behind the whole flower ── */}
      {/* Gives the petals something to contrast against — like light through petals */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 200, height: 200,
          top: -40, left: -40,
          background: 'radial-gradient(circle, rgba(255,220,230,0.55) 0%, rgba(255,190,210,0.3) 35%, rgba(255,160,200,0.08) 65%, transparent 80%)',
          filter: 'blur(18px)',
        }}
        animate={{ scale: hovered ? 1.2 : 1, opacity: hovered ? 0.9 : 0.7 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      />

      {/* ── Daisy SVG ── */}
      <motion.svg
        width="120" height="130"
        viewBox="-60 -58 120 130"
        animate={{ rotate: hovered ? 14 : 0 }}
        transition={{ duration: 1.6, ease: 'easeInOut' }}
      >
        <defs>
          {/*
            Per-petal gradient: pure white at tip fading to a very soft
            blush-pink at the base where petals converge at center.
            This gives each petal definition and makes the centre feel
            lush without any disc shape.
          */}
          {Array.from({ length: PETAL_COUNT }).map((_, i) => {
            const angle = i * (360 / PETAL_COUNT)
            const rad = (angle * Math.PI) / 180
            // Tip = outermost point of ellipse
            const tx = Math.sin(rad) * (PETAL_RY * 2 + 2)
            const ty = -Math.cos(rad) * (PETAL_RY * 2 + 2)
            // Base = centre of flower
            const bx = 0
            const by = 0
            return (
              <linearGradient
                key={i}
                id={`pg${i}`}
                gradientUnits="userSpaceOnUse"
                x1={tx} y1={ty}
                x2={bx} y2={by}
              >
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" /> {/* tip: pure white */}
                <stop offset="50%" stopColor="#FEFEFF" stopOpacity="1" /> {/* mid: white */}
                <stop offset="82%" stopColor="#FFF0F4" stopOpacity="1" /> {/* near base: blush tint */}
                <stop offset="100%" stopColor="#FADADD" stopOpacity="0.9" /> {/* base: soft rose */}
              </linearGradient>
            )
          })}

          {/*
            Centre glow: no disc shape — just a soft radial blush
            that bleeds outward, making the petal convergence feel
            warm and luminous rather than empty.
          */}
          <radialGradient id="centreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD6E0" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#FFCCD8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFB8CC" stopOpacity="0" />
          </radialGradient>

          {/* Per-petal shadow: each petal casts a gentle shadow on its neighbours */}
          <filter id="ps" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="1.2" stdDeviation="1.8"
              floodColor="#C08090" floodOpacity="0.2" />
          </filter>

          {/* Whole-flower lift shadow */}
          <filter id="fs" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="5" stdDeviation="7"
              floodColor="#C06080" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* Whole-flower shadow group */}
        <g style={{ filter: 'url(#fs)' }}>

          {/* ── Back petal layer (offset by half step, slightly smaller) ── */}
          {Array.from({ length: PETAL_COUNT }).map((_, i) => {
            const angle = i * (360 / PETAL_COUNT) + (360 / PETAL_COUNT / 2)
            return (
              <g key={`b${i}`} transform={`rotate(${angle})`}>
                <ellipse
                  cx={0} cy={PETAL_CY}
                  rx={PETAL_RX * 0.78}
                  ry={PETAL_RY * 0.9}
                  fill="#F8E8EE"
                  opacity={0.5}
                />
              </g>
            )
          })}

          {/* ── Front petal layer ── */}
          {Array.from({ length: PETAL_COUNT }).map((_, i) => {
            const angle = i * (360 / PETAL_COUNT)
            return (
              <g key={i} transform={`rotate(${angle})`} style={{ filter: 'url(#ps)' }}>
                <motion.ellipse
                  cx={0}
                  cy={PETAL_CY}
                  rx={PETAL_RX}
                  ry={PETAL_RY}
                  fill={`url(#pg${i})`}
                  stroke="rgba(200,160,180,0.2)"
                  strokeWidth="0.25"
                  animate={{
                    ry: hovered ? PETAL_RY * 1.08 : PETAL_RY,
                    opacity: hovered ? 1 : 0.96,
                  }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.008 }}
                />
              </g>
            )
          })}

          {/* ── Centre glow — replaces disc, blends petal bases elegantly ── */}
          <motion.circle
            cx={0} cy={0}
            fill="url(#centreGlow)"
            animate={{ r: hovered ? 18 : 15 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />

        </g>{/* end flower shadow group */}

        {/* ── Stem ── */}
        <path
          d="M0,44 C0.5,52 -1.5,60 0,68"
          stroke="#8ac870"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.75"
          fill="none"
        />
        {/* Leaf */}
        <ellipse cx={-6} cy={58} rx={8} ry={3.2}
          fill="#8ac870" opacity={0.65}
          transform="rotate(-38,-6,58)" />
      </motion.svg>

      {/* BEGIN label */}
      <motion.span
        className="font-sans text-xs font-semibold"
        style={{ letterSpacing: '0.38em', color: '#7C3D55', textTransform: 'uppercase' }}
        animate={{ opacity: hovered ? 1 : 0.7, y: hovered ? 3 : 0 }}
        transition={{ duration: 0.3 }}
      >
        Begin
      </motion.span>
    </motion.button>
  )
}

// ─────────────────────────────────────────────
// Floating petals config
// ─────────────────────────────────────────────
const PETALS = [
  { color: '#F4A0C0', size: 14, startX: 10, startY: 75, duration: 9, delay: 0.5, shape: 'round' as const },
  { color: '#FFB347', size: 10, startX: 22, startY: 80, duration: 11, delay: 2.0, shape: 'ellipse' as const },
  { color: '#C47FE8', size: 12, startX: 85, startY: 78, duration: 10, delay: 1.2, shape: 'fan' as const },
  { color: '#E8647A', size: 9, startX: 73, startY: 82, duration: 8, delay: 3.1, shape: 'round' as const },
  { color: '#FFD1DC', size: 13, startX: 40, startY: 88, duration: 12, delay: 0.8, shape: 'ellipse' as const },
  { color: '#A0C8FF', size: 10, startX: 58, startY: 85, duration: 9, delay: 4.0, shape: 'round' as const },
  { color: '#F9B8D0', size: 11, startX: 92, startY: 70, duration: 10, delay: 1.8, shape: 'fan' as const },
  { color: '#FFB3D1', size: 8, startX: 5, startY: 65, duration: 13, delay: 2.5, shape: 'ellipse' as const },
  { color: '#D4A0FF', size: 13, startX: 65, startY: 90, duration: 11, delay: 0.3, shape: 'round' as const },
  { color: '#FFCBA4', size: 9, startX: 48, startY: 83, duration: 9, delay: 5.0, shape: 'fan' as const },
  { color: '#F4507A', size: 11, startX: 30, startY: 77, duration: 10, delay: 1.5, shape: 'round' as const },
  { color: '#E8C547', size: 10, startX: 78, startY: 86, duration: 8, delay: 3.5, shape: 'ellipse' as const },
]

// ─────────────────────────────────────────────
// Main HeroStage
// ─────────────────────────────────────────────
export default function HeroStage({ onBegin }: { onBegin: () => void }) {
  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #FFF0F5 0%, #FFF8EC 30%, #F0F8FF 60%, #F8F0FF 100%)',
      }}
    >
      {/* ── Radiant background glows ── */}
      <GlowOrb x="15%" y="25%" color="radial-gradient(circle, rgba(248,120,170,0.38) 0%, transparent 70%)" size={420} delay={0} />
      <GlowOrb x="82%" y="20%" color="radial-gradient(circle, rgba(180,110,240,0.32) 0%, transparent 70%)" size={380} delay={0.8} />
      <GlowOrb x="50%" y="80%" color="radial-gradient(circle, rgba(255,190,100,0.28) 0%, transparent 70%)" size={500} delay={1.4} />
      <GlowOrb x="75%" y="60%" color="radial-gradient(circle, rgba(100,200,230,0.2) 0%, transparent 70%)" size={300} delay={2.0} />
      <GlowOrb x="25%" y="65%" color="radial-gradient(circle, rgba(255,150,120,0.22) 0%, transparent 70%)" size={280} delay={2.5} />

      {/* ── Flower scene ── */}
      <FlowerScene />

      {/* ── Floating petals ── */}
      {PETALS.map((p, i) => (
        <FloatingPetal key={i} {...p} />
      ))}

      {/* ── Decorative top line ── */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.3 }}
        className="mb-10"
        style={{
          width: '1px',
          height: '70px',
          background: 'linear-gradient(to bottom, transparent, #D4689A, transparent)',
          opacity: 0.5,
        }}
      />

      {/* ── Small flower row above title ── */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="mb-6 flex gap-5 items-center"
      >
        <svg width="28" height="28" viewBox="-14 -14 28 28"><Rose cx={0} cy={0} r={12} color="#E8647A" delay={0.6} /></svg>
        <svg width="22" height="22" viewBox="-11 -11 22 22"><Orchid cx={0} cy={0} r={10} color="#C47FE8" delay={0.7} /></svg>
        <svg width="26" height="26" viewBox="-13 -13 26 26"><Peony cx={0} cy={0} r={12} color="#F4A0C0" delay={0.8} /></svg>
        <svg width="22" height="22" viewBox="-11 -11 22 22"><Dahlia cx={0} cy={0} r={10} color="#FF8C5A" delay={0.9} /></svg>
        <svg width="24" height="24" viewBox="-12 -12 24 24"><Tulip cx={0} cy={0} r={11} color="#F4507A" delay={1.0} /></svg>
      </motion.div>

      {/* ── Main title ── */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut', delay: 0.55 }}
        className="mb-4 text-center"
        style={{
          fontFamily: "'Cormorant Garamond', 'Cormorant', 'IM Fell English', Georgia, serif",
          fontSize: 'clamp(5rem, 14vw, 9rem)',
          fontWeight: 300,
          letterSpacing: '-0.01em',
          lineHeight: 1,
          fontStyle: 'italic',
          background: 'linear-gradient(135deg, #C0355A 0%, #9B2080 45%, #5E3DB3 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          filter: 'drop-shadow(0 2px 18px rgba(192,53,90,0.22))',
        }}
      >
        Daisy
      </motion.h1>

      {/* ── Subtitle ── */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.95 }}
        className="mb-5 font-sans text-center"
        style={{
          fontSize: '0.68rem',
          letterSpacing: '0.38em',
          color: '#9B5C80',
          opacity: 0.82,
          textTransform: 'uppercase',
        }}
      >
        A Digital Sanctuary
      </motion.p>

      {/* ── Thin separator with diamond ── */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="mb-14 flex items-center gap-3"
        style={{ color: '#D4689A', opacity: 0.55 }}
      >
        <div style={{ width: 64, height: 1, background: 'linear-gradient(to right, transparent, #D4689A)' }} />
        <span style={{ fontSize: '0.55rem' }}>✦</span>
        <div style={{ width: 64, height: 1, background: 'linear-gradient(to left, transparent, #D4689A)' }} />
      </motion.div>

      {/* ── Daisy Button ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.85, ease: 'easeOut', delay: 1.25 }}
      >
        <DaisySVGButton onClick={onBegin} />
      </motion.div>

      {/* ── Bottom accent line ── */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.4 }}
        className="mt-14"
        style={{
          width: '1px',
          height: '70px',
          background: 'linear-gradient(to bottom, transparent, #D4689A, transparent)',
          opacity: 0.45,
        }}
      />

      {/* ── Tagline / footer ── */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2, delay: 1.6 }}
        className="absolute bottom-10 font-sans text-center"
        style={{
          fontSize: '0.58rem',
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: '#9B5C80',
        }}
      >
        Artisan Bouquets · Crafted with Intention · For Every Petal Lover
      </motion.p>
    </div>
  )
}