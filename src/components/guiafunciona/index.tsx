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
        <div className="flex justify-center gap-11">
          <div className="border rounded-xl">
            <div className="p-5">
              <div className="p-5">
                <div className="flex items-start gap-4">
                  {/* Número dentro do círculo */}
                  <span className="font-semibold py-1 px-3 text-sm flex items-center justify-center w-8 h-8 border rounded-xl ">
                    01
                  </span>

                  {/* Título e texto alinhados verticalmente */}
                  <div>
                    <h1 className="text-xl font-semibold">Entrada</h1>
                    <p className="text-gray-500">
                      Traga seu equipamento até nossa assistência e aguarde para
                      orçamento e avaliação técnica.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                02 <h1>Cadastro</h1>
              </div>
              <p>
                Realizamos um cadastro completo com seus dados e informações do
                equipamento.
              </p>

              <div className="flex gap-4">
                03 <h1>Avaliação</h1>
              </div>
              <p>
                Nossa equipe técnica fará uma avaliação detalhada do seu
                equipamento.
              </p>

              <div className="flex gap-4">
                04 <h1>Orçamento</h1>
              </div>
              <p>
                Apresentamos um orçamento detalhado com todos os serviços
                necessários.
              </p>
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
