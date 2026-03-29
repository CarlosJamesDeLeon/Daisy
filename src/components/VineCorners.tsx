'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// ---------- tiny helpers ----------
/** A single hand-drawn 4-petal flower at (cx, cy) with given radius */
function TinyFlower({
  cx, cy, r = 4, delay = 0,
}: { cx: number; cy: number; r?: number; delay?: number }) {
  return (
    <motion.g
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    >
      {/* 4 petals — rosy pink */}
      {[0, 90, 180, 270].map((angle) => (
        <ellipse
          key={angle}
          cx={cx + Math.cos((angle * Math.PI) / 180) * r * 0.95}
          cy={cy + Math.sin((angle * Math.PI) / 180) * r * 0.95}
          rx={r * 0.75}
          ry={r * 0.45}
          fill="#F9B8D0"
          opacity={0.9}
          transform={`rotate(${angle}, ${cx + Math.cos((angle * Math.PI) / 180) * r * 0.95}, ${cy + Math.sin((angle * Math.PI) / 180) * r * 0.95})`}
        />
      ))}
      {/* warm rose-gold center */}
      <circle cx={cx} cy={cy} r={r * 0.42} fill="#E8647A" opacity={0.9} />
    </motion.g>
  )
}

/** A single leaf silhouette at a point along the vine */
function Leaf({
  x, y, angle, size = 10, delay = 0,
}: { x: number; y: number; angle: number; size?: number; delay?: number }) {
  return (
    <motion.ellipse
      cx={x}
      cy={y}
      rx={size}
      ry={size * 0.45}
      fill="#5DAA6A"
      opacity={0.55}
      transform={`rotate(${angle}, ${x}, ${y})`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.55 }}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
    />
  )
}

// -------- per-corner vine + parallax wrapper --------
function VineCorner({
  corner,
  mouseX,
  mouseY,
}: {
  corner: 'tl' | 'tr' | 'bl' | 'br'
  mouseX: ReturnType<typeof useMotionValue<number>>
  mouseY: ReturnType<typeof useMotionValue<number>>
}) {
  // Parallax: each corner tilts 10px toward cursor
  const flipX = corner === 'tr' || corner === 'br'
  const flipY = corner === 'bl' || corner === 'br'

  const tx = useTransform(mouseX, [-1, 1], flipX ? [8, -8] : [-8, 8])
  const ty = useTransform(mouseY, [-1, 1], flipY ? [8, -8] : [-8, 8])

  const springX = useSpring(tx, { stiffness: 60, damping: 20 })
  const springY = useSpring(ty, { stiffness: 60, damping: 20 })

  const sway = {
    animate: {
      rotate: [-2.5, 2.5, -2.5],
      transition: { duration: 8, ease: 'easeInOut' as const, repeat: Infinity },
    },
  }

  const svgStyle = {
    transform: [
      flipX ? 'scaleX(-1)' : '',
      flipY ? 'scaleY(-1)' : '',
    ]
      .filter(Boolean)
      .join(' ') || undefined,
  }

  const posClass = {
    tl: 'top-0 left-0 origin-top-left',
    tr: 'top-0 right-0 origin-top-right',
    bl: 'bottom-0 left-0 origin-bottom-left',
    br: 'bottom-0 right-0 origin-bottom-right',
  }[corner]

  return (
    <motion.div
      className={`absolute ${posClass}`}
      style={{ x: springX, y: springY }}
    >
      <motion.div variants={sway} animate="animate">
        {/* Entrance delay: vines appear 0.5s after everything else */}
        <motion.svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          style={svgStyle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          {/*
            Main vertical vine — tapered stroke via variable strokeWidth
            We simulate taper by stacking two paths with different widths
          */}
          {/* thick base */}
          <path
            d="M10,0 C18,30 8,55 22,90 C36,125 18,155 12,195 C8,220 14,250 6,280"
            stroke="#5DAA6A"
            strokeWidth="2.2"
            strokeLinecap="round"
            opacity="0.5"
          />
          {/* thinner overlay for taper feel */}
          <path
            d="M10,0 C18,30 8,55 22,90 C36,125 18,155 12,195 C8,220 14,250 6,280"
            stroke="#5DAA6A"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.28"
          />

          {/* Main horizontal vine */}
          <path
            d="M0,10 C35,18 65,8 105,22 C145,36 175,18 215,12 C240,8 268,14 295,6"
            stroke="#5DAA6A"
            strokeWidth="2.2"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M0,10 C35,18 65,8 105,22 C145,36 175,18 215,12 C240,8 268,14 295,6"
            stroke="#5DAA6A"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.28"
          />

          {/* Branch 1 — off vertical vine at ~y=90 */}
          <path
            d="M22,90 C35,80 52,82 65,72 C78,62 80,48 95,42"
            stroke="#5DAA6A"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.42"
          />

          {/* Branch 2 — off vertical vine at ~y=155 */}
          <path
            d="M12,155 C28,148 44,152 58,140"
            stroke="#5DAA6A"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.38"
          />

          {/* Branch 3 — off horizontal vine at ~x=105 */}
          <path
            d="M105,22 C100,38 108,54 96,68"
            stroke="#5DAA6A"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.38"
          />

          {/* ---- Leaves ---- */}
          <Leaf x={22} y={90} angle={-40} size={11} delay={0.6} />
          <Leaf x={65} y={72} angle={30} size={9} delay={0.7} />
          <Leaf x={95} y={42} angle={-55} size={8} delay={0.8} />
          <Leaf x={105} y={22} angle={60} size={10} delay={0.65} />
          <Leaf x={215} y={12} angle={-20} size={9} delay={0.75} />
          <Leaf x={12} y={195} angle={45} size={8} delay={0.85} />
          <Leaf x={58} y={140} angle={-35} size={7} delay={0.9} />
          <Leaf x={96} y={68} angle={50} size={7} delay={0.95} />

          {/* ---- Tiny 4-petal flowers ---- */}
          <TinyFlower cx={95} cy={42} r={5} delay={1.0} />
          <TinyFlower cx={65} cy={72} r={4.5} delay={1.1} />
          <TinyFlower cx={215} cy={12} r={5} delay={1.15} />
          <TinyFlower cx={12} cy={195} r={4} delay={1.2} />
          <TinyFlower cx={58} cy={140} r={4.5} delay={1.25} />
          <TinyFlower cx={96} cy={68} r={4} delay={1.3} />
        </motion.svg>
      </motion.div>
    </motion.div>
  )
}

// -------- Dappled light cursor glow --------
function DappledLight({
  mouseX,
  mouseY,
}: {
  mouseX: ReturnType<typeof useMotionValue<number>>
  mouseY: ReturnType<typeof useMotionValue<number>>
}) {
  const springX = useSpring(mouseX, { stiffness: 25, damping: 18 })
  const springY = useSpring(mouseY, { stiffness: 25, damping: 18 })

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[5]"
      style={{
        background: useTransform(
          [springX, springY],
          ([x, y]: number[]) =>
            `radial-gradient(600px circle at ${(x * 0.5 + 0.5) * 100}% ${(y * 0.5 + 0.5) * 100}%, rgba(255,210,230,0.14) 0%, transparent 65%)`
        ),
      }}
    />
  )
}

// -------- Main export --------
export default function VineCorners() {
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to -1..1
      rawX.set((e.clientX / window.innerWidth) * 2 - 1)
      rawY.set((e.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [rawX, rawY])

  return (
    <>
      {/* Dappled warm light that follows cursor */}
      <DappledLight mouseX={rawX} mouseY={rawY} />

      {/* Four corner vines */}
      <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
        <VineCorner corner="tl" mouseX={rawX} mouseY={rawY} />
        <VineCorner corner="tr" mouseX={rawX} mouseY={rawY} />
        <VineCorner corner="bl" mouseX={rawX} mouseY={rawY} />
        <VineCorner corner="br" mouseX={rawX} mouseY={rawY} />
      </div>
    </>
  )
}
