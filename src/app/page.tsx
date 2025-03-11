import Hero from "@/components/Hero.tsx"
import Contatos from "@/components/Contatos"
import ServicesTabs from "@/components/Servicespage"
import Funcionamento from "@/components/Funcionamento"
import Sobrenos from "@/components/Sobrenos"
import Duvidas from "@/components/Duvidas"
import Navegation from "@/components/Navegation"
import Footer from "@/components/Footer"

export default function Home() {
  return (
   
    <div>
   <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background">
      {/* Header */}
      <header>
        <Navegation />
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section - Ocupa a tela inteira */}
        <section id="hero" >
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


        <section>
        <Contatos/>


        </section>
      </main>

      
    </div>
{/* Footer */}
<footer className="mt-24">
      <Footer/>
      </footer>
    </div>
  );
}

