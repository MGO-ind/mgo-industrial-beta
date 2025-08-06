"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import FichaInfoPrev from "@/app/producto/grupo_1/Gpo1Fichas/fichaPrev";
import { btnFichas } from "./Gpo1Fichas/LinkFichasTecnicas";

const Products: React.FC = () => {
  const [currentIndex] = useState(0);

  return (
    <>
      <div className="mt-20 mb-10">
        <Container className="py-10">
          <h1 className="text-3xl font-bold mb-6">Nuestros Productos</h1>
          <p className="text-lg mb-8">Descubre nuestra gama de productos diseñados para optimizar tu eficiencia energética.</p>
          
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex"
              animate={{ x: -currentIndex * 100 + "%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {btnFichas.map((ficha, index) => (
                <div key={index} className="w-full flex-shrink-0 lg:w-1/3 px-4">
                  <FichaInfoPrev PrevFichas={ficha} />
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Products;