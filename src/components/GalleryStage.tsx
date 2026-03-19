'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Heart } from 'lucide-react'

const bouquets = [
  {
    id: 'first-morning-light',
    name: 'First Morning Light',
    tagline: 'Whites · Yellows',
    colors: ['#F5F0E8', '#E8C547', '#F0D88A', '#FFF8E7'],
    mood: 'Gentle · Hopeful · Pure',
    recipe: ['White Ranunculus ×5', 'Butter Dahlia ×3', 'Baby\'s Breath ×8', 'Lemon Leaf ×4'],
    emoji: '🌼',
    gradient: 'linear-gradient(135deg, #FFF8E0 0%, #F5EDB0 50%, #E8C547 100%)',
  },
  {
    id: 'softest-whisper',
    name: 'Softest Whisper',
    tagline: 'Pinks · Creams',
    colors: ['#F9EEE8', '#E8C4B8', '#F5D5CC', '#FFF0EC'],
    mood: 'Tender · Romantic · Soft',
    recipe: ['Blush Peony ×4', 'Cream Rose ×5', 'Sweet Pea ×6', 'Dusty Miller ×3'],
    emoji: '🌸',
    gradient: 'linear-gradient(135deg, #FFF0EC 0%, #F7D5C8 50%, #E8B4A8 100%)',
  },
  {
    id: 'serene-path',
    name: 'The Serene Path',
    tagline: 'Greens · Blues',
    colors: ['#E8F0EA', '#4A5D4E', '#7FA885', '#C5D8C8'],
    mood: 'Calm · Meditative · Fresh',
    recipe: ['Eucalyptus ×6', 'Blue Thistle ×4', 'Scabiosa ×3', 'Sage Leaf ×8'],
    emoji: '🌿',
    gradient: 'linear-gradient(135deg, #E8F4EC 0%, #98BDA0 50%, #4A7D58 100%)',
  },
  {
    id: 'about-you',
    name: 'About You',
    tagline: 'Dreamy Purples · Silks',
    colors: ['#EDE8F5', '#C4B5E0', '#9B86CC', '#F0ECF8'],
    mood: 'Dreamy · Ethereal · Devoted',
    recipe: ['Lavender ×8', 'Lilac Delphinium ×4', 'Purple Anemone ×3', 'Silver Brunia ×5'],
    emoji: '💜',
    gradient: 'linear-gradient(135deg, #F5F0FF 0%, #C8B8E8 50%, #9870CC 100%)',
  },
  {
    id: 'iris',
    name: 'Iris',
    tagline: 'Vibrant Purples · Violets',
    colors: ['#F0E8F5', '#8B5CF6', '#6D28D9', '#EDD9FF'],
    mood: 'Bold · Mystical · Alive',
    recipe: ['Purple Iris ×5', 'Violet Freesia ×4', 'Dark Hyacinth ×3', 'Allium ×2'],
    emoji: '🪻',
    gradient: 'linear-gradient(135deg, #EDD9FF 0%, #A87BE5 50%, #6A1EBF 100%)',
  },
]

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: 'easeOut' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onSelect}
      className="relative cursor-pointer overflow-hidden rounded-2xl"
      style={{
        width: isSmall ? '240px' : '280px',
        height: isSmall ? '300px' : '360px',
        background: bouquet.gradient || 'linear-gradient(135deg, #FDFCFB 0%, #E2D1C3 100%)',
        border: '1px solid rgba(74,93,78,0.12)',
      }}
    >
      {/* Base content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.35 }}
      >
        <motion.div
          className={`${isSmall ? 'text-4xl' : 'text-5xl'} mb-4`}
          animate={{ scale: hovered ? 0.8 : 1 }}
        >
          {bouquet.emoji || bouquet.previewEmoji}
        </motion.div>
        <h3
          className="font-serif mb-1"
          style={{
            fontSize: isSmall ? '1.2rem' : '1.5rem',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#4A5D4E',
          }}
        >
          {bouquet.name || `Garden #${bouquet.id?.slice(-4)}`}
        </h3>
        {bouquet.tagline && (
          <p
            className="font-sans"
            style={{
              fontSize: '0.55rem',
              letterSpacing: '0.2em',
              color: '#4A5D4E',
              opacity: 0.6,
              textTransform: 'uppercase',
            }}
          >
            {bouquet.tagline}
          </p>
        )}
        {bouquet.date && (
          <p
             className="font-sans mt-2"
             style={{ fontSize: '0.5rem', letterSpacing: '0.1em', color: '#4A5D4E', opacity: 0.4 }}
          >
            {bouquet.date}
          </p>
        )}
      </motion.div>

      {/* Hover: Recipe reveal */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-between p-6"
        style={{ backgroundColor: 'rgba(250,249,246,0.95)' }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
      >
        <div>
          <p
            className="font-sans mb-3"
            style={{
              fontSize: '0.55rem',
              letterSpacing: '0.2em',
              color: '#4A5D4E',
              opacity: 0.5,
              textTransform: 'uppercase',
            }}
          >
            {bouquet.recipe ? 'Recipe' : 'Composition'}
          </p>
          <h3
            className="font-serif mb-4"
            style={{
              fontSize: isSmall ? '1.1rem' : '1.3rem',
              fontStyle: 'italic',
              color: '#4A5D4E',
            }}
          >
            {bouquet.name || 'Your Creation'}
          </h3>
          <ul className="space-y-2">
            {(bouquet.recipe || bouquet.items?.slice(0, 4).map((i: any) => i.name) || []).map((r: string, i: number) => (
              <li
                key={i}
                className="flex items-center gap-2 font-sans"
                style={{ fontSize: '0.7rem', color: '#4A5D4E', opacity: 0.8 }}
              >
                <div
                  className="rounded-full flex-shrink-0"
                  style={{ width: '3px', height: '3px', backgroundColor: '#E8C547' }}
                />
                {r}
              </li>
            ))}
            {bouquet.items?.length > 4 && (
              <li className="font-sans italic opacity-40 ml-5" style={{ fontSize: '0.6rem' }}>
                + {bouquet.items.length - 4} more
              </li>
            )}
          </ul>
        </div>
        <motion.button
          onClick={(e) => {
            e.stopPropagation()
            onSelect()
          }}
          className="font-sans w-full py-2.5 rounded-xl text-[0.65rem] tracking-[0.2em] uppercase"
          style={{
            backgroundColor: '#4A5D4E',
            color: '#FAF9F6',
            border: 'none',
          }}
          whileHover={{ scale: 1.02, backgroundColor: '#3A4D3E' }}
          whileTap={{ scale: 0.98 }}
        >
          {bouquet.recipe ? 'Compose' : 'View'}
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

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
    <div className="relative min-h-screen pt-12 pb-24 px-8 overflow-y-auto hide-scrollbar">
      {/* Header */}
      <div className="flex items-center justify-between mb-20 sticky top-0 z-50 bg-[#FAF9F6]/80 backdrop-blur-md py-4">
        <motion.button
          onClick={onBack}
          className="flex items-center gap-2 font-sans bg-transparent border-none cursor-pointer"
          style={{ color: '#4A5D4E', opacity: 0.6, fontSize: '0.7rem', letterSpacing: '0.2em' }}
          whileHover={{ opacity: 1, x: -2 }}
        >
          <ArrowLeft size={14} />
          Back
        </motion.button>

        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif italic text-4xl text-stem"
          >
            The Gallery
          </motion.h2>
        </div>

        <motion.button
          onClick={onBuild}
          className="flex items-center gap-2 font-sans bg-transparent border-none cursor-pointer"
          style={{ color: '#4A5D4E', opacity: 0.6, fontSize: '0.7rem', letterSpacing: '0.2em' }}
          whileHover={{ opacity: 1, x: 2 }}
        >
          Studio
          <ArrowRight size={14} />
        </motion.button>
      </div>

      {/* Signature Section */}
      <section className="mb-24">
        <div className="mb-12 border-b border-stem/10 pb-4">
          <h3 className="font-sans text-[0.65rem] tracking-[0.4em] uppercase opacity-40">
            Signature Templates
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {bouquets.map((b, i) => (
            <div key={b.id} className="flex justify-center">
              <BouquetCard bouquet={b} onSelect={onBuild} index={i} />
            </div>
          ))}
        </div>
      </section>

      {/* Keepsakes Section */}
      <section>
        <div className="mb-12 border-b border-stem/10 pb-4 flex items-center justify-between">
          <h3 className="font-sans text-[0.65rem] tracking-[0.4em] uppercase opacity-40">
            My Keepsakes
          </h3>
          <span className="font-serif italic text-stem/40 text-sm">
            {savedBouquets.length} items
          </span>
        </div>

        {savedBouquets.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-stem/5 rounded-3xl"
          >
            <Heart className="text-stem/10 mb-4" size={32} strokeWidth={1} />
            <p className="font-serif italic text-stem/40 text-lg">
              Your garden is waiting to grow.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {savedBouquets.map((b, i) => (
              <div key={b.id} className="flex justify-center">
                <BouquetCard bouquet={b} onSelect={() => {}} index={i} isSmall />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Footer Decoration */}
      <div className="mt-40 flex flex-col items-center opacity-10">
        <div className="w-px h-24 bg-stem mb-8" />
        <span className="font-serif italic text-xl">Daisy</span>
      </div>
    </div>
  )
}
