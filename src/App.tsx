import HeroScrollDemo from "@/components/HeroScrollDemo";
import ValuePropositions from "@/components/ValuePropositions";
import LoaderTwoDemo from "@/components/LoaderTwoDemo";
import WorkProcess from "@/components/WorkProcess";
import CometCardDemo from "@/components/CometCardDemo";
import ServicesCards from "@/components/ServicesCards";
import WhoWeWorkWithDemo from "@/components/WhoWeWorkWithDemo";
import { ResizableNavbarDemo } from "@/components/ResizableNavbarDemo";
import { ProjectInitButton } from "@/components/ProjectInitButton";
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
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <h2 className="text-7xl md:text-[10rem] font-inter font-bold text-black text-center">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-2xl md:text-4xl font-inter font-bold text-black text-center max-w-3xl">
            No hacemos sitios web. Construimos activos digitales que <span style={{color: "#ce4676"}}>venden.</span>
          </p>
        </div>
      </div>
      
      <div className="w-full flex justify-center items-center px-4 py-20">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <div className="flex flex-col space-y-4 text-center md:text-left items-center md:items-start">
              <div className="text-[8rem] md:text-[12rem] font-bold" style={{color: "#ce4676"}}>
                01
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-black">
                Pensados para negocio
              </h3>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Cada decisión de diseño tiene una razón: conversión, claridad y crecimiento.
              </p>
            </div>
            <div className="flex flex-col space-y-4 text-center md:text-left items-center md:items-start">
              <div className="text-[8rem] md:text-[12rem] font-bold" style={{color: "#ce4676"}}>
                02
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-black">
                Diseño con identidad
              </h3>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                No usamos plantillas genéricas. Cada sitio tiene carácter, concepto y propósito.
              </p>
            </div>
            <div className="flex flex-col space-y-4 text-center md:text-left items-center md:items-start">
              <div className="text-[8rem] md:text-[12rem] font-bold" style={{color: "#ce4676"}}>
                03
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-black">
                Construidos para durar
              </h3>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Sitios rápidos, escalables y listos para evolucionar con tu proyecto.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full flex justify-center items-center px-4 py-20" style={{marginTop: '100px', marginBottom: '100px'}}>
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-7xl md:text-[10rem] font-inter font-bold text-black text-center">
            ¿Listo para <span style={{color: "#ce4676"}}>construir</span> juntos?
          </h2>
          <ProjectInitButton />
        </div>
      </div>
      </motion.div>
    </>
  )
}

export default App
