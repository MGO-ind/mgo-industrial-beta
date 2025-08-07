import { FaArrowLeft } from "react-icons/fa6";
import { DataFicha } from "./DataFicha";

const Ficha1 = () => {
    return (
        <section id="cta" className="mt-10 mb-5 lg:my-20">
            <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
                <div className="h-full w-full">
                    <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
                        <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"></div>
                    </div>

                    <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">{DataFicha[0].fichaTitle}</h2>
                        <h3 className="text-xl sm:text-1xl md:text-2xl md:leading-tight font-semibold mb-4 max-w-5xl">Descripción</h3>
                        <p className="mx-auto max-w-5xl md:px-5">{DataFicha[0].fichaDescription}</p>
                        <h2 className="text-xl sm:text-1xl md:text-2xl md:leading-tight font-semibold mb-4 max-w-5xl">Aplicación</h2>  
                        <p className="mx-auto max-w-5xl md:px-5">Es recomendable para lubricar los estribos de sujeción, brazos de mando, muñones de la dirección y otras partes del chasis de automóviles de pasajeros, vehículos comerciales, equipos agrícolas e industriales y en general en donde no se requiera una grasa con características de servicio para altas temperaturas, ni requerimientos excepcionales anti desgaste y de extrema presión.</p>
                        <h2 className="text-xl sm:text-1xl md:text-2xl md:leading-tight font-semibold mb-4 max-w-5xl">Presentación</h2>
                        <p className="mx-auto max-w-xl md:px-5"> 3.5 Kg. / 16 Kg. / 180 Kg. </p>
                        <div className="relative overflow-x-auto shadow-md rounded-2xl text-xl max-w-5xl mx-auto mb-4 md:px-5">
                            <table className="w-full rtl:text-right text-zinc-500 dark:text-white">
                                <thead className="text-zinc-700 uppercase bg-gray-50 dark:bg-zinc-700 dark:text-white">
                                    <tr>
                                        <th className="px-6 py-3"></th>
                                        <th className="px-6 py-3">Análisis Típico</th>
                                        <th className="px-6 py-3"></th>
                                    </tr>
                                    <tr>
                                        <th className="px-6 py-3">
                                            Propiedad
                                        </th>
                                        <th className="px-6 py-3">
                                            Método ASTM
                                        </th>
                                        <th className="px-6 py-3">
                                            Resultados
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            Grado NLGI
                                        </td>
                                        <td className="px-6 py-3">
                                            D-217
                                        </td>
                                        <td className="px-6 py-3">
                                            2
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            Color
                                        </td>
                                        <td className="px-6 py-3">
                                            Visual
                                        </td>
                                        <td className="px-6 py-3">
                                             Roja, Azul o Ámbar
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            Penetración a 25 °C
                                        </td>
                                        <td className="px-6 py-3">
                                            D-217
                                        </td>
                                        <td className="px-6 py-3">
                                            270 – 275
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            Penetración a 60 golpes a 25 ° C
                                        </td>
                                        <td className="px-6 py-3">
                                            D-217
                                        </td>
                                        <td className="px-6 py-3">
                                            270 - 275
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            Penetración a 10,000 golpes a 25 °C
                                        </td>
                                        <td className="px-6 py-3">
                                            D-217
                                        </td>
                                        <td className="px-6 py-3">-</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            Estabilidad Mecánica
                                        </td>
                                        <td className="px-6 py-3">
                                            D-217
                                        </td>
                                        <td className="px-6 py-3">
                                            5 % máx.
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            Resistencia al lavado por agua a 77 °C
                                        </td>
                                        <td className="px-6 py-3">
                                            D-1264
                                        </td>
                                        <td className="px-6 py-3">
                                            2 % máx.
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            Temperatura de goteo °C
                                        </td>
                                        <td className="px-6 py-3">
                                            D-2265
                                        </td>
                                        <td className="px-6 py-3">
                                            95 mín.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <section className="mt-1 mb-5 lg:my-4">
                            <div className="relative w-full z-30 mx-auto py-2 sm:py-2 items-center justify-center">
                                <div className="h-full flex flex-col items-center justify-center text-center px-5">
                                <a href="../grupo_2" className="absolute inset-0 -z-10 w-full ">
                                    <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-lg p-3.5 text-center me-2 mb-2">
                                        <FaArrowLeft/>
                                    </button>
                                </a> 
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
        
    );
}

export default Ficha1;