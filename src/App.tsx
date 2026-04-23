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
    <div className=" px-7   hide-scrollbar">
      <Section customId="hero">
        <HeroSection/>
      </Section>
      <Section customId="menu" sectionTitle={ { title: 'Menu Highlights' , customClass:""}}>
        <MenuSection/>
      </Section>
      <Section customId="about" sectionTitle={ {title : 'About', customClass:''}} >
        <AboutSection/>
      </Section>
      <Section customId="feedback">
        <FeedbackSection/>
      </Section>
    </div>

    <Footer/>
  </>
}