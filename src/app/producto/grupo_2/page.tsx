//import FAQ from "@/components/FAQ";
import Container from "@/components/Container";
import FichaInfoPrev2 from "./Gpo2Fichas/fichaPrev2";
import { btnFichas2 } from "./Gpo2Fichas/LinkFichasTecnicas2";

const Products: React.FC = () => {
  return (
    <>
      <div className="mt-20 mb-10">
        <Container className="py-10">
          <h1 className="text-3xl font-bold mb-6">Nuestros Productos</h1>
          <p className="text-lg mb-8">Descubre nuestra gama de productos diseñados para optimizar tu eficiencia energética.</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            { btnFichas2.map((ficha, index) => (
              <FichaInfoPrev2 key={index} PrevFichas={ficha} />
            )) }
          </div>
      </Container>
      </div>
    </>
  );
};

export default Products;
