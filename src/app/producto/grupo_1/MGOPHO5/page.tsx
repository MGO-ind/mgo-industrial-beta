//import FAQ from "@/components/FAQ";
import Container from "@/components/Container";
import Ficha1 from "./info/Ficha1";


const Products: React.FC = () => {
  return (
    <>
      <div className="mt-20 mb-10">
        <Container className="py-10">
          <h1 className="text-3xl font-bold mb-6">Ficha Tecnica</h1>
          <p className="text-lg mb-8"></p>

          <Ficha1/>
          
        </Container>
      </div>
    </>
  );
};

export default Products;
