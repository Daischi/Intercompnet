import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Guiafunciona() {
  return (
    <div>
      <div>
        <div className="flex justify-center h-full">
          <div className="text-center">
            <h3
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold focus:outline-none focus:ring-2 
            focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-500 cursor-pointer hover:scale-105"
            >
              Processo Simplificado
            </h3>

            <h1 className="text-3xl font-bold my-4">Como Funciona?</h1>
            <h2 className="text-muted-foreground">
              Conheça nosso processo de atendimento passo a passo
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-center gap-11 scale-90">
          <div className="border rounded-xl p-5">
            {/* Etapa 01 - Entrada */}

            <div className="p-5">
              <div className="flex items-start gap-4">
                <span className="font-semibold py-1 px-3 text-sm flex items-center justify-center w-8 h-8 border rounded-full bg-gray-100">
                  01
                </span>
                <div>
                  <h1 className="text-xl font-semibold">Entrada</h1>
                  <p className="text-gray-500">
                    Traga seu equipamento até nossa assistência e aguarde para
                    orçamento e avaliação técnica.
                  </p>
                </div>
              </div>
            </div>

            {/* Etapa 02 - Cadastro */}
            <div className="p-5">
              <div className="flex items-start gap-4">
                <span className="font-semibold py-1 px-3 text-sm flex items-center justify-center w-8 h-8 border rounded-full bg-gray-100">
                  02
                </span>
                <div>
                  <h1 className="text-xl font-semibold">Cadastro</h1>
                  <p className="text-gray-500">
                    Realizamos um cadastro completo com seus dados e informações
                    do equipamento.
                  </p>
                </div>
              </div>
            </div>

            {/* Etapa 03 - Avaliação */}
            <div className="p-5">
              <div className="flex items-start gap-4">
                <span className="font-semibold py-1 px-3 text-sm flex items-center justify-center w-8 h-8 border rounded-full bg-gray-100">
                  03
                </span>
                <div>
                  <h1 className="text-xl font-semibold">Avaliação</h1>
                  <p className="text-gray-500">
                    Nossa equipe técnica fará uma avaliação detalhada do seu
                    equipamento.
                  </p>
                </div>
              </div>
            </div>

            {/* Etapa 04 - Orçamento */}
            <div className="p-5">
              <div className="flex items-start gap-4">
                <span className="font-semibold py-1 px-3 text-sm flex items-center justify-center w-8 h-8 border rounded-full bg-gray-100">
                  04
                </span>
                <div>
                  <h1 className="text-xl font-semibold">Orçamento</h1>
                  <p className="text-gray-500">
                    Apresentamos um orçamento detalhado com todos os serviços
                    necessários.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1>Informações Importantes</h1>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

        
          </div>
        </div>
      </div>
    </div>
  );
}
