import banner from "@/utils/banner.webp";
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
    <h1 className="text-3xl font-bold mb-8">Sobre Nós</h1>
    <p className="mb-8">
      Somos uma Assistência Técnica Especializada autorizada que trabalha
      com equipamentos dentro e fora da garantia. Com mais de 30 anos de
      experiência no mercado, nossa equipe altamente qualificada está
      preparada para oferecer as melhores soluções em manutenção de
      equipamentos de informática.
    </p>

    <h2 className="mb-8 text-xl font-bold" >Nossa Missão</h2>
    <p>
      Fornecer serviços de assistência técnica de alta qualidade, com
      transparência, ética e honestidade, garantindo a satisfação total de
      nossos clientes.
    </p>

    <h3 className="mt-8 text-xl font-bold">Nossos Valores</h3>
    <ul className="list-disc ml-6">
      <li>Transparência em todos os processos</li>
      <li>Compromisso com a qualidade</li>
      <li>Respeito ao cliente</li>
      <li>Ética profissional</li>
    </ul>
  </div>
</section>

    </div>
  );
}
