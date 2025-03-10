export default function Footer() {
  return (
    <footer className="border-t py-12 transition-colors duration-300 bg-white border-gray-200 text-gray-700 dark:bg-[#0f0f0f] dark:border-gray-800 dark:text-gray-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1 - InterCompnet */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-black dark:text-white">InterCompnet</h3>
            <p className="text-sm text-gray-600 dark:text-gray-500"> 
              Desde 1996 oferecendo serviços de qualidade em manutenção de computadores e impressoras.
            </p>
          </div>

          {/* Coluna 2 - Serviços */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-black dark:text-white">Serviços</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-500"> 
              <li>Manutenção de Computadores</li>
              <li>Assistência para Impressoras</li>
              <li>Recuperação de Dados</li>
              <li>Suporte Técnico</li>
            </ul>
          </div>

          {/* Coluna 3 - Marcas */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-black dark:text-white">Marcas</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-500"> 
              <li>HP</li>
              <li>Dell</li>
              <li>Epson</li>
              <li>Lenovo</li>
            </ul>
          </div>

          {/* Coluna 4 - Contato */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-black dark:text-white">Contato</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-500"> 
              <li>(11) 5535-7587</li>
              <li>(11) 99445-7214</li>
              <li>
                <a href="mailto:sac@intercompnet.com.br" className="hover:text-blue-400 text-gray-700 dark:text-gray-300"> 
                  sac@intercompnet.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t text-center text-sm border-gray-200 text-gray-600 dark:border-gray-800 dark:text-gray-500"> 
          <p>© {new Date().getFullYear()} InterCompnet. Todos os direitos reservados.</p>
          <p className="mt-1">Desde 1996 - Mais de 25 anos de experiência</p>
        </div>
      </div>
    </footer>
  );
}
