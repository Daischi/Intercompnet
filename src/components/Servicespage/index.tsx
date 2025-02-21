import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Cpu,
  Download,
  Gamepad,
  HardDrive,
  Printer,
  RefreshCcw,
  ServerCog,
  Settings,
  Shield,
  Wifi,
  WrenchIcon,
} from "lucide-react";

export default function ServicesTabs() {
  return (
    <div>
      <div>
        <h1 className="flex justify-center items-center mb-4 text-3xl font-bold">
          Nossos Serviços
        </h1>
        <p className="flex justify-center items-center mb-10">
          Oferecemos uma ampla gama de serviços técnicos especializados
        </p>
      </div>

      <Tabs defaultValue="computadores" className="mx-auto w-full">
        <div className="w-full max-w-4xl mx-auto pb-9">
          <TabsList className="grid grid-cols-4">
            <TabsTrigger value="computadores">Computadores</TabsTrigger>
            <TabsTrigger value="impressoras">Impressoras</TabsTrigger>
            <TabsTrigger value="redes">Redes</TabsTrigger>
            <TabsTrigger value="video-games">Video-games</TabsTrigger>
          </TabsList>
        </div>


        <section className="w-full flex justify-center">
          <div>


            
            <TabsContent value="computadores">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 w-[1300px]">
                <Card>
                  <CardHeader>
                    <Cpu className="w-6 h-6" />
                    <CardTitle>Manutenção de PCs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Serviços completos para desktops e notebooks.
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Download className="w-6 h-6" />
                    <CardTitle>Instalação de Software</CardTitle>
                  </CardHeader>
                  <CardContent>Sistemas operacionais e programas.</CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <HardDrive className="w-6 h-6" />
                    <CardTitle>Recuperação de Dados</CardTitle>
                  </CardHeader>
                  <CardContent>Recuperação de arquivos perdidos.</CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="impressoras">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 w-[1300px]">
                <Card>
                  <CardHeader>
                    <Printer className="w-6 h-6" />
                    <CardTitle>Manutenção de Impressoras</CardTitle>
                  </CardHeader>
                  <CardContent>Reparo e manutenção de impressoras.</CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Settings className="w-6 h-6" />
                    <CardTitle>Configuração</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Configuração e ajustes de impressoras.
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <RefreshCcw className="w-6 h-6" />
                    <CardTitle>Substituição de Peças</CardTitle>
                  </CardHeader>
                  <CardContent>Troca de cartuchos, toners e peças.</CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="redes">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 w-[1300px]">
                <Card>
                  <CardHeader>
                    <Wifi className="w-6 h-6" />
                    <CardTitle>Configuração de Redes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Instalação e configuração de redes locais.
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Shield className="w-6 h-6" />
                    <CardTitle>Segurança de Rede</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Proteção contra ataques e vulnerabilidades.
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <ServerCog className="w-6 h-6" />
                    <CardTitle>Servidores</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Configuração e manutenção de servidores.
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="video-games">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 w-[1300px]">
                <Card>
                  <CardHeader>
                    <Gamepad className="w-6 h-6" />
                    <CardTitle>Reparo de Consoles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Manutenção e conserto de consoles de videogame.
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Download className="w-6 h-6" />
                    <CardTitle>Instalação de Jogos</CardTitle>
                  </CardHeader>
                  <CardContent>Instalação e otimização de jogos.</CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <WrenchIcon className="w-6 h-6" />
                    <CardTitle>Limpeza e Manutenção</CardTitle>
                  </CardHeader>
                  <CardContent>
                  Serviço preventivo para consoles
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </div>
        </section>
      </Tabs>
    </div>
  );
}
