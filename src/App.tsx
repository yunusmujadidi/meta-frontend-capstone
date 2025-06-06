import { FeatureSection } from "./components/feature";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero";
import { Layout } from "./Layout";

function App() {
  return (
    <Layout>
      <Header />
      <HeroSection />
      <div className="mt-30">
        <FeatureSection />
      </div>
    </Layout>
  );
}

export default App;
