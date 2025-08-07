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
                        <h3 className="text-xl sm:text-1xl md:text-2xl md:leading-tight font-semibold mb-4">Detergente Sulfonato de Magnesio Sintético(Booster TBN)</h3>

                        <h3 className="text-xl sm:text-1xl md:text-2xl md:leading-tight font-semibold mb-4 max-w-5xl">Descripción</h3>
                        <p className="mx-auto max-w-5xl md:px-5">{DataFicha[0].fichaDescription}</p>
                        <h2 className="text-xl sm:text-1xl md:text-2xl md:leading-tight font-semibold mb-4 max-w-5xl">Especificaciones</h2>
                        <div className="relative overflow-x-auto shadow-md rounded-2xl text-xl max-w-5xl mx-auto mb-4 md:px-5">
                            <table className="w-full rtl:text-right text-zinc-500 dark:text-white">
                                <thead className="text-zinc-700 uppercase bg-gray-50 dark:bg-zinc-700 dark:text-white">
                                    <tr>
                                        <th className="px-6 py-3">Pruebas</th>
                                        <th className="px-6 py-3">Métodos ASTM</th>
                                        <th className="px-6 py-3">Especificaciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">Punto de Inflamación (COC), ℃</td>
                                        <td className="px-6 py-3">D92</td>
                                        <td className="px-6 py-3">≥ 180</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">Viscosidad Cinemática @100 ℃, mm2/s</td>
                                        <td className="px-6 py-3">D445</td>
                                        <td className="px-6 py-3">80 - 150</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">Densidad @20 ℃, kg/m3</td>
                                        <td className="px-6 py-3">D4052</td>
                                        <td className="px-6 py-3">1050 - 1150</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">Número Total de Base, (mg KOH/g)</td>
                                        <td className="px-6 py-3">D2896</td>
                                        <td className="px-6 py-3">395 - 435</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">Contenido de Mg, % peso</td>
                                        <td className="px-6 py-3">D4951</td>
                                        <td className="px-6 py-3">8.5 - 10.0</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">Contenido de Agua, %</td>
                                        <td className="px-6 py-3">D95</td>
                                        <td className="px-6 py-3">≤ 0.2</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-300 border-zinc-500">
                                        <td className="px-6 py-3">Sedimentos, % peso</td>
                                        <td className="px-6 py-3"></td>
                                        <td className="px-6 py-3">≤ 0.1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-xl sm:text-1xl md:text-2xl md:leading-tight font-semibold mb-4 max-w-5xl">Envasado, Almacenamiento, Transporte</h2>

                        <p className="mx-auto max-w-xl md:px-5">
                            <ul className="list-disc pl-5">
                                <li>Envasado en tambores de acero de 200 Lt..</li>
                                <li>LLa temperatura de almacenamiento no debe exceder los 45 °C.</li>
                                <li>El producto no es flamable, ni explosivo, ni corrosivo, y es igual a los demás productos derivados del petróleo en términos de seguridad, protección ambiental, uso y otros aspectos. No necesita protección especial.</li>
                                <li>El producto almacenado cuenta con una vida útil de 2 años y debe evitarse el contacto con antioxidantes fuertes al momento de usarse.</li>
                                <li>En caso de entrar en contacto con la piel, lávese con agua y detergente.</li>
                            </ul>
                        </p>

                        <section className="mt-1 mb-5 lg:my-4">
                            <div className="relative w-full z-30 mx-auto py-2 sm:py-2 items-center justify-center">
                                <div className="h-full flex flex-col items-center justify-center text-center px-5">
                                <a href="../grupo_3" className="absolute inset-0 -z-10 w-full ">
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