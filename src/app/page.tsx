import Hero from "@/components/Hero.tsx"

import ServicesTabs from "@/components/Servicespage"
import Funcionamento from "@/components/Funcionamento"
import Sobrenos from "@/components/Sobrenos"
import Duvidas from "@/components/Duvidas"
import Navegation from "@/components/Navegation"

export default function Home() {
  return (
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
      </main>

      {/* Footer */}
      <footer className="mt-24">
      <footer className="border-t border-gray-200 py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1 - InterCompnet */}
          <div>
            <h3 className="text-lg font-bold mb-3">InterCompnet</h3>
            <p className="text-sm text-gray-600">
              Desde 1996 oferecendo serviços de qualidade em manutenção de computadores e impressoras.
            </p>
          </div>

          {/* Coluna 2 - Serviços */}
          <div>
            <h3 className="text-lg font-bold mb-3">Serviços</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Manutenção de Computadores</li>
              <li>Assistência para Impressoras</li>
              <li>Recuperação de Dados</li>
              <li>Suporte Técnico</li>
            </ul>
          </div>

          {/* Coluna 3 - Marcas */}
          <div>
            <h3 className="text-lg font-bold mb-3">Marcas</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>HP</li>
              <li>Dell</li>
              <li>Epson</li>
              <li>Lenovo</li>
            </ul>
          </div>

          {/* Coluna 4 - Contato */}
          <div>
            <h3 className="text-lg font-bold mb-3">Contato</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>(11) 5535-7587</li>
              <li>(11) 99445-7214</li>
              <li>
                <a href="mailto:sac@intercompnet.com.br" className="hover:text-primary">
                  sac@intercompnet.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} InterCompnet. Todos os direitos reservados.</p>
          <p className="mt-1">Desde 1996 - Mais de 25 anos de experiência</p>
        </div>
      </div>
    </footer>
      </footer>
    </div>
  );
}

