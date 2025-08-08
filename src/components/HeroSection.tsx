
import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-section">
      <div className="container mx-auto px-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Hero Image */}
          <div className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/lovable-uploads/73cda915-27c3-431a-a107-1869374710d2.png"
                alt="Thalía De Anda - PR Strategist"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-up animation-delay-200' : 'opacity-0'}`}>
            <h1 className="text-xl font-normal text-portfolio-white mb-6">
              award-winning digital marketing strategist
            </h1>
            
            <div className="space-y-6 body-text">
              <p>
                Thalía De Anda is a PR strategist, influencer marketing expert, and content creator with over a decade of experience shaping cultural moments at the intersection of entertainment, lifestyle, and tech.
              </p>
              
              <p>
                With a sharp eye for storytelling and audience connection, she has led high-impact strategies for Amazon MGM Studios, Universal Orlando, NBCUniversal, Paramount, and Apple among others. Crafting campaigns that spark conversation and resonate across LATAM, the U.S., UK, and Spain.
              </p>
              
              <p>
                Known for her instinct to tap into pop culture at just the right moment, Thalía has helmed campaigns for some of the most talked-about titles—<em>Top Gun Maverick</em>, <em>Fast and Furious</em>, <em>The Summer I Turned Pretty</em>, <em>The Boys</em>, <em>The Lord of the Rings: The Rings of Power</em>, <em>Despicable Me</em>, and <em>The Idea of You</em>.
              </p>
              
              <p>
                Her signature? A hybrid of strategy and soul: merging red carpet spectacle, influencer magic, and editorial precision into every campaign.
              </p>
              
              <p>
                When she's not developing creative launches or spotlighting talent, you'll likely find her using Instagram as her own digital magazine—curating fashion moments, cultural commentary, and visual storytelling with the same eye she brings to her campaigns. At her core, she's a storyteller—one who believes in turning brand narratives into unforgettable experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
