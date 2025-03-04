import banner from "@/utils/banner.webp";
import { CircleCheck } from "lucide-react";
import Image from "next/image"; 

export default function Sobrenos() {
  return (
    <div>
      <section className="flex items-center justify-center h-screen gap-14 w-full">
  {/* Imagem */}
  <div className="flex-1 flex justify-center">
    <Image
      className="rounded-lg shadow-2xl"
      src={banner}
      alt="Foto da loja"
      width={800}
      height={800}
      priority
    />
  </div>

  {/* Texto */}
  <div className="flex-1">
    <h1 className="text-3xl font-bold mb-5">Sobre Nós</h1>
    <p className="mb-5 text-zinc-500 dark:text-zinc-400">
      Somos uma Assistência Técnica Especializada autorizada que trabalha
      com equipamentos dentro e fora da garantia. Com mais de 30 anos de
      experiência no mercado, nossa equipe altamente qualificada está
      preparada para oferecer as melhores soluções em manutenção de
      equipamentos de informática.
    </p>

    <h2 className="mb-5 text-xl font-bold" >Nossa Missão</h2>
    <p className="text-zinc-500 dark:text-zinc-400">
      Fornecer serviços de assistência técnica de alta qualidade, com
      transparência, ética e honestidade, garantindo a satisfação total de
      nossos clientes.
    </p>

    <h3 className="mt-5 text-xl font-bold mb-2">Nossos Valores</h3>
<ul className="list-none ml-0 text-zinc-500 dark:text-zinc-400">
  <li className="flex items-center gap-2 mb-2">
    <CircleCheck className="text-green-300" />
    Transparência em todos os processos
  </li>
  <li className="flex items-center gap-2 mb-2">
    <CircleCheck className="text-green-300" />
    Compromisso com a qualidade
  </li>
  <li className="flex items-center gap-2 mb-2">
    <CircleCheck className="text-green-300" />
    Respeito ao cliente
  </li>
  <li className="flex items-center gap-2 mb-2">
    <CircleCheck className="text-green-300" />
    Ética profissional
  </li>
</ul>

  </div>
</section>

    </div>
  );
}
