import { Mail, Phone } from 'lucide-react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
export const Contact = () => {
  return (
    <div
      id="contato"
      className="w-full py-12 max-lg:flex max-lg:flex-col max-lg:items-center lg:px-[417px] "
    >
      <div className="flex">
        <main className="lg:w-[50%]">
          <img className="hidden lg:block" src={'/contacts.png'} alt="logo" />
        </main>
        <aside className="bg-zinc-100 dark:bg-zinc-900/80 lg:max-h-[628px] flex flex-col gap-4 items-start p-6 mx-2 lg:w-[50%] rounded-md">
          <span className="text-sm text-center lg:text-base font-semibold tracking-wide uppercase bg-gradient-to-r from-orange-400 via-[#FF8C00] to-orange-600 bg-clip-text  text-transparent">
            Entre em Contato
          </span>
          <h3 className="lg:text-4xl text-xl max-w-[350px] max-lg:max-w-[300px] font-semibold">
            Vamos conversar, Fale conosco
          </h3>
          <p className="max-w-[300px] dark:text-zinc-300 max-lg:text-sm text-zinc-500">
            Pronto para transformar sua ideia em realidade? Fale com a gente.
          </p>
          <form className="flex flex-col max-lg:w-full gap-4 ">
            <label className="font-semibold text-sm">Mensagem direta</label>
            <div className="w-full flex max-lg:flex-col gap-2">
              <Input className="bg-white" placeholder="Nome" />
              <Input className="bg-white" placeholder="Sobrenome" />
            </div>
            <Input
              className="bg-white max-lg:w-full"
              placeholder="Endereço de Email..."
            />
            <Textarea
              className="bg-white resize-none"
              placeholder="Deixe-nos uma mensagem"
            />
          </form>
          <div className=" w-full  flex gap-2">
            <div className="bg-[#FF8C00]/64 dark:bg-[#FF8C00] size-10 rounded-md flex items-center justify-center">
              <Phone className="text-white " />
            </div>
            <div className="flex flex-col">
              <h4 className="font-medium text-sm">Whatsapp</h4>
              <p className="text-zinc-500 dark:text-zinc-300 text-sm">
                (88)88888-8888
              </p>
            </div>
          </div>
          <div className=" w-full flex gap-2">
            <div className="bg-[#FF8C00]/64 dark:bg-[#FF8C00] size-10 rounded-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-6 h-6"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-.88a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26Z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h4 className="font-medium text-sm">Instagram</h4>
              <p className="text-zinc-500 dark:text-zinc-300 text-sm">
                instagram.com/neverdevup
              </p>
            </div>
          </div>
          <div className=" w-full flex gap-2">
            <div className="bg-[#FF8C00]/64 dark:bg-[#FF8C00] size-10 rounded-md flex items-center justify-center">
              <Mail className="text-white" />
            </div>
            <div className="flex flex-col">
              <h4 className="font-medium text-sm">Email</h4>
              <p className="text-zinc-500 dark:text-zinc-300 text-sm">
                instagram.com/neverdevup
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
