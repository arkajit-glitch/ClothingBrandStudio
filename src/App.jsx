import { AnimatePresence, LayoutGroup } from "framer-motion";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import IntroReveal from "./components/IntroReveal";
import SiteLayout from "./components/SiteLayout";
import AboutPage from "./pages/AboutPage";
import CollectionsPage from "./pages/CollectionsPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import LookbookPage from "./pages/LookbookPage";
import ServicesPage from "./pages/ServicesPage";
import ShopPage from "./pages/ShopPage";
import TestimonialsPage from "./pages/TestimonialsPage";

function App() {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(true);

  return (
    <LayoutGroup id="brand-lockup">
      <IntroReveal visible={showIntro} onComplete={() => setShowIntro(false)} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/lookbook" element={<LookbookPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </LayoutGroup>
  );
}

export default App;
