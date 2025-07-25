//import FAQ from "@/components/FAQ";
import Container from "@/components/Container";
import FichaInfoPrev from "@/components/fichaPrev";
import { btnFichas } from "./Gpo1Fichas/LinkFichasTecnicas";

const Products: React.FC = () => {
  return (
    <>
      <div className="mt-20 mb-10">
        <Container className="py-10">
          <h1 className="text-3xl font-bold mb-6">Nuestros Productos</h1>
          <p className="text-lg mb-8">Descubre nuestra gama de productos diseñados para optimizar tu eficiencia energética.</p>
          { btnFichas.map((ficha, index) => (
            <FichaInfoPrev key={index} PrevFichas={ficha} />
          )) }
        </Container>
      </div>
    </>
  );
};

export default Products;
