import HeroScrollDemo from "@/components/HeroScrollDemo";
import ValuePropositions from "@/components/ValuePropositions";
import LoaderTwoDemo from "@/components/LoaderTwoDemo";
import WorkProcess from "@/components/WorkProcess";
import CometCardDemo from "@/components/CometCardDemo";
import ServicesCards from "@/components/ServicesCards";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Forzar scroll al inicio al cargar la página
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          >
            <LoaderTwoDemo />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
      <div className="sticky top-0 z-40 w-full flex justify-center items-center py-4 md:py-6 backdrop-blur-sm bg-white/70">
        <button 
          onClick={scrollToTop}
          className="cursor-pointer transition-transform hover:scale-110 focus:outline-none"
          aria-label="Ir al inicio"
        >
          <img 
            src="chiikoLogoNegro.png" 
            alt="Chiiko Logo" 
            className="w-16 md:w-20"
          />
        </button>
      </div>
      <div className="py-12 md:py-16"></div>
      <HeroScrollDemo />
      <ValuePropositions />
      
      <div className="w-full flex justify-center items-center px-4" style={{marginTop: '250px', marginBottom: '200px'}}>
        <h2 className="text-6xl md:text-[10rem] font-inter font-bold text-black text-center">
          ¿Cómo Trabajamos?
        </h2>
      </div>
      
      <WorkProcess />
      
      <div className="w-full flex justify-center items-center px-4" style={{marginTop: '250px', marginBottom: '200px'}}>
        <h2 className="text-6xl md:text-[10rem] font-inter font-bold text-black text-center">
          Nuestros Proyectos
        </h2>
      </div>
      
      <CometCardDemo />
      
      <div className="w-full flex justify-center items-center px-4" style={{marginTop: '250px', marginBottom: '200px'}}>
        <h2 className="text-6xl md:text-[10rem] font-inter font-bold text-black text-center">
          Nuestros <br /> Servicios
        </h2>
      </div>
      
      <ServicesCards />
      
      {/* Agregar nuevos componentes aquí */}
      
      <div className="h-96"></div>
      </motion.div>
    </>
  )
}

export default App
