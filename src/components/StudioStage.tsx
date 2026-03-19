'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Save, Heart, CheckCircle2 } from 'lucide-react'

type ToolbarTab = 'wrappers' | 'flowers' | 'accents'

interface FlowerItem {
  id: string
  name: string
  emoji: string
  color: string
}

const catalogue: Record<ToolbarTab, FlowerItem[]> = {
  wrappers: [
    { id: 'kraft', name: 'Kraft Paper', emoji: '📜', color: '#D4B483' },
    { id: 'linen', name: 'Linen Wrap', emoji: '🤍', color: '#F0ECE4' },
    { id: 'silk', name: 'Silk Ribbon', emoji: '🎀', color: '#E8B4B8' },
    { id: 'moss', name: 'Moss Wrap', emoji: '🌿', color: '#7A9E7E' },
    { id: 'burlap', name: 'Burlap', emoji: '🟫', color: '#C4A882' },
  ],
  flowers: [
    { id: 'peony', name: 'Peony', emoji: '🌸', color: '#F4C2C2' },
    { id: 'rose', name: 'Rose', emoji: '🌹', color: '#E05C5C' },
    { id: 'iris', name: 'Iris', emoji: '🪻', color: '#5D3FD3' },
    { id: 'daisy', name: 'Daisy', emoji: '🌼', color: '#E8C547' },
    { id: 'lily', name: 'Lily', emoji: '🌷', color: '#FF8C94' },
    { id: 'ranunculus', name: 'Ranunculus', emoji: '🌺', color: '#FE9A8B' },
    { id: 'dahlia', name: 'Dahlia', emoji: '💐', color: '#BDA0E0' },
  ],
  accents: [
    { id: 'eucalyptus', name: 'Eucalyptus', emoji: '🌿', color: '#6B8F71' },
    { id: 'fern', name: 'Fern', emoji: '🌱', color: '#5A7A5F' },
    { id: 'pampas', name: 'Pampas Grass', emoji: '🪶', color: '#E0D4C0' },
    { id: 'berries', name: 'Berries', emoji: '🫐', color: '#5E4B8B' },
    { id: 'babysbreath', name: "Baby's Breath", emoji: '☁️', color: '#F5F0F5' },
  ],
}

const tabLabels: Record<ToolbarTab, string> = {
  wrappers: 'Wrappers',
  flowers: 'Main Flowers',
  accents: 'Accents',
}

interface BouquetItem extends FlowerItem {
  x: number
  y: number
  rotation: number
  scale: number
  instanceId: string
}

export default function StudioStage({ 
  onBack,
  onSave,
}: { 
  onBack: () => void
  onSave?: (items: BouquetItem[]) => void
}) {
  const [activeTab, setActiveTab] = useState<ToolbarTab>('flowers')
  const [bouquet, setBouquet] = useState<BouquetItem[]>([])
  const [showSavedToast, setShowSavedToast] = useState(false)

  const addItem = (item: FlowerItem) => {
    const angle = Math.random() * Math.PI * 2
    const radius = Math.random() * 80 + 20
    const x = 50 + (Math.cos(angle) * radius) / 4
    const y = 50 + (Math.sin(angle) * radius) / 5

    setBouquet((prev) => [
      ...prev,
      {
        ...item,
        x,
        y,
        rotation: Math.random() * 40 - 20,
        scale: 0.9 + Math.random() * 0.3,
        instanceId: `${item.id}-${Date.now()}`,
      },
    ])
  }

  const handleSave = () => {
    if (onSave && bouquet.length > 0) {
      onSave(bouquet)
      setShowSavedToast(true)
      setTimeout(() => setShowSavedToast(false), 3000)
    }
  }

  const clearBouquet = () => setBouquet([])

  return (
    <div className="relative flex min-h-screen flex-col" style={{ backgroundColor: '#FAF9F6' }}>
      {/* Toast Notification */}
      <AnimatePresence>
        {showSavedToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className="fixed top-8 left-1/2 z-[100] flex items-center gap-3 px-6 py-3 bg-stem text-petal rounded-full shadow-2xl"
          >
            <CheckCircle2 size={18} className="text-pollen" />
            <span className="font-sans text-[0.7rem] tracking-[0.15em] uppercase font-medium">
              Saved to Gallery
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="flex items-center justify-between px-8 py-8">
        <motion.button
          onClick={onBack}
          className="flex items-center gap-2 font-sans bg-transparent border-none cursor-pointer"
          style={{ color: '#4A5D4E', opacity: 0.6, fontSize: '0.7rem', letterSpacing: '0.2em' }}
          whileHover={{ opacity: 1, x: -2 }}
        >
          <ArrowLeft size={14} />
          Gallery
        </motion.button>

        <div className="text-center">
          <h2
            className="font-serif italic text-3xl text-stem"
          >
            The Studio
          </h2>
        </div>

        <div className="flex items-center gap-6">
          <motion.button
            onClick={handleSave}
            disabled={bouquet.length === 0}
            className="flex items-center gap-2 font-sans bg-transparent border-none cursor-pointer disabled:opacity-20"
            style={{ color: '#4A5D4E', fontSize: '0.7rem', letterSpacing: '0.2em' }}
            whileHover={{ scale: 1.05 }}
          >
            <Heart size={16} fill={bouquet.length > 0 ? "rgba(74,93,78,0.1)" : "none"} />
            SAVE
          </motion.button>
          
          <motion.button
            onClick={clearBouquet}
            className="font-sans bg-transparent border-none cursor-pointer"
            style={{ color: '#4A5D4E', opacity: 0.5, fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
            whileHover={{ opacity: 1 }}
          >
            Clear
          </motion.button>
        </div>
      </div>

      {/* Canvas area */}
      <div
        className="relative flex-1 mx-8 mb-4 rounded-3xl overflow-hidden"
        style={{
          minHeight: '320px',
          border: '1px solid rgba(74,93,78,0.06)',
          background: 'radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(250,249,246,0.6) 100%)',
        }}
      >
        {/* Empty state */}
        {bouquet.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <div style={{ fontSize: '3rem', marginBottom: '12px', opacity: 0.1 }}>🌿</div>
            <p
              className="font-sans text-center"
              style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: '#4A5D4E', opacity: 0.3, textTransform: 'uppercase' }}
            >
              Select petals to begin
            </p>
          </motion.div>
        )}

        {/* Placed items */}
        <AnimatePresence>
          {bouquet.map((item) => (
            <motion.div
              key={item.instanceId}
              className="absolute pointer-events-none select-none"
              style={{ left: `${item.x}%`, top: `${item.y}%`, transform: 'translate(-50%, -50%)' }}
              initial={{ scale: 0, opacity: 0, rotate: item.rotation - 20, y: -30 }}
              animate={{
                scale: item.scale,
                opacity: 1,
                rotate: item.rotation,
                y: 0,
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 24,
                mass: 0.8,
              }}
            >
              <span style={{ fontSize: '2.5rem', display: 'block', lineHeight: 1 }}>
                {item.emoji}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Toolbar */}
      <div
        className="mx-6 mb-8 rounded-[2rem] overflow-hidden"
        style={{
          border: '1px solid rgba(74,93,78,0.06)',
          backgroundColor: 'rgba(255,255,255,0.7)',
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* Tab bar */}
        <div className="flex border-b" style={{ borderColor: 'rgba(74,93,78,0.04)' }}>
          {(Object.keys(catalogue) as ToolbarTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="relative flex-1 py-5 font-sans bg-transparent border-none cursor-pointer transition-all"
              style={{
                fontSize: '0.6rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#4A5D4E',
                opacity: activeTab === tab ? 1 : 0.3,
              }}
            >
              {tabLabels[tab]}
              {activeTab === tab && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-1/4 right-1/4 h-0.5"
                  style={{ backgroundColor: '#E8C547' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-wrap gap-4 justify-center"
            >
              {catalogue[activeTab].map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03 }}
                  onClick={() => addItem(item)}
                  className="flex flex-col items-center gap-2 rounded-2xl p-4 cursor-pointer border-none"
                  style={{
                    backgroundColor: `${item.color}10`,
                    border: `1px solid ${item.color}20`,
                    minWidth: '80px',
                  }}
                  whileHover={{ scale: 1.05, backgroundColor: `${item.color}20` }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span style={{ fontSize: '1.6rem' }}>{item.emoji}</span>
                  <span
                    className="font-sans text-center text-[0.5rem] tracking-[0.1em] opacity-60"
                    style={{ color: '#4A5D4E' }}
                  >
                    {item.name}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
