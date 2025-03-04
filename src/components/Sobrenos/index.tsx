import { CircleCheck, Award, Users, Target } from "lucide-react"

export default function Sobrenos() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Sobre Nós</h1>
        <div className="w-24 h-1 bg-green-300 mx-auto mb-8"></div>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-3xl mx-auto">
          Somos uma Assistência Técnica Especializada autorizada que trabalha com equipamentos dentro e fora da
          garantia. Com mais de 30 anos de experiência no mercado, nossa equipe altamente qualificada está preparada
          para oferecer as melhores soluções.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mt-16">
        <div className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full mr-4">
              <Target className="text-green-500 h-6 w-6" />
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
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full mr-4">
              <Award className="text-green-500 h-6 w-6" />
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
        <div className="flex items-center mb-6">
          <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full mr-4">
            <Users className="text-green-500 h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold">Nossos Valores</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <CircleCheck className="text-green-400 h-5 w-5 flex-shrink-0" />
              <span className="text-zinc-700 dark:text-zinc-300">Transparência em todos os processos</span>
            </li>
            <li className="flex items-center gap-3">
              <CircleCheck className="text-green-400 h-5 w-5 flex-shrink-0" />
              <span className="text-zinc-700 dark:text-zinc-300">Compromisso com a qualidade</span>
            </li>
          </ul>

          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <CircleCheck className="text-green-400 h-5 w-5 flex-shrink-0" />
              <span className="text-zinc-700 dark:text-zinc-300">Respeito ao cliente</span>
            </li>
            <li className="flex items-center gap-3">
              <CircleCheck className="text-green-400 h-5 w-5 flex-shrink-0" />
              <span className="text-zinc-700 dark:text-zinc-300">Ética profissional</span>
            </li>
          </ul>
        </div>
      </div>

      
    </div>
  )
}

