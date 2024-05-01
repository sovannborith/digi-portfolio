import Hero from "@/app/components/Hero";
import Tools from "../components/Tools";
import FavoriteProject from "../components/FavoriteProject";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <section className="max-padd-container">
      <Hero />
      <Tools />
      <AboutSection />
      <FavoriteProject />
      <Footer />
    </section>
  );
}
