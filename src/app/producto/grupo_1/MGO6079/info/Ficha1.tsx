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
                        <h3 className="text-xl sm:text-1xl md:text-2xl md:leading-tight font-semibold mb-4">Paquete de Aditivos para Aceites de Motores a Diesel</h3>

                        <h3 className="text-xl sm:text-1xl md:text-2xl md:leading-tight font-semibold mb-4 max-w-5xl">Descripción</h3>
                        <p className="mx-auto max-w-5xl md:px-5">{DataFicha[0].fichaDescription}</p>
                        <h2 className="text-xl sm:text-1xl md:text-2xl md:leading-tight font-semibold mb-4 max-w-5xl">Especificaciones</h2>
                        <div className="relative overflow-x-auto shadow-md rounded-2xl text-xl max-w-5xl mx-auto mb-4 md:px-5">
                            <table className="w-full rtl:text-right text-zinc-500 dark:text-white">
                                <thead className="text-zinc-700 uppercase bg-gray-50 dark:bg-zinc-700 dark:text-white">
                                    <tr>
                                        <th className="px-6 py-3">ESPECIFICACIONES</th>
                                        <th className="px-6 py-3">Tasa de Tratamiento (%wt)</th>
                                        <th className="px-6 py-3">Tasa de Tratamiento (%wt)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">CI-4</td>
                                        <td className="px-6 py-3">15W-40, <br />20W-50</td>
                                        <td className="px-6 py-3">9.15%</td>
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
                                        <td className="px-6 py-3">Apariencia</td>
                                        <td className="px-6 py-3">Inspección visual</td>
                                        <td className="px-6 py-3">Líquido café viscoso</td>
                                        <td className="px-6 py-3">Líquido café viscoso</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">Densidad @20℃, kg/m3</td>
                                        <td className="px-6 py-3">D4052</td>
                                        <td className="px-6 py-3">980-1020</td>
                                        <td className="px-6 py-3">1000</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">Viscosidad Cinemática @100℃, mm2/s</td>
                                        <td className="px-6 py-3">D445</td>
                                        <td className="px-6 py-3">Reportar</td>
                                        <td className="px-6 py-3">140</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">Punto de Inflamación (COC), ℃</td>
                                        <td className="px-6 py-3">D92</td>
                                        <td className="px-6 py-3">≥ 180</td>
                                        <td className="px-6 py-3">214</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">Número Total de Base, (mg KOH/g)</td>
                                        <td className="px-6 py-3">D2896</td>
                                        <td className="px-6 py-3">98 - 120</td>
                                        <td className="px-6 py-3">109</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">Contenido de Ca, % peso</td>
                                        <td className="px-6 py-3">D4951</td>
                                        <td className="px-6 py-3">3.10 - 3.78</td>
                                        <td className="px-6 py-3">3.44</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">Contenido de Zn, % peso</td>
                                        <td className="px-6 py-3">D4951</td>
                                        <td className="px-6 py-3">1.35 - 1.65</td>
                                        <td className="px-6 py-3">1.50</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">Contenido de P, % peso</td>
                                        <td className="px-6 py-3">D4951</td>
                                        <td className="px-6 py-3">1.21 - 1.47</td>
                                        <td className="px-6 py-3">1.34</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">Contenido de N, % peso</td>
                                        <td className="px-6 py-3">D5762</td>
                                        <td className="px-6 py-3">0.64 - 0.88</td>
                                        <td className="px-6 py-3">0.76</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-xl sm:text-1xl md:text-2xl md:leading-tight font-semibold mb-4 max-w-5xl">Envasado, Almacenamiento, Transporte</h2>

                        <p className="mx-auto max-w-xl md:px-5">
                            <ul className="list-disc pl-5">
                                <li>Envasado en tambores de acero con un peso neto de 180 kg/tambor.</li>
                                <li>La temperatura de almacenamiento no debe superar los 45 ℃ y la temperatura de carga o descarga no debe de exceder los 65 ℃.</li>
                                <li>El producto debe ser transportado en vehículos limpios y secos, evitando la exposición a la luz solar directa.</li>
                            </ul>
                        </p>

                        <div className="mt-4 flex flex-col sm:flex-row items-center sm:gap-4">
            
                       
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    );
}

export default Ficha1;