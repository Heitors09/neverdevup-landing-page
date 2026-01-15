import { Menu } from 'lucide-react';
import { motion } from 'motion/react';
import { ThemeToggle } from '../theme/theme-toggle';
import { Button } from '../ui/button';
import { Logo } from './logo';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut' as const,
    },
  },
};

export const Header = () => {
  return (
    <motion.header
      className="flex items-center py-8 lg:px-[163px] justify-between px-6 lg:justify-center  gap-36"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Logo />
      </motion.div>

      <motion.ul
        className="flex text-zinc-500  hidden lg:flex  gap-[34px]"
        variants={itemVariants}
      >
        <li className="hover:text-black duration-200">
          <a href="#">sobre</a>
        </li>
        <li className="hover:text-black duration-200">
          <a href="#">descubra</a>
        </li>
        <li className="hover:text-black duration-200">
          <a href="#">contato</a>
        </li>
        <li className="hover:text-black duration-200">
          <a href="#">produtos</a>
        </li>
      </motion.ul>
      <motion.div className="flex lg:hidden  gap-2" variants={itemVariants}>
        <Button variant={'outline'}>
          <Menu />
        </Button>
      </motion.div>

      <motion.div className=" hidden lg:flex gap-2" variants={itemVariants}>
        <ThemeToggle />
        <Button className="shadow-lg shadow-orange-500/25">Orçamento</Button>
      </motion.div>
    </motion.header>
  );
};
