//import FAQ from "@/components/FAQ";
import Container from "@/components/Container";
import Ficha1 from "./info/Ficha1";


const Products: React.FC = () => {
  return (
    <>
      <div className="mt-20 mb-10">
        <Container className="py-10">
          <a href="../grupo_1" className="inline-block w-5 mb-4 flex-col items-center justify-center">
            <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"> ← Regresar</button>
          </a> 
          <Ficha1/>
          <a href="../grupo_1" className="inline-block w-5 mb-4 flex-col items-center justify-center">
            <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"> ← Regresar</button>
          </a>
          
        </Container>
      </div>
    </>
  );
};

export default Products;
