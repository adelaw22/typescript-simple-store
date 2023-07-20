import man from "../assets/images/man.png"
import woman from "../assets/images/woman.png"
import couple from "../assets/images/cuple.png"

export interface ctaDataType{
    id: number;
    img: string;
    headline: string;
    details: string;
}

const CtaData: ctaDataType[] =[
    {
        id:0,
        img: man,
        headline:"Fashionable Gentleman's Attire",
        details:"Est expedita dolor qui exercitationem eius aut tempore tempore.",
    },
    {
        id:1,
        img: woman,
        headline:"Elegance of Eleganza Dress",
        details:"Ut totam minus in illum nihil cum velit mollitia incidunt et omnis.",
    },
    {
        id:2,
        img: couple,
        headline:" Exquisive Couples Collection",
        details:"Ad officiis culpa non nulla illum qui praesentium corporis.",
    },
]

export default CtaData