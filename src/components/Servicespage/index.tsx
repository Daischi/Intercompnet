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
    <div id="servicos">
      <div>
        <h1 className="flex justify-center items-center mb-2 text-2xl sm:text-3xl font-bold">
          Nossos Serviços
        </h1>
        <div className="w-24 h-1 bg-gray-300 mx-auto mb-4"></div>
        <p className="flex justify-center items-center mb-10 px-4 text-center">
          Oferecemos uma ampla gama de serviços técnicos especializados
        </p>
      </div>

      <Tabs defaultValue="computadores" className="mx-auto w-full">
        <div className="w-full max-w-4xl mx-auto pb-9 px-4">
          <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-0">
            <TabsTrigger value="computadores">Computadores</TabsTrigger>
            <TabsTrigger value="impressoras">Impressoras</TabsTrigger>
            <TabsTrigger value="redes">Redes</TabsTrigger>
            <TabsTrigger value="video-games">Video-games</TabsTrigger>
          </TabsList>
        </div>

        <section className="w-full flex justify-center pb-20 px-4 overflow-x-hidden">
          <div className="w-full md:w-auto">
            <TabsContent value="computadores">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 w-full md:w-[1300px]">
                <Card className="group transition-all duration-300 hover:shadow-xl cursor-pointer">
                  <CardHeader>
                    <Cpu
                      size={32}
                      className="mb-4 transition-transform duration-300 group-hover:scale-125"
                    />
                    <CardTitle className="font-bold text-lg">
                      Manutenção de PCs
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
                    Serviços completos para desktops e notebooks.
                  </CardContent>
                </Card>

                <Card className="group transition-all duration-300 hover:shadow-xl cursor-pointer">
                  <CardHeader>
                    <Download
                      size={32}
                      className="mb-4 transition-transform duration-300 group-hover:scale-125"
                    />
                    <CardTitle className="font-bold text-lg">
                      Instalação de Software
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
                    Sistemas operacionais e programas.
                  </CardContent>
                </Card>

                <Card className="group transition-all duration-300 hover:shadow-xl cursor-pointer">
                  <CardHeader>
                    <HardDrive
                      size={32}
                      className="mb-4 transition-transform duration-300 group-hover:scale-125"
                    />
                    <CardTitle className="font-bold text-lg">
                      Recuperação de Dados
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
                    Recuperação de arquivos perdidos.
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="impressoras">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 w-full md:w-[1300px]">
                <Card className="group transition-all duration-300 hover:shadow-xl cursor-pointer">
                  <CardHeader>
                    <Printer
                      size={32}
                      className="mb-4 transition-transform duration-300 group-hover:scale-125"
                    />
                    <CardTitle className="font-bold text-lg">
                      Manutenção de Impressoras
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
                    Reparo e manutenção de impressoras.
                  </CardContent>
                </Card>

                <Card className="group transition-all duration-300 hover:shadow-xl cursor-pointer">
                  <CardHeader>
                    <Settings
                      size={32}
                      className="mb-4 transition-transform duration-300 group-hover:scale-125"
                    />
                    <CardTitle className="font-bold text-lg">
                      Configuração
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
                    Configuração e ajustes de impressoras.
                  </CardContent>
                </Card>

                <Card className="group transition-all duration-300 hover:shadow-xl cursor-pointer">
                  <CardHeader>
                    <RefreshCcw
                      size={32}
                      className="mb-4 transition-transform duration-300 group-hover:scale-125"
                    />
                    <CardTitle className="font-bold text-lg">
                      Substituição de Peças
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
                    Troca de cartuchos, toners e peças.
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="redes">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 w-full md:w-[1300px]">
                <Card className="group transition-all duration-300 hover:shadow-xl cursor-pointer">
                  <CardHeader>
                    <Wifi
                      size={32}
                      className="mb-4 transition-transform duration-300 group-hover:scale-125"
                    />
                    <CardTitle className="font-bold text-lg">
                      Configuração de Redes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
                    Instalação e configuração de redes locais.
                  </CardContent>
                </Card>

                <Card className="group transition-all duration-300 hover:shadow-xl cursor-pointer">
                  <CardHeader>
                    <Shield
                      size={32}
                      className="mb-4 transition-transform duration-300 group-hover:scale-125"
                    />
                    <CardTitle className="font-bold text-lg">
                      Segurança de Rede
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
                    Proteção contra ataques e vulnerabilidades.
                  </CardContent>
                </Card>

                <Card className="group transition-all duration-300 hover:shadow-xl cursor-pointer">
                  <CardHeader>
                    <ServerCog
                      size={32}
                      className="mb-4 transition-transform duration-300 group-hover:scale-125"
                    />
                    <CardTitle className="font-bold text-lg">
                      Servidores
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
                    Configuração e manutenção de servidores.
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="video-games">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 w-full md:w-[1300px]">
                <Card className="group transition-all duration-300 hover:shadow-xl cursor-pointer">
                  <CardHeader>
                    <Gamepad
                      size={32}
                      className="mb-4 transition-transform duration-300 group-hover:scale-125"
                    />
                    <CardTitle className="font-bold text-lg">
                      Reparo de Consoles
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
                    Manutenção e conserto de consoles de videogame.
                  </CardContent>
                </Card>

                <Card className="group transition-all duration-300 hover:shadow-xl cursor-pointer">
                  <CardHeader>
                    <Download
                      size={32}
                      className="mb-4 transition-transform duration-300 group-hover:scale-125"
                    />
                    <CardTitle className="font-bold text-lg">
                      Instalação de Jogos
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
                    Instalação e otimização de jogos.
                  </CardContent>
                </Card>

                <Card className="group transition-all duration-300 hover:shadow-xl cursor-pointer">
                  <CardHeader>
                    <WrenchIcon
                      size={32}
                      className="mb-4 transition-transform duration-300 group-hover:scale-125"
                    />
                    <CardTitle className="font-bold text-lg">
                      Limpeza e Manutenção
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
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
