import Image from "next/image";
import banner from "@/utils/banner.webp";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div id="hero">
      <header>
        <div className="flex flex-col md:flex-row justify-center items-center w-full min-h-screen p-4 md:p-0">
          <div className="w-full md:w-[40%] mb-8 md:mb-0">
            <h3
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold focus:outline-none focus:ring-2 
            focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-500 cursor-pointer hover:scale-105"
            >
              Desde 1996 - Mais de 25 anos de experiência
            </h3>

            <h1 className="py-5 text-3xl sm:text-4xl md:text-6xl font-bold">
              Assistência Técnica Especializada em Informática
            </h1>

            <h2 className="pb-2 text-base sm:text-lg md:text-xl w-full md:w-3/4 text-muted-foreground">
              Manutenção, recuperação e conserto de computadores, notebooks,
              impressoras e mais
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 py-3">
              <Button className="group transition-colors duration-300">
                <a
                  className="flex items-center justify-center gap-3 py-3 sm:py-14 px-4 sm:px-6"
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
                  className="flex items-center justify-center gap-4 py-3 sm:py-14 px-4 sm:px-6"
                  href="#servicos"
                >
                  Nossos Serviços
                </a>{" "}
              </Button>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="w-[30%] sm:w-48 p-2 sm:p-3">
                <h1 className="text-xl sm:text-2xl font-bold">30+</h1>
                <h3 className="text-xs sm:text-sm text-muted-foreground">
                  Anos no mercado
                </h3>
              </div>
              <div className="w-[30%] sm:w-48 p-2 sm:p-3">
                <h1 className="text-xl sm:text-2xl font-bold">100%</h1>
                <h3 className="text-xs sm:text-sm text-muted-foreground">
                  Satisfação
                </h3>
              </div>
              <div className="w-[30%] sm:w-48 p-2 sm:p-3">
                <h1 className="text-xl sm:text-2xl font-bold">30+</h1>
                <h3 className="text-xs sm:text-sm text-muted-foreground">
                  Anos no mercado
                </h3>
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <Image
              className="rounded-lg shadow-2xl w-full h-auto max-h-[450px] md:max-h-none object-cover"
              src={banner || "/placeholder.svg"}
              alt="Foto da loja"
              width={800}
              height={800}
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </div>
      </header>
    </div>
  );
}
