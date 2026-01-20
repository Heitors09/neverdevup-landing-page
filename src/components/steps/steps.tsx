import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Contato',
    description:
      'Iniciamos com uma conversa para entender suas necessidades, objetivos e expectativas. Nosso time oferece um atendimento acolhedor e profissional desde o primeiro momento.',
  },
  {
    number: '02',
    title: 'Alinhamento',
    description:
      'Definimos juntos o escopo do projeto, prazos e entregas. Mapeamos exatamente o que você deseja alcançar para garantir que cada etapa esteja clara.',
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    description:
      'Com tudo definido, iniciamos a construção do seu projeto utilizando tecnologias modernas, mantendo você informado sobre o progresso até a entrega final.',
  },
];

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
      className="bg-zinc-50/25 dark:bg-zinc-700/25 w-full py-12 gap-2  flex flex-col items-center justify-center"
    >
      <span className="text-sm text-center lg:text-base font-semibold tracking-wide uppercase bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
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
          className="w-full relative flex rounded-md ring-1 ring-zinc-200 dark:bg-zinc-700 shadow-sm p-8 bg-white"
        >
          <p className="absolute bg-blue-500 -top-3 left-37 px-3 py-1 rounded-full font-medium text-white">
            01
          </p>
          <main className="flex flex-col gap-2">
            <h3 className="font-medium text-2xl">Contato</h3>
            <p className="text-zinc-500 text-sm dark:text-zinc-200 max-w-[200px] font-medium">
              Atendimento inicial{' '}
              <span className="text-blue-500">acolhedor</span> e profissional.
            </p>
          </main>
        </motion.div>

        <motion.div
          variants={card}
          className="w-full flex relative rounded-md dark:bg-zinc-700 ring-1 ring-zinc-200 shadow-sm p-8 bg-white"
        >
          <main className="flex flex-col gap-2">
            <p className="absolute bg-blue-500 -top-3 left-37 px-3 py-1 rounded-full font-medium text-white">
              02
            </p>
            <h3 className="font-medium text-2xl">Alinhamento</h3>
            <p className="text-zinc-500 dark:text-zinc-200 text-sm  max-w-[200px] font-medium">
              Mapeamento do que o <span className="text-blue-500">cliente</span>{' '}
              deseja alcançar.
            </p>
          </main>
        </motion.div>

        <motion.div
          variants={card}
          className="w-full flex relative rounded-md dark:bg-zinc-700 ring-1 ring-zinc-200  shadow-sm p-8 bg-white"
        >
          <main className="flex flex-col gap-2">
            <p className="absolute bg-blue-500 -top-3 left-37 px-3 py-1 rounded-full font-medium text-white">
              03
            </p>
            <h3 className="font-medium text-2xl">Start</h3>
            <p className="text-zinc-500 text-sm  dark:text-zinc-200 max-w-[200px] font-medium">
              Início oficial do{' '}
              <span className="text-blue-500">desenvolvimento</span>.
            </p>
          </main>
        </motion.div>
      </motion.section>
      <div className="w-full px-6 lg:px-[417px] pt-8">
        {/* Steps */}
        <div className=" space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6 w-full">
              <div className="flex-1 border-l border-border pl-6">
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
