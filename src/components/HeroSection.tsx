import React, { useEffect, useState } from 'react';

interface HeroPanel {
  id: number;
  image: string;
  title: string;
  content: string[];
}

const heroData: HeroPanel[] = [
  {
    id: 0,
    image: '/lovable-uploads/73cda915-27c3-431a-a107-1869374710d2.png',
    title: 'award-winning digital marketing strategist',
    content: [
      'Thalía De Anda is a PR strategist, influencer marketing expert, and content creator with over a decade of experience shaping cultural moments at the intersection of entertainment, lifestyle, and tech.',
      'With a sharp eye for storytelling and audience connection, she has led high-impact strategies for Amazon MGM Studios, Universal Orlando, NBCUniversal, Paramount, and Apple among others. Crafting campaigns that spark conversation and resonate across LATAM, the U.S., UK, and Spain.',
      'Known for her instinct to tap into pop culture at just the right moment, Thalía has helmed campaigns for some of the most talked-about titles—Top Gun Maverick, Fast and Furious, The Summer I Turned Pretty, The Boys, The Lord of the Rings: The Rings of Power, Despicable Me, and The Idea of You.',
      'Her signature? A hybrid of strategy and soul: merging red carpet spectacle, influencer magic, and editorial precision into every campaign.',
      'When she\'s not developing creative launches or spotlighting talent, you\'ll likely find her using Instagram as her own digital magazine—curating fashion moments, cultural commentary, and visual storytelling with the same eye she brings to her campaigns. At her core, she\'s a storyteller—one who believes in turning brand narratives into unforgettable experiences.'
    ]
  },
  {
    id: 1,
    image: '/images/image1.webp',
    title: 'strategic campaign architect',
    content: [
      'From red carpet premieres to digital campaigns, Thalía orchestrates multi-platform strategies that capture cultural moments and drive conversation.',
      'Her portfolio spans entertainment giants like Amazon MGM Studios, NBCUniversal, and Paramount, where she has crafted campaigns that resonate across global markets and diverse audiences.'
    ]
  },
  {
    id: 2,
    image: '/images/image2.webp',
    title: 'cultural moment creator',
    content: [
      'With an intuitive grasp of pop culture timing, Thalía transforms brand narratives into unforgettable experiences that spark genuine audience connection.',
      'Her signature approach blends editorial precision with influencer authenticity, creating campaigns that feel both aspirational and accessible to modern consumers.'
    ]
  }
];

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // Set initial window height
    setWindowHeight(window.innerHeight);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    // Apply scroll snap to both html and body for better mobile support
    document.documentElement.style.scrollSnapType = 'y mandatory';
    document.body.style.scrollSnapType = 'y mandatory';
    // For iOS Safari
    document.documentElement.style.webkitOverflowScrolling = 'touch';
    document.body.style.webkitOverflowScrolling = 'touch';
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      // Clean up scroll snap on unmount
      document.documentElement.style.scrollSnapType = '';
      document.body.style.scrollSnapType = '';
      document.documentElement.style.webkitOverflowScrolling = '';
      document.body.style.webkitOverflowScrolling = '';
    };
  }, []);

  return (
    <div 
      className="hero-container"
      style={{
        position: 'relative'
      }}
    >
      {heroData.map((panel, index) => {
        // Calculate parallax offsets for this panel
        const panelTop = index * windowHeight;
        const panelScrollProgress = windowHeight > 0 ? (scrollY - panelTop) / windowHeight : 0;
        const isInView = panelScrollProgress >= -1 && panelScrollProgress <= 1;
        
        // Check if mobile
        const isMobile = windowHeight > 0 && window.innerWidth < 768;
        
        // Parallax speeds - reduced on mobile for better performance
        const imageOffset = isInView ? panelScrollProgress * (isMobile ? 20 : 50) : 0;
        const textOffset = isInView ? panelScrollProgress * (isMobile ? 10 : 30) : 0;
        
        // Fade effect
        let opacity = 1;
        if (panelScrollProgress < -0.5) {
          opacity = 0;
        } else if (panelScrollProgress < 0) {
          opacity = 1 + (panelScrollProgress * 2);
        } else if (panelScrollProgress > 0.5) {
          opacity = 1 - ((panelScrollProgress - 0.5) * 2);
        }

        // First panel gets auto height on mobile for natural scrolling
        const isFirstPanel = index === 0;
        const panelHeight = isFirstPanel && isMobile 
          ? 'auto' 
          : windowHeight > 0 ? `${windowHeight}px` : '100vh';
        
        // For panel 2 (index 1), swap the image and text positions
        const isPanel2 = index === 1;
        
        return (
          <section 
            key={panel.id}
            className="hero-panel flex items-center justify-center pt-16 md:pt-32 pb-4 md:pb-section px-4 md:px-8"
            style={{
              minHeight: windowHeight > 0 ? `${windowHeight}px` : '100vh',
              height: panelHeight,
              scrollSnapAlign: 'start',
              scrollSnapStop: 'always',
              opacity
            }}
          >
            <div className="container mx-auto max-w-6xl w-full h-full">
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-start lg:items-center">
                {/* Hero Image */}
                <div 
                  className={`relative w-full flex-shrink-0 ${isPanel2 ? 'order-2 lg:order-2' : ''}`}
                  style={{
                    transform: `translateY(${-imageOffset}px)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                >
                  <div className="aspect-[3/4] md:aspect-[4/5] lg:aspect-[4/5] overflow-hidden">
                    <img
                      src={panel.image}
                      alt={`Thalía De Anda - ${panel.title}`}
                      className="w-full h-full object-cover object-top lg:object-center"
                    />
                  </div>
                </div>

                {/* Hero Content */}
                <div 
                  className={`relative w-full ${isPanel2 ? 'order-1 lg:order-1' : ''}`}
                  style={{
                    transform: `translateY(${-textOffset}px)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                >
                  <div className="lg:aspect-[4/5] flex flex-col justify-start lg:justify-center py-4 lg:py-8">
                    <div className="space-y-3 lg:space-y-6">
                      <h1 className="text-lg lg:text-xl font-normal text-portfolio-white mb-3 lg:mb-6">
                        {panel.title}
                      </h1>
                      
                      <div className="space-y-2 lg:space-y-4 body-text text-xs lg:text-sm leading-relaxed">
                        {panel.content.map((paragraph, pIndex) => (
                          <p key={pIndex}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default HeroSection;