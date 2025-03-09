export default function Footer(){

return(


<div>




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










</div>


)



}