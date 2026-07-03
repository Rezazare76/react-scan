import { FpsDemo } from "./components/demos/fps-demo/FpsDemo";
import { RenderDemo } from "./components/demos/render-demo/RenderDemo";
import { Footer } from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { HowItWorks } from "./components/how-it-works/HowItWorks";
import { Setup } from "./components/setup/Setup";
import { MainLayout } from "./layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <Hero />
      <HowItWorks />
      <RenderDemo />
      <FpsDemo />
      <Setup />
      <Footer />
    </MainLayout>
  );
}

export default App;
