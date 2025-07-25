import React from "react";

interface FichaInfoPrevProps {
    btnHref: string;
    titleFicha: string;
    descripcionFicha: string;
}

const FichaInfoPrev: React.FC<FichaInfoPrevProps> = ({ btnHref, titleFicha, descripcionFicha }) => {
    return (
    <>
        <a href={btnHref} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{titleFicha}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{descripcionFicha}</p>
        </a>

    </>

    );
}

export default FichaInfoPrev; 