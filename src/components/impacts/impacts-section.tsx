import { Bot, Rabbit, Rocket, Shield } from 'lucide-react';

export const ImpactsSection = () => {
  return (
    <div className="w-full relative overflow-hidden border-t border-zinc-200 dark:border-zinc-800">
      {/* Textura de fundo sutil */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative bg-zinc-100/50 dark:bg-zinc-700/25 py-16 lg:py-24">
        {/* Header */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <span className="text-sm lg:text-base tracking-wide uppercase text-zinc-600 dark:text-zinc-400 mb-4 block">
            Por que investir conosco
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-zinc-900 dark:text-white">
            Qualidade, Estratégia e Resultados Reais
          </h2>

          <p className="hidden lg:block text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Desenvolvemos soluções digitais sob medida para empresas que querem
            escalar. Do conceito ao deploy, com qualidade e velocidade.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/20 via-blue-500/20 to-blue-500/20" />

            {/* Timeline Items */}
            <div className="space-y-16 lg:space-y-24">
              {/* Item 1 - Direita no desktop */}
              <div className="relative flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Espaçador esquerdo - desktop */}
                <div className="hidden lg:block lg:w-1/2" />

                {/* Ponto na timeline - desktop */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-white dark:bg-zinc-900 rounded-full border-4 border-blue-500 items-center justify-center shadow-lg shadow-blue-500/25 z-10">
                  <Rocket className="text-blue-500 size-7" />
                </div>

                {/* Conteúdo */}
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="bg-white ring-1 ring-blue-100 dark:bg-zinc-800 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-700 shadow-sm transition-shadow">
                    <div className="lg:hidden inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25 mb-4">
                      <Rocket className="text-white size-6" />
                    </div>

                    <div className="flex items-start gap-3 mb-3"></div>

                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-zinc-900 dark:text-white">
                      Software Que Impulsiona Resultados
                    </h3>

                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      Transformamos suas ideias em soluções digitais que geram
                      valor real. Cada projeto é desenvolvido para escalar junto
                      com seu negócio e entregar ROI mensurável.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="lg:w-1/2 lg:pr-12 lg:text-right">
                  <div className="bg-white ring-1 ring-blue-100 dark:bg-zinc-800 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-700 shadow-sm transition-shadow">
                    <div className="lg:hidden inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25 mb-4">
                      <Bot className="text-white size-6" />
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-zinc-900 dark:text-white">
                      Automatize e Otimize Processos
                    </h3>

                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      Elimine tarefas manuais e reduza custos operacionais.
                      Nossos sistemas são projetados para integrar com sua
                      operação e aumentar a produtividade da sua equipe.
                    </p>
                  </div>
                </div>

                {/* Ponto na timeline - desktop */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-white dark:bg-zinc-900 rounded-full border-4 border-blue-500 items-center justify-center shadow-lg shadow-blue-500/25 z-10">
                  <Bot className="text-blue-500 size-7" />
                </div>

                {/* Espaçador direito - desktop */}
                <div className="hidden lg:block lg:w-1/2" />
              </div>

              {/* Item 3 - Direita no desktop */}
              <div className="relative flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Espaçador esquerdo - desktop */}
                <div className="hidden lg:block lg:w-1/2" />

                {/* Ponto na timeline - desktop */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-white dark:bg-zinc-900 rounded-full border-4 border-blue-500 items-center justify-center shadow-lg shadow-blue-500/25 z-10">
                  <Shield className="text-blue-500 size-7" />
                </div>

                {/* Conteúdo */}
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="bg-white ring-1 ring-blue-100 dark:bg-zinc-800 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-700 shadow-sm transition-shadow">
                    {/* Ícone mobile */}
                    <div className="lg:hidden inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25 mb-4">
                      <Shield className="text-white size-6" />
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-zinc-900 dark:text-white">
                      Código Robusto e Escalável
                    </h3>

                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      Desenvolvemos com as melhores práticas do mercado.
                      Arquiteturas modernas, código limpo e infraestrutura
                      resiliente garantem que seu software funcione sem dores de
                      cabeça.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 4 - Esquerda no desktop */}
              <div className="relative flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Conteúdo */}
                <div className="lg:w-1/2 lg:pr-12 lg:text-right">
                  <div className="bg-white ring-1 ring-blue-100 dark:bg-zinc-800 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-700 shadow-sm transition-shadow">
                    {/* Ícone mobile */}
                    <div className="lg:hidden inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25 mb-4">
                      <Rabbit className="text-white size-6" />
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-zinc-900 dark:text-white">
                      Do Conceito ao Deploy Rápido
                    </h3>

                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      Metodologias ágeis e entregas incrementais para que você
                      veja resultados rapidamente. Validação contínua e
                      iterações que acompanham a evolução do seu negócio.
                    </p>
                  </div>
                </div>

                {/* Ponto na timeline - desktop */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-white dark:bg-zinc-900 rounded-full border-4 border-blue-500 items-center justify-center shadow-lg shadow-blue-500/25 z-10">
                  <Rabbit className="text-blue-500 size-7" />
                </div>

                {/* Espaçador direito - desktop */}
                <div className="hidden lg:block lg:w-1/2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
