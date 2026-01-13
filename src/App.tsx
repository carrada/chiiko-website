import HeroScrollDemo from "@/components/HeroScrollDemo";
import ValuePropositions from "@/components/ValuePropositions";
import LoaderTwoDemo from "@/components/LoaderTwoDemo";
import WorkProcess from "@/components/WorkProcess";
import CometCardDemo from "@/components/CometCardDemo";
import ServicesCards from "@/components/ServicesCards";
import WhoWeWorkWithDemo from "@/components/WhoWeWorkWithDemo";
import { ResizableNavbarDemo } from "@/components/ResizableNavbarDemo";
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
      <ResizableNavbarDemo />
      <div className="py-12 md:py-16"></div>
      <HeroScrollDemo />
      <ValuePropositions />
      
      <div className="w-full flex justify-center items-center px-4" style={{marginTop: '70px', marginBottom: '80px'}}>
        <h2 className="text-7xl md:text-[10rem] font-inter font-bold text-black text-center" style={{marginTop: window.innerWidth >= 768 ? '150px' : '0'}}>
          Nuestro Método
        </h2>
      </div>
      
      <WorkProcess />
      
      <div className="w-full flex justify-center items-center px-4" style={{marginTop: '150px', marginBottom: '200px'}}>
        <h2 className="text-7xl md:text-[10rem] font-inter font-bold text-black text-center">
          Nuestros Proyectos
        </h2>
      </div>
      
      <CometCardDemo />
      
      <div className="w-full flex justify-center items-center px-4" style={{marginTop: '150px', marginBottom: '100px'}}>
        <h2 className="text-7xl md:text-[10rem] font-inter font-bold text-black text-center">
          Nuestros <br /> Servicios
        </h2>
      </div>
      
      <ServicesCards />
      
      <div className="w-full flex justify-center items-center px-4" style={{marginTop: '150px', marginBottom: '100px'}}>
        <h2 className="text-7xl md:text-[10rem] font-inter font-bold text-black text-center">
          Con quien trabajamos
        </h2>
      </div>
      
      <WhoWeWorkWithDemo />
      
      <div className="w-full flex justify-center items-center px-4 py-16" style={{marginTop: '100px', marginBottom: '50px'}}>
        <p className="text-6xl md:text-7xl font-inter font-bold text-black text-center max-w-3xl md:max-w-5xl leading-relaxed">
          <span style={{color: "#ce4676"}}>No</span> somos para todos.
        </p>
      </div>
      
      <div className="w-full flex justify-center items-center px-4 py-16">
        <p className="text-2xl md:text-5xl font-inter font-bold text-black text-center max-w-2xl md:max-w-4xl leading-relaxed">
          Si buscas un sitio pensado para durar, diferenciarte y vender, <span style={{color: "#ce4676"}}>estamos alineados.</span>
        </p>
      </div>
      
      <div className="w-full flex justify-center items-center px-4" style={{marginTop: '150px', marginBottom: '100px'}}>
        <h2 className="text-7xl md:text-[10rem] font-inter font-bold text-black text-center flex flex-col md:flex-row items-center justify-center md:gap-4">
          Por qué
          <img 
            src="/chiikoLogoNegro.png" 
            alt="Chiiko" 
            className="h-80 md:h-96 w-auto md:mt-0"
            style={{display: 'inline-block', marginTop: '-80px'}}
          />
        </h2>
      </div>
      
      {/* Agregar nuevos componentes aquí */}
      
      <div className="h-96"></div>
      </motion.div>
    </>
  )
}

export default App
