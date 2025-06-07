import { AboutSection } from "./components/about";
import { FeaturedSection } from "./components/featured";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero";
import { TestimonialSection } from "./components/testimonial";
import { Layout } from "./Layout";

function App() {
  return (
    <Layout>
      <Header />
      <HeroSection />

      <FeaturedSection />

      <TestimonialSection />
      <AboutSection />
    </Layout>
  );
}

export default App;
