import Image from "next/image"; // Import necessário para next/image
import banner from "@/utils/banner.webp"; // Import da imagem
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";


export default function Hero() {
  return (
    <div>
      <header className="h-screen bg-gradient-to-b from-primary/10 to-background">
        <div className="flex justify-center items-center w-full h-screen">
          <div className="w-[40%]">

            <h3 className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold focus:outline-none focus:ring-2 
            focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 transition-colors">Desde 1996 - Mais de 25 anos de experiência</h3>

            <h1 className="py-5 text-6xl font-bold">Assistência Técnica Especializada em Informática</h1>

            <h2 className="pb-2 text-xl w-3/4 text-muted-foreground">
              Manutenção, recuperação e conserto de computadores, notebooks,
              impressoras e mais
            </h2>

            <div className="flex gap-6 py-3">

              <Button><a className="flex items-center justify-center gap-4 py-14 px-6"  href="">Agendar Visita <ArrowRight/></a>  </Button>
              <a className="flex justify-center text-center items-center border-[1.5px] text-base font-semibold rounded-md px-5 hover:bg-primary-foreground " href="">Nossos Serviços </a>

            </div>

            <div className="flex gap-3">
              <div className="border-2 w-48 p-3 rounded-lg">
                <h1 className="text-2xl font-bold">30+</h1>
                <h3 className="  text-sm text-muted-foreground">Anos no mercado</h3>
              </div>
              <div className="border-2 w-48 p-3 rounded-lg">
                <h1 className="text-2xl font-bold">100%</h1>
                <h3 className="  text-sm text-muted-foreground">Satisfação</h3>
              </div>
              <div className="border-2 w-48 p-3 rounded-lg">
                <h1 className="text-2xl font-bold">30+</h1>
                <h3 className="  text-sm text-muted-foreground">Anos no mercado</h3>
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
