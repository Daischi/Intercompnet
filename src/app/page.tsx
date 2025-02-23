import Hero from "@/components/Hero.tsx";
import Navegation from "@/components/Navegation";
import ServicesTabs from "@/components/Servicespage";

export default function Home() {
  return (
    <div>
      <header>
      
        <Navegation/>
        
      </header>
      <main className="h-screen bg-gradient-to-b from-primary/10 to-background">

        <Hero/>
        <ServicesTabs/>

        
      </main>
    </div>
  );
}
