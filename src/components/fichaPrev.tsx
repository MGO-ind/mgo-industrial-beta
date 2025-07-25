import { IBtnFichasLink } from "@/types";
import React from "react";

interface FichaInfoPrevProps {
    PrevFichas: IBtnFichasLink;
}

const FichaInfoPrev: React.FC<FichaInfoPrevProps> = ({ PrevFichas }) => {
    return (
    <>
        <a href={PrevFichas.btnHref} className="block max-w-sm mt-2 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:shadow-2xl transition-shadow duration-300">

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{PrevFichas.titleFicha}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{PrevFichas.descripcionFicha} <br/> <span className="text-blue-500">Saber mas → </span></p>
        </a>

    </>

    );
}

export default FichaInfoPrev; 