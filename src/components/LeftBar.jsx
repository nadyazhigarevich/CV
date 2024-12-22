import React from 'react'
import Contacts from './Contacts'
import Education from './Education'
import { motion } from 'framer-motion'
import { leftAnimation } from '../animation'
import Skills from './Skills'
import Languages from './Languages'

const LeftBar = () => {
  return (
    <motion.div
      className='leftBar'
      initial="hidden"
      whileInView="visible"
      transition={{
        ease: "linear",
        duration: 0.7,
        x: { duration: 0.7 }
      }}
      variants={leftAnimation}
      viewport={{ amount: 0.5, once: true }}>
      <Contacts />
      <Education />
      <Languages />
      <Skills />
    </motion.div>
  )
}

export default LeftBar