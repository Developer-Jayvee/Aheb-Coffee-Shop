import type { ReactNode } from "react";

interface TitleConfig {
    title : string;
    customClass : string;
}
interface SectionInterface {
    customId : string;
    customClass ?: string;
    children : ReactNode;
    sectionTitle ?: TitleConfig;
}
export default function Section({
    customId , customClass = "" , children , sectionTitle
} : SectionInterface){
    return <section id={customId} className={`flex flex-col gap-5 scroll-mt-30  ${customClass}`}>
        { sectionTitle ? <h1 className={`${sectionTitle?.customClass} text-[48px] sil-regular`}>{sectionTitle?.title}</h1> : ''}
        {children}
        
    </section>
}