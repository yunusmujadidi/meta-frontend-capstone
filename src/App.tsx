import { FeaturedSection } from "./components/feature";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero";
import { TestimonialSection } from "./components/testimonial";
import { Layout } from "./Layout";

function App() {
  return (
    <Layout>
      <Header />
      <HeroSection />
      <div className="mt-30">
        <FeaturedSection />
      </div>
      <TestimonialSection />
    </Layout>
  );
}

export default App;
