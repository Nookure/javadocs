import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';

export const container: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  }
}
  
export const item: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const Header = () => {
  return (
    <motion.div variants={container} initial='hidden' animate='visible'>
      <motion.h1 variants={item} className='xl:text-7xl md:text-6xl text-5xl pulse mt-28'>
        Welcome to the <span className='purple-glow-gradient'>JavaDocs</span>
      </motion.h1>

      <motion.h2 variants={item} className='text-center xl:text-4xl md:text-3xl text-2xl text-stone-200'>
        The official site for your{' '}
        <a href='https://nookure.com' target='__blank' className='red-glow-gradient font-semibold'>
          Nookure
        </a>
        &apos;s Products
      </motion.h2>
    </motion.div>
  );
};

export default Header;