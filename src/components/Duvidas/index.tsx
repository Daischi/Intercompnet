import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export default function Duvidas () {

    return(


        <div className="w-full h-full">
            <section className="text-center">

                <h1 className="text-3xl font-bold mb-4">

                Perguntas Frequentes

                    
                </h1>

                
                <p className="text-muted-foreground">Tire suas dúvidas sobre nossos serviços</p>



            
            </section>

            
            <section className="w-full flex justify-center items-center text-center">
                <section className="w-[50%]">
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
            </section>
            </section>






        </div>


    )


}