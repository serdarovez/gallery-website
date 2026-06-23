import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { Artist } from "./pages/Artist";
import { Exhibitions } from "./pages/Exhibitions";
import { About } from "./pages/About";
import { pageTransition } from "./motion";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();
  return (
    <div className="relative flex min-h-full flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageShell><Home /></PageShell>} />
            <Route path="/catalog" element={<PageShell><Catalog /></PageShell>} />
            <Route path="/artist" element={<PageShell><Artist /></PageShell>} />
            <Route path="/exhibitions" element={<PageShell><Exhibitions /></PageShell>} />
            <Route path="/about" element={<PageShell><About /></PageShell>} />
            <Route path="*" element={<PageShell><Home /></PageShell>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
