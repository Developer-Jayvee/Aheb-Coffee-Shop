import Card from "../../components/Card";
import Highlight1 from "../../assets/images/highlight-1.jpg";
import Highlight2 from "../../assets/images/highlight-2.jpg";
import Highlight3 from "../../assets/images/highlight-3.jpg";
import { Fade } from "react-awesome-reveal";

export default function MenuSection(){

    return <div className="grid lg:grid-cols-[repeat(3,1fr)] grid-cols-[repeat(autofill,minmax(auto,1fr))] md:gap-x-10  gap-y-2">
            <Fade cascade>
                <Card imgSrc={Highlight1} title={{ first: 'Tibuok' , second:'Salt Special'}} />
                <Card imgSrc={Highlight2} title={{ first: 'Creamy' , second:'Carbonara'}} />
                <Card imgSrc={Highlight3} title={{ first: 'Cheese' , second:'Sandwich'}} />

            </Fade>
        
    </div>
}