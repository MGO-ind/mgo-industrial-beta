"use client"
import { carruselItems } from "@/data/carrusel"
import React from "react";
import Image from "next/image";
const CarruselInf: React.FC = () => {
    return(
        <>
        <div id="default-carousel" className="relative w-full" data-carousel="slide">

    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

        {carruselItems.map((carruselItems, index) => (
            <div key={index} className="mb-7">
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image src={carruselItems.imageSrc} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
            </div>
        ))}

       
    
       
    </div>

    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
    {carruselItems.map((carruselItems, index) => (
        <div key={index} className="mb-7">
            <button type="button" className="w-3 h-3 rounded-full" aria-current={carruselItems.current} aria-label={carruselItems.slide} data-carousel-slide-to={carruselItems.slide}></button>
        </div>
          ))}
        
    </div>
  
    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>
        
        </>
    );
};

export default CarruselInf