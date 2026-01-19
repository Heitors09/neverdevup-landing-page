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
        className="flex text-zinc-500 dark:text-zinc-200  hidden lg:flex  gap-[34px]"
        variants={itemVariants}
      >
        <li className="hover:text-black dark:hover:text-zinc-400 duration-200">
          <a href="#sobre">sobre</a>
        </li>
        <li className="hover:text-black dark:hover:text-zinc-400 duration-200">
          <a href="#">descubra</a>
        </li>
        <li className="hover:text-black dark:hover:text-zinc-400 duration-200">
          <a href="#contato">contato</a>
        </li>
        <li className="hover:text-black dark:hover:text-zinc-400 duration-200">
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
        <Button asChild>
          <a
            href="https://wa.me/558592248448?text=ol%C3%A1%20gostaria%20de%20realizar%20um%20or%C3%A7amento%20para%20um%20projeto!"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-lg shadow-orange-500/25"
          >
            Orçamento
          </a>
        </Button>
      </motion.div>
    </motion.header>
  );
};
