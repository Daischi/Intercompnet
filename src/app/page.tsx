import Hero from "@/components/Hero.tsx";
import Navegation from "@/components/Navegation";
import ServicesTabs from "@/components/Servicespage";
import Funcionamento from "@/components/Funcionamento";
import Sobrenos from "@/components/Sobrenos";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background">
      <header>
        <Navegation />
      </header>
      <main>
        <section><Hero /></section>  


        <section className="h-full"><Sobrenos/></section>

        <section className="h-full pt-24">
          <ServicesTabs />
        </section>
      </main>

      <section className="h-full pt-24">
          <Funcionamento />
        </section>



    </div>
  );
}

