import { IconCheck } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

export default function AboutTimeline() {
  const { t } = useTranslation();

  const items = [
    {
      year: '2020',
      title: t('timeline.2020.title'),
      description: t('timeline.2020.desc'),
      images: ['/CreativaCarrada.png']
    },
    {
      year: '2021',
      title: t('timeline.2021.title'),
      description: t('timeline.2021.desc'),
      images: ['/EquipoUNAM.jpeg', '/pizarronUNAM.jpeg']
    },
    {
      year: '2022',
      title: t('timeline.2022.title'),
      description: t('timeline.2022.desc'),
      images: ['/PropuestaCitibanamex.png']
    },
    {
      year: '2023',
      title: t('timeline.2023.title'),
      description: t('timeline.2023.desc'),
      images: ['/ReuGob.png']
    },
    {
      year: '2024',
      title: t('timeline.2024.title'),
      description: t('timeline.2024.desc'),
      images: ['/Entrevista.png']
    },
    {
      year: '2025',
      title: t('timeline.2025.title'),
      description: t('timeline.2025.desc'),
      images: ['/chiikotimeline.jpg']
    },
    {
      year: '2026',
      title: t('timeline.2026.title'),
      description: t('timeline.2026.desc'),
      images: ['/fotosnosotros/photo_2026-04-18_11-17-35.jpg']
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-3 md:px-8 bg-base-100 mt-8 md:mt-0">
      <div className="max-w-6xl mx-auto">
        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform md:-translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-8 md:space-y-16 pl-8 md:pl-0">
            {items.map((item, index) => (
              <div key={index}>
                <div
                  className={`flex gap-3 md:gap-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className="md:hidden mb-2">
                      <span className="text-lg md:text-xl font-mono font-bold text-primary">{item.year}</span>
                    </div>
                    <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2">{item.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>

                  {/* Center icon */}
                  <div className="flex justify-center items-start md:items-center">
                    <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                      <IconCheck size={14} className="md:w-5 md:h-5" />
                    </div>
                  </div>

                  {/* Year - hidden on mobile */}
                  <div className="flex-1 hidden md:flex items-center justify-center">
                    <span className="text-5xl lg:text-6xl font-mono font-bold text-primary">{item.year}</span>
                  </div>
                </div>

                {/* Images */}
                {item.images && item.images.length > 0 && (
                  <div className={`mt-3 mb-6 md:mb-0 flex flex-col gap-2 ${
                    index % 2 === 0 ? 'md:mr-auto md:w-2/5' : 'md:ml-auto md:w-2/5'
                  }`}>
                    {item.images.map((image, imgIndex) => (
                      <img 
                        key={imgIndex}
                        src={image} 
                        alt={`${item.title} ${imgIndex + 1}`}
                        className="w-full h-48 md:h-56 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
