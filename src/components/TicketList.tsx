'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { colors } from '../styles/colors'

const events = [
  { id: 1, name: 'Polygon Guild', date: '2023-09-15', price: 0.1, image: 'polygon.png' },
  { id: 2, name: 'Rust Tech Event', date: '2023-10-01', price: 0.05, image: 'rustevent.webp' },
  { id: 3, name: 'Polygon Guild', date: '2023-09-22', price: 0.02, image: 'polygon.png' },
  { id: 4, name: 'Rust Tech Event', date: '2023-10-10', price: 0.08, image: 'rustevent.webp' },
]

export default function TicketList() {
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null)

  return (
    <section id="events" className="py-20 px-6" style={{ background: colors.card }}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event) => (
            <motion.div
              key={event.id}
              className=" rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredEvent(event.id)}
              onHoverEnd={() => setHoveredEvent(null)}
            >
              <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                <p className="text-muted mb-4">{event.date}</p>
                <div className="flex justify-between items-center">
                  <span className="text-accent font-bold">{event.price} ETH</span>
                  <motion.button
                    className="bg-primary text-background py-2 px-4 rounded-full font-semibold"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Buy Ticket
                  </motion.button>
                </div>
              </div>
              {hoveredEvent === event.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-75"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

