import { AboutSection } from "./components/about";
import { FeaturedSection } from "./components/featured";
import { HeroSection } from "./components/hero";
import { TestimonialSection } from "./components/testimonial";
import { Layout } from "./Layout";

function App() {
  return (
    <Layout>
      <HeroSection />
      <FeaturedSection />
      <TestimonialSection />
      <AboutSection />
    </Layout>
  );
}

export default App;
