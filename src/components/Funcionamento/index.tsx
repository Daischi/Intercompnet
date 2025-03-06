
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Guiafunciona() {
  return (
    <section className="w-full py-12 md:py-16 flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <span
            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold 
            border-transparent bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 cursor-pointer hover:scale-105"
          >
            Processo Simplificado
          </span>
          <h1 className="text-3xl font-bold mt-4 mb-2">Como Funciona?</h1>
          <div className="w-24 h-1 bg-gray-300 mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl">Conheça nosso processo de atendimento passo a passo</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {/* Processo de Atendimento */}
          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 sr-only">Etapas do Processo</h2>

            {/* Etapa 01 - Entrada */}
            <div className="mb-6">
              <div className="flex items-start gap-4">
                <span className="font-bold flex items-center justify-center w-8 h-8 border rounded-full bg-muted shrink-0">
                  01
                </span>
                <div>
                  <h3 className="text-xl font-bold">Entrada</h3>
                  <p className="text-muted-foreground mt-1">
                    Traga seu equipamento até nossa assistência e aguarde para orçamento e avaliação técnica.
                  </p>
                </div>
              </div>
            </div>

            {/* Etapa 02 - Cadastro */}
            <div className="mb-6">
              <div className="flex items-start gap-4">
                <span className="font-bold flex items-center justify-center w-8 h-8 border rounded-full bg-muted shrink-0">
                  02
                </span>
                <div>
                  <h3 className="text-xl font-bold">Cadastro</h3>
                  <p className="text-muted-foreground mt-1">
                    Realizamos um cadastro completo com seus dados e informações do equipamento.
                  </p>
                </div>
              </div>
            </div>

            {/* Etapa 03 - Avaliação */}
            <div className="mb-6">
              <div className="flex items-start gap-4">
                <span className="font-bold flex items-center justify-center w-8 h-8 border rounded-full bg-muted shrink-0">
                  03
                </span>
                <div>
                  <h3 className="text-xl font-bold">Avaliação</h3>
                  <p className="text-muted-foreground mt-1">
                    Nossa equipe técnica fará uma avaliação detalhada do seu equipamento.
                  </p>
                </div>
              </div>
            </div>

            {/* Etapa 04 - Orçamento */}
            <div className="mb-6">
              <div className="flex items-start gap-4">
                <span className="font-bold flex items-center justify-center w-8 h-8 border rounded-full bg-muted shrink-0">
                  04
                </span>
                <div>
                  <h3 className="text-xl font-bold">Orçamento</h3>
                  <p className="text-muted-foreground mt-1">
                    Apresentamos um orçamento detalhado com todos os serviços necessários.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Informações Importantes */}
          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-6">Informações Importantes</h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="prazo-entrega">
                <AccordionTrigger className="text-base font-semibold">Tipos de Orçamento</AccordionTrigger>
                <AccordionContent className="">
                  <li className="mb-3">
                  Normal (Sem urgência): Gratuito
                  </li>
                  <li>
                  Com urgência: Taxa de R$ 80,00
                  </li>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="garantia">
                <AccordionTrigger className="text-base">Formas de Pagamento</AccordionTrigger>
                <AccordionContent>
                  <li className="mb-2">Dinheiro</li>
                  <li className="mb-2">Cartão de crédito (até 12x)
                  </li>
                  <li className="mb-2">Cartão de débito
                  </li>
                  <li className="mb-2">PIX</li>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pagamento">
                <AccordionTrigger className="text-base">Garantia</AccordionTrigger>
                <AccordionContent>
                Todos os serviços possuem garantia de 90 dias, conforme o código de defesa do consumidor.

                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="orcamento-recusado">
                <AccordionTrigger className="text-base">Prazo de Entrega</AccordionTrigger>
                <AccordionContent>
                O prazo médio é de 24 a 48 horas, podendo variar conforme a complexidade do serviço.

                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

