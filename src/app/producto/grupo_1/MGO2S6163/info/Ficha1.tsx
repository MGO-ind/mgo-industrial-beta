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
                        <h3 className="text-xl sm:text-1xl md:text-2xl md:leading-tight font-semibold mb-4">Paquete de Aditivos para Aceites de Motores de 2 Tiempos Enfriados por Aire</h3>

                        <h3 className="text-xl sm:text-1xl md:text-2xl md:leading-tight font-semibold mb-4 max-w-5xl">Descripción</h3>
                        <p className="mx-auto max-w-5xl md:px-5">{DataFicha[0].fichaDescription}</p>
                        <h2 className="text-xl sm:text-1xl md:text-2xl md:leading-tight font-semibold mb-4 max-w-5xl">Especificaciones</h2>
                        <table className="mx-auto max-w-5xl md:px-5">
                            <tbody className="text-center align-middle rounded-full border border-gray-300">
                                <tr>
                                    <th className="font-semibold border border-gray-300 ">ESPECIFICACIONES JASO</th>
                                    <th className="font-semibold border border-gray-300">Tasa de Tratamiento (%wt)</th>
                                </tr>
                                <tr>
                                    <td className="justify-center text-center border border-gray-300">FB</td>
                                    <td className="justify-center text-center border border-gray-300">4.0%</td>
                                </tr>
                                <tr>
                                    <td className="justify-center text-center border border-gray-300">FC</td>
                                    <td className="justify-center text-center border border-gray-300">5.5%</td>
                                </tr>
                            </tbody>
                        </table>

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