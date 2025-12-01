import HeroScrollDemo from "@/components/HeroScrollDemo";

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center py-20">
        <button 
          onClick={scrollToTop}
          className="cursor-pointer transition-transform hover:scale-110 focus:outline-none"
          aria-label="Ir al inicio"
        >
          <img 
            src="chiikoLogoNegro.png" 
            alt="Chiiko Logo" 
            className="w-20 md:w-24"
          />
        </button>
      </div>
      <HeroScrollDemo />
    </div>
  )
}

export default App
