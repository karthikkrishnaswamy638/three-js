import React from 'react'
// @ts-ignore
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles/styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import Image from 'next/image'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }: any) => {
  return (
    <Tilt className='xs:w-[250px] w-full' style={{}}>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          // @ts-ignore
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <Image src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant(1)}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading[30px]"
      >
        I&apos;m a skilled Full Stack Developer with experience in Javascript, Typescript, React JS, Node JS.
        I&apos;m a quick learner and problem-solver. More efficient and can adapt easily. Let&apos;s work together
        to bring your ideas to life.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((serv: any, i: any) => (
          <ServiceCard key={serv.title} index={i} {...serv} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")