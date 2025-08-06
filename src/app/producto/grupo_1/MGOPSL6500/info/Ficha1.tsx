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
                        <h3 className="text-xl sm:text-1xl md:text-2xl md:leading-tight font-semibold mb-4">Paquete de Aditivos para Aceites de Motor a Gasolina</h3>
                        <h3 className="text-xl sm:text-1xl md:text-2xl md:leading-tight font-semibold mb-4 max-w-5xl">Descripción</h3>
                        <p className="mx-auto max-w-5xl md:px-5">{DataFicha[0].fichaDescription}</p>
                        <h2 className="text-xl sm:text-1xl md:text-2xl md:leading-tight font-semibold mb-4 max-w-5xl">Especificaciones</h2>
                        <div className="relative overflow-x-auto shadow-md rounded-2xl text-xl max-w-5xl mx-auto mb-4 md:px-5">
                            <table className="w-full rtl:text-right text-zinc-500 dark:text-white">
                                <thead className="text-zinc-700 uppercase bg-gray-50 dark:bg-zinc-700 dark:text-white">
                                    <tr>
                                        <th className="px-6 py-3">API Performance</th>
                                        <th className="px-6 py-3">Tasa de Tratamiento (%wt)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">SL/CF</td>
                                        <td className="px-6 py-3">5.8%</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">SJ/CF</td>
                                        <td className="px-6 py-3">4.8%</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">SG/CD</td>
                                        <td className="px-6 py-3">4.2%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="relative overflow-x-auto shadow-md rounded-2xl text-xl max-w-5xl mx-auto mb-4 md:px-5">
                            <table className="w-full rtl:text-right text-zinc-500 dark:text-white">
                                <thead className="text-zinc-700 uppercase bg-gray-50 dark:bg-zinc-700 dark:text-white">
                                    <tr>
                                        <th className="px-6 py-3">Pruebas</th>
                                        <th className="px-6 py-3">Métodos ASTM</th>
                                        <th className="px-6 py-3">Especificaciones</th>
                                        <th className="px-6 py-3">Resultados</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            Apariencia
                                        </td>
                                        <td className="px-6 py-3">
                                            Inspección visual
                                        </td>
                                        <td className="px-6 py-3">
                                            Líquido café viscoso
                                        </td>
                                        <td className="px-6 py-3">
                                            Líquido café viscoso
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            Densidad @20 ℃, kg/m3
                                        </td>
                                        <td className="px-6 py-3">
                                            D4052
                                        </td>
                                        <td className="px-6 py-3">
                                            991 - 1031
                                        </td>
                                        <td className="px-6 py-3">
                                            1011
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            Viscosidad Cinética@100 ℃, mm2/s
                                        </td>
                                        <td className="px-6 py-3">
                                            D445
                                        </td>
                                        <td className="px-6 py-3">
                                            Reportar
                                        </td>
                                        <td className="px-6 py-3">
                                            125
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            Punto de Inflamación (COC), ℃
                                        </td>
                                        <td className="px-6 py-3">
                                            D92
                                        </td>
                                        <td className="px-6 py-3">
                                            ≥ 180
                                        </td>
                                        <td className="px-6 py-3">
                                            210
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            Número Total de Base, (mg KOH/g)
                                        </td>
                                        <td className="px-6 py-3">
                                            D2896
                                        </td>
                                        <td className="px-6 py-3">
                                            102 - 126
                                        </td>
                                        <td className="px-6 py-3">
                                            114
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            Contenido de Ca, % peso
                                        </td>
                                        <td className="px-6 py-3">
                                            D4951
                                        </td>
                                        <td className="px-6 py-3">
                                            3.09 - 3.79
                                        </td>
                                        <td className="px-6 py-3">
                                            3.44
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">Contenido de Zn, % peso</td>
                                        <td className="px-6 py-3">D4951</td>
                                        <td className="px-6 py-3">1.76 - 2.16</td>
                                        <td className="px-6 py-3">1.96</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            Contenido de P, % peso
                                        </td>
                                        <td className="px-6 py-3">
                                            D4951
                                        </td>
                                        <td className="px-6 py-3">
                                            1.51 - 1.72
                                        </td>
                                        <td className="px-6 py-3">
                                            1.68
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            Contenido de N, % peso
                                        </td>
                                        <td className="px-6 py-3">
                                            D5762
                                        </td>
                                        <td className="px-6 py-3">
                                            0.90 - 1.20
                                        </td>
                                        <td className="px-6 py-3">
                                            0.99
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">
                                            Contenido de Mo, % peso
                                        </td>
                                        <td className="px-6 py-3">
                                            D4951
                                        </td>
                                        <td className="px-6 py-3">
                                            0.074 - 0.112
                                        </td>
                                        <td className="px-6 py-3">
                                            0.093
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-xl sm:text-1xl md:text-2xl md:leading-tight font-semibold mb-4 max-w-5xl">Envasado, Almacenamiento, Transporte</h2>
                        <p className="mx-auto max-w-xl md:px-5">
                            <ul className="list-disc pl-5">
                                <li>Envasado en tambores de acero de 200 Lt.</li>
                                <li>La temperatura de almacenamiento no debe exceder los 50 °C, y la temperatura de carga, descarga y mezclado no debe exceder los 60 °C.</li>
                                <li>El producto no es flamable, ni explosivo, ni corrosivo. Es igual a los demás productos derivados del petróleo en términos de seguridad, protección ambiental, eso y otros aspectos. No requiere protección especial.</li>
                            </ul>
                        </p>
                        <section className="mt-1 mb-5 lg:my-4">
                            <div className="relative w-full z-30 mx-auto py-2 sm:py-2 items-center justify-center">
                                <div className="h-full flex flex-col items-center justify-center text-center px-5">
                                <a href="../grupo_1" className="absolute inset-0 -z-10 w-full ">
                                    <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-lg p-3.5 text-center me-2 mb-2">
                                        <FaArrowLeft />
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