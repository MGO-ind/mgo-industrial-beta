import { IBtnFichasLink } from "@/types";
import React from "react";

interface FichaInfoPrevProps2 {
    PrevFichas: IBtnFichasLink;
}

const FichaInfoPrev2: React.FC<FichaInfoPrevProps2> = ({ PrevFichas }) => {
    return (
    <>
        <a href={PrevFichas.btnHref} className="block max-w-sm mt-2 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:shadow-xl hover:shadow-black transition-shadow duration-300">

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{PrevFichas.titleFicha}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{PrevFichas.descripcionFicha} <br/> <span className="text-blue-500">Saber mas → </span></p>
        </a>

    </>

    );
}

export default FichaInfoPrev2; 