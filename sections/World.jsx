'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title='| people on the world' textStyles='text-center' />
      <TitleText
        title={<>Track friends around you and invite them to play together in the same world</>}
        textStyles='text-center'
      />
      <motion.div variants={fadeIn('up', 'tween', 0.3, 1)} className='relative mt-[68px] flex w-full h-[550px]'>
        <img src='/map.png' alt='map' className='w-full h-full object-cover' />
        <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]'>
          <div className='people-gradient' />
          <img src='/people-01.png' alt='people' className='w-full h-full' />
        </div>
        <div className='absolute top-10 left-32 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <div className='people-gradient' />
          <img src='/people-02.png' alt='people' className='w-full h-full' />
        </div>
        <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <div className='people-gradient' />
          <img src='/people-03.png' alt='people' className='w-full h-full' />
        </div>
        <div className='hidden lg:block absolute top-12 right-1/4 w-48 p-[6px] rounded-[24px] bg-[#5d6680]'>
          <div className='card-gradient' />
          <img src='/card-01.png' alt='people' className='w-full h-full' />
          <div className='absolute bottom-4 left-4 text-white'>
            <div className='flex justify-between items-center'>
              <div className='h-6 w-6 flex justify-center ml-3 mb-2'>
                <img src={`/card-people-01.png`} className={`w-full h-full object-contain z-50`} />
                <img src={`/card-people-02.png`} className={`w-full h-full object-contain -ml-2 z-10`} />
                <img src={`/card-people-03.png`} className={`w-full h-full object-contain -ml-2`} />
              </div>
              <p className='text-[13px] ml-6'>+ 264 has joined</p>
            </div>
            <h3 className='font-bold text-lg capitalize '>Hawkins labs</h3>
          </div>
        </div>
        <div className='hidden lg:block absolute bottom-[20%] left-[15%] w-48 p-[6px] rounded-[24px] bg-[#5d6680]'>
          <div className='card-gradient' />
          <img src='/card-02.png' alt='people' className='w-full h-full' />
          <div className='absolute bottom-4 left-4 text-white'>
            <div className='flex justify-between items-center'>
              <div className='h-6 w-6 flex justify-center ml-3 mb-2'>
                <img src={`/card-people-01.png`} className={`w-full h-full object-contain z-50`} />
                <img src={`/card-people-02.png`} className={`w-full h-full object-contain -ml-2 z-10`} />
                <img src={`/card-people-03.png`} className={`w-full h-full object-contain -ml-2`} />
              </div>
              <p className='text-[13px] ml-6'>+ 342 has joined</p>
            </div>
            <h3 className='font-bold text-lg capitalize '>The upside down</h3>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
