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
                        <h2 className="text-xl sm:text-1xl md:text-2xl md:leading-tight font-semibold mb-4 max-w-5xl">Cualidades</h2>
                        <p className="mx-auto max-w-5xl md:px-5">
                            <ul className="list-disc pl-5">
                                <li>Recomendado para motores a gasolina y a diesel de una amplia gama de fabricantes de vehículos.</li>
                                <li>Los ensayos demuestran una excelente limpieza del motor y economía de combustible, superior casi en un 90% al límite requerido para este grado de viscosidad. </li>
                                <li>Probado en los test más críticos de desgaste. Los resultados permiten garantizar una mayor durabilidad del motor y menos mantenimientos. </li>
                                <li>Su reducido contenido en cenizas lo hace necesario para la durabilidad de las nuevas tecnologías de disminución de emisiones como filtro de partículas diesel (DPF o FAP), contribuyendo por tanto en mayor medida a la conservación del medioambiente que los lubricantes convencionales.</li>
                            </ul>
                        </p>
                        <h2 className="text-xl sm:text-1xl md:text-2xl md:leading-tight font-semibold mb-4 max-w-5xl">Niveles de calidad</h2>
                        <p className="mx-auto max-w-5xl md:px-5">
                            <ul className="list-disc pl-5 columns-3">
                                <li>API SN/CF, API CK-4, API CI-4</li>
                                <li>ACEA A3/B3-04, A3/B4-04, C3</li>
                                <li>MB 229.31</li>
                                <li>FORD WSS-M2C917-A</li>
                                <li>VW 502.00 / 505.00 / 505.01</li>
                                <li>PORSCHE A40</li>
                                <li>BMW LL-04</li>
                            </ul>
                        </p>
                        <h2 className="text-xl sm:text-1xl md:text-2xl md:leading-tight font-semibold mb-4 max-w-5xl">Características técnicas</h2>
                        <div className="relative overflow-x-auto shadow-md rounded-2xl text-xl max-w-5xl mx-auto mb-4 md:px-5">
                            <table className="w-full rtl:text-right text-zinc-500 dark:text-white">
                                <thead className="text-zinc-700 uppercase bg-gray-50 dark:bg-zinc-700 dark:text-white">
                                    <tr>
                                        <th className="px-6 py-3">Prueba</th>
                                        <th className="px-6 py-3">Especificación</th>
                                        <th className="px-6 py-3">Método</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            GRADO SAE
                                        </td>
                                        <td className="px-6 py-3">
                                            5W40
                                        </td>
                                        <td className="px-6 py-3"></td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            Densidad a 15°C, g/mL
                                        </td>
                                        <td className="px-6 py-3">
                                            0.853
                                        </td>
                                        <td className="px-6 py-3">
                                            ASTM D4052
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            Viscosidad @100°C, cSt
                                        </td>
                                        <td className="px-6 py-3">
                                            14.5
                                        </td>
                                        <td className="px-6 py-3">
                                            ASTM D445
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">Viscosidad @40°C, cSt</td>
                                        <td className="px-6 py-3">88</td>
                                        <td className="px-6 py-3">ASTM D445</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            Viscosidad @-30°C, cP
                                        </td>
                                        <td className="px-6 py-3">
                                            6600 máx.
                                        </td>
                                        <td className="px-6 py-3">
                                            ASTM D5293
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            Índice de viscosidad
                                        </td>
                                        <td className="px-6 py-3">
                                            170
                                        </td>
                                        <td className="px-6 py-3">
                                            ASTM D2270
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            Número Total de Bases, (mgKOH/g)
                                        </td>
                                        <td className="px-6 py-3">
                                            7.5
                                        </td>
                                        <td className="px-6 py-3">
                                            ASTM D2896
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            Punto de congelación, °C
                                        </td>
                                        <td className="px-6 py-3">
                                            -39
                                        </td>
                                        <td className="px-6 py-3">
                                            ASTM D97
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            Punto de Inflamabilidad (vaso abierto) (COC), °C
                                        </td>
                                        <td className="px-6 py-3">
                                            215 mín
                                        </td>
                                        <td className="px-6 py-3">
                                            ASTM D92
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            Cizallamiento Inyector Bosch: <br/> Viscosidad @100°C después de cizalla, cSt
                                        </td>
                                        <td className="px-6 py-3">
                                            12.5 mín.
                                        </td>
                                        <td className="px-6 py-3">
                                            CEC L-14-93
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            Volatilidad Noack, 1h a 250°C, %peso
                                        </td>
                                        <td className="px-6 py-3">
                                            12% máx.
                                        </td>
                                        <td className="px-6 py-3">
                                            CEC L.40-93
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            HTHS, viscosidad a 150°C, cP
                                        </td>
                                        <td className="px-6 py-3">
                                            &gt;3.5
                                        </td>
                                        <td className="px-6 py-3">
                                            CECC L-36-90
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