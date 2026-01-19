import { Bot, Rabbit, Rocket, Shield, TrendingUp, Zap } from 'lucide-react';

export const ImpactsSection = () => {
  return (
    <div className="w-full gap-2 flex py-12 flex-col ">
      <span className="text-sm  text-center lg:text-base font-semibold tracking-wide uppercase bg-gradient-to-r from-orange-400 via-[#FF8C00] to-orange-600 bg-clip-text text-transparent">
        Por que investir conosco
      </span>

      <h3 className="text-4xl lg:text-5xl text-center font-semibold">
        Qualidade, Estratégia e Resultados Reais
      </h3>
      <div className="w-full lg:px-[417px] px-6 flex flex-col gap-12 lg:gap-26 py-12">
        <div className=" w-full flex max-lg:flex-col max-lg:gap-6 justify-between">
          <main className="flex flex-col gap-3">
            <div className=" size-10 ring-1 ring-[#FF8C00] rounded-md shadow-md shadow-orange-500/25 flex items-center justify-center">
              <Rocket className=" text-[#FF8C00] size-7" />
            </div>
            <span className="text-[#FF8C00] max-lg:text-sm font-medium uppercase">
              Acelere seu crescimento
            </span>
            <h3 className=" text-2xl lg:text-4xl  font-semibold">
              Software Que Impulsiona Resultados
            </h3>
            <p className="max-w-[450px] dark:text-zinc-300 text-zinc-500">
              Transformamos suas ideias em soluções digitais que geram valor
              real. Cada projeto é desenvolvido para escalar junto com seu
              negócio e entregar ROI mensurável.
            </p>
          </main>
          <aside>
            <div className="relative w-80 lg:w-[450px] h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-500/10 rounded-2xl border border-orange-500/20 backdrop-blur-sm">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-orange-400" />
                    <span className="text-orange-400 text-sm font-medium">
                      Crescimento
                    </span>
                  </div>
                  <div className="flex-1 flex items-end gap-2 pb-4">
                    {[40, 55, 45, 65, 80, 70, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-orange-500 to-orange-400 rounded-t-md opacity-80"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-zinc-500 dark:text-zinc-300">
                    <span>Jan</span>
                    <span>Jul</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-300 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
            </div>
          </aside>
        </div>
        <div className=" w-full flex max-lg:flex-col lg:flex-row-reverse gap-16">
          <main className="flex flex-col gap-3">
            <div className=" size-10 ring-1 ring-[#FF8C00] rounded-md shadow-md shadow-orange-500/25 flex items-center justify-center">
              <Bot className=" text-[#FF8C00] size-7" />
            </div>
            <span className="text-[#FF8C00] max-lg:text-sm  font-medium uppercase">
              Eficiência operacional
            </span>
            <h3 className="text-2xl lg:text-4xl  font-semibold">
              Automatize e Otimize Processos
            </h3>
            <p className="max-w-[450px] dark:text-zinc-300 text-zinc-500">
              Elimine tarefas manuais e reduza custos operacionais. Nossos
              sistemas são projetados para integrar com sua operação e aumentar
              a produtividade da sua equipe.
            </p>
          </main>
          <aside>
            <div key="automation" className="relative w-80 lg:w-[450px] h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-300/10 rounded-2xl border border-orange-500/20 backdrop-blur-sm p-6">
                <div className="space-y-4">
                  {[
                    'Entrada de Dados',
                    'Processamento',
                    'Automação',
                    'Resultado',
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                          i === 3
                            ? 'bg-orange-500 text-[#0a0a0f]'
                            : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                        }`}
                      >
                        {i + 1}
                      </div>
                      <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            i === 3 ? 'bg-orange-500' : 'bg-orange-200'
                          }`}
                          style={{ width: `${(i + 1) * 25}%` }}
                        />
                      </div>
                      <span className="text-gray-400 text-xs w-24">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-300 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Zap className="w-7 h-7 text-white" />
              </div>
            </div>
            ,
          </aside>
        </div>
        <div className=" w-full flex max-lg:flex-col max-lg:gap-6 justify-between">
          <main className="flex flex-col gap-3">
            <div className=" size-10 ring-1 ring-[#FF8C00] rounded-md shadow-md shadow-orange-500/25 flex items-center justify-center">
              <Shield className=" text-[#FF8C00] size-7" />
            </div>
            <span className="text-[#FF8C00] max-lg:text-sm font-medium uppercase">
              Segurança e confiabilidade
            </span>
            <h3 className=" text-2xl lg:text-4xl  font-semibold">
              Código Robusto e Escalável
            </h3>
            <p className="max-w-[450px] dark:text-zinc-300 text-zinc-500">
              Desenvolvemos com as melhores práticas do mercado. Arquiteturas
              modernas, código limpo e infraestrutura resiliente garantem que
              seu software funcione sem dores de cabeça.
            </p>
          </main>
          <aside>
            <div key="quality" className="relative w-80  lg:w-[450px] h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-500/10 rounded-2xl border border-orange-500/20 backdrop-blur-sm">
                <div className="p-4 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-zinc-800">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    <span className="text-zinc-500 text-xs ml-2">main.ts</span>
                  </div>
                  <div className="space-y-1 text-xs">
                    <div>
                      <span className="text-emerald-400">const</span>{' '}
                      <span className="text-cyan-300">projeto</span>{' '}
                      <span className="text-zinc-500">=</span>{' '}
                      <span className="text-amber-300">{'{'}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-zinc-400">qualidade:</span>{' '}
                      <span className="text-emerald-300">{'"excelente"'}</span>
                      <span className="text-zinc-500">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-zinc-400">testes:</span>{' '}
                      <span className="text-emerald-300">100</span>
                      <span className="text-zinc-500">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-zinc-400">cobertura:</span>{' '}
                      <span className="text-emerald-300">{'"95%"'}</span>
                      <span className="text-zinc-500">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-zinc-400">bugs:</span>{' '}
                      <span className="text-emerald-300">0</span>
                    </div>
                    <div>
                      <span className="text-amber-300">{'}'}</span>
                      <span className="text-zinc-500">;</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-300 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                <Shield className="w-7 h-7 text-white" />
              </div>
            </div>
          </aside>
        </div>
        <div className=" w-full flex max-lg:flex-col lg:flex-row-reverse gap-16">
          <main className="flex flex-col gap-3">
            <div className=" size-10 ring-1 ring-[#FF8C00] rounded-md shadow-md shadow-orange-500/25 flex items-center justify-center">
              <Rabbit className=" text-[#FF8C00] size-7" />
            </div>
            <span className="text-[#FF8C00] max-lg:text-sm  font-medium uppercase">
              Time-to-market acelerado
            </span>
            <h3 className="text-2xl lg:text-4xl  font-semibold">
              Do Conceito ao Deploy Rápido
            </h3>
            <p className="max-w-[450px] dark:text-zinc-300 text-zinc-500">
              Metodologias ágeis e entregas incrementais para que você veja
              resultados rapidamente. Validação contínua e iterações que
              acompanham a evolução do seu negócio.
            </p>
          </main>
          <aside>
            <div className="relative w-80 lg:w-[450px] h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-400/10 rounded-2xl border border-orange-500/20 backdrop-blur-sm p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Rocket className="w-5 h-5 text-orange-400" />
                  <span className="text-orange-400 text-sm font-medium">
                    Pipeline de Deploy
                  </span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Build', status: 'done' },
                    { label: 'Testes', status: 'done' },
                    { label: 'Review', status: 'done' },
                    { label: 'Deploy', status: 'active' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          item.status === 'done'
                            ? 'bg-orange-500 text-white'
                            : 'bg-orange-400 text-white animate-pulse'
                        }`}
                      >
                        {item.status === 'done' ? '✓' : '●'}
                      </div>
                      <span
                        className={`text-sm ${
                          item.status === 'active'
                            ? 'text-orange-400 font-medium'
                            : 'text-zinc-400'
                        }`}
                      >
                        {item.label}
                      </span>
                      {item.status === 'active' && (
                        <span className="ml-auto text-xs text-orange-400 bg-orange-500/20 px-2 py-1 rounded-full">
                          Em progresso
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-300 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Rocket className="w-7 h-7 text-white" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
