import { FiBarChart2, FiBriefcase, FiTarget, FiTrendingUp} from "react-icons/fi";

import { IBenefit } from "@/types"


export const benefits: IBenefit[] = [
    {
        title: "Aditivos",
        description: "En MGO Industrial ofrecemos una línea de aditivos de alto desempeño diseñados para mejorar las propiedades físicas, químicas y operativas de combustibles, lubricantes y otros productos petroleros. ",
        bullets: [
            {
                title: "Mejoran el rendimiento y eficiencia del combustible",
                description: "Optimiza la combustión y reduce el consumo, lo que se traduce en un mejor aprovechamiento energético.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Protegen equipos y sistemas",
                description: "Previenen la corrosión, formación de depósitos y desgaste prematuro en motores y líneas de conducción.",
                icon: <FiTrendingUp size={26} />
            },
            {
                title: "Prolongan la vida útil del producto",
                description: "Aumentan la estabilidad térmica y química de los combustibles o lubricantes, asegurando un almacenamiento y desempeño más duraderos.",
                icon: <FiBriefcase size={26} />
            }
        ],
       
        
        imageSrc: "/images/1-web.png",      
        btnName: "Conoce Nuestros Productos",
        btHref: "/producto/grupo_1", 
    },
    {
        title: "Automotriz",
        description: "Nuestro paquete automotriz está formulado para mejorar el desempeño, protección y eficiencia de motores a gasolina o diésel. Compuesto por una mezcla balanceada de aditivos detergentes, dispersantes, anticorrosivos y mejoradores de lubricidad, este producto está diseñado para mantener el motor limpio, reducir el desgaste y optimizar el consumo de combustible.",
        bullets: [
            {
                title: "Limpieza interna del motor",
                description: "Elimina y previene la formación de depósitos en inyectores, válvulas y cámaras de combustión.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Mayor vida útil del motor",
                description: "Reduce la fricción y el desgaste, protegiendo componentes críticos bajo condiciones severas..",
                icon: <FiTarget size={26} />
            },
            {
                title: "Mejora el rendimiento del combustible",
                description: "Aumenta la eficiencia en la combustión, optimizando el consumo y reduciendo emisiones contaminantes.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/2-web.png",
        btnName: "Conoce la parefina",
        btHref: "/producto/grupo_2", 
        
    },
    {
        title: "Componentes",
        description: "Nuestro paquete de componentes está diseñado para brindar una base funcional y versátil en la formulación de productos lubricantes, combustibles y aditivos industriales. Integra agentes detergentes, antioxidantes, dispersantes, antidesgaste y mejoradores de propiedades físicas, todos compatibles entre sí y con altos estándares de desempeño. Ideal para fabricantes que buscan personalizar o fortalecer sus formulaciones con ingredientes confiables, de alta calidad y eficiencia comprobada.",
        bullets: [
            {
                title: "Optimiza formulaciones personalizadas",
                description: "Aporta una base técnica equilibrada que facilita el desarrollo de productos con propiedades específicas.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Reduce tiempos y costos de formulación",
                description: "Minimiza la necesidad de pruebas extensas gracias a su compatibilidad y efectividad comprobada.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Garantiza desempeño técnico constante",
                description: "Mejora la estabilidad, durabilidad y funcionalidad de lubricantes y combustibles bajo condiciones operativas exigentes.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/3-web.png",
        btnName: "Conoce Nuestros Aditivos",
        btHref: "/producto/grupo_3", 
        
    },
    {
        title: "Industrial",
        description: "El paquete industrial está formulado para mejorar el rendimiento, la protección y la estabilidad de aceites y lubricantes utilizados en maquinaria, sistemas hidráulicos, compresores y equipos industriales en general. Contiene una combinación precisa de aditivos antidesgaste, antioxidantes, inhibidores de corrosión, mejoradores de viscosidad y agentes antiespumantes, diseñados para operar bajo condiciones exigentes. Este paquete es ideal para fabricantes o usuarios que requieren soluciones confiables para el mantenimiento eficiente y prolongado de sus equipos.",
        bullets: [
            {
                title: "Mayor protección en condiciones severas",
                description: "Protege componentes metálicos contra fricción, desgaste y corrosión en entornos industriales demandantes.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Extiende la vida útil del lubricante",
                description: "Mejora la resistencia a la oxidación y mantiene la estabilidad del aceite incluso a altas temperaturas.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Aumenta la eficiencia operativa",
                description: "Reduce paros por mantenimiento, mejora el desempeño de los equipos y optimiza el costo operativo.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/4-web.png",
        btnName: "Conoce la parefina",
        btHref: "/producto/grupo_4", 
        
    },
]