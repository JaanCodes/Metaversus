'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, zoomIn, staggerContainer } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className='flex-[0.5] lg:max-w-[360px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative'
      >
        <div className='feedback-gradient' />
        <div>
          <h4 className='font-bold sm:text-3xl text-2xl sm:leading-10 leading-9 text-white'>Samantha</h4>
          <p className='mt-2 font-normal sm:text-lg text-xs sm:leading-6 leading-4 text-white'>Founder of Metaversus</p>
        </div>
        <p className='mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white'>
          “With the development of today's technology, Metaverse is very useful for today's work, or can be called web
          3.0. by using Metaverse you can use it as anything”
        </p>
      </motion.div>
      <motion.div variants={fadeIn('left', 'tween', 0.2, 1)} className={`relative ${styles.flexCenter} flex-1`}>
        <img
          src='/planet-09.png'
          alt='planet-09'
          className='w-full h-auto lg:h-[610px] min-h-[210px] object-cover rounded-[40px]'
        />
        <motion.div variants={zoomIn(0.4, 1)} className='lg:block hidden absolute -left-[10%] top-[3%]'>
          <img src='/stamp.png' alt='stamp' className='w-40 h-40 object-contain' />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
