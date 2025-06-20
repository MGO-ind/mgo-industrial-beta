import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
//import FAQ from "@/components/FAQ";
//import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import CarruselInf from "@/components/carrusel";


const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
 
      <Container>
        <Section
          id="testimonials"
          title="Quiénes Somos"
          description="Conectando energía con productividad desde 2010."
        >
          <Testimonials />
        </Section>

        <Section
          id="pricing"
          title="Contacto"
          description="¿Buscas un proveedor confiable? Estamos listos para ayudarte. Contáctanos y descubre cómo podemos optimizar tu abastecimiento energético."
        >
          <Pricing />
        </Section>
        
        {/*<Benefits />*/}
        {/*<FAQ />*/}

     <CarruselInf/>
        
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
