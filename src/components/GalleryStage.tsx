'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Heart, Sparkles } from 'lucide-react'

// ─────────────────────────────────────────────
// Inline SVG flower illustrations per template
// ─────────────────────────────────────────────

function IllustrationMorningLight() {
  // White ranunculus + butter dahlias + baby's breath
  return (
    <svg width="160" height="140" viewBox="0 0 160 140" fill="none">
      {/* Stems */}
      <path d="M80,138 C80,110 72,95 68,72" stroke="#8aac6e" strokeWidth="1.8" strokeLinecap="round" opacity="0.7"/>
      <path d="M80,138 C80,110 88,92 92,70" stroke="#8aac6e" strokeWidth="1.8" strokeLinecap="round" opacity="0.7"/>
      <path d="M80,138 C78,115 74,100 60,85" stroke="#8aac6e" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <path d="M80,138 C82,115 86,100 100,83" stroke="#8aac6e" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      {/* Leaves */}
      <ellipse cx="74" cy="100" rx="12" ry="5" fill="#9abe78" opacity="0.6" transform="rotate(-35,74,100)"/>
      <ellipse cx="88" cy="98" rx="11" ry="5" fill="#9abe78" opacity="0.55" transform="rotate(30,88,98)"/>
      {/* White ranunculus center */}
      {[0,40,80,120,160,200,240,280,320].map((a,i)=>(
        <ellipse key={i} cx={68+Math.cos(a*Math.PI/180)*14} cy={68+Math.sin(a*Math.PI/180)*14}
          rx="7" ry="4" fill="#FFFEF5" opacity="0.94"
          transform={`rotate(${a+90},${68+Math.cos(a*Math.PI/180)*14},${68+Math.sin(a*Math.PI/180)*14})`}/>
      ))}
      <circle cx="68" cy="68" r="7" fill="#F5E88A"/>
      {/* Butter dahlia right */}
      {[0,36,72,108,144,180,216,252,288,324].map((a,i)=>(
        <ellipse key={i} cx={98+Math.cos(a*Math.PI/180)*12} cy={66+Math.sin(a*Math.PI/180)*12}
          rx="5.5" ry="3.5" fill="#F5D96A" opacity="0.92"
          transform={`rotate(${a+90},${98+Math.cos(a*Math.PI/180)*12},${66+Math.sin(a*Math.PI/180)*12})`}/>
      ))}
      <circle cx="98" cy="66" r="6" fill="#E8A820"/>
      {/* Small ranunculus */}
      {[0,60,120,180,240,300].map((a,i)=>(
        <ellipse key={i} cx={60+Math.cos(a*Math.PI/180)*9} cy={86+Math.sin(a*Math.PI/180)*9}
          rx="5" ry="3" fill="#FFFDE7" opacity="0.88"
          transform={`rotate(${a+90},${60+Math.cos(a*Math.PI/180)*9},${86+Math.sin(a*Math.PI/180)*9})`}/>
      ))}
      <circle cx="60" cy="86" r="4.5" fill="#E8C547" opacity="0.9"/>
      {/* Baby's breath dots */}
      {[[104,80],[110,70],[106,90],[114,84],[100,74],[112,78]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="2.5" fill="#FFFDE7" opacity="0.85"/>
      ))}
    </svg>
  )
}

function IllustrationSoftestWhisper() {
  // Blush peony + cream rose + sweet pea
  return (
    <svg width="160" height="140" viewBox="0 0 160 140" fill="none">
      {/* Stems */}
      <path d="M80,138 C80,115 74,100 70,78" stroke="#8aac6e" strokeWidth="1.8" strokeLinecap="round" opacity="0.65"/>
      <path d="M80,138 C80,118 86,102 90,76" stroke="#8aac6e" strokeWidth="1.8" strokeLinecap="round" opacity="0.65"/>
      <path d="M80,138 C78,118 64,105 58,88" stroke="#8aac6e" strokeWidth="1.5" strokeLinecap="round" opacity="0.55"/>
      {/* Leaves */}
      <ellipse cx="74" cy="105" rx="13" ry="5" fill="#9abe78" opacity="0.55" transform="rotate(-30,74,105)"/>
      <ellipse cx="86" cy="103" rx="12" ry="5" fill="#9abe78" opacity="0.5" transform="rotate(28,86,103)"/>
      {/* Big blush peony */}
      {[0,36,72,108,144,180,216,252,288,324].map((a,i)=>(
        <ellipse key={i} cx={70+Math.cos(a*Math.PI/180)*17} cy={74+Math.sin(a*Math.PI/180)*17}
          rx="9" ry="6" fill={i%2===0?"#F9C4C4":"#F7D5CC"} opacity="0.88"
          transform={`rotate(${a+90},${70+Math.cos(a*Math.PI/180)*17},${74+Math.sin(a*Math.PI/180)*17})`}/>
      ))}
      {[0,45,90,135,180,225,270,315].map((a,i)=>(
        <ellipse key={i} cx={70+Math.cos(a*Math.PI/180)*10} cy={74+Math.sin(a*Math.PI/180)*10}
          rx="6" ry="4" fill="#F5B8B8" opacity="0.78"
          transform={`rotate(${a+90},${70+Math.cos(a*Math.PI/180)*10},${74+Math.sin(a*Math.PI/180)*10})`}/>
      ))}
      <circle cx="70" cy="74" r="6" fill="#E8909A" opacity="0.8"/>
      {/* Cream rose */}
      {[0,51,102,153,204,255,306].map((a,i)=>(
        <ellipse key={i} cx={96+Math.cos(a*Math.PI/180)*13} cy={72+Math.sin(a*Math.PI/180)*13}
          rx="7" ry="4.5" fill={i<3?"#FFF0EC":"#F7D5CC"} opacity="0.9"
          transform={`rotate(${a+90},${96+Math.cos(a*Math.PI/180)*13},${72+Math.sin(a*Math.PI/180)*13})`}/>
      ))}
      {[0,72,144,216,288].map((a,i)=>(
        <ellipse key={i} cx={96+Math.cos(a*Math.PI/180)*7} cy={72+Math.sin(a*Math.PI/180)*7}
          rx="5" ry="3.2" fill="#FDDDD5" opacity="0.8"
          transform={`rotate(${a+90},${96+Math.cos(a*Math.PI/180)*7},${72+Math.sin(a*Math.PI/180)*7})`}/>
      ))}
      <circle cx="96" cy="72" r="5" fill="#E8A898" opacity="0.85"/>
      {/* Sweet pea small clusters */}
      {[[56,84],[52,76],[60,74],[54,90]].map(([x,y],i)=>(
        <ellipse key={i} cx={x} cy={y} rx="6" ry="4" fill="#F5C8D8" opacity="0.8" transform={`rotate(${i*40},${x},${y})`}/>
      ))}
    </svg>
  )
}

function IllustrationSerenePath() {
  // Eucalyptus + blue thistle + scabiosa
  return (
    <svg width="160" height="140" viewBox="0 0 160 140" fill="none">
      {/* Eucalyptus stems with leaves */}
      <path d="M80,138 C78,115 72,100 68,80" stroke="#5a8a6a" strokeWidth="2" strokeLinecap="round" opacity="0.75"/>
      <path d="M80,138 C82,118 90,100 94,78" stroke="#5a8a6a" strokeWidth="2" strokeLinecap="round" opacity="0.75"/>
      <path d="M80,138 C76,118 62,102 56,86" stroke="#5a8a6a" strokeWidth="1.6" strokeLinecap="round" opacity="0.65"/>
      <path d="M80,138 C84,118 98,105 104,88" stroke="#5a8a6a" strokeWidth="1.6" strokeLinecap="round" opacity="0.65"/>
      {/* Eucalyptus leaves pairs */}
      {[[68,80],[68,92],[68,104],[94,78],[94,90],[94,102]].map(([x,y],i)=>(
        <g key={i}>
          <ellipse cx={x-8} cy={y} rx="10" ry="5" fill="#7EB89A" opacity="0.75" transform={`rotate(-30,${x-8},${y})`}/>
          <ellipse cx={x+8} cy={y} rx="10" ry="5" fill="#6AAE88" opacity="0.7" transform={`rotate(30,${x+8},${y})`}/>
        </g>
      ))}
      {/* Blue thistle balls */}
      {[[68,68],[94,66],[56,84],[104,82]].map(([x,y],i)=>(
        <g key={i}>
          <circle cx={x} cy={y} r={i<2?12:8} fill="#7EB8D4" opacity="0.3"/>
          <circle cx={x} cy={y} r={i<2?9:6} fill="#5A9BCC" opacity="0.55"/>
          {[0,60,120,180,240,300].map((a,j)=>(
            <line key={j} x1={x} y1={y} x2={x+Math.cos(a*Math.PI/180)*(i<2?11:7)} y2={y+Math.sin(a*Math.PI/180)*(i<2?11:7)}
              stroke="#4A8AC0" strokeWidth="1.2" opacity="0.6"/>
          ))}
        </g>
      ))}
      {/* Sage leaf accents */}
      {[[110,94],[112,82],[108,102]].map(([x,y],i)=>(
        <ellipse key={i} cx={x} cy={y} rx="9" ry="4" fill="#9BCC9A" opacity="0.65" transform={`rotate(${-20+i*15},${x},${y})`}/>
      ))}
    </svg>
  )
}

function IllustrationAboutYou() {
  // Lavender + lilac delphinium + purple anemone
  return (
    <svg width="160" height="140" viewBox="0 0 160 140" fill="none">
      {/* Stems */}
      <path d="M80,138 C80,115 74,100 72,78" stroke="#8a7ab8" strokeWidth="1.8" strokeLinecap="round" opacity="0.65"/>
      <path d="M80,138 C80,118 88,102 90,76" stroke="#8a7ab8" strokeWidth="1.8" strokeLinecap="round" opacity="0.65"/>
      <path d="M80,138 C76,115 60,100 56,82" stroke="#8a7ab8" strokeWidth="1.5" strokeLinecap="round" opacity="0.55"/>
      <path d="M80,138 C84,118 100,104 106,86" stroke="#8a7ab8" strokeWidth="1.5" strokeLinecap="round" opacity="0.55"/>
      {/* Silver brunia balls */}
      {[[56,82],[106,86],[108,74],[54,72]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="5" fill="#C8C0D8" opacity="0.75"/>
      ))}
      {/* Lavender sprigs */}
      {[[72,60],[72,68],[72,76],[90,58],[90,66],[90,74]].map(([x,y],i)=>(
        <ellipse key={i} cx={x} cy={y} rx="4" ry="2.5" fill="#C4A8E0" opacity="0.82" transform={`rotate(${i%2===0?-10:10},${x},${y})`}/>
      ))}
      {/* Purple anemone center-left */}
      {[0,51,102,153,204,255,306].map((a,i)=>(
        <ellipse key={i} cx={70+Math.cos(a*Math.PI/180)*14} cy={76+Math.sin(a*Math.PI/180)*14}
          rx="7.5" ry="5" fill={i<4?"#DCC8F8":"#C8B0EE"} opacity="0.88"
          transform={`rotate(${a+90},${70+Math.cos(a*Math.PI/180)*14},${76+Math.sin(a*Math.PI/180)*14})`}/>
      ))}
      <circle cx="70" cy="76" r="7" fill="#4A3080" opacity="0.75"/>
      {[0,60,120,180,240,300].map((a,i)=>(
        <circle key={i} cx={70+Math.cos(a*Math.PI/180)*4} cy={76+Math.sin(a*Math.PI/180)*4} r="1.2" fill="#D0C0F0" opacity="0.9"/>
      ))}
      {/* Lilac delphinium right */}
      {[[90,54],[90,63],[90,72],[96,58],[96,67],[84,56],[84,65]].map(([x,y],i)=>(
        <ellipse key={i} cx={x} cy={y} rx="5" ry="3.5" fill="#B8A0D8" opacity="0.84" transform={`rotate(${i%2?15:-15},${x},${y})`}/>
      ))}
    </svg>
  )
}

function IllustrationIris() {
  // Purple iris + violet freesia + dark hyacinth
  return (
    <svg width="160" height="140" viewBox="0 0 160 140" fill="none">
      {/* Stems */}
      <path d="M80,138 C80,112 74,96 74,72" stroke="#6a4aaa" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      <path d="M80,138 C80,115 90,98 92,74" stroke="#6a4aaa" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      <path d="M80,138 C76,115 62,100 60,82" stroke="#6a4aaa" strokeWidth="1.6" strokeLinecap="round" opacity="0.6"/>
      {/* Iris flower left */}
      {/* Falls (lower 3 petals) */}
      {[[-30,16],[90,16],[210,16]].map(([a,ry],i)=>{
        const rad=(a*Math.PI)/180
        return <ellipse key={i} cx={74+Math.cos(rad)*12} cy={68+Math.sin(rad)*12}
          rx="7" ry={ry} fill={i===1?"#7A3ED8":"#9B5CF6"} opacity="0.85"
          transform={`rotate(${a+95},${74+Math.cos(rad)*12},${68+Math.sin(rad)*12})`}/>
      })}
      {/* Standards (upper 3) */}
      {[[90,-14],[210,-14],[330,-14]].map(([a,ry],i)=>{
        const rad=(a*Math.PI)/180
        return <ellipse key={i} cx={74+Math.cos(rad)*10} cy={68+Math.sin(rad)*10}
          rx="5" ry="12" fill="#C49EFF" opacity="0.78"
          transform={`rotate(${a+90},${74+Math.cos(rad)*10},${68+Math.sin(rad)*10})`}/>
      })}
      <circle cx="74" cy="68" r="5" fill="#6D28D9" opacity="0.8"/>
      {/* Violet freesia right */}
      {[[0,51,102,153,204,255,306].map((a,i)=>(
        <ellipse key={i} cx={96+Math.cos(a*Math.PI/180)*11} cy={72+Math.sin(a*Math.PI/180)*11}
          rx="6" ry="4" fill={i<4?"#C084FC":"#A855F7"} opacity="0.88"
          transform={`rotate(${a+90},${96+Math.cos(a*Math.PI/180)*11},${72+Math.sin(a*Math.PI/180)*11})`}/>
      ))]}
      <circle cx="96" cy="72" r="5" fill="#7C3AED" opacity="0.8"/>
      {/* Dark hyacinth cluster */}
      {[[60,80],[56,72],[60,64],[64,72],[52,80],[68,80]].map(([x,y],i)=>(
        <ellipse key={i} cx={x} cy={y} rx="5.5" ry="4" fill="#5B21B6" opacity="0.75" transform={`rotate(${i*25},${x},${y})`}/>
      ))}
      {/* Allium ball */}
      <circle cx="105" cy="84" r="9" fill="rgba(139,92,246,0.15)"/>
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((a,i)=>(
        <circle key={i} cx={105+Math.cos(a*Math.PI/180)*8} cy={84+Math.sin(a*Math.PI/180)*8} r="1.8" fill="#8B5CF6" opacity="0.7"/>
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: (index % 5) * 0.08, ease: 'easeOut' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onSelect}
      className="relative cursor-pointer overflow-hidden"
      style={{
        width: isSmall ? '200px' : '260px',
        height: isSmall ? '260px' : '380px',
        borderRadius: '24px',
        background: bouquet.gradient,
        boxShadow: hovered
          ? `0 24px 60px rgba(0,0,0,0.18), 0 0 0 1.5px ${ac}44`
          : '0 4px 24px rgba(0,0,0,0.08)',
        transition: 'box-shadow 0.4s ease',
      }}
    >
      {/* Shimmer overlay on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)` }}
        animate={{ x: hovered ? ['−100%', '200%'] : '0%' }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      />

      {/* Front face */}
      <motion.div
        className="absolute inset-0 flex flex-col"
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Illustration zone */}
        <div className="flex-1 flex items-end justify-center pt-4">
          <motion.div
            animate={{ y: hovered ? -8 : 0, scale: hovered ? 1.04 : 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {isSmall
              ? <div style={{ fontSize: isSmall ? '3.5rem' : '4rem' }}>{bouquet.emoji || bouquet.previewEmoji}</div>
              : (ILLUSTRATIONS[bouquet.id] || <div style={{ fontSize: '4rem' }}>{bouquet.emoji}</div>)
            }
          </motion.div>
        </div>

        {/* Text zone */}
        <div className="px-5 pb-6 pt-2">
          {/* Mood tag */}
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
            style={{ fontSize: isSmall ? '1.15rem' : '1.45rem', fontWeight: 400, fontStyle: 'italic', color: tc, lineHeight: 1.2 }}
          >
            {bouquet.name || `Garden #${bouquet.id?.slice(-4)}`}
          </h3>
          {bouquet.tagline && (
            <p style={{ fontSize: '0.52rem', letterSpacing: '0.22em', color: tc, opacity: 0.7, textTransform: 'uppercase', marginTop: '4px' }}>
              {bouquet.tagline}
            </p>
          )}
          {bouquet.date && (
            <p style={{ fontSize: '0.48rem', letterSpacing: '0.12em', color: tc, opacity: 0.45, marginTop: '4px' }}>
              {bouquet.date}
            </p>
          )}
        </div>
      </motion.div>

      {/* Hover overlay — recipe */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-between p-6"
        style={{ backdropFilter: 'blur(12px)', backgroundColor: 'rgba(255,252,248,0.93)', borderRadius: '24px' }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <p style={{ fontSize: '0.5rem', letterSpacing: '0.25em', color: '#8A6A50', opacity: 0.7, textTransform: 'uppercase', marginBottom: '8px' }}>
            {bouquet.recipe ? '✦  Recipe' : '✦  Composition'}
          </p>
          <h3 className="font-serif mb-4" style={{ fontSize: '1.25rem', fontStyle: 'italic', color: '#3A2010' }}>
            {bouquet.name || 'Your Creation'}
          </h3>
          <ul className="space-y-2.5">
            {(bouquet.recipe || bouquet.items?.slice(0, 4).map((i: any) => i.name) || []).map((r: string, i: number) => (
              <li key={i} className="flex items-center gap-2.5 font-sans" style={{ fontSize: '0.72rem', color: '#4A3020', opacity: 0.85 }}>
                <div className="rounded-full flex-shrink-0" style={{ width: '4px', height: '4px', backgroundColor: ac }} />
                {r}
              </li>
            ))}
            {bouquet.items?.length > 4 && (
              <li className="font-sans italic opacity-40" style={{ fontSize: '0.6rem', paddingLeft: '16px' }}>
                + {bouquet.items.length - 4} more
              </li>
            )}
          </ul>
        </div>
        <motion.button
          onClick={(e) => { e.stopPropagation(); onSelect() }}
          className="font-sans w-full py-3 rounded-2xl text-[0.62rem] tracking-[0.25em] uppercase font-medium"
          style={{ background: `linear-gradient(135deg, ${ac}, ${ac}88)`, color: '#fff', border: 'none', cursor: 'pointer' }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {bouquet.recipe ? 'Compose in Studio' : 'View'}
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────
// Floating decoration petals for gallery bg
// ─────────────────────────────────────────────
function GalleryPetal({ x, y, color, size, delay, rotate }: { x: string; y: string; color: string; size: number; delay: number; rotate: number }) {
  return (
    <motion.div
      className="pointer-events-none absolute rounded-full"
      style={{ left: x, top: y, width: size, height: size * 0.6, background: color, borderRadius: '60% 40% 60% 40%', transform: `rotate(${rotate}deg)`, opacity: 0 }}
      animate={{ opacity: [0, 0.35, 0.35, 0], y: [0, -60, -120], rotate: [rotate, rotate + 25, rotate - 10] }}
      transition={{ duration: 12, delay, ease: 'easeInOut', repeat: Infinity, repeatDelay: 4 }}
    />
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
        background: 'linear-gradient(170deg, #FFF5F8 0%, #FFF8F0 30%, #F5F0FF 65%, #F0F8FF 100%)',
      }}
    >
      {/* ── Background glow orbs ── */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div style={{ position:'absolute', left:'8%', top:'15%', width:340, height:340, borderRadius:'50%', background:'radial-gradient(circle, rgba(255,160,200,0.18) 0%, transparent 70%)', filter:'blur(40px)' }}/>
        <div style={{ position:'absolute', right:'6%', top:'25%', width:300, height:300, borderRadius:'50%', background:'radial-gradient(circle, rgba(190,140,255,0.16) 0%, transparent 70%)', filter:'blur(40px)' }}/>
        <div style={{ position:'absolute', left:'40%', bottom:'20%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle, rgba(255,210,120,0.14) 0%, transparent 70%)', filter:'blur(50px)' }}/>
      </div>

      {/* ── Floating petals ── */}
      <GalleryPetal x="5%" y="70%" color="#F9B8D0" size={16} delay={0} rotate={25} />
      <GalleryPetal x="18%" y="80%" color="#FFD1A0" size={12} delay={2.5} rotate={-15} />
      <GalleryPetal x="80%" y="75%" color="#C4A8F0" size={14} delay={1.2} rotate={40} />
      <GalleryPetal x="92%" y="68%" color="#F4A0C0" size={11} delay={3.8} rotate={-30} />
      <GalleryPetal x="55%" y="85%" color="#A0D8FF" size={13} delay={5} rotate={18} />
      <GalleryPetal x="35%" y="78%" color="#FFB8D0" size={10} delay={1.8} rotate={-22} />

      {/* ── Sticky header ── */}
      <div
        className="sticky top-0 z-50 flex items-center justify-between px-10 py-5"
        style={{
          background: 'rgba(255,248,252,0.82)',
          backdropFilter: 'blur(18px)',
          borderBottom: '1px solid rgba(200,150,180,0.18)',
        }}
      >
        {/* Back button */}
        <motion.button
          onClick={onBack}
          className="flex items-center gap-2 rounded-full px-4 py-2 font-sans cursor-pointer border-none"
          style={{ background: 'rgba(200,100,130,0.1)', color: '#9B3A5A', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500 }}
          whileHover={{ scale: 1.05, background: 'rgba(200,100,130,0.2)', x: -2 }}
          whileTap={{ scale: 0.96 }}
        >
          <ArrowLeft size={13} />
          Back
        </motion.button>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h2
            className="font-serif italic"
            style={{ fontSize: '2rem', color: '#7C3D55', letterSpacing: '-0.01em', lineHeight: 1 }}
          >
            The Gallery
          </h2>
          <div style={{ display:'flex', alignItems:'center', gap:'8px', marginTop:'4px' }}>
            <div style={{ width:40, height:1, background:'linear-gradient(to right, transparent, #D4689A)' }}/>
            <span style={{ fontSize:'0.42rem', letterSpacing:'0.3em', color:'#C4607A', opacity:0.7, textTransform:'uppercase' }}>Curated Collections</span>
            <div style={{ width:40, height:1, background:'linear-gradient(to left, transparent, #D4689A)' }}/>
          </div>
        </motion.div>

        {/* Studio button */}
        <motion.button
          onClick={onBuild}
          className="flex items-center gap-2 rounded-full px-4 py-2 font-sans cursor-pointer border-none"
          style={{ background: 'rgba(100,80,200,0.1)', color: '#5A38B0', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500 }}
          whileHover={{ scale: 1.05, background: 'rgba(100,80,200,0.2)', x: 2 }}
          whileTap={{ scale: 0.96 }}
        >
          Studio
          <ArrowRight size={13} />
        </motion.button>
      </div>

      <div className="relative z-10 px-8 pt-12 pb-32">
        {/* ── Signature Templates ── */}
        <section className="mb-28">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 flex items-center gap-4"
          >
            <div>
              <div className="flex items-center gap-3 mb-1">
                <Sparkles size={14} style={{ color: '#C060A0' }} />
                <h3 className="font-sans font-semibold" style={{ fontSize: '0.62rem', letterSpacing: '0.38em', color: '#C060A0', textTransform: 'uppercase' }}>
                  Signature Templates
                </h3>
              </div>
              <p className="font-serif italic" style={{ fontSize: '1.6rem', color: '#7C3D55', lineHeight: 1.1 }}>
                Handcrafted bouquet collections
              </p>
            </div>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, rgba(200,100,160,0.3), transparent)', marginLeft: 16 }}/>
          </motion.div>

          {/* Cards grid */}
          <div className="flex flex-wrap gap-7 justify-center xl:justify-start">
            {bouquets.map((b, i) => (
              <BouquetCard key={b.id} bouquet={b} onSelect={onBuild} index={i} />
            ))}
          </div>
        </section>

        {/* ── My Keepsakes ── */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 flex items-center gap-4"
          >
            <div>
              <div className="flex items-center gap-3 mb-1">
                <Heart size={13} style={{ color: '#C060A0' }} />
                <h3 className="font-sans font-semibold" style={{ fontSize: '0.62rem', letterSpacing: '0.38em', color: '#C060A0', textTransform: 'uppercase' }}>
                  My Keepsakes
                </h3>
                <span className="font-sans" style={{ fontSize: '0.55rem', letterSpacing: '0.1em', color: '#C060A0', opacity: 0.6 }}>
                  — {savedBouquets.length} saved
                </span>
              </div>
              <p className="font-serif italic" style={{ fontSize: '1.6rem', color: '#7C3D55', lineHeight: 1.1 }}>
                Your personal garden
              </p>
            </div>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, rgba(200,100,160,0.3), transparent)', marginLeft: 16 }}/>
          </motion.div>

          {savedBouquets.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center py-20 rounded-3xl"
              style={{ background: 'rgba(255,240,248,0.6)', border: '1.5px dashed rgba(200,100,160,0.25)' }}
            >
              <div style={{ fontSize: '3.5rem', marginBottom: '12px', opacity: 0.5 }}>🌷</div>
              <p className="font-serif italic mb-2" style={{ fontSize: '1.25rem', color: '#9B5070', opacity: 0.75 }}>
                Your garden is waiting to grow.
              </p>
              <p className="font-sans" style={{ fontSize: '0.58rem', letterSpacing: '0.22em', color: '#B07090', opacity: 0.5, textTransform: 'uppercase' }}>
                Save a bouquet from the Studio to begin
              </p>
              <motion.button
                onClick={onBuild}
                className="mt-8 font-sans px-6 py-2.5 rounded-full"
                style={{ background: 'linear-gradient(135deg, #E86090, #B040A0)', color: '#fff', fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', border: 'none', cursor: 'pointer' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Open Studio
              </motion.button>
            </motion.div>
          ) : (
            <div className="flex flex-wrap gap-6 justify-center xl:justify-start">
              {savedBouquets.map((b, i) => (
                <BouquetCard key={b.id} bouquet={b} onSelect={() => {}} index={i} isSmall />
              ))}
            </div>
          )}
        </section>
      </div>

      {/* ── Footer ── */}
      <div className="relative z-10 flex flex-col items-center pb-16 opacity-30">
        <div style={{ width:1, height:60, background:'linear-gradient(to bottom, transparent, #C060A0)', marginBottom:12 }}/>
        <span className="font-serif italic" style={{ fontSize:'1.1rem', color:'#7C3D55' }}>Daisy</span>
      </div>
    </div>
  )
}
