import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const ProjectInitButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="
        group
        relative
        px-16 py-6
        cursor-pointer
        overflow-hidden
        rounded-2xl
        text-black
        text-lg
        font-medium
        tracking-wide
        transition-all
        duration-500
        ease-out
        focus:outline-none
        focus:ring-2
        focus:ring-white/50
        focus:ring-offset-2
      "
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: isHovered 
          ? '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
          : '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
      }}
    >
      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(206, 70, 118, 0.3) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(206, 70, 118, 0.2) 100%)',
          backgroundSize: '200% 200%',
          animation: isHovered ? 'liquidFlow 3s ease infinite' : 'none',
        }}
      />
      
      {/* Glass reflection */}
      <div
        className="absolute top-0 left-0 right-0 h-1/2 opacity-30"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%)',
        }}
      />
      
      {/* Liquid shimmer effect */}
      <div
        className={`
          absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700
        `}
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
          animation: isHovered ? 'shimmer 2s ease-in-out infinite' : 'none',
        }}
      />

      {/* Text */}
      <span className="relative z-10 text-black drop-shadow-lg">
        {t('button.startProject')}
      </span>

      {/* CSS Animations */}
      <style>{`
        @keyframes liquidFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes shimmer {
          0%, 100% { transform: translate(-100%, -100%) scale(0.5); opacity: 0; }
          50% { transform: translate(0, 0) scale(1.5); opacity: 1; }
        }
      `}</style>
    </button>
  );
};

export default ProjectInitButton;
