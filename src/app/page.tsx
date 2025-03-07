import Hero from "@/components/Hero.tsx";
import Navegation from "@/components/Navegation/index";
import ServicesTabs from "@/components/Servicespage";
import Funcionamento from "@/components/Funcionamento";
import Sobrenos from "@/components/Sobrenos";
import Duvidas from "@/components/Duvidas";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background">
      {/* Header */}
      <header>
        <Navegation />
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4">
        {/* Hero Section - Ocupa a tela inteira */}
        <section id="hero" className="min-h-screen flex items-center justify-center">
          <Hero />
        </section>

        {/* About Us Section - Espaçamento médio */}
        <section id="sobre-nos" className="py-20">
          <Sobrenos />
        </section>

        {/* Services Section - Ocupa boa parte da tela */}
        <section id="servicos" className="min-h-[80vh] flex items-center justify-center">
          <ServicesTabs />
        </section>

        {/* How It Works Section - Espaçamento controlado */}
        <section id="funcionamento" className="py-20">
          <Funcionamento />
        </section>

        {/* FAQ Section - Mantém um tamanho proporcional */}
        <section id="duvidas" className="min-h-[70vh] flex items-center justify-center">
          <Duvidas />
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-24">
        {/* Conteúdo do footer */}
      </footer>
    </div>
  );
}


