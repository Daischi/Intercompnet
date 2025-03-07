import { CircleCheck, Award, Users, Target } from "lucide-react"

export default function Sobrenos() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl scale-95">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">Sobre Nós</h1>
        <div className="w-24 h-1 bg-gray-300 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mt-16">
        <div className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full mr-4">
              <Target className="text-gray-600 dark:text-gray-300 h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold">Nossa Missão</h2>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400">
            Fornecer serviços de assistência técnica de alta qualidade, com transparência, ética e honestidade,
            garantindo a satisfação total de nossos clientes.
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full mr-4">
              <Award className="text-gray-600 dark:text-gray-300 h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold">Nossa Experiência</h2>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400">
            Com mais de 30 anos no mercado de assistência técnica, desenvolvemos expertise em diversos equipamentos de
            informática, oferecendo soluções rápidas e eficientes para nossos clientes.
          </p>
        </div>
      </div>

      <div className="mt-16 bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-700 rounded-full mb-4">
            <Users className="text-gray-600 dark:text-gray-300 h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold">Nossos Valores</h2>
          <div className="w-16 h-1 bg-gray-300 mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-gray-50 dark:bg-zinc-700/30 p-5 rounded-lg transition-transform hover:scale-105">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                <CircleCheck className="text-gray-600 dark:text-gray-300 h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg">Transparência</h3>
            </div>
            <p className="text-zinc-600 dark:text-zinc-300 pl-10">
              Em todos os processos e comunicações com nossos clientes
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-zinc-700/30 p-5 rounded-lg transition-transform hover:scale-105">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                <CircleCheck className="text-gray-600 dark:text-gray-300 h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg">Qualidade</h3>
            </div>
            <p className="text-zinc-600 dark:text-zinc-300 pl-10">
              Compromisso com a excelência em todos os serviços prestados
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-zinc-700/30 p-5 rounded-lg transition-transform hover:scale-105">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                <CircleCheck className="text-gray-600 dark:text-gray-300 h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg">Respeito</h3>
            </div>
            <p className="text-zinc-600 dark:text-zinc-300 pl-10">
              Tratamento respeitoso e atencioso a todos os nossos clientes
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-zinc-700/30 p-5 rounded-lg transition-transform hover:scale-105">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                <CircleCheck className="text-gray-600 dark:text-gray-300 h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg">Ética</h3>
            </div>
            <p className="text-zinc-600 dark:text-zinc-300 pl-10">
              Conduta profissional ética em todas as nossas ações e decisões
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">{/* Empty section preserved from original */}</div>
    </div>
  )
}

