import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
//import FAQ from "@/components/FAQ";
//import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import CTA from "@/components/CTA";


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
        {/*<Benefits />*/}
        {/*<FAQ />*/}
        <CTA />
        <Section
          id="contacto"
          title="Contacto"
          description="¿Buscas un proveedor confiable? Estamos listos para ayudarte. Contáctanos y descubre cómo podemos optimizar tu abastecimiento energético."
        >
          <Pricing />
        </Section>
      </Container>
    </>
  );
};

export default HomePage;
