import { FiBarChart2, FiBriefcase, FiTarget, FiTrendingUp} from "react-icons/fi";

import { IBenefit } from "@/types"


export const benefits: IBenefit[] = [
    {
        title: "Aceite Basico",
        description: "La parafina es una mezcla sólida de hidrocarburos saturados de cadena larga, obtenida mediante la destilación del petróleo. Su punto de fusión varía entre 58 °C y 60 °C, dependiendo del grado de refinamiento. ",
        bullets: [
            {
                title: "Acerca de la Parafina",
                description: "Es inodora, incolora o ligeramente blanquecina, insoluble en agua, y presenta alta estabilidad química y baja reactividad.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Usos",
                description: "Se utiliza en múltiples aplicaciones, incluyendo la fabricación de velas, recubrimientos, impermeabilización y como agente desmoldeante.",
                icon: <FiTrendingUp size={26} />
            },
            {
                title: "Diferentes presentaciones",
                description: "Disponible en presentaciones líquida, sólida o en escamas.",
                icon: <FiBriefcase size={26} />
            }
        ],
       
        
        imageSrc: "/images/oil2.png",      
        btnName: "Conoce Nuestros Productos",
        btHref: "/producto/grupo_1", 
    },
    {
        title: "Parafina Blanca en Bloques",
        description: "La parafina es una mezcla sólida de hidrocarburos saturados de cadena larga, obtenida mediante la destilación del petróleo. Su punto de fusión varía entre 58 °C y 60 °C, dependiendo del grado de refinamiento. ",
        bullets: [
            {
                title: "Acerca de la Parafina",
                description: "Es inodora, incolora o ligeramente blanquecina, insoluble en agua, y presenta alta estabilidad química y baja reactividad.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Usos",
                description: "Se utiliza en múltiples aplicaciones, incluyendo la fabricación de velas, recubrimientos, impermeabilización y como agente desmoldeante.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Diferentes presentaciones",
                description: "Disponible en presentaciones líquida, sólida o en escamas.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/parafina.png",
        btnName: "Conoce la parefina",
        btHref: "/producto/grupo_2", 
        
    },
    {
        title: "Aditivos",
        description: "Your financial data deserves the best protection. Rest easy knowing Finwise employs cutting-edge security measures.",
        bullets: [
            {
                title: "Acerca de la Parafina",
                description: "Es inodora, incolora o ligeramente blanquecina, insoluble en agua, y presenta alta estabilidad química y baja reactividad.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Usos",
                description: "Se utiliza en múltiples aplicaciones, incluyendo la fabricación de velas, recubrimientos, impermeabilización y como agente desmoldeante.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Diferentes presentaciones",
                description: "Disponible en presentaciones líquida, sólida o en escamas.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/hero-mockup.png",
        btnName: "Conoce Nuestros Aditivos",
        btHref: "/producto/grupo_3", 
        
    },
]