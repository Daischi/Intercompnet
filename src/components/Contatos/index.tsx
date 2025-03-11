import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function Contatos() {
  return (
    <div>
      <section>
        <div className="place-items-center">
          <h1 className="text-3xl font-bold mb-2">Entre em Contato</h1>
          <div className="w-24 h-1 bg-gray-300 mx-auto mb-4"></div>
          <p className="text-muted-foreground">
            Estamos prontos para atender suas necessidades
          </p>
        </div>
        <section className="flex justify-center items-center mt-5">
          <section className="border grid gap-5 py-9 rounded-lg px-5 scale-95">
            <section>
              <div className="flex items-center gap-4">
                <div className="flex gap-3">
                  <MapPin className="text-green-400 flex" size={18} />
                </div>
                <div className="grid grid-rows-2">
                  <h3 className="font-bold">Endereço</h3>

                  <p className="text-muted-foreground text-sm">
                    Rua Otávio Tarquínio de Souza, 945 - Campo Belo - SP
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-4">
                <div className="flex gap-3">
                  <Phone className="text-green-400 flex" size={18} />
                </div>
                <div className="grid grid-rows-2">
                  <h3 className="font-bold">Telefones</h3>

                  <p className="text-muted-foreground text-sm">
                    (11) 5535-7587 / (11) 99445-7214
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-4">
                <div className="flex gap-3">
                  <Mail className="text-green-400 flex" size={18} />
                </div>
                <div className="grid grid-rows-2">
                  <h3 className="font-bold">Email</h3>

                  <p className="text-muted-foreground text-sm">
                    sac@intercompnet.com.br
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-4">
                <div className="flex gap-3">
                  <Clock className="text-green-400 flex" size={18} />
                </div>
                <div className="grid grid-rows-2">
                  <h3 className="font-bold">Horário</h3>

                  <p className="text-muted-foreground text-sm">
                    Segunda à Sexta: 9h às 18h
                  </p>
                </div>
              </div>
            </section>
          </section>

          <section className="scale-95 border p-6 rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14622.562629753636!2d-46.66964300000001!3d-23.617217!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a0ab1500fa9%3A0x173ecfcb7cf74296!2sR.%20Ot%C3%A1vio%20Tarqu%C3%ADnio%20de%20Sousa%2C%20945%20-%20Campo%20Belo%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004613-002!5e0!3m2!1sen!2sbr!4v1741728493764!5m2!1sen!2sbr"
              width="400"
              height="283"
              loading="lazy"
            ></iframe>
          </section>
        </section>
      </section>
    </div>
  );
}
