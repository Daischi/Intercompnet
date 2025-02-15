import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Download, HardDrive } from "lucide-react";

export default function ServicesTabs() {
  return (
    <Tabs defaultValue="computadores" className="w-full max-w-4xl mx-auto">
      <TabsList className="grid grid-cols-4">
        <TabsTrigger value="computadores">Computadores</TabsTrigger>
        <TabsTrigger value="impressoras">Impressoras</TabsTrigger>
        <TabsTrigger value="redes">Redes</TabsTrigger>
        <TabsTrigger value="video-games">Video-games</TabsTrigger>
      </TabsList>

      <TabsContent value="computadores">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
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
            <CardContent>
              Sistemas operacionais e programas.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <HardDrive className="w-6 h-6" />
              <CardTitle>Recuperação de Dados</CardTitle>
            </CardHeader>
            <CardContent>
              Recuperação de arquivos perdidos.
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
}
