
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { PropertyListings } from "@/components/PropertyListings";
import { Contact } from "@/components/Contact";
import { Element } from "react-scroll";
import { Toaster } from "@/components/ui/sonner";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Toaster />
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="properties">
        <PropertyListings />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default Index;
