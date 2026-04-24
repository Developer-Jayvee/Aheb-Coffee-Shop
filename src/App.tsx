import { Fade } from "react-awesome-reveal";
import Navbar from "./components/NavBar";
import Section from "./components/Section";
import AboutSection from "./feature/About/AboutSection";
import FeedbackSection from "./feature/Feedback/FeedbackSection";
import Footer from "./feature/Footer/Footer";
import HeroSection from "./feature/Hero/HeroSection";
import MenuSection from "./feature/Menu/MenuSection";

export default function App(){
  
  return <>
      <Navbar/>
    <div className=" px-7   hide-scrollbar select-none">
        <Section customId="hero">
          <HeroSection/>
        </Section>
      <Fade  cascade fraction={0.3}>

      <Section customId="menu" sectionTitle={ { title: 'Menu Highlights' , customClass:""}}>
        <MenuSection/>
      </Section>
      </Fade>
      <Fade cascade fraction={0.4} className="sm:my-10">
        <Section customId="about" sectionTitle={ {title : 'About', customClass:''}} >
          <AboutSection/>
        </Section>
      </Fade>

        <Fade cascade fraction={0.4} className="mb-15 ">
        <Section customId="feedback" sectionTitle={ { title : 'Top responses' , customClass:''}}>
          <FeedbackSection/>
        </Section>
        </Fade>

    </div>

    <Footer/>
  </>
}