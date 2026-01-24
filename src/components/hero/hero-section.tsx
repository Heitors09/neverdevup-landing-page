/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from '../ui/avatar';
import { Button } from '../ui/button';
import { ShinyButton } from '../ui/shiny-button';

export const HeroSection = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex max-lg:px-6 py-24 flex-col w-full gap-4 items-center"
    >
      <ShinyButton>Bem-Vindo</ShinyButton>

      <motion.h3
        variants={item}
        className="
    text-4xl lg:text-7xl lg:max-w-[900px] text-center font-bold
    
    
  "
      >
        <span className="text-blue-500 ">Software</span> que transforma ideias
        em resultados
      </motion.h3>

      <motion.p
        variants={item}
        className="max-w-[700px] hidden  lg:block lg:text-lg mt-4 text-center font-light  text-subtitle"
      >
        Desenvolvemos soluções digitais sob medida para empresas que querem
        escalar. Do conceito ao deploy, com qualidade e velocidade.
      </motion.p>

      <motion.p
        variants={item}
        className="max-w-[300px] block   dark:text-zinc-300  lg:hidden text-sm text-center text-zinc-500"
      >
        Somos uma empresa de desenvolvimento de software que ajuda negócios a
        transformar ideias em soluções digitais eficientes.
      </motion.p>
      <motion.div
        variants={item}
        className="flex gap-3 lg:gap-4 w-full lg:w-auto mt-6 flex-col lg:flex-row"
      >
        <Button
          variant="outline"
          size="lg"
          className="w-full py-6 lg:w-auto lg:min-w-[180px] text-base font-medium border-2 hover:bg-zinc-50 bg-transparent"
        >
          Saiba Mais <ChevronDown />
        </Button>

        <Button
          asChild
          size="lg"
          className="w-full py-6 lg:w-auto lg:min-w-[180px] text-base font-medium bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/25"
        >
          <a
            href="https://wa.me/558592248448?text=ol%C3%A1%20gostaria%20de%20realizar%20um%20or%C3%A7amento%20para%20um%20projeto!"
            target="_blank"
            rel="noopener noreferrer"
          >
            Começar Projeto
            <ArrowRight />
          </a>
        </Button>
      </motion.div>
      <motion.div
        variants={item}
        className="flex gap-3 lg:gap-4 w-full items-center lg:w-auto mt-12 flex-col "
      >
        <div className="flex flex-col items-center  gap-4">
          <div className="flex flex-row flex-wrap items-center  ">
            <AvatarGroup>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@maxleiter"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
              <AvatarGroupCount>+3</AvatarGroupCount>
            </AvatarGroup>
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-5 h-5 fill-zinc-700 dark:fill-zinc-300"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <span className="text-subtitle font-light text-sm">
            Venha ser mais um cliente satisfeito
          </span>
        </div>
      </motion.div>
    </motion.section>
  );
};
