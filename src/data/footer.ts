import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Energía confiable para tu industria.",
    quickLinks: [
        {
            text: "Quienes Somos",
            url: "#testimonials"
        },
        {
            text: "Productos y Servicios",
            url: "#features"
        },
        {
            text: "Contacto",
            url: "#pricing"
        }
    ],
    email: ' ',
    telephone: ' ',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com',
    }
}