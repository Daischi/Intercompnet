import Image from "next/image"; // Import necessário para next/image
import banner from "@/utils/banner.webp"; // Import da imagem

export default function Hero() {
  return (
    <div>
      <header>
        <div>
          <div>
            <h3>Desde 1996 - Mais de 25 anos de experiência</h3>
            <h1>Assistência Técnica Especializada em Informática</h1>

            <h2>
              Manutenção, recuperação e conserto de computadores, notebooks,
              impressoras e mais
            </h2>

            <div>
              <a href="">Agendar Visita</a>
              <a href="">Nossos Serviços </a>
            </div>

            <div>
              <div>
                <h1>30+</h1>
                <h3>Anos no mercado</h3>
              </div>
              <div>
                <h1>20k+</h1>
                <h3>Clientes atendidos</h3>
              </div>
              <div>
                <h1>100%</h1>
                <h3>Satisfação</h3>
              </div>
            </div>
          </div>

          <div>
            <Image
              src={banner} // Caminho da imagem
              alt="Banner da assistência técnica"
              width={600} // Ajuste conforme necessário
              height={400} // Ajuste conforme necessário
              priority // Carregar mais rápido
            />
          </div>
        </div>
      </header>
    </div>
  );
}
