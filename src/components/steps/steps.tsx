import { ChevronsRight } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export const Steps = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-150px',
  });

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const card = {
    hidden: {
      opacity: 0,
      y: 24,
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
    <div
      id="sobre"
      className="bg-orange-50/25 dark:bg-zinc-700/25 w-full py-12 gap-2 inset-shadow-sm flex flex-col items-center justify-center"
    >
      <span className="text-sm text-center lg:text-base font-semibold tracking-wide uppercase bg-gradient-to-r from-orange-400 via-[#FF8C00] to-orange-600 bg-clip-text text-transparent">
        Da Ideia à Entrega
      </span>

      <h3 className="text-4xl lg:text-5xl text-center font-semibold">
        Etapas de Desenvolvimento
      </h3>

      <motion.section
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        className="w-full flex max-lg:flex-col mt-4 gap-2 items-center px-6 lg:px-[417px] justify-center"
      >
        <motion.div
          variants={card}
          className="w-full flex rounded-md dark:bg-zinc-700 shadow-sm p-8 bg-white"
        >
          <main className="flex flex-col gap-4">
            <h2 className="text-7xl font-medium text-orange-200">01</h2>
            <h3 className="font-medium text-3xl">Contato</h3>
            <p className="text-zinc-500 dark:text-zinc-200 max-w-[200px] font-medium">
              Atendimento inicial{' '}
              <span className="text-[#FF8C00]">acolhedor</span> e profissional.
            </p>
          </main>
          <ChevronsRight className="size-12 text-zinc-500 dark:text-zinc-200" />
        </motion.div>

        <motion.div
          variants={card}
          className="w-full flex rounded-md dark:bg-zinc-700 shadow-sm p-8 bg-white"
        >
          <main className="flex flex-col gap-4">
            <h2 className="text-7xl font-medium text-orange-200">02</h2>
            <h3 className="font-medium text-3xl">Alinhamento</h3>
            <p className="text-zinc-500 dark:text-zinc-200 max-w-[200px] font-medium">
              Mapeamento do que o{' '}
              <span className="text-[#FF8C00]">cliente</span> deseja alcançar.
            </p>
          </main>
          <ChevronsRight className="size-12 text-zinc-500 dark:text-zinc-200" />
        </motion.div>

        <motion.div
          variants={card}
          className="w-full flex rounded-md dark:bg-zinc-700 shadow-sm p-8 bg-white"
        >
          <main className="flex flex-col gap-4">
            <h2 className="text-7xl font-medium text-orange-200">03</h2>
            <h3 className="font-medium text-3xl">Start</h3>
            <p className="text-zinc-500 dark:text-zinc-200 max-w-[200px] font-medium">
              Início oficial do{' '}
              <span className="text-[#FF8C00]">desenvolvimento</span>.
            </p>
          </main>
          <ChevronsRight className="size-12 text-zinc-500 dark:text-zinc-200" />
        </motion.div>
      </motion.section>
    </div>
  );
};
