//import FAQ from "@/components/FAQ";
import Container from "@/components/Container";
import Ficha1 from "./info/Ficha1";
import { FaArrowLeft } from "react-icons/fa6";


const Products: React.FC = () => {
  return (
    <>
      <div className="mt-20 mb-10">
        <Container className="py-10">
          <section className="mt-1 mb-5 lg:my-4">
            <div className="relative w-full z-30 mx-auto py-2 sm:py-2 items-center justify-center">
              <div className="w-full flex flex-col items-center justify-center text-center px-5">
                <a href="../grupo_1" className="absolute inset-0 -z-10 w-full ">
                  <button type="button" className="text-white inline-flex items-center  bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-lg px-6 py-2.5 text-center me-2 mb-2 w-30"><FaArrowLeft/>Regresar </button>
                </a> 
              </div>
            </div>
          </section>
          <Ficha1/>      
        </Container>
      </div>
    </>
  );
};

export default Products;
