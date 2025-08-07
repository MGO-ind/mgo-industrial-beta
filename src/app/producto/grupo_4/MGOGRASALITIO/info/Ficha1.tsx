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
                        <p className="mx-auto max-w-5xl md:px-5">La MGO GRASA LITIO-EP está fortificada con inhibidores de oxidación y óxido con agentes anti desgaste y desactivadores de metales para proporcionar una excelente estabilidad mecánica en una amplia variedad de aplicaciones industriales, automotrices y domésticas. Su formulación le permite trabajar en condiciones extremas de temperatura a bajo de 0°C como cercanas a 180°C, por lo que son efectivas en cualquier época del año.</p>
                        <h2 className="text-xl sm:text-1xl md:text-2xl md:leading-tight font-semibold mb-4 max-w-5xl">Características / Beneficios</h2>
                        <ul className="list-disc pl-5">
                            <li>Proporciona una excelente estabilidad mecánica.</li>
                            <li>Resiste eficazmente el arrastre por agua</li>
                            <li>Resistente a sistemas de lubricación que requieran altas temperaturas.</li>
                            <li>Adecuada protección contra la corrosión, oxidación y desgaste.</li>
                            <li>Fácilmente bombeables tanto con pistolas manuales como neumáticas</li>
                            <li>Es compatible con otras grasas de litio.</li>
                            <li>Excelente adherencia a cualquier tipo de superficie o componente metálico.</li>
                            <li>Aditivada para resistir trabajos de extrema presión</li>
                        </ul>
                        <h2 className="text-xl sm:text-1xl md:text-2xl md:leading-tight font-semibold mb-4 max-w-5xl">Aplicación</h2>
                        <p className="mx-auto max-w-xl md:px-5">
                            Se recomienda para la mayor parte de lugares donde se necesite una lubricación a altas temperaturas. Se emplea en lubricación de cojinete antifricción de unidades automotrices, agrícolas, industriales y mineras, en motores, generadores y excitadores eléctricos, etc. diseñada para la lubricación de rodamientos en equipos automotores y rodantes, cojinetes antifricción y los que son sometidos a cargas por impacto a temperaturas moderadas, en vagones y maquinaria pesada agrícola, minera, construcción, grúas, transporte, sistemas centralizados de lubricación, crucetas y sistemas de acoples de tractocamiones, remolques y motores eléctricos que operan en contacto con elementos de bronce y sellos a base de caucho, buna o elastómeros y a temperaturas entre -10°C y 180°C.
                        </p>
                        <h2 className="text-xl sm:text-1xl md:text-2xl md:leading-tight font-semibold mb-4 max-w-5xl">Aplicación</h2>
                        <p className="mx-auto max-w-xl md:px-5">3.5 Kg. / 16 Kg. / 180 Kg.</p>
                        <div className="overflow-x-auto max-w-6xl mx-auto mb-8">
                            <table className="min-w-full bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                                <thead className="bg-white/20">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-sm font-medium text-white border-b border-white/20">Propiedad</th>
                                        <th className="px-4 py-3 text-left text-sm font-medium text-white border-b border-white/20">Método ASTM</th>
                                        <th className="px-4 py-3 text-center text-sm font-medium text-white border-b border-white/20"></th>
                                        <th className="px-4 py-3 text-center text-sm font-medium text-white border-b border-white/20">Resultados</th>
                                        <th className="px-4 py-3 text-center text-sm font-medium text-white border-b border-white/20"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/10">
                                    <tr className="hover:bg-white/5">
                                        <td className="px-4 py-3 text-sm text-white">Apariencia</td>
                                        <td className="px-4 py-3 text-sm text-white">Visual</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">Ámbar</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">Roja</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">Azul</td>
                                    </tr>
                                    <tr className="hover:bg-white/5">
                                        <td className="px-4 py-3 text-sm text-white">Consistencia</td>
                                        <td className="px-4 py-3 text-sm text-white">Visual</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">Suave y lisa</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">Suave y lisa</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">Suave y lisa</td>
                                    </tr>
                                    <tr className="hover:bg-white/5">
                                        <td className="px-4 py-3 text-sm text-white">Tipo de jabón</td>
                                        <td className="px-4 py-3 text-sm text-white">-</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">Litio</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">Litio</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">Litio</td>
                                    </tr>
                                    <tr className="hover:bg-white/5">
                                        <td className="px-4 py-3 text-sm text-white">Grado NLGI</td>
                                        <td className="px-4 py-3 text-sm text-white">D-217</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">2</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">2</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">2</td>
                                    </tr>
                                    <tr className="hover:bg-white/5">
                                        <td className="px-4 py-3 text-sm text-white">Clasificación NLGI</td>
                                        <td className="px-4 py-3 text-sm text-white">D-217</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">LA/LB</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">LA/LB</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">LA/LB</td>
                                    </tr>
                                    <tr className="hover:bg-white/5">
                                        <td className="px-4 py-3 text-sm text-white">Penetración</td>
                                        <td className="px-4 py-3 text-sm text-white">D-217</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">265-295</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">265-295</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">265-295</td>
                                    </tr>
                                    <tr className="hover:bg-white/5">
                                        <td className="px-4 py-3 text-sm text-white">Punto de Goteo (°C/°F)</td>
                                        <td className="px-4 py-3 text-sm text-white">D-2265</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">190/374</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">190/374</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">190/374</td>
                                    </tr>
                                    <tr className="hover:bg-white/5">
                                        <td className="px-4 py-3 text-sm text-white">Separación de aceite</td>
                                        <td className="px-4 py-3 text-sm text-white">D-1742</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">01-mar</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">01-mar</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">01-mar</td>
                                    </tr>
                                    <tr className="hover:bg-white/5">
                                        <td className="px-4 py-3 text-sm text-white font-medium" rowSpan={3}>Viscosidad del aceite base</td>
                                        <td className="px-4 py-3 text-sm text-white">D-445</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">-</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">-</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">-</td>
                                    </tr>
                                    <tr className="hover:bg-white/5">
                                        <td className="px-4 py-3 text-sm text-white">cSt @ 40°</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">150</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">150</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">150</td>
                                    </tr>
                                    <tr className="hover:bg-white/5">
                                        <td className="px-4 py-3 text-sm text-white">cSt @ 100°C</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">15</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">15</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">15</td>
                                    </tr>
                                    <tr className="hover:bg-white/5">
                                        <td className="px-4 py-3 text-sm text-white">Índice de Viscosidad</td>
                                        <td className="px-4 py-3 text-sm text-white">D-2270</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">100</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">100</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">100</td>
                                    </tr>
                                    <tr className="hover:bg-white/5">
                                        <td className="px-4 py-3 text-sm text-white">Ensayo máquina Timken, carga OK Lb</td>
                                        <td className="px-4 py-3 text-sm text-white">D 2509</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">55</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">55</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">55</td>
                                    </tr>
                                    <tr className="hover:bg-white/5">
                                        <td className="px-4 py-3 text-sm text-white">Resistencia al lavado por agua</td>
                                        <td className="px-4 py-3 text-sm text-white">D-1264</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">&lt;10%</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">&lt;10%</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">&lt;10%</td>
                                    </tr>
                                    <tr className="hover:bg-white/5">
                                        <td className="px-4 py-3 text-sm text-white">Tiempo de vida útil a altas temperaturas (hrs.)</td>
                                        <td className="px-4 py-3 text-sm text-white">D-3527</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">40</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">40</td>
                                        <td className="px-4 py-3 text-sm text-white text-center">40</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <section className="mt-1 mb-5 lg:my-4">
                            <div className="relative w-full z-30 mx-auto py-2 sm:py-2 items-center justify-center">
                                <div className="h-full flex flex-col items-center justify-center text-center px-5">
                                <a href="../grupo_4" className="absolute inset-0 -z-10 w-full ">
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