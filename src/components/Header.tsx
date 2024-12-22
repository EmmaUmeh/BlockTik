'use client'

import { motion } from 'framer-motion'
// import Link from 'next/link'
import { colors } from '../styles/colors'

export default function Header() {
  return (
    <header className="py-4 px-6 bg-white" >
      <nav className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/" className="text-2xl font-bold text-black">
            BlockTix
          </a>
        </motion.div>
        <motion.ul
          className="flex space-x-6 text-black"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {['Events', 'My Tickets', 'Sell', 'Transfer', 'Create Event'].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-accent transition-colors">
                {item}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div>
          <button className='bg-primary py-2 px-5 font-bold rounded-md text-white'>Connect Wallet</button>
        </motion.div>
      </nav>
    </header>
  )
}


