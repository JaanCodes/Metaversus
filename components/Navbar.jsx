'use client';

import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import styles from '../styles';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial='hidden'
    whileInView='show'
    className={`relative py-8 ${styles.xPaddings}`}
  >
    <div className='absolute w-1/2 inset-0 gradient-01' />
    <div className={`flex justify-between ${styles.innerWidth} gap-8 mx-auto`}>
      <img src='/search.svg' alt='search' className='w-6 h-6 object-contain' />
      <h2 className='font-extrabold text-2xl text-white leading-7'>METAVERSUS</h2>
      <img src='/menu.svg' alt='menu' className='w-6 h-6 object-contain' />
    </div>
  </motion.nav>
);

export default Navbar;
