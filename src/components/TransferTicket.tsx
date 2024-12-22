'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { colors } from '../styles/colors'

export default function TransferTicket() {
  const [transferDetails, setTransferDetails] = useState({
    ticketId: '',
    recipientAddress: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTransferDetails({ ...transferDetails, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with your blockchain logic to transfer the ticket
    console.log('Ticket transfer initiated:', transferDetails)
    // Reset form after submission
    setTransferDetails({ ticketId: '', recipientAddress: '' })
  }

  return (
    <section className="py-20 px-6" style={{ background: colors.card }}>
      <div className="container mx-auto max-w-md">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Transfer Your Ticket
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <label htmlFor="ticketId" className="block text-sm font-medium mb-2">
              Ticket ID
            </label>
            <input
              type="text"
              id="ticketId"
              name="ticketId"
              value={transferDetails.ticketId}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-md"
              style={{ background: colors.background, color: colors.foreground }}
            />
          </div>
          <div>
            <label htmlFor="recipientAddress" className="block text-sm font-medium mb-2">
              Recipient's Wallet Address
            </label>
            <input
              type="text"
              id="recipientAddress"
              name="recipientAddress"
              value={transferDetails.recipientAddress}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-md"
              style={{ background: colors.background, color: colors.foreground }}
            />
          </div>
          <motion.button
            type="submit"
            className="w-full py-3 px-4 rounded-full font-semibold text-lg"
            style={{ background: colors.primary, color: colors.background }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Transfer Ticket
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

