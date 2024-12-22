'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { colors } from '../styles/colors'

export default function SellTicket() {
  const [ticketDetails, setTicketDetails] = useState({
    eventName: '',
    price: '',
    quantity: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTicketDetails({ ...ticketDetails, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with your blockchain logic to list the ticket for sale
    console.log('Ticket listed for sale:', ticketDetails)
    // Reset form after submission
    setTicketDetails({ eventName: '', price: '', quantity: '' })
  }

  return (
    <section className="py-20 px-6" style={{ background: colors.background }}>
      <div className="container mx-auto max-w-md">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Sell Your Ticket
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <label htmlFor="eventName" className="block text-sm font-medium mb-2">
              Event Name
            </label>
            <input
              type="text"
              id="eventName"
              name="eventName"
              value={ticketDetails.eventName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-md"
              style={{ background: colors.card, color: colors.foreground }}
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium mb-2">
              Price (ETH)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={ticketDetails.price}
              onChange={handleChange}
              required
              step="0.001"
              min="0"
              className="w-full px-3 py-2 rounded-md"
              style={{ background: colors.card, color: colors.foreground }}
            />
          </div>
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium mb-2">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={ticketDetails.quantity}
              onChange={handleChange}
              required
              min="1"
              className="w-full px-3 py-2 rounded-md"
              style={{ background: colors.card, color: colors.foreground }}
            />
          </div>
          <motion.button
            type="submit"
            className="w-full py-3 px-4 rounded-full font-semibold text-lg"
            style={{ background: colors.accent, color: colors.background }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            List Ticket for Sale
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

