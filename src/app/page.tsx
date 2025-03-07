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
      <main className="container mx-auto px-4 space-y-24">
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>

        {/* About Us Section */}
        <section id="sobre-nos">
          <Sobrenos />
        </section>

        {/* Services Section */}
        <section id="servicos">
          <ServicesTabs />
        </section>

        {/* How It Works Section */}
        <section id="funcionamento">
          <Funcionamento />
        </section>

        {/* FAQ Section */}
        <section id="duvidas">
          <Duvidas />
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-24">
        
      </footer>
    </div>
  );
}

