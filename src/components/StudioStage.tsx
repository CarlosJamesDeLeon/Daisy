'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Heart, CheckCircle2, Trash2, Sparkles } from 'lucide-react'

type ToolbarTab = 'wrappers' | 'flowers' | 'accents'

interface FlowerItem {
  id: string
  name: string
  emoji: string
  color: string
}

const catalogue: Record<ToolbarTab, FlowerItem[]> = {
  wrappers: [
    { id: 'kraft', name: 'Kraft Paper', emoji: '📜', color: '#C4A882' },
    { id: 'linen', name: 'Linen Wrap', emoji: '🤍', color: '#C8B8D8' },
    { id: 'silk', name: 'Silk Ribbon', emoji: '🎀', color: '#E8A4B8' },
    { id: 'moss', name: 'Moss Wrap', emoji: '🌿', color: '#7A9E7E' },
    { id: 'burlap', name: 'Burlap', emoji: '🟫', color: '#C09870' },
  ],
  flowers: [
    { id: 'peony', name: 'Peony', emoji: '🌸', color: '#F4A0C0' },
    { id: 'rose', name: 'Rose', emoji: '🌹', color: '#E05C7A' },
    { id: 'iris', name: 'Iris', emoji: '🪻', color: '#9B7FD4' },
    { id: 'daisy', name: 'Daisy', emoji: '🌼', color: '#E8C060' },
    { id: 'lily', name: 'Lily', emoji: '🌷', color: '#FF8C94' },
    { id: 'ranunculus', name: 'Ranunculus', emoji: '🌺', color: '#FE8A7A' },
    { id: 'dahlia', name: 'Dahlia', emoji: '💐', color: '#B090E0' },
  ],
  accents: [
    { id: 'eucalyptus', name: 'Eucalyptus', emoji: '🌿', color: '#6B9878' },
    { id: 'fern', name: 'Fern', emoji: '🌱', color: '#5A8A62' },
    { id: 'pampas', name: 'Pampas Grass', emoji: '🪶', color: '#C8B8A0' },
    { id: 'berries', name: 'Berries', emoji: '🫐', color: '#8878B8' },
    { id: 'babysbreath', name: "Baby's Breath", emoji: '☁️', color: '#C0A8D8' },
  ],
}

const tabLabels: Record<ToolbarTab, string> = {
  wrappers: 'Wrappers',
  flowers: 'Flowers',
  accents: 'Accents',
}

interface BouquetItem extends FlowerItem {
  x: number
  y: number
  rotation: number
  scale: number
  instanceId: string
}

// ─────────────────────────────────────────────
// Floating petal — same language as HeroStage
// ─────────────────────────────────────────────
function FloatingPetal({ color, size, x, y, delay, rotate }: {
  color: string; size: number; x: string; y: string; delay: number; rotate: number
}) {
  return (
    <motion.div
      className="pointer-events-none absolute"
      style={{
        left: x, top: y,
        width: size, height: size * 0.6,
        background: color,
        borderRadius: '60% 40% 60% 40%',
        transform: `rotate(${rotate}deg)`,
        opacity: 0,
      }}
      animate={{
        opacity: [0, 0.38, 0.32, 0],
        y: [0, -50, -110],
        rotate: [rotate, rotate + 22, rotate - 8],
      }}
      transition={{
        duration: 13 + delay,
        delay,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatDelay: 4 + delay * 0.5,
      }}
    />
  )
}

// ─────────────────────────────────────────────
// Botanical vine corner
// ─────────────────────────────────────────────
function VineCorner({ flip }: { flip?: boolean }) {
  return (
    <svg
      width="180" height="180" viewBox="0 0 180 180" fill="none"
      className="pointer-events-none"
      style={{ transform: flip ? 'scaleX(-1)' : 'none', opacity: 0.35 }}
    >
      <path d="M0,160 C18,120 10,65 50,38 C78,18 120,8 170,0" stroke="#c8a0c0" strokeWidth="1" opacity="0.6" fill="none" />
      <path d="M0,130 C22,100 16,52 58,28 C88,10 140,2 180,0" stroke="#d4b0cc" strokeWidth="0.7" opacity="0.4" fill="none" />
      {([[22, 112], [48, 68], [86, 38], [134, 14]] as [number, number][]).map(([x, y], i) => (
        <g key={i}>
          {[0, 72, 144, 216, 288].map((a, j) => (
            <ellipse key={j}
              cx={x + Math.cos(a * Math.PI / 180) * 5} cy={y + Math.sin(a * Math.PI / 180) * 5}
              rx="3" ry="2"
              fill={['#F9B8D0', '#DCC8F8', '#FFD4A0', '#F4C0D8'][i]}
              opacity="0.75"
              transform={`rotate(${a + 90},${x + Math.cos(a * Math.PI / 180) * 5},${y + Math.sin(a * Math.PI / 180) * 5})`}
            />
          ))}
          <circle cx={x} cy={y} r="2.2" fill={['#E8849A', '#A878E0', '#E8A820', '#C060A0'][i]} opacity="0.7" />
        </g>
      ))}
      {([[14, 138], [36, 96], [70, 56], [110, 26]] as [number, number][]).map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="9" ry="4" fill="#b0c8a0" opacity="0.5" transform={`rotate(${-38 + i * 8},${x},${y})`} />
      ))}
    </svg>
  )
}

// ─────────────────────────────────────────────
// Canvas empty state vase illustration
// ─────────────────────────────────────────────
function EmptyVase() {
  return (
    <svg width="110" height="130" viewBox="0 0 110 130" fill="none" opacity="0.28">
      <path d="M32,122 C22,122 16,112 16,100 L20,62 C20,56 26,50 34,50 L76,50 C84,50 90,56 90,62 L94,100 C94,112 88,122 78,122 Z"
        stroke="#C060A0" strokeWidth="1.2" fill="rgba(220,160,200,0.08)" />
      <path d="M38,50 C38,38 46,20 55,14 C64,20 72,38 72,50"
        stroke="#C060A0" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <line x1="16" y1="75" x2="94" y2="75" stroke="#C060A0" strokeWidth="0.6" opacity="0.4" />
      {([40, 55, 70] as number[]).map((x, i) => (
        <path key={i} d={`M${x},50 C${x + (i - 1) * 4},34 ${x + (i - 1) * 3},22 ${x + (i - 1) * 2},10`}
          stroke="#90b880" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      ))}
      {([[40, 10], [55, 6], [70, 10]] as [number, number][]).map(([x, y], i) => (
        <g key={i}>
          {[0, 60, 120, 180, 240, 300].map((a, j) => (
            <ellipse key={j}
              cx={x + Math.cos(a * Math.PI / 180) * 6} cy={y + Math.sin(a * Math.PI / 180) * 6}
              rx="4" ry="2.5"
              fill={['#F9C4D0', '#DCC8F8', '#FFD4A8'][i]}
              opacity="0.8"
              transform={`rotate(${a + 90},${x + Math.cos(a * Math.PI / 180) * 6},${y + Math.sin(a * Math.PI / 180) * 6})`}
            />
          ))}
          <circle cx={x} cy={y} r="2.5" fill={['#E8709A', '#9868D0', '#E8A820'][i]} opacity="0.7" />
        </g>
      ))}
      <ellipse cx="37" cy="35" rx="8" ry="3" fill="#90b880" opacity="0.5" transform="rotate(-40,37,35)" />
      <ellipse cx="68" cy="32" rx="7" ry="3" fill="#90b880" opacity="0.5" transform="rotate(35,68,32)" />
    </svg>
  )
}

// ─────────────────────────────────────────────
// Ornament divider — same as Gallery
// ─────────────────────────────────────────────
function Ornament({ color = '#D4689A' }: { color?: string }) {
  return (
    <div className="flex items-center gap-3" style={{ opacity: 0.45 }}>
      <div style={{ width: 40, height: 1, background: `linear-gradient(to right, transparent, ${color})` }} />
      <svg width="10" height="10" viewBox="0 0 10 10">
        <circle cx="5" cy="5" r="1.5" fill={color} />
        {[0, 90, 180, 270].map((a, i) => (
          <circle key={i} cx={5 + Math.cos(a * Math.PI / 180) * 3.5} cy={5 + Math.sin(a * Math.PI / 180) * 3.5} r="0.9" fill={color} opacity="0.6" />
        ))}
      </svg>
      <div style={{ width: 40, height: 1, background: `linear-gradient(to left, transparent, ${color})` }} />
    </div>
  )
}

// ─────────────────────────────────────────────
// Item pill
// ─────────────────────────────────────────────
function ItemPill({ item, onAdd, index }: { item: FlowerItem; onAdd: () => void; index: number }) {
  const [popped, setPopped] = useState(false)
  const handleClick = () => {
    onAdd()
    setPopped(true)
    setTimeout(() => setPopped(false), 400)
  }
  return (
    <motion.button
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
      onClick={handleClick}
      className="relative flex flex-col items-center gap-2 cursor-pointer border-none overflow-hidden"
      style={{
        background: `linear-gradient(150deg, ${item.color}18, ${item.color}08)`,
        border: `1px solid ${item.color}35`,
        borderRadius: '20px',
        padding: '14px 16px',
        minWidth: '80px',
      }}
      whileHover={{
        scale: 1.06, y: -3,
        background: `linear-gradient(150deg, ${item.color}30, ${item.color}14)`,
        borderColor: `${item.color}60`,
        boxShadow: `0 8px 24px ${item.color}28`,
      }}
      whileTap={{ scale: 0.93 }}
    >
      <AnimatePresence>
        {popped && (
          <motion.div className="absolute inset-0 rounded-[20px]"
            style={{ background: `${item.color}40` }}
            initial={{ opacity: 1, scale: 0.6 }}
            animate={{ opacity: 0, scale: 1.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </AnimatePresence>
      <motion.span
        style={{ fontSize: '1.75rem', lineHeight: 1 }}
        animate={{ rotate: popped ? [0, -12, 12, 0] : 0 }}
        transition={{ duration: 0.35 }}
      >
        {item.emoji}
      </motion.span>
      <span className="font-sans" style={{
        fontSize: '0.46rem', letterSpacing: '0.18em', textTransform: 'uppercase',
        color: '#9B5C80', opacity: 0.75, whiteSpace: 'nowrap',
      }}>
        {item.name}
      </span>
    </motion.button>
  )
}

// ─────────────────────────────────────────────
// StudioStage
// ─────────────────────────────────────────────
export default function StudioStage({
  onBack,
  onSave,
}: {
  onBack: () => void
  onSave?: (items: BouquetItem[]) => void
}) {
  const [activeTab, setActiveTab] = useState<ToolbarTab>('flowers')
  const [bouquet, setBouquet] = useState<BouquetItem[]>([])
  const [showSavedToast, setShowSaved] = useState(false)

  const addItem = (item: FlowerItem) => {
    const angle = Math.random() * Math.PI * 2
    const radius = Math.random() * 60 + 18
    setBouquet(prev => [...prev, {
      ...item,
      x: 50 + (Math.cos(angle) * radius) / 3.2,
      y: 46 + (Math.sin(angle) * radius) / 4.2,
      rotation: Math.random() * 50 - 25,
      scale: 0.85 + Math.random() * 0.35,
      instanceId: `${item.id}-${Date.now()}-${Math.random()}`,
    }])
  }

  const handleSave = () => {
    if (onSave && bouquet.length > 0) {
      onSave(bouquet)
      setShowSaved(true)
      setTimeout(() => setShowSaved(false), 3000)
    }
  }

  return (
    <div
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #FFF0F5 0%, #FFF8EC 28%, #F8F0FF 55%, #F0F8FF 78%, #FFF5F8 100%)',
      }}
    >
      {/* ── Background glow orbs — exact Hero/Gallery palette ── */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div style={{ position: 'absolute', left: '-4%', top: '-8%', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(248,120,170,0.2) 0%, transparent 65%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', right: '-4%', top: '10%', width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgba(180,110,240,0.18) 0%, transparent 65%)', filter: 'blur(55px)' }} />
        <div style={{ position: 'absolute', left: '30%', top: '35%', width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,160,200,0.14) 0%, transparent 65%)', filter: 'blur(55px)' }} />
        <div style={{ position: 'absolute', left: '10%', bottom: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,190,100,0.14) 0%, transparent 65%)', filter: 'blur(55px)' }} />
        <div style={{ position: 'absolute', right: '8%', bottom: '8%', width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(160,120,255,0.14) 0%, transparent 65%)', filter: 'blur(50px)' }} />
      </div>

      {/* ── Decorative frame border ── */}
      <div className="pointer-events-none fixed inset-3 z-10 rounded-2xl"
        style={{ border: '1px solid rgba(200,140,170,0.12)' }} />

      {/* ── Vine corners ── */}
      <div className="pointer-events-none fixed top-0 left-0 z-10"><VineCorner /></div>
      <div className="pointer-events-none fixed top-0 right-0 z-10"><VineCorner flip /></div>

      {/* ── Floating petals ── */}
      {[
        { color: '#F9B8D0', size: 10, x: '8%', y: '30%', delay: 0, rotate: 22 },
        { color: '#DCC8F8', size: 8, x: '88%', y: '25%', delay: 2.2, rotate: -18 },
        { color: '#FFD4A0', size: 9, x: '15%', y: '65%', delay: 1.4, rotate: 35 },
        { color: '#F4C0E8', size: 7, x: '82%', y: '60%', delay: 3.5, rotate: -30 },
        { color: '#A0D4F8', size: 8, x: '50%', y: '22%', delay: 4.8, rotate: 15 },
        { color: '#F9C4D0', size: 9, x: '72%', y: '72%', delay: 1.0, rotate: -42 },
        { color: '#C8E8A0', size: 7, x: '28%', y: '78%', delay: 5.5, rotate: 28 },
      ].map((p, i) => <FloatingPetal key={i} {...p} />)}

      {/* ── Toast ── */}
      <AnimatePresence>
        {showSavedToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className="fixed top-8 left-1/2 z-[100] flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(230,160,200,0.96), rgba(180,120,210,0.96))',
              boxShadow: '0 8px 32px rgba(180,80,160,0.3)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <CheckCircle2 size={14} style={{ color: '#fff0f8' }} />
            <span className="font-sans" style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#fff0f8' }}>
              Saved to Gallery
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-50 flex items-center justify-between px-10 py-5"
        style={{
          background: 'rgba(255,248,252,0.78)',
          backdropFilter: 'blur(22px)',
          WebkitBackdropFilter: 'blur(22px)',
          borderBottom: '1px solid rgba(200,150,180,0.15)',
        }}
      >
        <motion.button
          onClick={onBack}
          className="flex items-center gap-2 rounded-full px-4 py-2 border-none cursor-pointer font-sans"
          style={{ background: 'rgba(200,100,130,0.1)', color: '#9B3A5A', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500 }}
          whileHover={{ scale: 1.05, x: -2 }}
          whileTap={{ scale: 0.96 }}
        >
          <ArrowLeft size={13} /> Gallery
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <div style={{ width: 22, height: '1px', background: 'linear-gradient(to right, transparent, #D4689A55)' }} />
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#D4689A', opacity: 0.5 }} />
            <div style={{ width: 22, height: '1px', background: 'linear-gradient(to left, transparent, #D4689A55)' }} />
          </div>
          <h2 className="font-serif italic"
            style={{ fontSize: '2rem', color: '#7C3D55', letterSpacing: '-0.01em', lineHeight: 1 }}>
            The Studio
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '5px' }}>
            <div style={{ width: 36, height: '1px', background: 'linear-gradient(to right, transparent, #D4689A)' }} />
            <span style={{ fontSize: '0.4rem', letterSpacing: '0.32em', color: '#C4607A', opacity: 0.65, textTransform: 'uppercase' }}>Compose · Create</span>
            <div style={{ width: 36, height: '1px', background: 'linear-gradient(to left, transparent, #D4689A)' }} />
          </div>
        </motion.div>

        <div className="flex items-center gap-3">
          <motion.button
            onClick={handleSave}
            disabled={bouquet.length === 0}
            className="flex items-center gap-2 rounded-full px-4 py-2 border-none cursor-pointer disabled:opacity-25 font-sans"
            style={{ background: 'rgba(200,80,140,0.1)', color: '#9B3A5A', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500 }}
            whileHover={{ scale: bouquet.length > 0 ? 1.05 : 1 }}
            whileTap={{ scale: 0.96 }}
          >
            <Heart size={13} fill={bouquet.length > 0 ? 'rgba(180,60,120,0.15)' : 'none'} /> Save
          </motion.button>

          <motion.button
            onClick={() => setBouquet([])}
            className="flex items-center gap-1.5 rounded-full px-3 py-2 border-none cursor-pointer font-sans"
            style={{ background: 'rgba(160,100,120,0.07)', color: '#B07090', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}
            whileHover={{ scale: 1.05, color: '#9B3A5A' }}
            whileTap={{ scale: 0.96 }}
          >
            <Trash2 size={11} /> Clear
          </motion.button>
        </div>
      </motion.div>

      {/* ── Intro tagline ── */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.3 }}
        className="relative z-10 flex flex-col items-center pt-8 pb-2"
      >
        <p className="font-serif italic text-center"
          style={{ fontSize: '0.95rem', color: '#A06080', opacity: 0.65, letterSpacing: '0.04em', maxWidth: '360px', lineHeight: 1.75 }}>
          Every bouquet begins with a feeling.
        </p>
        <div style={{ marginTop: '12px' }}><Ornament /></div>
      </motion.div>

      {/* ── Canvas ── */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex-1 mx-8 mt-4 mb-5 overflow-hidden"
        style={{
          minHeight: '320px',
          borderRadius: '32px',
          background: 'linear-gradient(155deg, rgba(255,255,255,0.92) 0%, rgba(255,248,252,0.9) 40%, rgba(252,245,255,0.9) 70%, rgba(248,252,255,0.9) 100%)',
          border: '1px solid rgba(210,160,185,0.2)',
          boxShadow: '0 4px 40px rgba(180,100,150,0.1), inset 0 1px 0 rgba(255,255,255,0.95)',
          backdropFilter: 'blur(8px)',
        }}
      >
        {/* Inner vignette */}
        <div className="pointer-events-none absolute inset-0 rounded-[32px]"
          style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(200,140,170,0.07) 100%)' }} />

        {/* Canvas botanical corners */}
        {(['tl', 'tr', 'bl', 'br'] as const).map(pos => (
          <div key={pos} className="pointer-events-none absolute" style={{
            top: pos.startsWith('t') ? 10 : 'auto',
            bottom: pos.startsWith('b') ? 10 : 'auto',
            left: pos.endsWith('l') ? 10 : 'auto',
            right: pos.endsWith('r') ? 10 : 'auto',
          }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" opacity="0.3"
              style={{ transform: `${pos.endsWith('r') ? 'scaleX(-1)' : ''} ${pos.startsWith('b') ? 'scaleY(-1)' : ''}` }}>
              <path d="M2,42 C6,30 8,18 22,6" stroke="#C060A0" strokeWidth="0.8" strokeLinecap="round" />
              <ellipse cx="10" cy="28" rx="6" ry="2.5" fill="#C090B0" opacity="0.6" transform="rotate(-40,10,28)" />
              <ellipse cx="17" cy="17" rx="5" ry="2.2" fill="#C090B0" opacity="0.55" transform="rotate(-50,17,17)" />
              {[0, 72, 144, 216, 288].map((a, j) => (
                <ellipse key={j}
                  cx={22 + Math.cos(a * Math.PI / 180) * 4} cy={6 + Math.sin(a * Math.PI / 180) * 4}
                  rx="2.5" ry="1.5" fill="#E090C0" opacity="0.7"
                  transform={`rotate(${a + 90},${22 + Math.cos(a * Math.PI / 180) * 4},${6 + Math.sin(a * Math.PI / 180) * 4})`}
                />
              ))}
              <circle cx="22" cy="6" r="1.8" fill="#C060A0" opacity="0.65" />
            </svg>
          </div>
        ))}

        {/* Stem count badge */}
        <AnimatePresence>
          {bouquet.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(200,120,160,0.12)', border: '1px solid rgba(200,120,160,0.22)' }}
            >
              <Sparkles size={9} style={{ color: '#C060A0', opacity: 0.7 }} />
              <span style={{ fontSize: '0.46rem', letterSpacing: '0.18em', color: '#A04070', textTransform: 'uppercase' }}>
                {bouquet.length} {bouquet.length === 1 ? 'stem' : 'stems'}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty state */}
        {bouquet.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
          >
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}>
              <EmptyVase />
            </motion.div>
            <p className="font-serif italic" style={{ fontSize: '1.05rem', color: '#B07090', opacity: 0.65 }}>
              Begin composing your bouquet
            </p>
            <p className="font-sans" style={{ fontSize: '0.5rem', letterSpacing: '0.28em', color: '#C090A8', opacity: 0.45, textTransform: 'uppercase' }}>
              Select stems from below
            </p>
          </motion.div>
        )}

        {/* Placed items */}
        <AnimatePresence>
          {bouquet.map((item) => (
            <motion.div
              key={item.instanceId}
              className="absolute pointer-events-none select-none"
              style={{ left: `${item.x}%`, top: `${item.y}%`, transform: 'translate(-50%,-50%)' }}
              initial={{ scale: 0, opacity: 0, rotate: item.rotation - 25, y: -35 }}
              animate={{ scale: item.scale, opacity: 1, rotate: item.rotation, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: 15 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22, mass: 0.7 }}
            >
              <div style={{ filter: `drop-shadow(0 3px 10px ${item.color}55)` }}>
                <span style={{ fontSize: '2.8rem', display: 'block', lineHeight: 1 }}>{item.emoji}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ── Toolbar ── */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 mx-6 mb-7 overflow-hidden"
        style={{
          borderRadius: '28px',
          background: 'rgba(255,248,252,0.82)',
          border: '1px solid rgba(210,160,185,0.2)',
          boxShadow: '0 8px 48px rgba(180,100,150,0.12), inset 0 1px 0 rgba(255,255,255,0.85)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
      >
        {/* Top shimmer */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(220,150,190,0.5), transparent)' }} />

        {/* Tabs */}
        <div className="flex" style={{ borderBottom: '1px solid rgba(200,140,170,0.12)' }}>
          {(Object.keys(catalogue) as ToolbarTab[]).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className="relative flex-1 py-5 bg-transparent border-none cursor-pointer font-sans"
              style={{
                fontSize: '0.58rem', letterSpacing: '0.3em', textTransform: 'uppercase',
                color: activeTab === tab ? '#9B3A5A' : '#C0A0B0',
                transition: 'color 0.3s ease',
                fontWeight: activeTab === tab ? 500 : 400,
              }}
            >
              {tabLabels[tab]}
              {activeTab === tab && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0.2 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  exit={{ opacity: 0, scaleX: 0.2 }}
                  className="absolute bottom-0 left-1/4 right-1/4 h-px"
                  style={{ background: 'linear-gradient(to right, transparent, #D4689A, transparent)' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="px-6 py-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {catalogue[activeTab].map((item, i) => (
                <ItemPill key={item.id} item={item} onAdd={() => addItem(item)} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center pb-5 gap-2">
          <Ornament color="#C060A0" />
          <p className="font-sans" style={{ fontSize: '0.4rem', letterSpacing: '0.3em', color: '#C080A8', opacity: 0.4, textTransform: 'uppercase' }}>
            Artisan Bouquets · Crafted with Intention
          </p>
        </div>
      </motion.div>
    </div>
  )
}