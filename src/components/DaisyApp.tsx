'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import VineCorners from './VineCorners'
import HeroStage from './HeroStage'
import GalleryStage from './GalleryStage'
import StudioStage from './StudioStage'

export type Stage = 'entry' | 'gallery' | 'studio'

interface SavedBouquet {
  id: string
  items: any[]
  date: string
  previewEmoji: string
  name?: string
  tagline?: string
  mood?: string
  recipe?: string[]
  emoji?: string
  gradient?: string
  accentColor?: string
  textColor?: string
}

const pageVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? 40 : -40,
    filter: 'blur(8px)',
  }),
  center: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? -40 : 40,
    filter: 'blur(8px)',
  }),
}

const stageOrder: Stage[] = ['entry', 'gallery', 'studio']

export default function DaisyApp() {
  const [stage, setStage] = useState<Stage>('entry')
  const [direction, setDirection] = useState(1)
  const [savedBouquets, setSavedBouquets] = useState<SavedBouquet[]>([])

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('daisy-keepsakes')
    if (saved) {
      try {
        setSavedBouquets(JSON.parse(saved))
      } catch (e) {
        console.error('Failed to load saved bouquets', e)
      }
    }
  }, [])

  const saveBouquetToGallery = (items: any[]) => {
    if (items.length === 0) return

    const counts: Record<string, { count: number, name: string }> = {}
    items.forEach(item => {
      if (!counts[item.id]) counts[item.id] = { count: 0, name: item.name }
      counts[item.id].count++
    })
    const recipe = Object.values(counts).map(c => `${c.name} ×${c.count}`)

    const newBouquet: SavedBouquet = {
      id: `saved-${Date.now()}`,
      items: [...items],
      date: new Date().toLocaleDateString(),
      previewEmoji: items[items.length - 1]?.emoji || '🌿',
      name: 'Custom Studio Bouquet',
      tagline: 'Handpicked Composition',
      mood: 'Personal · Unique',
      recipe,
      emoji: items[items.length - 1]?.emoji || '🌿',
      gradient: 'linear-gradient(155deg, #FFF0F5 0%, #F8E0E8 40%, #F0D0E0 100%)',
      accentColor: '#C05070',
      textColor: '#7C3D55',
    }

    const updated = [newBouquet, ...savedBouquets]
    setSavedBouquets(updated)
    localStorage.setItem('daisy-keepsakes', JSON.stringify(updated))
  }

  const deleteBouquet = (id: string) => {
    const updated = savedBouquets.filter(b => b.id !== id)
    setSavedBouquets(updated)
    localStorage.setItem('daisy-keepsakes', JSON.stringify(updated))
  }

  const goTo = (next: Stage) => {
    const curr = stageOrder.indexOf(stage)
    const nextIdx = stageOrder.indexOf(next)
    setDirection(nextIdx > curr ? 1 : -1)
    setStage(next)
  }

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: '#FFF0F5', color: '#7C3D55' }}
    >
      {/* Ambient radial glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(244,160,192,0.09) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 80% 100%, rgba(196,127,232,0.09) 0%, transparent 70%)',
        }}
      />

      {/* Vine corners — entry only */}
      {stage === 'entry' && <VineCorners />}

      {/* Stage transitions */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={stage}
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="relative z-10 min-h-screen w-full"
        >
          {stage === 'entry' && (
            <HeroStage onBegin={() => goTo('gallery')} />
          )}
          {stage === 'gallery' && (
            <GalleryStage
              onBack={() => goTo('entry')}
              onBuild={() => goTo('studio')}
              savedBouquets={savedBouquets}
              onDelete={deleteBouquet}
            />
          )}
          {stage === 'studio' && (
            <StudioStage 
              onBack={() => goTo('gallery')} 
              onSave={saveBouquetToGallery}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
