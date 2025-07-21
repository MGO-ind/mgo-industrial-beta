//import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";



const Products: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <Container className="py-10">
          <h1 className="text-3xl font-bold mb-6">Nuestros Productos</h1>
          <p className="text-lg mb-8">Descubre nuestra gama de productos diseñados para optimizar tu eficiencia energética.</p>
   
        
        <Benefits />

      </Container>
      </div>
    </>
  );
};

export default Products;
