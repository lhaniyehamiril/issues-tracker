import React from 'react'
import { FaBug } from 'react-icons/fa6'
import { motion } from "motion/react"

const Spinner = () => {
  return (
   <motion.div 
    animate={{x: [2 , -7 , 7]}}
    transition={{repeat: Infinity , duration: 0.9}}
   className='flex items-center justify-center'>
    <FaBug color='#3d3d3d' />
   </motion.div>
  )
}

export default Spinner
