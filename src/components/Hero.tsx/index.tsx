import Image from "next/image"; // Import necessário para next/image
import banner from "@/utils/banner.webp"; // Import da imagem
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div>
      <header>
        <div className="flex justify-center items-center w-full h-screen">
          <div className="w-[40%]">
            <h3
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold focus:outline-none focus:ring-2 
            focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-500 cursor-pointer hover:scale-105"
            >
              Desde 1996 - Mais de 25 anos de experiência
            </h3>

            <h1 className="py-5 text-6xl font-bold">
              Assistência Técnica Especializada em Informática
            </h1>

            <h2 className="pb-2 text-xl w-3/4 text-muted-foreground">
              Manutenção, recuperação e conserto de computadores, notebooks,
              impressoras e mais
            </h2>

            <div className="flex gap-6 py-3">
              <Button className="group transition-colors duration-300">
                <a
                  className="flex items-center justify-center gap-3 py-14 px-6"
                  href=""
                >
                  Agendar Visita
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                </a>
              </Button>

              <Button
                className="bg-white dark:bg-black dark:text-white text-black 
              dark:hover:bg-primary/10 hover:bg-primary/10 
              transition-all hover:scale-105 duration-300 dark:border-[1.5px]"
              >
                <a
                  className="flex items-center justify-center gap-4 py-14 px-6"
                  href=""
                >
                  Nossos Serviços
                </a>{" "}
              </Button>
            </div>

            <div className="flex gap-3">
              <div className="w-48 p-3">
                <h1 className="text-2xl font-bold">30+</h1>
                <h3 className="  text-sm text-muted-foreground">
                  Anos no mercado
                </h3>
              </div>
              <div className="w-48 p-3">
                <h1 className="text-2xl font-bold">100%</h1>
                <h3 className="  text-sm text-muted-foreground">Satisfação</h3>
              </div>
              <div className="w-48 p-3">
                <h1 className="text-2xl font-bold">30+</h1>
                <h3 className="  text-sm text-muted-foreground">
                  Anos no mercado
                </h3>
              </div>
            </div>
          </div>

          <div>
            <Image
              className="rounded-lg shadow-2xl"
              src={banner}
              alt="Foto da loja"
              width={800} // Ajuste conforme necessário
              height={800} // Ajuste conforme necessário
              priority // Carregar mais rápido
            />
          </div>
        </div>
      </header>
    </div>
  );
}
