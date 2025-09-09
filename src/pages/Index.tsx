import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Rooms />
      <Amenities />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
