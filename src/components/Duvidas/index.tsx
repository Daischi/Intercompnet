import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Duvidas() {
  return (
    <div className="w-full h-full">
      <section className="text-center">
        <h1 className="text-3xl font-bold mb-2">Perguntas Frequentes</h1>
        <div className="w-24 h-1 bg-gray-300 mx-auto mb-4"></div>

        <p className="text-muted-foreground">
          Tire suas dúvidas sobre nossos serviços
        </p>
      </section>

      <section className="w-full flex justify-center items-center p-4">
        <div className="w-full max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="prazo-entrega">
              <AccordionTrigger className="text-base font-semibold">
                Qual o prazo médio para conserto?
              </AccordionTrigger>
              <AccordionContent>
            O prazo médio é de 24 a 48 horas, podendo variar de acordo com a
            complexidade do serviço e disponibilidade de peças.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="garantia">
              <AccordionTrigger className="text-base">
                Vocês fazem orçamento sem compromisso?
              </AccordionTrigger>
              <AccordionContent>
              Sim, realizamos orçamento gratuito e sem compromisso para todos os serviços.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pagamento">
              <AccordionTrigger className="text-base">
              Trabalham com todas as marcas?Trabalham com todas as marcas?
              </AccordionTrigger>
              <AccordionContent>
              Sim, atendemos todas as principais marcas do mercado, incluindo HP, Dell, Epson, Lenovo, Acer, Samsung, Canon e Brother.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="orcamento-recusado">
              <AccordionTrigger className="text-base">
              Oferecem garantia dos serviços?
              </AccordionTrigger>
              <AccordionContent>
              Todos os nossos serviços possuem garantia, variando de acordo com o tipo de reparo realizado.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
