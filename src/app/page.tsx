import Hero from "@/components/Hero.tsx";
import Navegation from "@/components/Navegation";
import ServicesTabs from "@/components/Servicespage";
import Guiafunciona from "@/components/Guiafunciona/index";

export default function Home() {
  return (
    <div>
      <header>
      
        <Navegation/>
        
      </header>
      <main className="h-screen bg-gradient-to-b from-primary/10 to-background">

        <Hero/>
        <section className="h-[60%]"><ServicesTabs/></section>
        

      <section className="h-full"><Guiafunciona/></section>  
        
        

        
      </main>
    </div>
  );
}
