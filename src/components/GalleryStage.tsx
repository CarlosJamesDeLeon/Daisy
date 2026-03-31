'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Heart, Sparkles } from 'lucide-react'

// ─────────────────────────────────────────────
// Inline SVG flower illustrations per template
// ─────────────────────────────────────────────

function IllustrationMorningLight() {
  return (
    <svg width="160" height="140" viewBox="0 0 160 140" fill="none">
      <path d="M80,138 C80,110 72,95 68,72" stroke="#8aac6e" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
      <path d="M80,138 C80,110 88,92 92,70" stroke="#8aac6e" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
      <path d="M80,138 C78,115 74,100 60,85" stroke="#8aac6e" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M80,138 C82,115 86,100 100,83" stroke="#8aac6e" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <ellipse cx="74" cy="100" rx="12" ry="5" fill="#9abe78" opacity="0.6" transform="rotate(-35,74,100)" />
      <ellipse cx="88" cy="98" rx="11" ry="5" fill="#9abe78" opacity="0.55" transform="rotate(30,88,98)" />
      {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((a, i) => (
        <ellipse key={i} cx={68 + Math.cos(a * Math.PI / 180) * 14} cy={68 + Math.sin(a * Math.PI / 180) * 14}
          rx="7" ry="4" fill="#FFFEF5" opacity="0.94"
          transform={`rotate(${a + 90},${68 + Math.cos(a * Math.PI / 180) * 14},${68 + Math.sin(a * Math.PI / 180) * 14})`} />
      ))}
      <circle cx="68" cy="68" r="7" fill="#F5E88A" />
      {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((a, i) => (
        <ellipse key={i} cx={98 + Math.cos(a * Math.PI / 180) * 12} cy={66 + Math.sin(a * Math.PI / 180) * 12}
          rx="5.5" ry="3.5" fill="#F5D96A" opacity="0.92"
          transform={`rotate(${a + 90},${98 + Math.cos(a * Math.PI / 180) * 12},${66 + Math.sin(a * Math.PI / 180) * 12})`} />
      ))}
      <circle cx="98" cy="66" r="6" fill="#E8A820" />
      {[0, 60, 120, 180, 240, 300].map((a, i) => (
        <ellipse key={i} cx={60 + Math.cos(a * Math.PI / 180) * 9} cy={86 + Math.sin(a * Math.PI / 180) * 9}
          rx="5" ry="3" fill="#FFFDE7" opacity="0.88"
          transform={`rotate(${a + 90},${60 + Math.cos(a * Math.PI / 180) * 9},${86 + Math.sin(a * Math.PI / 180) * 9})`} />
      ))}
      <circle cx="60" cy="86" r="4.5" fill="#E8C547" opacity="0.9" />
      {[[104, 80], [110, 70], [106, 90], [114, 84], [100, 74], [112, 78]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill="#FFFDE7" opacity="0.85" />
      ))}
    </svg>
  )
}

function IllustrationSoftestWhisper() {
  return (
    <svg width="160" height="140" viewBox="0 0 160 140" fill="none">
      <path d="M80,138 C80,115 74,100 70,78" stroke="#8aac6e" strokeWidth="1.8" strokeLinecap="round" opacity="0.65" />
      <path d="M80,138 C80,118 86,102 90,76" stroke="#8aac6e" strokeWidth="1.8" strokeLinecap="round" opacity="0.65" />
      <path d="M80,138 C78,118 64,105 58,88" stroke="#8aac6e" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
      <ellipse cx="74" cy="105" rx="13" ry="5" fill="#9abe78" opacity="0.55" transform="rotate(-30,74,105)" />
      <ellipse cx="86" cy="103" rx="12" ry="5" fill="#9abe78" opacity="0.5" transform="rotate(28,86,103)" />
      {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((a, i) => (
        <ellipse key={i} cx={70 + Math.cos(a * Math.PI / 180) * 17} cy={74 + Math.sin(a * Math.PI / 180) * 17}
          rx="9" ry="6" fill={i % 2 === 0 ? "#F9C4C4" : "#F7D5CC"} opacity="0.88"
          transform={`rotate(${a + 90},${70 + Math.cos(a * Math.PI / 180) * 17},${74 + Math.sin(a * Math.PI / 180) * 17})`} />
      ))}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
        <ellipse key={i} cx={70 + Math.cos(a * Math.PI / 180) * 10} cy={74 + Math.sin(a * Math.PI / 180) * 10}
          rx="6" ry="4" fill="#F5B8B8" opacity="0.78"
          transform={`rotate(${a + 90},${70 + Math.cos(a * Math.PI / 180) * 10},${74 + Math.sin(a * Math.PI / 180) * 10})`} />
      ))}
      <circle cx="70" cy="74" r="6" fill="#E8909A" opacity="0.8" />
      {[0, 51, 102, 153, 204, 255, 306].map((a, i) => (
        <ellipse key={i} cx={96 + Math.cos(a * Math.PI / 180) * 13} cy={72 + Math.sin(a * Math.PI / 180) * 13}
          rx="7" ry="4.5" fill={i < 3 ? "#FFF0EC" : "#F7D5CC"} opacity="0.9"
          transform={`rotate(${a + 90},${96 + Math.cos(a * Math.PI / 180) * 13},${72 + Math.sin(a * Math.PI / 180) * 13})`} />
      ))}
      {[0, 72, 144, 216, 288].map((a, i) => (
        <ellipse key={i} cx={96 + Math.cos(a * Math.PI / 180) * 7} cy={72 + Math.sin(a * Math.PI / 180) * 7}
          rx="5" ry="3.2" fill="#FDDDD5" opacity="0.8"
          transform={`rotate(${a + 90},${96 + Math.cos(a * Math.PI / 180) * 7},${72 + Math.sin(a * Math.PI / 180) * 7})`} />
      ))}
      <circle cx="96" cy="72" r="5" fill="#E8A898" opacity="0.85" />
      {[[56, 84], [52, 76], [60, 74], [54, 90]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="6" ry="4" fill="#F5C8D8" opacity="0.8" transform={`rotate(${i * 40},${x},${y})`} />
      ))}
    </svg>
  )
}

function IllustrationSerenePath() {
  return (
    <svg width="160" height="140" viewBox="0 0 160 140" fill="none">
      <path d="M80,138 C78,115 72,100 68,80" stroke="#5a8a6a" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
      <path d="M80,138 C82,118 90,100 94,78" stroke="#5a8a6a" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
      <path d="M80,138 C76,118 62,102 56,86" stroke="#5a8a6a" strokeWidth="1.6" strokeLinecap="round" opacity="0.65" />
      <path d="M80,138 C84,118 98,105 104,88" stroke="#5a8a6a" strokeWidth="1.6" strokeLinecap="round" opacity="0.65" />
      {[[68, 80], [68, 92], [68, 104], [94, 78], [94, 90], [94, 102]].map(([x, y], i) => (
        <g key={i}>
          <ellipse cx={x - 8} cy={y} rx="10" ry="5" fill="#7EB89A" opacity="0.75" transform={`rotate(-30,${x - 8},${y})`} />
          <ellipse cx={x + 8} cy={y} rx="10" ry="5" fill="#6AAE88" opacity="0.7" transform={`rotate(30,${x + 8},${y})`} />
        </g>
      ))}
      {[[68, 68], [94, 66], [56, 84], [104, 82]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={i < 2 ? 12 : 8} fill="#7EB8D4" opacity="0.3" />
          <circle cx={x} cy={y} r={i < 2 ? 9 : 6} fill="#5A9BCC" opacity="0.55" />
          {[0, 60, 120, 180, 240, 300].map((a, j) => (
            <line key={j} x1={x} y1={y} x2={x + Math.cos(a * Math.PI / 180) * (i < 2 ? 11 : 7)} y2={y + Math.sin(a * Math.PI / 180) * (i < 2 ? 11 : 7)}
              stroke="#4A8AC0" strokeWidth="1.2" opacity="0.6" />
          ))}
        </g>
      ))}
      {[[110, 94], [112, 82], [108, 102]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="9" ry="4" fill="#9BCC9A" opacity="0.65" transform={`rotate(${-20 + i * 15},${x},${y})`} />
      ))}
    </svg>
  )
}

function IllustrationAboutYou() {
  return (
    <svg width="160" height="140" viewBox="0 0 160 140" fill="none">
      <path d="M80,138 C80,115 74,100 72,78" stroke="#8a7ab8" strokeWidth="1.8" strokeLinecap="round" opacity="0.65" />
      <path d="M80,138 C80,118 88,102 90,76" stroke="#8a7ab8" strokeWidth="1.8" strokeLinecap="round" opacity="0.65" />
      <path d="M80,138 C76,115 60,100 56,82" stroke="#8a7ab8" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
      <path d="M80,138 C84,118 100,104 106,86" stroke="#8a7ab8" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
      {[[56, 82], [106, 86], [108, 74], [54, 72]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill="#C8C0D8" opacity="0.75" />
      ))}
      {[[72, 60], [72, 68], [72, 76], [90, 58], [90, 66], [90, 74]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="4" ry="2.5" fill="#C4A8E0" opacity="0.82" transform={`rotate(${i % 2 === 0 ? -10 : 10},${x},${y})`} />
      ))}
      {[0, 51, 102, 153, 204, 255, 306].map((a, i) => (
        <ellipse key={i} cx={70 + Math.cos(a * Math.PI / 180) * 14} cy={76 + Math.sin(a * Math.PI / 180) * 14}
          rx="7.5" ry="5" fill={i < 4 ? "#DCC8F8" : "#C8B0EE"} opacity="0.88"
          transform={`rotate(${a + 90},${70 + Math.cos(a * Math.PI / 180) * 14},${76 + Math.sin(a * Math.PI / 180) * 14})`} />
      ))}
      <circle cx="70" cy="76" r="7" fill="#4A3080" opacity="0.75" />
      {[0, 60, 120, 180, 240, 300].map((a, i) => (
        <circle key={i} cx={70 + Math.cos(a * Math.PI / 180) * 4} cy={76 + Math.sin(a * Math.PI / 180) * 4} r="1.2" fill="#D0C0F0" opacity="0.9" />
      ))}
      {[[90, 54], [90, 63], [90, 72], [96, 58], [96, 67], [84, 56], [84, 65]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="5" ry="3.5" fill="#B8A0D8" opacity="0.84" transform={`rotate(${i % 2 ? 15 : -15},${x},${y})`} />
      ))}
    </svg>
  )
}

function IllustrationIris() {
  return (
    <svg width="160" height="140" viewBox="0 0 160 140" fill="none">
      <path d="M80,138 C80,112 74,96 74,72" stroke="#6a4aaa" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <path d="M80,138 C80,115 90,98 92,74" stroke="#6a4aaa" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <path d="M80,138 C76,115 62,100 60,82" stroke="#6a4aaa" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
      {[[-30, 16], [90, 16], [210, 16]].map(([a, ry], i) => {
        const rad = (a * Math.PI) / 180
        return <ellipse key={i} cx={74 + Math.cos(rad) * 12} cy={68 + Math.sin(rad) * 12}
          rx="7" ry={ry} fill={i === 1 ? "#7A3ED8" : "#9B5CF6"} opacity="0.85"
          transform={`rotate(${a + 95},${74 + Math.cos(rad) * 12},${68 + Math.sin(rad) * 12})`} />
      })}
      {[[90, -14], [210, -14], [330, -14]].map(([a, ry], i) => {
        const rad = (a * Math.PI) / 180
        return <ellipse key={i} cx={74 + Math.cos(rad) * 10} cy={68 + Math.sin(rad) * 10}
          rx="5" ry="12" fill="#C49EFF" opacity="0.78"
          transform={`rotate(${a + 90},${74 + Math.cos(rad) * 10},${68 + Math.sin(rad) * 10})`} />
      })}
      <circle cx="74" cy="68" r="5" fill="#6D28D9" opacity="0.8" />
      {[0, 51, 102, 153, 204, 255, 306].map((a, i) => (
        <ellipse key={i} cx={96 + Math.cos(a * Math.PI / 180) * 11} cy={72 + Math.sin(a * Math.PI / 180) * 11}
          rx="6" ry="4" fill={i < 4 ? "#C084FC" : "#A855F7"} opacity="0.88"
          transform={`rotate(${a + 90},${96 + Math.cos(a * Math.PI / 180) * 11},${72 + Math.sin(a * Math.PI / 180) * 11})`} />
      ))}
      <circle cx="96" cy="72" r="5" fill="#7C3AED" opacity="0.8" />
      {[[60, 80], [56, 72], [60, 64], [64, 72], [52, 80], [68, 80]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="5.5" ry="4" fill="#5B21B6" opacity="0.75" transform={`rotate(${i * 25},${x},${y})`} />
      ))}
      <circle cx="105" cy="84" r="9" fill="rgba(139,92,246,0.15)" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a, i) => (
        <circle key={i} cx={105 + Math.cos(a * Math.PI / 180) * 8} cy={84 + Math.sin(a * Math.PI / 180) * 8} r="1.8" fill="#8B5CF6" opacity="0.7" />
      ))}
    </svg>
  )
}

const ILLUSTRATIONS: Record<string, React.ReactNode> = {
  'first-morning-light': <IllustrationMorningLight />,
  'softest-whisper': <IllustrationSoftestWhisper />,
  'serene-path': <IllustrationSerenePath />,
  'about-you': <IllustrationAboutYou />,
  'iris': <IllustrationIris />,
}

const bouquets = [
  {
    id: 'first-morning-light',
    name: 'First Morning Light',
    tagline: 'Whites · Yellows',
    mood: 'Gentle · Hopeful · Pure',
    recipe: ['White Ranunculus ×5', 'Butter Dahlia ×3', "Baby's Breath ×8", 'Lemon Leaf ×4'],
    emoji: '🌼',
    gradient: 'linear-gradient(155deg, #FFFDE7 0%, #FFF8C0 40%, #F5E880 100%)',
    accentColor: '#C8A020',
    textColor: '#6B5000',
    moodColor: '#F5E030',
  },
  {
    id: 'softest-whisper',
    name: 'Softest Whisper',
    tagline: 'Pinks · Creams',
    mood: 'Tender · Romantic · Soft',
    recipe: ['Blush Peony ×4', 'Cream Rose ×5', 'Sweet Pea ×6', 'Dusty Miller ×3'],
    emoji: '🌸',
    gradient: 'linear-gradient(155deg, #FFF0F5 0%, #FCDDE8 40%, #F4B8CC 100%)',
    accentColor: '#C05070',
    textColor: '#7A2040',
    moodColor: '#F4A0BE',
  },
  {
    id: 'serene-path',
    name: 'The Serene Path',
    tagline: 'Greens · Blues',
    mood: 'Calm · Meditative · Fresh',
    recipe: ['Eucalyptus ×6', 'Blue Thistle ×4', 'Scabiosa ×3', 'Sage Leaf ×8'],
    emoji: '🌿',
    gradient: 'linear-gradient(155deg, #EBF5EE 0%, #C5DDC8 40%, #7CB890 100%)',
    accentColor: '#3A7050',
    textColor: '#1E4D30',
    moodColor: '#5AA870',
  },
  {
    id: 'about-you',
    name: 'About You',
    tagline: 'Dreamy Purples · Silks',
    mood: 'Dreamy · Ethereal · Devoted',
    recipe: ['Lavender ×8', 'Lilac Delphinium ×4', 'Purple Anemone ×3', 'Silver Brunia ×5'],
    emoji: '💜',
    gradient: 'linear-gradient(155deg, #F5EFFF 0%, #DDD0F8 40%, #B89AE8 100%)',
    accentColor: '#7050C0',
    textColor: '#3D1E80',
    moodColor: '#A880E0',
  },
  {
    id: 'iris',
    name: 'Iris',
    tagline: 'Vibrant Purples · Violets',
    mood: 'Bold · Mystical · Alive',
    recipe: ['Purple Iris ×5', 'Violet Freesia ×4', 'Dark Hyacinth ×3', 'Allium ×2'],
    emoji: '🪻',
    gradient: 'linear-gradient(155deg, #EDD9FF 0%, #A87BE5 50%, #6A1EBF 100%)',
    accentColor: '#D4AAFF',
    textColor: '#F5EEFF',
    moodColor: '#E0C0FF',
  },
]

// ─────────────────────────────────────────────
// Decorative corner vine SVG
// ─────────────────────────────────────────────
function CornerVineTopLeft() {
  return (
    <svg width="220" height="220" viewBox="0 0 220 220" fill="none" className="pointer-events-none">
      <path d="M0,180 C20,140 10,80 60,50 C90,30 130,20 180,0" stroke="#b8d4a8" strokeWidth="1.2" opacity="0.5" fill="none" />
      <path d="M0,150 C30,120 20,60 70,35 C100,18 150,8 200,0" stroke="#c8ddb8" strokeWidth="0.8" opacity="0.35" fill="none" />
      {/* Small flowers along vine */}
      {[[30, 130], [60, 80], [100, 48], [150, 18]].map(([x, y], i) => (
        <g key={i}>
          {[0, 72, 144, 216, 288].map((a, j) => (
            <ellipse key={j}
              cx={x + Math.cos(a * Math.PI / 180) * 5} cy={y + Math.sin(a * Math.PI / 180) * 5}
              rx="3" ry="2"
              fill={['#F9C4C4', '#FFD4A0', '#DCC8F8', '#C4E8D0', '#F9C4C4'][i]}
              opacity="0.7"
              transform={`rotate(${a + 90},${x + Math.cos(a * Math.PI / 180) * 5},${y + Math.sin(a * Math.PI / 180) * 5})`}
            />
          ))}
          <circle cx={x} cy={y} r="2.5" fill={['#E8909A', '#E8A820', '#A880E0', '#5AA870', '#E8909A'][i]} opacity="0.75" />
        </g>
      ))}
      {/* Leaves */}
      {[[20, 155], [50, 105], [80, 65], [120, 35]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="8" ry="4" fill="#9abe78" opacity="0.45" transform={`rotate(${-40 + i * 10},${x},${y})`} />
      ))}
    </svg>
  )
}

function CornerVineTopRight() {
  return (
    <svg width="220" height="220" viewBox="0 0 220 220" fill="none" className="pointer-events-none" style={{ transform: 'scaleX(-1)' }}>
      <path d="M0,180 C20,140 10,80 60,50 C90,30 130,20 180,0" stroke="#c4b8e0" strokeWidth="1.2" opacity="0.45" fill="none" />
      <path d="M0,150 C30,120 20,60 70,35 C100,18 150,8 200,0" stroke="#d4c8f0" strokeWidth="0.8" opacity="0.3" fill="none" />
      {[[30, 130], [60, 80], [100, 48], [150, 18]].map(([x, y], i) => (
        <g key={i}>
          {[0, 72, 144, 216, 288].map((a, j) => (
            <ellipse key={j}
              cx={x + Math.cos(a * Math.PI / 180) * 5} cy={y + Math.sin(a * Math.PI / 180) * 5}
              rx="3" ry="2"
              fill={['#DCC8F8', '#F9C4C4', '#C4D8F8', '#F4C8E8', '#DCC8F8'][i]}
              opacity="0.7"
              transform={`rotate(${a + 90},${x + Math.cos(a * Math.PI / 180) * 5},${y + Math.sin(a * Math.PI / 180) * 5})`}
            />
          ))}
          <circle cx={x} cy={y} r="2.5" fill={['#A880E0', '#E8909A', '#6090D8', '#C060A0', '#A880E0'][i]} opacity="0.7" />
        </g>
      ))}
      {[[20, 155], [50, 105], [80, 65], [120, 35]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="8" ry="4" fill="#aabe88" opacity="0.4" transform={`rotate(${-40 + i * 10},${x},${y})`} />
      ))}
    </svg>
  )
}

// Scattered petals/dots for atmospheric texture
function ScatteredPetals() {
  const petals = [
    { x: '12%', y: '22%', color: '#F9B8D0', size: 8, rotate: 25, opacity: 0.4 },
    { x: '25%', y: '38%', color: '#FFD1A0', size: 6, rotate: -15, opacity: 0.3 },
    { x: '72%', y: '18%', color: '#C4A8F0', size: 9, rotate: 40, opacity: 0.35 },
    { x: '88%', y: '32%', color: '#F4A0C0', size: 7, rotate: -30, opacity: 0.4 },
    { x: '55%', y: '55%', color: '#A0D8B0', size: 6, rotate: 18, opacity: 0.25 },
    { x: '38%', y: '65%', color: '#FFB8D0', size: 8, rotate: -22, opacity: 0.3 },
    { x: '15%', y: '72%', color: '#D4C8F8', size: 7, rotate: 35, opacity: 0.35 },
    { x: '82%', y: '62%', color: '#F8D8A0', size: 6, rotate: -10, opacity: 0.3 },
    { x: '65%', y: '78%', color: '#F0C4D8', size: 9, rotate: 50, opacity: 0.25 },
    { x: '44%', y: '85%', color: '#B8D8F0', size: 7, rotate: -40, opacity: 0.3 },
    { x: '8%', y: '48%', color: '#F4C0C8', size: 5, rotate: 20, opacity: 0.35 },
    { x: '92%', y: '50%', color: '#C8F0D8', size: 6, rotate: -25, opacity: 0.28 },
    { x: '30%', y: '15%', color: '#F8E0A8', size: 5, rotate: 60, opacity: 0.32 },
    { x: '78%', y: '88%', color: '#D8C0F8', size: 8, rotate: -50, opacity: 0.28 },
  ]
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {petals.map((p, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: p.x, top: p.y,
            width: p.size, height: p.size * 0.6,
            background: p.color,
            borderRadius: '60% 40% 60% 40%',
            transform: `rotate(${p.rotate}deg)`,
            opacity: 0,
          }}
          animate={{
            opacity: [0, p.opacity, p.opacity * 0.8, 0],
            y: [0, -30, -60],
            rotate: [p.rotate, p.rotate + 20, p.rotate - 10],
          }}
          transition={{
            duration: 14 + i * 0.7,
            delay: i * 1.1,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 3 + i * 0.4,
          }}
        />
      ))}
    </div>
  )
}

// ─────────────────────────────────────────────
// BouquetCard — tall card with illustration
// ─────────────────────────────────────────────
function BouquetCard({
  bouquet,
  onSelect,
  index,
  isSmall = false,
}: {
  bouquet: any
  onSelect: () => void
  index: number
  isSmall?: boolean
}) {
  const [hovered, setHovered] = useState(false)
  const tc = bouquet.textColor || '#3A2A1A'
  const ac = bouquet.accentColor || '#888'

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: (index % 5) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onSelect}
      className="relative cursor-pointer overflow-hidden"
      style={{
        width: isSmall ? '200px' : '240px',
        height: isSmall ? '260px' : '360px',
        borderRadius: '28px',
        background: bouquet.gradient,
        boxShadow: hovered
          ? `0 28px 70px rgba(0,0,0,0.2), 0 0 0 1.5px ${ac}55, 0 0 40px ${ac}22`
          : `0 6px 30px rgba(0,0,0,0.1), 0 0 0 1px ${ac}22`,
        transition: 'box-shadow 0.4s ease, transform 0.4s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      {/* Inner glow ring on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-[28px]"
        style={{ boxShadow: `inset 0 0 0 1.5px ${ac}44` }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Shimmer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)` }}
        animate={{ x: hovered ? ['−100%', '200%'] : '0%' }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      />

      {/* Front face */}
      <motion.div
        className="absolute inset-0 flex flex-col"
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex-1 flex items-end justify-center pt-4">
          <motion.div
            animate={{ y: hovered ? -8 : 0, scale: hovered ? 1.04 : 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {isSmall
              ? <div style={{ fontSize: '3.5rem' }}>{bouquet.emoji}</div>
              : (ILLUSTRATIONS[bouquet.id] || <div style={{ fontSize: '4rem' }}>{bouquet.emoji}</div>)
            }
          </motion.div>
        </div>
        <div className="px-5 pb-6 pt-2">
          <div
            className="inline-flex mb-3 px-2.5 py-1 rounded-full"
            style={{ backgroundColor: `${ac}22`, border: `1px solid ${ac}44` }}
          >
            <span style={{ fontSize: '0.48rem', letterSpacing: '0.18em', color: tc, opacity: 0.9, textTransform: 'uppercase' }}>
              {bouquet.mood || bouquet.tagline || ''}
            </span>
          </div>
          <h3
            className="font-serif block"
            style={{ fontSize: isSmall ? '1.15rem' : '1.4rem', fontWeight: 400, fontStyle: 'italic', color: tc, lineHeight: 1.2 }}
          >
            {bouquet.name}
          </h3>
          {bouquet.tagline && (
            <p style={{ fontSize: '0.52rem', letterSpacing: '0.22em', color: tc, opacity: 0.7, textTransform: 'uppercase', marginTop: '4px' }}>
              {bouquet.tagline}
            </p>
          )}
        </div>
      </motion.div>

      {/* Hover overlay — recipe */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-between p-6"
        style={{ backdropFilter: 'blur(14px)', backgroundColor: 'rgba(255,252,248,0.94)', borderRadius: '28px' }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <p style={{ fontSize: '0.5rem', letterSpacing: '0.25em', color: '#8A6A50', opacity: 0.7, textTransform: 'uppercase', marginBottom: '8px' }}>
            ✦  Recipe
          </p>
          <h3 className="font-serif mb-4" style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#3A2010' }}>
            {bouquet.name}
          </h3>
          <ul className="space-y-2.5">
            {bouquet.recipe.map((r: string, i: number) => (
              <li key={i} className="flex items-center gap-2.5 font-sans" style={{ fontSize: '0.72rem', color: '#4A3020', opacity: 0.85 }}>
                <div className="rounded-full flex-shrink-0" style={{ width: '4px', height: '4px', backgroundColor: ac }} />
                {r}
              </li>
            ))}
          </ul>
        </div>
        <motion.button
          onClick={(e) => { e.stopPropagation(); onSelect() }}
          className="font-sans w-full py-3 rounded-2xl text-[0.62rem] tracking-[0.25em] uppercase font-medium"
          style={{ background: `linear-gradient(135deg, ${ac}, ${ac}88)`, color: '#fff', border: 'none', cursor: 'pointer' }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Compose in Studio
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────
// Section divider with botanical accent
// ─────────────────────────────────────────────
function BotanicalDivider({ color = '#D4689A' }: { color?: string }) {
  return (
    <div className="flex items-center justify-center gap-4 my-16" style={{ opacity: 0.4 }}>
      <div style={{ flex: 1, height: '1px', background: `linear-gradient(to right, transparent, ${color})` }} />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2" fill={color} />
        {[0, 60, 120, 180, 240, 300].map((a, i) => (
          <ellipse key={i}
            cx={12 + Math.cos(a * Math.PI / 180) * 7} cy={12 + Math.sin(a * Math.PI / 180) * 7}
            rx="3" ry="2" fill={color} opacity="0.7"
            transform={`rotate(${a + 90},${12 + Math.cos(a * Math.PI / 180) * 7},${12 + Math.sin(a * Math.PI / 180) * 7})`}
          />
        ))}
      </svg>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <ellipse cx="8" cy="8" rx="5" ry="3" fill={color} opacity="0.5" transform="rotate(45,8,8)" />
      </svg>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2" fill={color} />
        {[0, 60, 120, 180, 240, 300].map((a, i) => (
          <ellipse key={i}
            cx={12 + Math.cos(a * Math.PI / 180) * 7} cy={12 + Math.sin(a * Math.PI / 180) * 7}
            rx="3" ry="2" fill={color} opacity="0.7"
            transform={`rotate(${a + 90},${12 + Math.cos(a * Math.PI / 180) * 7},${12 + Math.sin(a * Math.PI / 180) * 7})`}
          />
        ))}
      </svg>
      <div style={{ flex: 1, height: '1px', background: `linear-gradient(to left, transparent, ${color})` }} />
    </div>
  )
}

// ─────────────────────────────────────────────
// Empty keepsakes garden illustration
// ─────────────────────────────────────────────
function EmptyGardenIllustration() {
  return (
    <svg width="320" height="180" viewBox="0 0 320 180" fill="none" className="opacity-60">
      {/* Ground line */}
      <path d="M20,155 Q160,145 300,155" stroke="#c8ddb8" strokeWidth="1.5" opacity="0.6" fill="none" />

      {/* Stem 1 - tall center */}
      <path d="M160,155 C160,130 155,110 158,85" stroke="#8aac6e" strokeWidth="1.8" strokeLinecap="round" />
      <ellipse cx="150" cy="118" rx="14" ry="5" fill="#9abe78" opacity="0.55" transform="rotate(-35,150,118)" />
      <ellipse cx="168" cy="112" rx="12" ry="5" fill="#9abe78" opacity="0.5" transform="rotate(28,168,112)" />
      {/* Bud top center - waiting to bloom */}
      <ellipse cx="158" cy="82" rx="6" ry="9" fill="#F9C4C4" opacity="0.7" />
      <ellipse cx="158" cy="82" rx="4" ry="7" fill="#F4A0BE" opacity="0.6" />
      <path d="M154,86 C152,82 156,78 158,76" stroke="#c8a8b8" strokeWidth="0.8" opacity="0.5" fill="none" />

      {/* Stem 2 - left */}
      <path d="M100,155 C98,135 92,118 88,95" stroke="#8aac6e" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
      <ellipse cx="94" cy="130" rx="11" ry="4" fill="#9abe78" opacity="0.5" transform="rotate(-30,94,130)" />
      {/* Small bud */}
      <ellipse cx="88" cy="91" rx="5" ry="7" fill="#DCC8F8" opacity="0.65" />
      <ellipse cx="88" cy="91" rx="3" ry="5" fill="#C8A8F0" opacity="0.55" />

      {/* Stem 3 - right */}
      <path d="M220,155 C222,132 228,115 230,92" stroke="#8aac6e" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
      <ellipse cx="224" cy="128" rx="11" ry="4" fill="#9abe78" opacity="0.5" transform="rotate(25,224,128)" />
      {/* Small bud */}
      <ellipse cx="230" cy="88" rx="5" ry="7" fill="#FFD4A0" opacity="0.65" />
      <ellipse cx="230" cy="88" rx="3" ry="5" fill="#FFBE80" opacity="0.55" />

      {/* Stem 4 - far left */}
      <path d="M55,155 C54,138 48,124 46,105" stroke="#8aac6e" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <ellipse cx="46" cy="102" rx="4" ry="6" fill="#B8E0C8" opacity="0.6" />

      {/* Stem 5 - far right */}
      <path d="M265,155 C266,138 272,122 274,103" stroke="#8aac6e" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <ellipse cx="274" cy="100" rx="4" ry="6" fill="#F8D0D8" opacity="0.6" />

      {/* Small scattered dots — seeds / fallen petals */}
      {[[60, 148], [80, 152], [140, 158], [180, 156], [240, 150], [290, 148], [120, 145], [200, 147]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2" fill={['#F9C4C4', '#DCC8F8', '#A0D8B0', '#FFD4A0', '#F0C4D8', '#B8D8F0', '#F9C4C4', '#DCC8F8'][i]} opacity="0.55" />
      ))}

      {/* Floating sparkle dots */}
      {[[135, 65], [178, 55], [108, 75], [210, 70], [155, 40]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.5" fill={['#C060A0', '#A880E0', '#E8A820', '#5AA870', '#C060A0'][i]} opacity="0.4" />
      ))}
    </svg>
  )
}

// ─────────────────────────────────────────────
// GalleryStage
// ─────────────────────────────────────────────
export default function GalleryStage({
  onBack,
  onBuild,
  savedBouquets = [],
}: {
  onBack: () => void
  onBuild: () => void
  savedBouquets?: any[]
}) {
  return (
    <div
      className="relative min-h-screen overflow-y-auto"
      style={{
        // Matching the entry page's soft multi-zone pastel gradient
        background: 'linear-gradient(160deg, #FFF5F0 0%, #FFF0F8 18%, #F8F0FF 38%, #F0F5FF 55%, #F0FFF8 72%, #FFF8F0 88%, #FFF5F5 100%)',
      }}
    >
      {/* ── Deep atmospheric glow orbs (layered, like entry page) ── */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        {/* Warm peachy top-left */}
        <div style={{ position: 'absolute', left: '-5%', top: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,200,180,0.22) 0%, transparent 65%)', filter: 'blur(60px)' }} />
        {/* Soft lavender top-right */}
        <div style={{ position: 'absolute', right: '-5%', top: '5%', width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,160,255,0.2) 0%, transparent 65%)', filter: 'blur(55px)' }} />
        {/* Blush mid-left */}
        <div style={{ position: 'absolute', left: '15%', top: '35%', width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,160,200,0.16) 0%, transparent 65%)', filter: 'blur(50px)' }} />
        {/* Mint mid-right */}
        <div style={{ position: 'absolute', right: '12%', top: '40%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(140,210,180,0.14) 0%, transparent 65%)', filter: 'blur(50px)' }} />
        {/* Golden yellow lower */}
        <div style={{ position: 'absolute', left: '40%', bottom: '15%', width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,220,120,0.15) 0%, transparent 65%)', filter: 'blur(55px)' }} />
        {/* Deep violet bottom-right */}
        <div style={{ position: 'absolute', right: '5%', bottom: '5%', width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, rgba(160,120,255,0.15) 0%, transparent 65%)', filter: 'blur(50px)' }} />
      </div>

      {/* ── Decorative botanical border corners ── */}
      <div className="pointer-events-none fixed top-0 left-0 z-10">
        <CornerVineTopLeft />
      </div>
      <div className="pointer-events-none fixed top-0 right-0 z-10">
        <CornerVineTopRight />
      </div>

      {/* ── Scattered floating petals ── */}
      <ScatteredPetals />

      {/* ── Decorative border frame (like entry page) ── */}
      <div
        className="pointer-events-none fixed inset-3 z-10 rounded-2xl"
        style={{ border: '1px solid rgba(200,140,170,0.12)' }}
      />

      {/* ── Sticky header ── */}
      <div
        className="sticky top-0 z-50 flex items-center justify-between px-10 py-5"
        style={{
          background: 'rgba(255,248,252,0.75)',
          backdropFilter: 'blur(22px)',
          WebkitBackdropFilter: 'blur(22px)',
          borderBottom: '1px solid rgba(200,150,180,0.15)',
        }}
      >
        {/* Back button */}
        <motion.button
          onClick={onBack}
          className="flex items-center gap-2 rounded-full px-4 py-2 font-sans cursor-pointer border-none"
          style={{ background: 'rgba(200,100,130,0.1)', color: '#9B3A5A', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500 }}
          whileHover={{ scale: 1.05, x: -2 }}
          whileTap={{ scale: 0.96 }}
        >
          <ArrowLeft size={13} />
          Back
        </motion.button>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          {/* Tiny top ornament */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <div style={{ width: 24, height: '1px', background: 'linear-gradient(to right, transparent, #D4689A55)' }} />
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#D4689A', opacity: 0.5 }} />
            <div style={{ width: 24, height: '1px', background: 'linear-gradient(to left, transparent, #D4689A55)' }} />
          </div>
          <h2
            className="font-serif italic"
            style={{ fontSize: '2rem', color: '#7C3D55', letterSpacing: '-0.01em', lineHeight: 1 }}
          >
            The Gallery
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '5px' }}>
            <div style={{ width: 40, height: '1px', background: 'linear-gradient(to right, transparent, #D4689A)' }} />
            <span style={{ fontSize: '0.42rem', letterSpacing: '0.3em', color: '#C4607A', opacity: 0.7, textTransform: 'uppercase' }}>Curated Collections</span>
            <div style={{ width: 40, height: '1px', background: 'linear-gradient(to left, transparent, #D4689A)' }} />
          </div>
        </motion.div>

        {/* Studio button */}
        <motion.button
          onClick={onBuild}
          className="flex items-center gap-2 rounded-full px-4 py-2 font-sans cursor-pointer border-none"
          style={{ background: 'rgba(100,80,200,0.1)', color: '#5A38B0', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500 }}
          whileHover={{ scale: 1.05, x: 2 }}
          whileTap={{ scale: 0.96 }}
        >
          Studio
          <ArrowRight size={13} />
        </motion.button>
      </div>

      {/* ── Hero intro band (new!) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="relative z-10 flex flex-col items-center pt-14 pb-4 px-8"
      >
        <p
          className="font-serif italic text-center"
          style={{ fontSize: '1.05rem', color: '#A06080', opacity: 0.7, letterSpacing: '0.04em', maxWidth: '420px', lineHeight: 1.7 }}
        >
          Each collection is a mood, a memory, a conversation in petals.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '16px', opacity: 0.4 }}>
          <div style={{ width: 60, height: '1px', background: 'linear-gradient(to right, transparent, #C060A0)' }} />
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="1.5" fill="#C060A0" />
            {[0, 90, 180, 270].map((a, i) => (
              <circle key={i} cx={6 + Math.cos(a * Math.PI / 180) * 4} cy={6 + Math.sin(a * Math.PI / 180) * 4} r="1" fill="#C060A0" opacity="0.6" />
            ))}
          </svg>
          <div style={{ width: 60, height: '1px', background: 'linear-gradient(to left, transparent, #C060A0)' }} />
        </div>
      </motion.div>

      <div className="relative z-10 px-8 pt-8 pb-32">

        {/* ── Signature Templates ── */}
        <section className="mb-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 flex items-end gap-4"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Sparkles size={13} style={{ color: '#C060A0' }} />
                <h3 className="font-sans font-semibold" style={{ fontSize: '0.58rem', letterSpacing: '0.38em', color: '#C060A0', textTransform: 'uppercase' }}>
                  Signature Templates
                </h3>
              </div>
              <p className="font-serif italic" style={{ fontSize: '1.7rem', color: '#7C3D55', lineHeight: 1.1 }}>
                Handcrafted bouquet collections
              </p>
              <p className="font-sans mt-2" style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: '#A06880', opacity: 0.65 }}>
                Five moods. Five stories. Each one waiting to become yours.
              </p>
            </div>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, rgba(200,100,160,0.3), transparent)', marginLeft: 16, marginBottom: 8 }} />
          </motion.div>

          {/* Cards */}
          <div className="flex flex-wrap gap-6 justify-center xl:justify-start">
            {bouquets.map((b, i) => (
              <BouquetCard key={b.id} bouquet={b} onSelect={onBuild} index={i} />
            ))}
          </div>
        </section>

        {/* ── Botanical divider ── */}
        <BotanicalDivider color="#C060A0" />

        {/* ── My Keepsakes ── */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 flex items-end gap-4"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Heart size={13} style={{ color: '#C060A0' }} />
                <h3 className="font-sans font-semibold" style={{ fontSize: '0.58rem', letterSpacing: '0.38em', color: '#C060A0', textTransform: 'uppercase' }}>
                  My Keepsakes
                </h3>
                <span className="font-sans" style={{ fontSize: '0.52rem', letterSpacing: '0.1em', color: '#C060A0', opacity: 0.55 }}>
                  — {savedBouquets.length} saved
                </span>
              </div>
              <p className="font-serif italic" style={{ fontSize: '1.7rem', color: '#7C3D55', lineHeight: 1.1 }}>
                Your personal garden
              </p>
              <p className="font-sans mt-2" style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: '#A06880', opacity: 0.65 }}>
                The bouquets you've composed and called your own.
              </p>
            </div>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, rgba(200,100,160,0.3), transparent)', marginLeft: 16, marginBottom: 8 }} />
          </motion.div>

          {savedBouquets.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center justify-center py-16 rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(160deg, rgba(255,240,248,0.7) 0%, rgba(248,240,255,0.7) 50%, rgba(240,248,255,0.7) 100%)',
                border: '1.5px solid rgba(200,140,180,0.2)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Background glow inside empty state */}
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 60%, rgba(255,160,200,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
                style={{ marginBottom: '20px', position: 'relative', zIndex: 1 }}
              >
                <EmptyGardenIllustration />
              </motion.div>

              <p className="font-serif italic relative z-10" style={{ fontSize: '1.3rem', color: '#9B5070', opacity: 0.8, marginBottom: '8px' }}>
                Your garden is waiting to grow.
              </p>
              <p className="font-sans relative z-10" style={{ fontSize: '0.56rem', letterSpacing: '0.25em', color: '#B07090', opacity: 0.5, textTransform: 'uppercase' }}>
                Save a bouquet from the Studio to begin
              </p>

              <motion.button
                onClick={onBuild}
                className="relative z-10 mt-10 font-sans px-8 py-3 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #E86090 0%, #B040A0 100%)',
                  color: '#fff',
                  fontSize: '0.6rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 8px 30px rgba(180,60,130,0.3)',
                }}
                whileHover={{ scale: 1.06, boxShadow: '0 12px 40px rgba(180,60,130,0.4)' }}
                whileTap={{ scale: 0.96 }}
              >
                Open Studio
              </motion.button>
            </motion.div>
          ) : (
            <div className="flex flex-wrap gap-6 justify-center xl:justify-start">
              {savedBouquets.map((b, i) => (
                <BouquetCard key={b.id} bouquet={b} onSelect={() => { }} index={i} isSmall />
              ))}
            </div>
          )}
        </section>
      </div>

      {/* ── Footer ── */}
      <div className="relative z-10 flex flex-col items-center pb-16">
        <div style={{ width: '1px', height: 60, background: 'linear-gradient(to bottom, transparent, rgba(192,96,160,0.4))', marginBottom: 12 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.35 }}>
          <div style={{ width: 30, height: '1px', background: 'linear-gradient(to right, transparent, #C060A0)' }} />
          <span className="font-serif italic" style={{ fontSize: '1.1rem', color: '#7C3D55' }}>Daisy</span>
          <div style={{ width: 30, height: '1px', background: 'linear-gradient(to left, transparent, #C060A0)' }} />
        </div>
        <p className="font-sans mt-2" style={{ fontSize: '0.42rem', letterSpacing: '0.3em', color: '#C060A0', opacity: 0.25, textTransform: 'uppercase' }}>
          Artisan Bouquets · Crafted with Intention
        </p>
      </div>
    </div>
  )
}