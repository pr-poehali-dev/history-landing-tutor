import Hero from "@/components/Hero";
import About from "@/components/About";
import Advantages from "@/components/Advantages";
import Packages from "@/components/Packages";
import Progress from "@/components/Progress";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Advantages />
      <Packages />
      <Progress />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Index;