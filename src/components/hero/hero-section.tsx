import { Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { HeroVideoDialog } from '../ui/hero-video-dialog';
import { ScrollVelocityRow } from '../ui/scroll-based-velocity';

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
    <>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full px-4 bg-gradient-to-r from-orange-500 via-[#FF8C00] to-orange-500 py-3.5 lg:py-4"
      >
        <div className="max-w-7xl uppercase mx-auto">
          <ScrollVelocityRow className="text-white  flex justify-center gap-2 items-center text-center text-sm lg:text-base font-medium">
            <Rocket className="size-4 mx-3 lg:size-5 flex-shrink-0" />
            <span>
              <span className="font-semibold">Novo:</span> Oferecemos
              consultoria gratuita para seu projeto!
            </span>
            <a
              href="#contato"
              className="underline mx-5 underline-offset-4 hover:underline-offset-2 transition-all font-semibold hover:opacity-90"
            >
              Saiba mais
            </a>
          </ScrollVelocityRow>
        </div>
      </motion.div>
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex max-lg:px-6 py-12 flex-col w-full gap-2 items-center"
      >
        <motion.span
          variants={item}
          className="text-sm lg:text-base font-semibold tracking-wide uppercase bg-gradient-to-r from-orange-400 via-[#FF8C00] to-orange-600 bg-clip-text text-transparent"
        >
          Bem-vindo
        </motion.span>

        <motion.h3
          variants={item}
          className="text-4xl lg:text-5xl text-center font-semibold"
        >
          Somos a neverdevup
        </motion.h3>

        <motion.p
          variants={item}
          className="max-w-[800px] hidden lg:block lg:text-xl mt-4 text-center text-zinc-500"
        >
          Somos uma empresa de desenvolvimento de software que ajuda negócios a
          transformar ideias em soluções digitais eficientes. Trabalhamos com
          foco em entender o problema e pensar na melhor solução para seu
          problema.
        </motion.p>

        <motion.p
          variants={item}
          className="max-w-[300px] block lg:hidden text-sm text-center text-zinc-500"
        >
          Somos uma empresa de desenvolvimento de software que ajuda negócios a
          transformar ideias em soluções digitais eficientes.
        </motion.p>

        <motion.div variants={item}>
          <HeroVideoDialog
            className="block mt-2 dark:hidden"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/Ne-YYlb2faM?si=aKQNUTaIaL_C7MLj"
            thumbnailSrc="/image-1.png"
            thumbnailAlt="Dummy Video Thumbnail"
          />
        </motion.div>

        <motion.div
          variants={item}
          className="flex gap-3 lg:gap-4 w-full lg:w-auto mt-6 flex-col lg:flex-row"
        >
          <Button
            variant="outline"
            size="lg"
            className="w-full lg:w-auto lg:min-w-[180px] text-base font-medium border-2 hover:bg-zinc-50 bg-transparent"
          >
            Saiba Mais
          </Button>

          <Button
            size="lg"
            className="w-full lg:w-auto lg:min-w-[180px] text-base font-medium bg-[#FF8C00] hover:bg-orange-600 shadow-lg shadow-orange-500/25"
          >
            Começar Projeto
          </Button>
        </motion.div>
      </motion.section>
    </>
  );
};
