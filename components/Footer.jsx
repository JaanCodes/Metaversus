'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial='hidden'
    whileInView='show'
    className={`${styles.paddings} py-8 relative`}
  >
    <div className='footer-gradient' />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className='flex items-center justify-between flex-wrap gap-8'>
        <h3 className='font-bold md:text-6xl text-5xl text-white'>Enter the Metaverse</h3>
        <button
          type='button'
          className='flex justify-center items-center h-fit py-4 px-6 bg-[#2561ab] rounded-[32px] gap-4'
        >
          <img src='/headset.svg' alt='headset' className='w-6 h-6 object-contain' />
          <span className='font-normal text-white uppercase'>Enter metaverse</span>
        </button>
      </div>
      <div className='flex flex-col'>
        <div className='mb-[50px] h-[2px] bg-white opacity-10' />
        <div className='flex items-center justify-between flex-wrap gap-4 text-white'>
          <h6 className='uppercase font-extrabold text-2xl'>Metaversus</h6>
          <p className='font-normal text-sm opacity-50'>
            Copyright &copy; 2021 - 2022 Metaversus. All rights reserved.
          </p>
          <div className='flex gap-4'>
            {socials.map((social) => (
              <img
                src={social.url}
                alt={social.name}
                key={social.name}
                className='w-6 h-6 object-contain cursor-pointer'
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
