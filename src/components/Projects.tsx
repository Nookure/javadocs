import { motion } from 'framer-motion';
import { container } from './Header';
import type { JavaDocCardProps } from './Card';
import JavaDocCard from './Card';


const projectCardList: JavaDocCardProps[] = [
  {
    title: 'NookureStaff',
    image: 'https://builtbybit.com/attachments/nookurestaff2-png.738016/?variant=display'
  }
];

const Languages = () => {
  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='visible'
      className='flex justify-center mt-12 flex-wrap gap-4 my-8'
    >
      {projectCardList.map((card, i) => (
        <JavaDocCard key={i} {...card} />
      ))}
    </motion.div>
  );
};

export default Languages;