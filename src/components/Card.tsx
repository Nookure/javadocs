import { Card, CardFooter, Image, Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { item } from './Header';

export interface JavaDocCardProps {
  title: string;
  image: string;
}

const JavaDocCard = ({ title, image }: JavaDocCardProps) => {
  const openInNewTab = (url: string) => {
    const win = window.open(url, '_blank');
    if (win) win.focus();
  };

  return (
    <motion.div
      variants={item}
    >
      <Card isFooterBlurred radius='lg' className='border-none h-[200px] w-[400px]'>
        <Image alt={`${title} image`} className='object-fit w-full h-full' src={image} />
        <CardFooter className='flex justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
          <Button onClick={() => openInNewTab('/jd/NookureStaff/index.html')} className='text-tiny text-white bg-black/20 px-6' variant='flat' color='default' radius='lg' size='sm'>
            Open in a new tab
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default JavaDocCard;
