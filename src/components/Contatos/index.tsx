import { MapPin } from "lucide-react";

export default function Contatos (){

    return(
    <div>

        <section>
            
            
            <div className="place-items-center">
                <h1 className="text-3xl font-bold mb-2">Entre em Contato
                </h1>
                <div className="w-24 h-1 bg-gray-300 mx-auto mb-4"></div>
                <p className="text-muted-foreground">Estamos prontos para atender suas necessidades</p>
            </div>

            <section className="">


                <div className="flex items-center gap-4">
                    <div className="flex gap-3">
                    <MapPin className="text-green-400 flex" size={18}/>  
                    </div>
                    <div className="grid grid-rows-2">
                    
                    <h3 className="font-bold">Endereço</h3>
                
                    <p className="text-muted-foreground">Rua Otávio Tarquínio de Souza, 945 - Campo Belo - SP</p>
                    </div>
                    </div>
            </section>






        </section>






    </div>


    )



}