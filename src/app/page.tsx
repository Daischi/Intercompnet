import Hero from "@/components/Hero.tsx";
import Navegation from "@/components/Navegation";
import ServicesTabs from "@/components/Servicespage";

export default function Home() {
  return (
    <div>
      <header>
        <Navegation />
      </header>
      <main>

        <Hero/>
        <ServicesTabs/>

        
      </main>
    </div>
  );
}
