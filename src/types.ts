export interface IMenuItem {
    text: string;
    url: string;
}

export interface IBenefit {
    title: string;
    description: string;
    imageSrc: string;
    btHref: string;
    btnName: string;
    bullets: IBenefitBullet[]
}

export interface IBenefitBullet {
    title: string;
    description: string;
    icon: JSX.Element;
}

export interface IPricing {
    name: string;
    price: number | string;
    features: string[];
}

export interface IFAQ {
    question: string;
    answer: string;
}

export interface ITestimonial {
    name: string;
    role: string;
    message: string;
    avatar: string;
}

export interface IStats {
    title: string;
    icon: JSX.Element;
    description: string;
}

export interface ISocials {
    facebook?: string;
    github?: string;
    instagram?: string;
    linkedin?: string;
    threads?: string;
    twitter?: string;
    youtube?: string;
    x?: string;
    [key: string]: string | undefined;
}

export interface ICarrusselItem {
    imageSrc: string; 
    current?: boolean;
    slide: string;
    dataCsarousel: string;
}

export interface IBtnFichasLink {
    btnHref: string;
    titleFicha: string;
    descripcionFicha: string;
}

export interface IBtnFichasLink2 {
    btnHref: string;
    titleFicha: string;
    descripcionFicha: string;
}

export interface IBtnFichasLink3 {
    btnHref: string;
    titleFicha: string;
    descripcionFicha: string;
}

export interface IBtnFichasLink4 {
    btnHref: string;
    titleFicha: string;
    descripcionFicha: string;
}

export interface IDataFicha {
    fichaTitle: string;
    fichaDescription: string;
    fichaDescription2: string;
    fichaCuidados: string;
}



